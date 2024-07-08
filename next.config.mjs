import withMDX from "@next/mdx";

// import remarkToc from "remark-toc";
// import rehypeSlug from "rehype-slug";

/** @type {import('@next/mdx').NextMDXOptions} */
const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX(mdxConfig)(nextConfig);
