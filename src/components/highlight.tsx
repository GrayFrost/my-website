"use client";

import { Highlight, themes } from "prism-react-renderer";

export const SyntaxHighlighter = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const code = children.props.children;
  const language = children.props.className?.replace("language-", "").trim();

  return (
    <Highlight theme={themes.shadesOfPurple} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} className="flex">
              {i !== tokens.length - 1 && ( // 最后一行空行，不展示
                <>
                  <span className="w-8 shrink-0 bg-slate-300">{i + 1}</span>
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
