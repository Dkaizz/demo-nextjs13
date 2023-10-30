import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Posts",
  description: "Our Tech Blog Posts",
};
function PostCSRLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default PostCSRLayout;
