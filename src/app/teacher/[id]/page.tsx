import { usePost } from "@/api/posts";
import Article from '@/components/article';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { getPost } = usePost('teacher');
  const postData = await getPost(id);
  return (
    <div className="flex justify-center">
      <Article source={postData.content} />
    </div>
  );
}
