import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header4 = () => {
  return (
    <div className="container px-4 py-28">
      <div className="col-span-12  max-w-4xl  md:col-span-12 text-center flex flex-col items-center align-middle mx-auto">
        <div className="text-center  text-balance m-auto">
          <div className="text-gray-400 flex  items-center justify-center gap-3">
            Built for shadcnui and figma
          </div>
          <h1 className="  font-bold  mt-4 mb-4 text-6xl leading-none tracking-tight lett sm:text-5xl md:text-6xl text-balance">
            Design & Code{" "}
            <span className="inline-block bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 dark:bg-white  bg-clip-text text-transparent">
              Faster{" "}
            </span>
            Than Ever
          </h1>
        </div>

        <div className="text-center  m-auto">
          <p className="max-w-3xl text-balance  mb-4 leading-relaxed text-secondary-foreground">
            Save Time with hand crafted Components, Landing Pages, and Dashboard
            Templates built with shadcnui. Simply Select, Copy, and Paste.
          </p>
          <div className="mx-auto font-bold text-secondary-foreground flex flex-col items-center">
            <ul className="list-none p-0 mb-6 mx-auto text-left">
              <li className=" mb-2 ">
                📊 10+ Ready-to-Use{" "}
                <a className="underline" href="#">
                  Dashboards
                </a>
              </li>
              <li className=" mb-2 ">
                🌐 6+ Professionally Designed{" "}
                <a className="underline" href="#">
                  Landing Pages
                </a>
              </li>
              <li className=" mb-2 ">
                🧩 100+ UI{" "}
                <a className="underline" href="#">
                  Components and Blocks
                </a>
              </li>
            </ul>
          </div>
          <div className="relative inline-flex  group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 rounded-xl blur-sm group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              💥 Get ShadcnKit
            </a>
          </div>
          <div className="mt-8  flex flex-col items-center m-auto">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center flex-row-reverse pl-4">
                {avatars4.map((avatar, ind) => (
                  <Avatar
                    key={avatar + ind}
                    className="-ml-4 border border-white"
                  >
                    <AvatarImage src={avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                ))}
              </div>

              <div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>

                <p className="text-sm leading-6">
                  More then <span className="text-yellow-500">110</span> happy
                  users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const avatars4 = [
  "https://shadcn-builder.s3.amazonaws.com/avatars/twitter-5.webp",
  "https://shadcn-builder.s3.amazonaws.com/avatars/twitter-4.webp",
  "https://shadcn-builder.s3.amazonaws.com/avatars/twitter-3.webp",
  "https://shadcn-builder.s3.amazonaws.com/avatars/twitter-2.webp",
  "https://shadcn-builder.s3.amazonaws.com/avatars/twitter-1.webp",
];

/* dependencies */
// pnpm dlx shadcn-ui@latest add avatar

export default Header4;