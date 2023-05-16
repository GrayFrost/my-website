export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>演示布局</h1>
      {children}
    </div>
  )
}