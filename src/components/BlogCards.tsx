/* eslint-disable @next/next/no-img-element */
const _ = require("lodash");
export default function BlogCards({ blog }: { blog: Blog }) {
  return blog ? (
    <a href={`/Blog/${blog.id}`}>
      <div className="Blog-card">
        <div className="card-img-holder">
          <img src={blog.imgUrl} alt="Blog image" />
        </div>
        <h3 className="blog-title">{blog.title}</h3>
        <span className="blog-time">{blog.dateMade.toLocaleDateString()}</span>
        <p className="description">{blog.description}</p>
        {/* <div className="options">
              <button className="btn">Blog</button>
            </div> */}
      </div>
    </a>
  ) : (
    <a href="/">
      <div className="Blog-card">
        <div className="card-img-holder">
          <img
            src="https://images.unsplash.com/photo-1640102953836-5651f5d6b240?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"
            alt="Blog image"
          />
        </div>
        <h3 className="blog-title">Learn Microinteraction</h3>
        <span className="blog-time">Monday Jan 20, 2020</span>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur ex accumsan at.
        </p>
        {/* <div className="options">
              <button className="btn">Blog</button>
            </div> */}
      </div>
    </a>
  );
}
