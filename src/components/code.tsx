import { Code } from "@nextui-org/code";

export default function CodeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Code>{children}</Code>;
}
