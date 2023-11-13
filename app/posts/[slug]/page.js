import moment from "moment/moment";
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
      <article className="max-w-2xl px-6 py-12 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
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
