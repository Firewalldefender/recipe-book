import RecipeCard from "../../components/recipeCard";
import { getRecipes } from "../../utils/recipe";

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main className="w-full flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
