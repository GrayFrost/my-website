import { getPostData } from "../../../api/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const postData = await getPostData(id);
  return (
    <div className="flex justify-center">
      <article className="prose lg:prose-xl">
        <MDXRemote source={postData.content}></MDXRemote>
      </article>
    </div>
  );
}
