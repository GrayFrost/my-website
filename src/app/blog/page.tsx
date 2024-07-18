import { usePost } from "@/api/posts";
import { Link } from 'next-view-transitions'
import { WiredCard } from '@/components/wired-components';


export default async function Teacher() {
  const { getAllPosts } = usePost('blog');
  const posts = await getAllPosts();;
  
  return (
    <div className="w-2/3 mx-auto">
      <h1 className="article-title">我的文章</h1>
      <ul>
        {posts.map(({id, data: {description}}) => {
          // todo blog 别写死
          return (
            <Link href={`/blog/${id}`} key={id}>
              <WiredCard  className="mb-4">
                {description || ''}
              </WiredCard >
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
