"use client";

import { error } from "console";
import { useActionState } from "react";
import { success } from "zod";
import { createRecipe } from "../../../utils/recipe";

//1:00:00 in Renkes video

export const CreateRecipe = () => {
  const [state, formAction, isPending] = useActionState(createRecipe, {
    error: null,
    success: false,
  });

  return (
    <div>
      <h2>Erstelle dein Rezept</h2>
      <form action={formAction}>
        <input name="title" placeholder="Rezept Name" required />
        <input name="category" placeholder="Was wird es..." required />
        <input
          name="duration"
          type="number"
          placeholder="Wie lange dauert es?"
          required
        />
        <input
          name="servings"
          type="number"
          placeholder="Für wie viele reicht es?"
          required
        />
        {state.error && <p className="text-red-500">{state.error}</p>}
        {state.success && <p className="text-green-500">{state.message}</p>}
        <button disabled={isPending}>
          {" "}
          {isPending ? "Erstellen..." : "Rezept erstellen"}
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
