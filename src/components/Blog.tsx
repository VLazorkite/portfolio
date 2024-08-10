import BlogCard from "./BlogCards";
import { findAllBlogs } from "../../db/find";

export default async function Blog() {
  const blogs: Blog[] = await findAllBlogs();
  return (
    <div className="Blog">
      <a href="/Blog">
        <h2>Blog</h2>
      </a>
      <div className="cardGrid justify-between">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
}
