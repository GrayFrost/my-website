import { usePost } from "@/api/posts";
import { Link } from "next-view-transitions";
import { WiredCard } from '@/components/wired-components';

export default async function Teacher() {
  const { getAllPostIds } = usePost("teacher");
  const paths = await getAllPostIds();
  return (
    <div className="w-2/3 mx-auto">
      高中信息技术
      <ul>
        {paths.map(({ params: { id } }) => {
          // todo teacher 别写死
          return (
            <Link href={`/teacher/${id}`} key={id}>
              <WiredCard className="mb-4">{id}</WiredCard>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
