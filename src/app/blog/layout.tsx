export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>博客布局</h1>
      {children}
    </div>
  )
}