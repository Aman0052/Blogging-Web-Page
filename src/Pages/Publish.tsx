import { useState } from "react";
import toast from "react-hot-toast";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Please fill in both title and content.");
      return;
    }

    try {
      const response = await fetch("https://backend.chaudharyaman-0052.workers.dev/api/v1/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        toast.success("Blog published successfully!");
        console.log("Blog published successfully!");
        setTitle("");
        setContent("");
      } else {
        const errorData = await response.json();
        console.error("API error:", errorData);
        toast.error(`Failed to publish blog: ${errorData.message || "Unknown error"}`);
        console.error("Failed to publish blog:", errorData.message );
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Failed to publish blog. Please try again later After Login.");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white rounded-md shadow border border-gray-200">
      {/* Title */}
      <label className="block mb-2 text-lg font-semibold text-gray-800">
        Title
      </label>
      <input
        type="text"
        placeholder="Enter a catchy title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full mb-4 p-3 text-base text-gray-800 bg-[#F7F4ED] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 placeholder:text-gray-500"
      />

      {/* Content */}
      <label className="block mb-2 text-lg font-semibold text-gray-800">
        Content
      </label>
      <textarea
        rows={8}
        placeholder="Write your thoughts here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="block w-full p-4 text-base text-gray-800 bg-[#F7F4ED] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 placeholder:text-gray-500"
      ></textarea>

      {/* Publish Button */}
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={handlePublish}
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-base px-6 py-2"
        >
          Publish
        </button>
      </div>
    </div>
  );
};
