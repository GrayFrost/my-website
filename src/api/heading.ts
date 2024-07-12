import matter from "gray-matter";
import { remark } from "remark";
import remarkToc from "remark-toc";
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import path from "path";
import fs from "fs";

// https://ondra.nepozitek.cz/blog/nextjs-mdx-toc-5/
// https://claritydev.net/blog/nextjs-blog-remark-interactive-table-of-contents
function addID(node, nodes) {
  const id = node.children.map((c) => c.value).join("");
  nodes[id] = (nodes[id] || 0) + 1;
  node.data = node.data || {
    hProperties: {
      id: `${id}${nodes[id] > 1 ? ` ${nodes[id] - 1}` : ""}`
        .replace(/[^a-zA-Z\d\s-]/g, "")
        .split(" ")
        .join("-")
        .toLowerCase(),
    },
  };
}

function transformNode(node, output, indexMap) {
  console.log("zzh transformnode", node);
  const transformedNode = {
    value: toString(node),
    depth: node.depth,
    data: node.data,
    children: [],
  };

  if (node.depth === 2) {
    output.push(transformedNode);
    indexMap[node.depth] = transformedNode;
  } else {
    const parent = indexMap[node.depth - 1];
    if (parent) {
      parent.children.push(transformedNode);
      indexMap[node.depth] = transformedNode;
    }
  }
}

function getHeadings(root) {
  const nodes = {};
  const output = [];
  const indexMap = {};
  visit(root, "heading", (node) => {
    addID(node, nodes);
    transformNode(node, output, indexMap);
  });

  return output;
}

function headingTree() {
  return (node, file) => {
    file.data.headings = getHeadings(node);
  };
}

const postsDirectory = path.join(process.cwd(), "/src/posts/svelte");

export async function getHeadingsApi(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert Markdown into HTML string
  const processedContent = await remark()
    .use(remarkToc)
    .use(headingTree)
    .process(matterResult.content);

  return processedContent.data.headings;
}
