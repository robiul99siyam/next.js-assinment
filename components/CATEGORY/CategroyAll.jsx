import { category } from "@/data/categories";
import Image from "next/image";
export default function CategroyAll() {
  return (
    <main class="container mx-auto px-4 py-8 mt-[100px]">
      <h1 class="text-5xl font-bold mb-12">Categories</h1>

      <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {category.map((categorys) => (
          <>
            <div key={categorys.id} class="text-center">
              <div class="overflow-hidden rounded-full mb-4 relative cursor-pointer">
                <Image
                  src={`http://localhost:3000${categorys.image}`}
                  alt="Breakfast"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  width={100}
                  height={100}
                />
              </div>
              <h2 class="text-xl font-semibold">Seafood</h2>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
