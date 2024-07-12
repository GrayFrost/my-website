import { usePost } from "@/api/posts";
import { getHeadingsApi } from "@/api/heading";
import Article from "@/components/article";
import { TableOfContents } from "@/components/TableOfContents";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { getPost } = usePost("svelte");
  const { content, data } = await getPost(id);
  const heading = await getHeadingsApi(id);
  const { description } = data;
  return (
    <div className="flex flex-col items-center">
      <div>{description || ""}</div>
      <div className="fixed top-16 right-4">
        <TableOfContents nodes={heading} />
      </div>

      <Article source={content} />
    </div>
  );
}
