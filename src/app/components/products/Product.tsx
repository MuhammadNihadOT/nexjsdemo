import { useEffect, useState } from "react";
import "./product.css";
import { client } from "@/app/lib/sanity";
import Image from "next/image";


export const dynamic = 'force-dynamic'
export default async function Product() {
  async function getProduct() {
    const query = `*[_type=='product'][0..3]{_id,name,description,price,
        "imageUrl":images[0].asset->url}`
    const data = await client.fetch(query);
    return data;
  }
  const data:any= await getProduct();
  return (
    <div className="container ">
      <div className="products mt-5">
        <div className="prodheading flex justify-between">
          <h2 className="order-first">Trend Alert</h2>
          <h4 className="order-last">Shop</h4>
        </div>
        <div className="prodcategories flex justify-between">
          {data.map((item: any, i: any) => (
            <ul key={i} className="list-unstyled">
                <li><Image src={item.imageUrl} alt="product image" width={400} height={400} className="w-full h-full object-cover"/></li>
              <li>{item.name}</li>
              <li>{item.description}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
