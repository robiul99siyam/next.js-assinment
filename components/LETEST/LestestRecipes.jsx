import { category } from "@/data/categories";
import { recipes } from "@/data/recipes";
import Image from "next/image";
export default function LestestRecipes() {
  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Desserts{" "}
            <span className="text-gray-500 text-2xl font-normal">
              (98 Recipes)
            </span>
          </h1>
          <p className="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <>
            {" "}
            <div key={recipe.category_id}>
              {category.map(
                (categorys) =>
                  categorys.id === recipe.category_id && (
                    <>
                      <Image
                        key={categorys.id}
                        src={`http://localhost:3000${categorys.image}`}
                        alt="Recipe Image"
                        classNameName="w-full h-48 object-cover rounded-lg mb-4"
                        width={500}
                        height={500}
                        // layout="responsive"
                      />
                    </>
                  )
              )}

              <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.author}</p>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
