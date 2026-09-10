"use server";
import { neon } from "@neondatabase/serverless";
import { env } from "process";

import z from "zod";

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

const databaseUrl = DatabaseUrlSchema.parse(process.env.DATABASE_URL);
const sql = neon(databaseUrl);

const getRecipes = async () => {
  const recipes: unknown = await sql`
    SELECT * FROM recipes ORDER BY created_at DESC`;

  return z.array(RecipeSchema).parse(recipes);
};

export { getRecipes };
