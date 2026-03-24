import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "About Me",
    }),
    defineField({
      name: "whoIAm",
      title: "Who I Am",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "whatIDo",
      title: "What I Do",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
        },
      ],
    }),
  ],
});
