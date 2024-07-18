import { usePost } from "@/api/posts";
import { Link } from "next-view-transitions";
import { Card } from "@/components/card";

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
              <Card className="mb-4">{id}</Card>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
