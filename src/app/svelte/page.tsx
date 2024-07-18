import { usePost } from "@/api/posts";
import { Link } from "next-view-transitions";
import { WiredCard } from '@/components/wired-components';

export default async function Teacher() {
  const { getAllPostIds, getAllPosts } = usePost("svelte");
  const posts = await getAllPosts();

  return (
    <div className="w-2/3 mx-auto">
      <h1 className="article-title">Svelte从入门到精通</h1>
      <ul>
        {posts.map(({ id, data: { description } }) => {
          // todo svelte 别写死
          return (
            <Link href={`/svelte/${id}`} key={id}>
              <WiredCard className="mb-4">{description || ""}</WiredCard>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
