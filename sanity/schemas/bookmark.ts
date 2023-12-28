import { defineType } from "sanity";

export const bookmark = defineType({
  name: "bookmark",
  title: "Bookmark",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
});
