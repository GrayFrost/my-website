import { getAllPostIds, getPostData } from "../../api/posts";
import Link from "next/link";

export default async function Teacher() {
  const paths = await getAllPostIds();
  console.log("zzh paths", paths);
  return (
    <div className="text-orange-500 w-2/3 mx-auto">
      Svelte从入门到精通
      <ul>
        {paths.map(({ params: { id } }) => {
          // todo svelte 别写死
          return (
            <li key={id}>
              <Link href={`/svelte/${id}`}>{id}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
