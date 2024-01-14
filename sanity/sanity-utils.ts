import { Project } from "@/types/Projects";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    apiVersion: "2024-01-14",
    projectId: "vkxzxxmo",
    dataset: "production",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}
