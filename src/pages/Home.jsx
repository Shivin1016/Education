import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ArrowRight } from "lucide-react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PeopleIcon from "@mui/icons-material/People";
import { Users } from "lucide-react";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center pt-20 px-6">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>
      <div className="max-w-7xl lg:my-0 my-5 mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-green-400 text-xs font-bold tracking-widest uppercase">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-green-400 rounded-full opacity-75 "></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500"></span>
            </span>
            Next-Gen Education Platform
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] ">
            Forge Your{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-green-400 to-emerald-500 ">
              Digital Destiny
            </span>
          </h1>
          <p className=" text-lg text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
            Beyond learning. We bridge the gap between academic potential and
            professional mastery through cinematic educational content and
            curated global opportunities.
          </p>
          <div className="flex items-center sm:flex-row flex-col gap-4 justify-center lg:justify-start">
            <button className="bg-gray-50 text-black w-full sm:w-auto rounded-2xl font-bold px-8 py-4 text-lg hover:bg-green-600 hover:text-white transition-all hover:scale-105 ">
              Explore Content
            </button>
            <button className=" text-white w-full sm:w-auto rounded-2xl glass-card font-bold px-8 py-4 text-lg flex items-center justify-center gap-2 group">
              View Jobs
              <ArrowRight className="transform transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-80 " />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="animate-float">
            <div className="glass-card p-4 relative rounded-3xl overflow-hidden">
              <div className="aspect-video bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-white/10">
                <PlayCircleOutlineIcon
                  sx={{ fontSize: 100 }}
                  className=" text-green-500/50"
                />
              </div>
              <div className="mt-4 flex gap-4">
                <div className="h-2 w-25 mt-2 rounded-2xl opacity-30 bg-green-500/50"></div>
                <div className="h-2 w-15 mt-2 rounded-2xl opacity-30 bg-gray-500/50"></div>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-4 rounded-2xl glass-card animate-float ">
            <div className="flex gap-3 px-4 py-3 items-center justify-center ">
              <div className="rounded-full bg-blue-400/10 p-2">
                <Users className=" text-blue-400 " /> 
              </div>
              <p className="text-sm text-gray-400 ">
                Community{" "}
                <p className="text-lg text-white font-bold">12k+ Talents</p>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
