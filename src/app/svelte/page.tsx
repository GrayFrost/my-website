import { usePost } from "@/api/posts";
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/card";

export default async function Teacher() {
  const { getAllPostIds } = usePost('svelte');
  const paths = await getAllPostIds();
  return (
    <div className="w-2/3 mx-auto">
      Svelte从入门到精通
      <ul>
        {paths.map(({ params: { id } }) => {
          // todo svelte 别写死
          return (
            <Link href={`/svelte/${id}`} key={id}>
              <Card className="mb-4">
                <CardBody>{id}</CardBody>
              </Card>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
