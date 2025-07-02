import { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export interface Blog {
    "content": string;
    "title": string;
    "id": string;
    "author": {
        "name": string
    }
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const hasAlerted = useRef(false);

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://backend.chaudharyaman-0052.workers.dev/api/v1/blog/bulk", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      });
      console.log("Response from API:", res);
      setBlogs(res.data.blogs);
      setLoading(false);
      console.log("Blogs fetched successfully:", res.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      if (!hasAlerted.current) {
        // alert("Failed to fetch blogs. Please try again later After Login.");
        toast.error("Failed to fetch blogs. Please try again later After Login.");
        hasAlerted.current = true;
      }
      setLoading(false);
    }
  };

  fetchBlogs();
}, []);
  return { loading, blogs };
};

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog >();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://backend.chaudharyaman-0052.workers.dev/api/v1/blog/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
        });
        console.log("Response from API:", res);
        setBlog(res.data.blog);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        alert("Failed to fetch blog. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return { loading, blog };
}