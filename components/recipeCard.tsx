import { Recipe } from "../utils/recipe";
import Image from "next/image";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div key={recipe.id} className="p-3 space-y-2 border">
      <h2>{recipe.title}</h2>
      {recipe.image && (
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={200}
          height={200}
          loading="eager"
        />
      )}
      <p> Category: {recipe.category}</p>
      <p>Time: {recipe.duration}</p>
      <p>Servings: {recipe.servings}</p>
    </div>
  );
}
