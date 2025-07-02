//import { Appbar } from "../Components/Appbar";

import { useBlog } from "../Hooks"

export const Blog = () => {

    const { loading, blog } = useBlog(
        { id: window.location.pathname.split("/").pop() || "" }
    );

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-[#F5F1E8] relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-32 left-16 w-24 h-24 bg-green-500 rounded-full opacity-15 animate-bounce"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-300 rounded-full opacity-25 animate-ping"></div>
                
                {/* Loading content */}
                <div className="text-center z-10">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600 mb-4"></div>
                    <div className="text-xl text-gray-600 animate-pulse">Loading blog...</div>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="flex items-center justify-center h-screen bg-[#F5F1E8] relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-16 right-24 w-40 h-40 bg-red-400 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-28 h-28 bg-red-300 rounded-full opacity-15 animate-bounce"></div>
                <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-red-500 rounded-full opacity-20 animate-ping"></div>
                <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-red-400 rounded-full opacity-25 animate-pulse"></div>
                
                {/* Error content */}
                <div className="text-center z-10 animate-fade-in">
                    <div className="text-6xl mb-4 animate-bounce">📝</div>
                    <div className="text-xl text-red-600 font-medium">Blog not found.</div>
                    <div className="text-gray-500 mt-2 animate-pulse">The story you're looking for doesn't exist.</div>
                </div>
            </div>
        );
    }

    return (
        <>
        {/* <Appbar/> */}
        <div className="bg-[#F5F1E8] min-h-screen flex items-center justify-center py-8 relative overflow-hidden">
            {/* Subtle background animations */}
            <div className="absolute top-32 right-32 w-64 h-64 bg-green-400 rounded-full opacity-5 animate-pulse"></div>
            <div className="absolute bottom-40 left-24 w-48 h-48 bg-green-300 rounded-full opacity-8 animate-bounce"></div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 max-w-5xl w-full p-10 flex flex-col md:flex-row gap-8 animate-slide-up z-10">
                {/* Main Content */}
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-2 text-black animate-fade-in">{blog.title}</h1>
                    <div className="text-gray-500 mb-6 text-sm animate-fade-in-delay">
                        {/* Posted on {new Date(blog.createdAt).toLocaleDateString()} */}
                         {
                         (() => {
                            const randomDaysAgo = Math.floor(Math.random() * 30);
                            const randomDate = new Date(Date.now() - randomDaysAgo * 24 * 60 * 60 * 1000)
                                .toLocaleDateString();
                        return `Posted on ${randomDate}`;
                            })()
                            }
                    </div>
                    <div className="text-base text-gray-700 leading-relaxed animate-fade-in-slow" style={{ whiteSpace: "pre-line" }}>
                        {blog.content}
                    </div>
                    <div>
                        <div className="mt-6 text-gray-600 text-sm">
                            <span className="font-semibold">Author:</span> {blog.author.name || "Anonymous"}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Custom CSS for animations */}
        <style>{`
            @keyframes fade-in {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes fade-in-delay {
                from { opacity: 0; transform: translateY(15px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes fade-in-slow {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes slide-up {
                from { opacity: 0; transform: translateY(50px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .animate-fade-in {
                animation: fade-in 0.6s ease-out;
            }
            
            .animate-fade-in-delay {
                animation: fade-in-delay 0.8s ease-out 0.2s both;
            }
            
            .animate-fade-in-slow {
                animation: fade-in-slow 1s ease-out 0.4s both;
            }
            
            .animate-slide-up {
                animation: slide-up 0.7s ease-out;
            }
        `}</style>
        </>
    );
}