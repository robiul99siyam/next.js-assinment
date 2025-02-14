import Image from "next/image";
import Link from "next/link";
export default function PopularCategories({ category }) {
  // fast 6 value for the category
  const popularCategories = category.slice(0, 6);

  return (
    <section className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="/category" className="text-orange-500">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {popularCategories.map((popularCategory) => (
          <>
            <div
              key={popularCategory.id}
              className="cursor-pointer text-center group"
            >
              <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                <Image
                  src={`http://localhost:3000${popularCategory.image}`}
                  alt="Breakfast"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  width={100}
                  height={100}
                />
              </div>
              <p className="transition-transform duration-300 group-hover:scale-105">
                {popularCategory.name}
              </p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
