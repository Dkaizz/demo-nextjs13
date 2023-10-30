import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-5">
      <p className="text-xl">
        <Link href={"/post"} className="hover:underline">
          Tech Blog Posts
        </Link>
        <br />
        <Link href={"/postcsr"} className="hover:underline">
          Tech Blog Posts With CSR
        </Link>
        <br />
        <a href="https://demo-csr-react.vercel.app/">
          Tech Blog Posts With CSR React
        </a>
      </p>
    </div>
  );
}
