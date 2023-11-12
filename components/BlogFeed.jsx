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
  console.log(data);
  return (
    <>
      <div>
        {data &&
          data.map((post, index) => (
            <BlogCard
              key={index}
              title={post.yoast_head_json.og_title}
              content={post.yoast_head_json.og_description}
              slug={post.id}
            />
          ))}
      </div>
    </>
  );
}
