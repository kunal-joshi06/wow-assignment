import React from "react";
import BlogCard from "./BlogCard";

async function getAllPosts() {
  const res = await fetch("https://wowtalent.live/wp-json/wp/v2/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function BlogFeed() {
  const data = await getAllPosts();
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Latest Blogs</h2>
          <p className="font-serif text-sm dark:text-gray-400">
            Ignite Your Curiosity: Bloggin- Your Daily Dose of Blogs
          </p>
        </div>

        {data &&
          data.map((post, index) => (
            <BlogCard
              key={index}
              title={post.yoast_head_json.og_title}
              content={post.yoast_head_json.og_description}
              slug={post.id}
              author={post.yoast_head_json.author}
              date={post.date}
              id={post.id}
            />
          ))}
      </div>
    </section>
  );
}
