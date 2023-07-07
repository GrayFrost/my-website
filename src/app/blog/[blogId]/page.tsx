export default function BlogDetail({ params }: {
  params: {
    blogId: string,
  }
}) {
  return (
    <div>
      博客详情页{params.blogId}
    </div>
  )
}