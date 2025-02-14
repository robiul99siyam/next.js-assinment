import { recipes } from "@/data/recipes";
import Image from "next/image";
export default function SuggestedContent() {
  const suggestions = recipes.slice(0, 4);
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">You might also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {suggestions.map((suggestion) => (
          <div key={suggestion.category_id}>
            <Image
              src={`http://localhost:3000/thumbs/${suggestion.thumbnail}`}
              alt={suggestion.title}
              className="w-full h-60 object-cover rounded-lg mb-2"
              width={100}
              height={100}
            />
            <h3 className="font-semibold">{suggestion.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
