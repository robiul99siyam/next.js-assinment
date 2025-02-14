import Image from "next/image";
import Link from "next/link";
export default function HeroSection({ recipeses }) {
  const recipe = recipeses[0];

  // /thumb-14.jpg
  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={`http://localhost:3000/thumbs/${recipe.thumbnail}`}
            alt="Mighty Super Cheesecake"
            className="w-full h-[450px] object-cover rounded-lg"
            width={1000}
            height={500}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-4">{recipe.description}</p>
          <Link
            href="/blog"
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}
