import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  name: "default",
  title: "My Personal Website",

  projectId: "vkxzxxmo",
  dataset: "production",
  apiVersion: "2024-01-14",
  basePath: "/admin",

  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});

export default config;
