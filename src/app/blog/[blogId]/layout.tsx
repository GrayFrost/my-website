export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header>博客详情页布局</header>
      {children}
      <footer>底部</footer>
    </div>
  )
}