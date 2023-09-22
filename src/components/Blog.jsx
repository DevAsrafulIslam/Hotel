import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blog")
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="container mx-auto my-6 border p-8">
      <h1 className="text-3xl text-center">Question and Answer</h1>
      <div className="divider w-5/12 mx-auto"></div>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h4 className="text-2xl text-rose-400">{blog.question}</h4>
          <p className=" text-indigo-500">{blog.answer}</p>
          <div className="divider"></div>
        </div>
      ))}
      {/* <h4>
        Tell us the differences between uncontrolled and controlled components
      </h4>
      <p>
        In React, controlled components refer to components that have their
        state and behavior controlled by the parent component. These components
        rely on props passed down from the parent component to update their
        state and behavior. Uncontrolled components refer to components that
        manage their own state internally.
      </p>
      <h4>
        {" "}
      </h4>
      <p>
       
      </p>
      <h4>Tell us the difference between nodes and express js</h4>
      <p>
        NodeJS is a javascript runtime environment for running JavaScript
        programs and is used to build server-side applications. ExpressJS is a
        web framework that enables you to design a web application to handle a
        variety of different HTTP demands. You can use NodeJS to build a
        multi-user, real-time web service.
      </p>
      <h4> What is custom hook and why will you create a custom hook</h4>
      <p>
        Custom Hooks are a mechanism to reuse stateful logic (such as setting up
        a subscription and remembering the current value), but every time you
        use a custom Hook, all state and effects inside of it are fully
        isolated.
      </p> */}
    </div>
  );
};

export default Blog;
