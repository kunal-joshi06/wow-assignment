import moment from "moment/moment";
import Link from "next/link";
import React from "react";

export default async function BlogDetail({ params }) {
  async function getPost(id) {
    const res = await fetch(`https://wowtalent.live/wp-json/wp/v2/posts/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  const data = await getPost(params.slug);

  return (
    <>
      <article className="max-w-2xl px-6 py-12 mx-auto space-y-12 ">
        <div className="w-full mx-auto space-y-4 text-center">
          <p className="text-xs font-semibold tracki uppercase">
            #{params.slug}
          </p>
          <h1 className="text-4xl font-bold leadi md:text-5xl">
            {data.yoast_head_json.og_title}
          </h1>
          <p className="text-sm dark:text-gray-400">
            by{" "}
            <span className="underline dark:text-violet-400">
              {data.yoast_head_json.author}
            </span>{" "}
            on <time>{moment(data.date).format("MMMM Do YYYY")}</time>
          </p>
        </div>
        <div className="dark:text-gray-100">
          <p>{data.yoast_head_json.og_description}</p>
        </div>
        <div className="flex justify-end">
          <a
            href={data.yoast_head_json.og_url}
            target="_blank"
            rel="noopener noreferrer"
            class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Read full article
            </span>
            <span class="relative invisible">Read full article</span>
          </a>
        </div>

        <div className="pt-12 border-t dark:border-gray-700">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src="https://source.unsplash.com/75x75/?portrait"
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">
                {data.yoast_head_json.author}
              </h4>
              <p className="dark:text-gray-400">
                {data.yoast_head_json.og_site_name}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
