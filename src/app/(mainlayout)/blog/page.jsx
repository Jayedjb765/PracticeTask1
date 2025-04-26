import BlogCard from "@/components/Blog/BlogCard";
import React from "react";

const Blog = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limil=10",
    { caches: "no-store" }
  );
  const blogs = await res.json();
  return (
    <div>
      {" "}
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
