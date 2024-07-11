import { usePost } from "@/api/posts";
import { Link } from 'next-view-transitions'
import {
  Card,
  CardContent,
} from "@/components/ui/card"


export default async function Teacher() {
  const { getAllPostIds, getAllPosts } = usePost('svelte');
  const posts = await getAllPosts();;
  
  return (
    <div className="w-2/3 mx-auto">
      Svelte从入门到精通
      <ul>
        {posts.map(({id, data: {description}}) => {
          // todo svelte 别写死
          return (
            <Link href={`/svelte/${id}`} key={id}>
              <Card className="mb-4">
                <CardContent>{description || ''}</CardContent>
              </Card>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
