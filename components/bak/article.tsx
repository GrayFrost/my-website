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
import { SyntaxHighlighter } from '@/components/highlight';
import { Code } from '@/components/code';
import { WiredImage } from '@/components/wired-components';

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [
      rehypeSlug,
      // [
      //   rehypeHighlight,
      //   {
      //     languages: {
      //       bash: langBash,
      //       javascript: langJavascript,
      //       html: langHtml,
      //       diff: langDiff,
      //     },
      //   },
      // ],
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

const components = {
  pre: (props: any) => <SyntaxHighlighter {...props} />,
  code: (props: any) => <Code {...props} />,
  img: (props: any) => <WiredImage {...props} elevation={2}/>
}

export default function Article({ source }: { source: string }) {
  return (
    <article className="prose prose-base prose-slate dark:prose-invert">
      <MDXRemote
        source={source}
        // @ts-ignore
        options={options}
        components={components}
      />
    </article>
  );
}
