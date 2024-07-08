import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import langJavascript from "highlight.js/lib/languages/javascript";
import langBash from "highlight.js/lib/languages/bash";
import langHtml from "highlight.js/lib/languages/xml";
import langDiff from "highlight.js/lib/languages/diff";
import "../styles/highlight/a11y-dark.css";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [
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
    ],
  },
};

export default function Article({ source }: { source: string }) {
  return (
    <article className="prose lg:prose-lg">
      <MDXRemote
        source={source}
        // @ts-ignore
        options={options}
      />
    </article>
  );
}
