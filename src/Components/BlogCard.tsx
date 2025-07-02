import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string; 
  authorName: string;
  title: string;
  content: string;
  date: string;
}

export const BlogCard = ({ id, authorName, title, content, date }: BlogCardProps) => {
  const preview = content.slice(0, 150) + "...";
  const readingTime = `${Math.max(1, Math.floor(content.length / 100))} min read`;

  return (
    <Link
      to={`/blog/${id}`}
      className="no-underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-lg"
    >
      
      <article className="group relative mb-8 w-full overflow-hidden rounded-2xl bg-[#F5F1E8] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10 p-8">
          <div className="mb-4 flex items-center justify-between text-sm">
            <div className="flex items-center space-x-3 text-gray-600">
              <div className="flex items-center space-x-1">
                <User className="h-5 w-5 text-gray-500" />
                <span className="font-medium text-gray-700">{authorName}</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center space-x-1">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span>{date}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <Clock className="h-5 w-5" />
              <span className="text-xs font-medium">{readingTime}</span>
            </div>
          </div>

          <h2 className="mb-4 text-2xl font-bold leading-tight text-gray-900 transition-colors duration-200 group-hover:text-gray-800 lg:text-3xl">
            {title}
          </h2>

          <p className="mb-6 leading-relaxed text-gray-600 line-clamp-3">{preview}</p>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors duration-200 group-hover:text-blue-700">
              Read more
              <svg
                className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>

            <div className="flex space-x-2">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-colors duration-200 group-hover:bg-gray-200">
                Article
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </article>
    </Link>
  );
};
