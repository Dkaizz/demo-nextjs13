"use client";
import Link from "next/link";

import { Metadata } from "next";
import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function Posts() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    // effect
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: []) => setAllPosts([...data]))
      .catch((error) => console.error("Lỗi khi gọi API:", error));

    return () => {
      // cleanup
    };
  }, []);
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold">All Posts</h1>
      <div className="flex flex-wrap justify-around">
        {allPosts.map((post: Post) => (
          <div
            key={post.id}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-purple-950"
          >
            <Link href={`/postcsr/${post.id}`} key={post.id}>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-400 text-base">{post.body}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  Post {post.id}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  User {post.userId}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
