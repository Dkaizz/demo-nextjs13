import { Metadata } from "next";
import Link from "next/link";
import { Post } from "./page";

interface PageProps {
  params: {
    postId: number;
  };
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = (await res.json()) as Post;
  return { title: data.title };
}
export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-blue-600 text-white p-6">
        <Link href={"/postcsr"} className="underline">
          All Posts
        </Link>
      </div>
      {children}
    </section>
  );
}
