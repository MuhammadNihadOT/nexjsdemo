import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
export const client=createClient({
    projectId:"6r06z3jl",
    dataset:"production",
    apiVersion:"2023-11-04",
    useCdn:false
})

const builder=imageUrlBuilder(client)

export function urlFor(source:any){
    return builder.image(source);
}