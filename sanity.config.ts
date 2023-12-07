/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import {
  AcceptResourceSuggestion,
  RejectResourceSuggestion,
} from "./sanity/actions/suggestion-actions";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    actions: (prev, context) => {
      // Only add the action for documents of type "movie"
      return context.schemaType === "suggestion"
        ? [...prev, AcceptResourceSuggestion, RejectResourceSuggestion]
        : prev;

      // return prev;
    },
  },
});
