import Link from "next/link";
import React from "react";
import moment from "moment";

const BlogCard = ({ title, slug, author, date, content, id }) => {
  const clipContent = (text, maxWords) => {
    const words = text.split(" ");
    return (
      words.slice(0, maxWords).join(" ") +
      (words.length > maxWords ? "..." : "")
    );
  };
  return (
    <div className="container grid grid-cols-12 mx-auto bg-white shadow-xl hover:shadow-2xl">
      <div
        className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/640x480')",
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
        <div className="flex justify-start">
          <span className="px-2 py-1 text-xs rounded-full dark:bg-violet-400 dark:text-gray-900">
            #{id}
          </span>
        </div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="flex-1 pt-2">{clipContent(content, 20)}</p>
        <Link
          rel="noopener noreferrer"
          href={`posts/${slug}`}
          className="inline-flex justify-end items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400 font-bold underline w-fit"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mx-1"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <div className="flex items-center justify-between pt-2">
          <div className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 dark:text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="self-center text-sm">by {author}</span>
          </div>
          <span className="text-xs">{moment(date).format("MMMM Do YYYY")}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
