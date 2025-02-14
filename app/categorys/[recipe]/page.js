import Recipes from "@/components/RECIPES/Recipes";

export default function RecipcsPage({ params: { recipe } }) {
  //   console.log(recipe);
  return (
    <div>
      <Recipes recipeId={recipe} />
    </div>
  );
}
