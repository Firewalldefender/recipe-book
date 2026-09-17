import RecipeCard from "../../../../components/recipeCard";
import { getRecipes } from "../../../../utils/recipe";

export default async function Category({
  params,
}: {
  params: Promise<{ category2: string }>;
}) {
  const recipes = await getRecipes();
  const { category2 } = await params;
  const filteredrecipes = recipes.filter((recipe) => {
    if (recipe.category === category2) return true;
  });

  return (
    <main className="w-full flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
        {filteredrecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
