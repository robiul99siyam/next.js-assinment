import Image from "next/image";
export default function LatestRecipes({ recipeses }) {
  const LatesRecipesSlice = recipeses.slice(2, 6);
  return (
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div class="grid md:grid-cols-4 gap-8">
        {LatesRecipesSlice.map((recipes) => (
          <>
            {" "}
            <div>
              <Image
                src={`http://localhost:3000/thumbs/${recipes.thumbnail}`}
                alt="Recipe Image"
                className="w-full h-48 object-cover rounded-lg mb-4"
                width={500}
                height={500}
                layout="responsive"
              />

              <h3 class="text-lg font-semibold mb-2">{recipes.title}</h3>
              <p class="text-gray-600">{recipes.author}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
