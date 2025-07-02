import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F4ED] relative overflow-hidden">
      {/* ✅ Multiple animated 📚 background icons (mobile only) */}
      <div className="absolute inset-0 pointer-events-none lg:hidden">
        {/* 1st 📚 */}
        <div className="absolute top-10 left-1/4 text-5xl opacity-20 animate-float1">📚</div>
        {/* 2nd 📚 */}
        <div className="absolute top-1/3 right-1/4 text-6xl opacity-20 animate-float2">📚</div>
        {/* 3rd 📚 */}
        <div className="absolute bottom-20 left-1/3 text-4xl opacity-20 animate-float3">📚</div>
        
       
      </div>

      {/* ✅ Main Content */}
      <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-serif text-gray-900 leading-tight">
                Human
                <br />
                stories & ideas
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 max-w-lg">
                A place to read, write, and deepen your understanding..
              </p>
            </div>
            <button
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-medium"
              onClick={() => navigate("/signup")}
            >
              Start reading
            </button>
          </div>

          {/* ✅ Abstract Illustration — unchanged */}
          <div className="relative lg:block hidden">
            <div className="relative w-full h-96">
              {/* Green organic shapes */}
              <div className="absolute top-0 right-0 w-64 h-32 bg-green-500 rounded-full transform rotate-12 opacity-90"></div>
              <div className="absolute top-16 right-8 w-48 h-24 bg-green-400 rounded-full transform -rotate-6"></div>
              <div className="absolute bottom-0 right-0 w-80 h-40 bg-green-500 rounded-full transform rotate-3"></div>

              {/* White organic shape */}
              <div className="absolute top-8 right-12 w-32 h-16 bg-white rounded-full transform rotate-45 opacity-95"></div>

              {/* Geometric lines */}
              <div className="absolute top-20 right-20 w-32 h-px bg-gray-400 transform rotate-45"></div>
              <div className="absolute top-32 right-16 w-24 h-px bg-gray-400 transform -rotate-12"></div>
              <div className="absolute bottom-20 right-24 w-40 h-px bg-gray-400 transform rotate-30"></div>

              {/* Scattered dots/stars */}
              <div className="absolute top-12 right-32 w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="absolute top-24 right-40 w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="absolute top-40 right-28 w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="absolute bottom-32 right-36 w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="absolute bottom-16 right-20 w-1 h-1 bg-gray-600 rounded-full"></div>

              {/* Star shapes */}
              <div className="absolute top-16 right-24 text-gray-600 text-xs">✦</div>
              <div className="absolute top-36 right-44 text-gray-600 text-xs">✦</div>
              <div className="absolute bottom-24 right-32 text-gray-600 text-xs">✦</div>
              <div className="absolute bottom-8 right-16 text-gray-600 text-xs">✦</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .animate-float1 {
          animation: float 4s ease-in-out infinite;
          animation-delay: 0s;
        }
        .animate-float2 {
          animation: float 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float3 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
       
      `}</style>
    </div>
  );
};
