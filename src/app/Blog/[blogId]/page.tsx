import { findBlog } from "../../../../db/find";

export default async function BlogPage({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  const blog = await findBlog(blogId);

  return blog ? (
    <div className="container">
      <h1 className="Title">{blog.title}</h1>
      <p>{blog.dateMade.toDateString()}</p>
      <p>{blog.description}</p>
    </div>
  ) : (
    <div className="container">
      <h1>Blog not found</h1>
    </div>
  );
}
