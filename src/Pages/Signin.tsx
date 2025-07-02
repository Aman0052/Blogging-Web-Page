import { Auth } from "../Components/Auth";
import { Quote } from "../Components/Quote";

export const Signin = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div>
          <Auth type="signin" />
        </div>
  
        <div className="hidden md:flex bg-slate-200 h-screen flex-col justify-center items-center px-4">
          <Quote />
        </div>
      </div>
    );
}