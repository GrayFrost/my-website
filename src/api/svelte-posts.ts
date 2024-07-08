import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import { serialize } from 'next-mdx-remote/serialize'

const postsDirectory = path.join(process.cwd(), '/src/posts/svelte');

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}


export async function getPost(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  // const mdxSource = await serialize(matterResult.content);

  // Combine the data with the id
  return {
    id,
    // source: mdxSource,
    ...matterResult,
  };
}