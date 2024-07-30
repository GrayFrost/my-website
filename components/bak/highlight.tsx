"use client";

import { Highlight, themes } from "prism-react-renderer";
import { useTheme } from "next-themes";

export const SyntaxHighlighter = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const { theme } = useTheme();

  const code = children.props.children;
  const language = children.props.className?.replace("language-", "").trim();
  const themeStyle = !theme || theme === 'light' ? themes.oneLight : themes.oneDark;

  return (
    <Highlight theme={themeStyle} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} className="flex">
              {i !== tokens.length - 1 && ( // 最后一行空行，不展示
                <>
                  <span className="w-8 shrink-0 bg-slate-300 select-none">{i + 1}</span>
                  <div {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
