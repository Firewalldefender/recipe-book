"use server";
import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";
import { env } from "process";

import z, { success } from "zod";

const DatabaseUrlSchema = z.string().trim().min(1, "DATABASE_URL fehlt");

const RecipeIdSchema = z.number().int().positive();

const RecipeSchema = z.object({
  id: RecipeIdSchema,
  title: z.string(),
  category: z.string(),
  duration: z.number().int(),
  servings: z.number().int(),
  image: z.string().nullable(),
  created_at: z.date().nullable(),
});

const RecipeFormSchema = z.object({
  title: z.string().trim().min(1),
  category: z.string().trim().min(1),
  duration: z.coerce.number().int().positive(),
  servings: z.coerce.number().int().positive(),
});

type Recipe = z.infer<typeof RecipeSchema>;

type RecipeActionState = {
  error?: string | null;
  success?: boolean;
  message?: string;
};

const databaseUrl = DatabaseUrlSchema.parse(process.env.DATABASE_URL);
const sql = neon(databaseUrl);

const getRecipes = async () => {
  const recipes: unknown = await sql`
    SELECT * FROM recipes ORDER BY created_at DESC`;

  return z.array(RecipeSchema).parse(recipes);
};

const createRecipe = async (
  _prevState: RecipeActionState,
  formData: FormData,
): Promise<RecipeActionState> => {
  const result = RecipeFormSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { error: "Bitte alle Felder ausfüllen" };
  }

  const { title, category, duration, servings } = result.data;

  await sql`INSERT INTO recipes (title, category, duration, servings) VALUES (${title}, ${category}, ${duration}, ${servings})`;

  revalidatePath("/");

  return {
    success: true,
    message: `${title} wurde hinzugefügt`,
  };
};

export { getRecipes, createRecipe };
export type { RecipeActionState, Recipe };
