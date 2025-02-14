import { category } from "@/data/categories";
import { recipes } from "@/data/recipes";
import DeliciousnessToYourInbox from "./DeliciousnessToYourInbox";
import HandPickedCollections from "./HandPickedCollections";
import HeroSection from "./HeroSection";
import LatestRecipes from "./LatestRecipes";
import PopularCategories from "./PopularCategories";
import SuperDelicious from "./SuperDelicious";
export default function HomePage() {
  const recipeses = recipes.map((recipes) => recipes);
  // console.log(recipeses);
  return (
    <main className="container mx-auto px-4 mt-[100px]">
      {/* Add more components  */}
      <HeroSection recipeses={recipeses} category={category} />
      <SuperDelicious recipeses={recipeses} category={category} />
      <PopularCategories category={category} />
      <DeliciousnessToYourInbox />
      <HandPickedCollections recipeses={recipeses} category={category} />
      <LatestRecipes recipeses={recipeses} category={category} />
    </main>
  );
}
