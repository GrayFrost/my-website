import { MDXRemote } from "next-mdx-remote/rsc";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import langJavascript from "highlight.js/lib/languages/javascript";
import langBash from "highlight.js/lib/languages/bash";
import langHtml from "highlight.js/lib/languages/xml";
import langDiff from "highlight.js/lib/languages/diff";
import "@/styles/highlight/a11y-dark.css";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeHighlight,
        {
          languages: {
            bash: langBash,
            javascript: langJavascript,
            html: langHtml,
            diff: langDiff,
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behaviour: "append",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            className: "hash-link",
          },
        },
      ],
    ],
  },
};

export default function Article({ source }: { source: string }) {
  return (
    <article className="prose prose-slate lg:prose-lg dark:prose-invert">
      <MDXRemote
        source={source}
        // @ts-ignore
        options={options}
      />
    </article>
  );
}
