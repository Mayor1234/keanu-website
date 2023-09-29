import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'bodyPortableText',
  type: 'array',
  title: 'Body',
  of: [
    {
      type: 'block',
    },
    {
      type: 'youtube',
    },
  ],
});
