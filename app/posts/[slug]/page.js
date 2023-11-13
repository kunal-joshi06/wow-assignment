import moment from "moment/moment";
import Link from "next/link";
import React from "react";
import ScrollToTopButton from "../../../components/ScrollToTop";

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
      <ScrollToTopButton />
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              className="absolute left-0 top-0 w-full h-full z-0 object-cover shadow-lg"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                #{params.slug}
              </span>
              <h2 className="text-2xl font-semibold text-gray-100 leading-tight">
                {data.yoast_head_json.og_title}
              </h2>
              <div className="flex mt-3">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    {" "}
                    {data.yoast_head_json.author}{" "}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">
                    {moment(data.date).format("MMMM Do YYYY")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 pb-20 lg:px-0 mt-12 text-gray-700 max-w-xs md:max-w-3xl mx-auto text-lg leading-relaxed overflow-auto sm:px-6 md:px-8">
            {data.content.rendered}
          </div>
        </main>
      </div>
    </>
  );
}
