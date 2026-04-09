"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  theme: {
    "--black": "#0d1117",
    "--white": "#ffffff",
    "--brand-primary": "#2563eb",
    "--focus-color": "#2563eb",
    "--main-navigation-color": "#0d1117",
    "--main-navigation-color--inverted": "#ffffff",
  } as any,
});
