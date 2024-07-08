import { getPost } from "../../../api/software-posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const postData = await getPost(id);
  return (
    <div className="flex justify-center">
      <article className="prose lg:prose-lg">
        <MDXRemote source={postData.content}></MDXRemote>
      </article>
    </div>
  );
}