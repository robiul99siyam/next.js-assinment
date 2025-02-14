import { recipes } from "@/data/recipes";
import Image from "next/image";
export default function Recipes({ recipeId }) {
  const recipe = recipes.find((r) => r.category_id === recipeId);

  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          A full guide for a better and smarter cooking
        </h1>
      </article>
      <section className="mb-16 bg-orange-50 mt-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <Image
              src={`http://localhost:3000/thumbs/${recipe.thumbnail}`}
              alt="Mighty Super Cheesecake"
              className="w-full h-[300px] object-cover rounded-lg"
              width={1000}
              height={300}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <p className="text-gray-600 mb-4">
              <span className="text-[18px] font-semibold">Author</span> :{" "}
              {recipe.author}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="text-[18px] font-semibold">Published Date</span>{" "}
              : {recipe.published_date}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
