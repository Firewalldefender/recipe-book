import Image from "next/image";
import { getRecipes } from "../../utils/recipe";

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main>
      <div>
        <h2>Omi´s Rezepte</h2>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="p-3 space-y-2 border">
            <h2>{recipe.title}</h2>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={200}
              height={200}
              loading="eager"
            />
            <p> Category: {recipe.category}</p>
            <p>Time: {recipe.duration}</p>
            <p>Servings: {recipe.servings}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
