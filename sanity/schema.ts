import {
  defineArrayMember as m,
  defineField as f,
  defineType as t,
} from 'sanity'
import { GithubInput } from './githubInput'
const codeBlock = t({
  name: 'codeBlock',
  title: 'Code block',
  type: 'object',
  fields: [
    f({ name: 'filename', type: 'string' }),
    f({ name: 'language', type: 'string', initialValue: 'bash' }),
    f({
      name: 'code',
      type: 'text',
      rows: 10,
      validation: (r) => r.required(),
    }),
  ],
})
const callout = t({
  name: 'callout',
  title: 'Callout',
  type: 'object',
  fields: [
    f({
      name: 'tone',
      type: 'string',
      options: { list: ['info', 'tip', 'warning'] },
      initialValue: 'info',
    }),
    f({ name: 'text', type: 'text', validation: (r) => r.required() }),
  ],
})
const figure = t({
  name: 'figure',
  title: 'Image or diagram',
  type: 'object',
  fields: [
    f({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    f({ name: 'alt', type: 'string', validation: (r) => r.required() }),
    f({ name: 'caption', type: 'string' }),
  ],
})
const table = t({
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    f({
      name: 'rows',
      title: 'Rows (first row is the header)',
      type: 'array',
      of: [
        m({
          type: 'object',
          name: 'row',
          fields: [
            f({ name: 'cells', type: 'array', of: [{ type: 'string' }] }),
          ],
        }),
      ],
    }),
  ],
})
const blocks = [
  m({
    type: 'block',
    styles: [
      { title: 'Text', value: 'normal' },
      { title: 'H2', value: 'h2' },
      { title: 'H3', value: 'h3' },
      { title: 'Quote', value: 'blockquote' },
    ],
  }),
  m({ type: 'codeBlock' }),
  m({ type: 'callout' }),
  m({ type: 'figure' }),
  m({ type: 'table' }),
]
const slug = f({
  name: 'slug',
  type: 'slug',
  options: { source: 'title' },
  validation: (r) => r.required(),
})
const tags = f({
  name: 'tags',
  type: 'array',
  of: [{ type: 'string' }],
  options: { layout: 'tags' },
})
const article = t({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    f({ name: 'title', type: 'string', validation: (r) => r.required() }),
    slug,
    f({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      validation: (r) => r.required().max(200),
    }),
    f({ name: 'cover', type: 'image', options: { hotspot: true } }),
    f({ name: 'coverAlt', type: 'string' }),
    tags,
    f({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    f({ name: 'seoTitle', type: 'string' }),
    f({ name: 'seoDescription', type: 'text', rows: 2 }),
    f({ name: 'body', type: 'array', of: blocks }),
  ],
})
const project = t({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    f({
      name: 'repo',
      title: 'GitHub repository URL',
      type: 'url',
      components: { input: GithubInput },
      validation: (r) => r.required(),
    }),
    f({ name: 'title', type: 'string', validation: (r) => r.required() }),
    slug,
    f({ name: 'summary', type: 'text', rows: 3 }),
    tags,
    f({ name: 'highlights', type: 'array', of: [{ type: 'string' }] }),
    f({
      name: 'flow',
      title: 'Workflow steps (optional)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
const buildLog = t({
  name: 'buildLog',
  title: 'Build log',
  type: 'document',
  fields: [
    f({ name: 'title', type: 'string', validation: (r) => r.required() }),
    slug,
    f({
      name: 'date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    tags,
    f({ name: 'body', type: 'array', of: blocks }),
  ],
})
export const schemaTypes = [
  article,
  project,
  buildLog,
  codeBlock,
  callout,
  figure,
  table,
]
