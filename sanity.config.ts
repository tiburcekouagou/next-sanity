// "use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  name: "default",
  title: "My Personal Website",

  projectId: "vkxzxxmo",
  apiVersion: "2024-01-14",
  basePath: "/admin",

  plugins: [structureTool()],
});

export default config;
