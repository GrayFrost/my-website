import { getPost } from "../../../api/software-posts";
import Article from "../../../components/article";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const postData = await getPost(id);
  return (
    <div className="flex justify-center">
      <Article source={postData.content} />
    </div>
  );
}
