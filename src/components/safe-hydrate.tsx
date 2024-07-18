import dynamic from "next/dynamic";
import React from "react";

const NoSSR = ({ children }: { children: React.ReactNode }) => (
  <div suppressHydrationWarning>
    {typeof window === "undefined" ? null : children}
  </div>
);

// export default function SafeHydrate({ children }: { children: React.ReactNode }) {
//   return (
//     <div suppressHydrationWarning>
//       {typeof window === "undefined" ? null : children}
//     </div>
//   );
// }

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
