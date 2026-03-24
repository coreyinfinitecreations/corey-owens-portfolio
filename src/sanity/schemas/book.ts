import { defineField, defineType } from "sanity";

export const book = defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "status",
      title: "Reading Status",
      type: "string",
      options: {
        list: [
          { title: "Currently Reading", value: "reading" },
          { title: "Finished", value: "finished" },
          { title: "Want to Read", value: "want-to-read" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "review",
      title: "Short Review / Thoughts",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
