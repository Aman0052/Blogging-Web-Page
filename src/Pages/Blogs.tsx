//import { Appbar } from "../Components/Appbar";

import { useEffect, useRef } from "react";
import { BlogCard } from "../Components/BlogCard";
import { useBlogs } from "../Hooks";
import toast from "react-hot-toast";

export const Blogs = () => {

  const { loading, blogs } = useBlogs();
  const token = localStorage.getItem("token");
  const hasAlerted = useRef(false);

  useEffect(() => {
    if (!token && !hasAlerted.current) {
      //alert("Please login first");
      toast.error("Please login first");
      hasAlerted.current = true; 
    }
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F5F1E8] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-green-500 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-300 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-green-400 rounded-full opacity-10 animate-pulse"></div>
        
        {/* Loading content */}
        <div className="text-center z-10">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600 mb-4"></div>
          <div className="text-xl text-gray-600 animate-pulse">Loading blogs...</div>
          <div className="text-sm text-gray-500 mt-2 animate-bounce">Discovering amazing stories</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <Appbar /> */}
      <div className="bg-[#F5F1E8] min-h-screen relative overflow-hidden">
        {/* Subtle background animations */}
        <div className="absolute top-32 right-32 w-64 h-64 bg-green-400 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-40 left-24 w-48 h-48 bg-green-300 rounded-full opacity-8 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-500 rounded-full opacity-3 animate-ping"></div>
        
        <div className="mx-auto max-w-4xl px-4 py-8 space-y-6 relative z-10">
          {/* Header section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-black mb-4">Latest Stories</h1>
            <p className="text-gray-600 text-lg">Discover human stories & ideas</p>
          </div>

          {/* Blog cards with staggered animation */}
          <div className="space-y-6">
            {blogs.map((blog: any, index: number) => {
              const randomDaysAgo = Math.floor(Math.random() * 30);
              const randomDate = new Date(Date.now() - randomDaysAgo * 24 * 60 * 60 * 1000)
                .toLocaleDateString();

              return (
                <div 
                  key={blog.id}
                  className="animate-slide-up-stagger"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BlogCard
                    id={blog.id}
                    authorName={blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    date={randomDate}
                  />
                </div>
              );
            })}
          </div>

          {/* Empty state animation when no blogs */}
          {blogs.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <div className="text-6xl mb-4 animate-bounce">📚</div>
              <div className="text-xl text-gray-600 font-medium">No stories yet</div>
              <div className="text-gray-500 mt-2">Be the first to share your story!</div>
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style >{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up-stagger {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up-stagger {
          animation: slide-up-stagger 0.6s ease-out both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Hover effects for blog cards */
        .blog-card-container:hover {
          transform: translateY(-2px);
          transition: transform 0.2s ease-out;
        }
      `}</style>
    </>
  );
};