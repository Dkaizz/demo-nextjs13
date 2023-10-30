import Link from "next/link";

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
