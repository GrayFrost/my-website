import { getAllPostIds, getPostData } from "../../../api/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params: { id } }) {
  const postData = await getPostData(id);
  return (
    <div>
      <h1>zzh todo</h1>
      <article className="prose lg:prose-xl">
        <MDXRemote source={postData.content}></MDXRemote>
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
