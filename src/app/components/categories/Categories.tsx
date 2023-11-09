import { client, urlFor } from "@/app/lib/sanity";
import "./categories.css";
import Image from "next/image";

async function getCategory() {
  const query = `*[_type=='category']{_id,name,image}`;
  const category = await client.fetch(query);
  return category;
}

export default async function Categories() {
  const category = await getCategory();
  return (
    <div>
      <div className="categorysection container mt-5">
        <h3>The Essentials</h3>
        <div className="category">
          {category.map((item: any, i: any) => (
            <ul key={i} className="list-unstyled">
              <li>
                <Image
                  src={urlFor(item.image).url()}
                  alt="product image"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </li>
              <li>{item.name}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
