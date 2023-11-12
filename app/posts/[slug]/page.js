"use client";
import Loader from "../../../components/Loader";
import moment from "moment/moment";
import React from "react";
import { useGetPostQuery } from "../../../store/features/apiSlice";

const BlogDetail = ({ params }) => {
  const { data, isLoading } = useGetPostQuery(params.slug);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <article className="max-w-2xl px-6 py-12 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
          <div className="w-full mx-auto space-y-4 text-center">
            <p className="text-xs font-semibold tracki uppercase">
              #{params.slug}
            </p>
            <h1 className="text-4xl font-bold leadi md:text-5xl">
              {data && data.yoast_head_json.og_title}
            </h1>
            <p className="text-sm dark:text-gray-400">
              by{" "}
              <span className="underline dark:text-violet-400">
                {data && data.yoast_head_json.author}
              </span>{" "}
              on <time>{moment(data.date).format("MMMM Do YYYY")}</time>
            </p>
          </div>
          <div className="dark:text-gray-100">
            <p>{data && data.yoast_head_json.og_description}</p>
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
                  {data && data.yoast_head_json.author}
                </h4>
                <p className="dark:text-gray-400">
                  {data && data.yoast_head_json.og_site_name}
                </p>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default BlogDetail;
