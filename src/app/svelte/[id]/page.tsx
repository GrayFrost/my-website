import { usePost } from "@/api/posts";
import Article from '@/components/article';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { getPost } = usePost('svelte');
  const { content, data } = await getPost(id);
  const { description } = data;
  return (
    <div className="flex flex-col items-center">
      <div>{description || ''}</div>
      <Article source={content} />
    </div>
  );
}
