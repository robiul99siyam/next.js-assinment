import Image from "next/image";
import Rating from "../Rating";

export default function SuperDelicious({ recipeses, category }) {
  let maxRating = 0;

  let tempArray = [];
  for (let i = 0; i < recipeses.length; i++) {
    if (recipeses[i].rating.average_rating > maxRating) {
      maxRating = recipeses[i].rating.average_rating;
      tempArray.push(recipeses[i]);
    }
  }
  // console.log(tempArray);

  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {tempArray.map((recipe) => (
          <>
            {" "}
            <div key={recipe.category_id}>
              {category.map(
                (category) =>
                  category.id === recipe.category_id && (
                    <>
                      <Image
                        key={category.id}
                        src={`http://localhost:3000${category.image}`}
                        alt="Recipe Image"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        width={500}
                        height={500}
                        // layout="responsive"
                      />
                    </>
                  )
              )}

              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <div className="flex items-center text-yellow-500 mb-2">
                {Array(Math.floor(recipe.rating.average_rating))
                  .fill(null)
                  .map((_, index) => (
                    <>
                      {" "}
                      <Rating key={index} />
                    </>
                  ))}
              </div>
              <p>{recipe.published_date}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
