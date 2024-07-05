export default function Layout({
  children,
  params: { id },
}: Readonly<{
  children: React.ReactNode;
  params: { id },
}>) {
  return (
    <div>
      {children}
    </div>
  );
}