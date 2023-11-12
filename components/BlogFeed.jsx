"use client";
import React from "react";
import BlogCard from "./BlogCard";
import Loader from "./Loader";
import { useGetAllPostQuery } from "../store/features/apiSlice";

const BlogFeed = () => {
  const { data, isLoading } = useGetAllPostQuery("");
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default BlogFeed;
