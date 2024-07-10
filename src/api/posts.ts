import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { serialize } from 'next-mdx-remote/serialize'

export function usePost(dir: string) {
  const postsDirectory = path.join(process.cwd(), `/src/posts/${dir}`);

  function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.mdx$/, ""),
        },
      };
    });
  }

  function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        id: fileName.replace(/\.mdx$/, ""),
        ...matterResult,
      };
    });
  }

  function getPost(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    console.log("zzh matterresult", matterResult);
    // const mdxSource = await serialize(matterResult.content);

    // Combine the data with the id
    return {
      id,
      // source: mdxSource,
      ...matterResult,
    };
  }

  return {
    getPost,
    getAllPostIds,
    getAllPosts,
  };
}
