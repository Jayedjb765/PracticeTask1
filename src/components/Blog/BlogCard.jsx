import React from "react";

const BlogCard = ({ blog }) => {
  const { title, body } = blog;
  return (
    <div>
      <div className="card w-96 bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
