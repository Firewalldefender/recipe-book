import RecipeCard from "../../components/recipeCard";
import { getRecipes } from "../../utils/recipe";

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main>
      <div>
        <h2>Omi´s Rezepte</h2>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
