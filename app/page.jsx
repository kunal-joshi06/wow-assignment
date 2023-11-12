import BlogFeed from "../components/BlogFeed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center mb-10">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="purple_gradient text-center"> Interesting Blogs </span>
      </h1>
      <p className="desc text-center">
        BloggIn is an open-source blogging tool for modern world to discover,
        create and share creative and useful blogs about their experiences and
        learnings.
      </p>
      <BlogFeed />
    </section>
  );
}
