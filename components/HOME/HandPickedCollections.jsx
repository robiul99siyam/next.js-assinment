import Image from "next/image";
export default function HandPickedCollections({ category, recipeses }) {
  const recipeesHandPickedCollections = recipeses.slice(3, 5);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
        Hand-Picked Collections
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {recipeesHandPickedCollections.map((recipe) => (
          <>
            <div
              key={recipe.category_id}
              className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
            >
              <Image
                src={`http://localhost:3000/thumbs/${recipe.thumbnail}`}
                alt="Recipe Image"
                classNameName="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                width={800}
                height={500}
                // layout="responsive"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <h3 className="text-xl font-semibold mb-2">
                  Sushi Combos for your Next Party
                </h3>
                <a
                  href="./recipes.html"
                  className="text-orange-300 hover:underline"
                >
                  View Collection
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
