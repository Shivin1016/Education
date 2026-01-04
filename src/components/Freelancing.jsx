import { Chrome, Layers } from "lucide-react";
import React from "react";

const Freelancing = () => {
  return (
    <div className="px-6 py-24 bg-linear-to-b from-transparent to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto glass-card overflow-hidden rounded-4xl">
        <div className="grid lg:grid-cols-2 ">
          <div className="p-12 lg:p-20 space-y-8">
            <h2 className="text-4xl font-bold">
              Bespoke Digital <p className="text-green-400">Craftsmanship</p>{" "}
            </h2>
            <p className="text-gray-400">
              Need a specialized tool? We build professional-grade web
              applications and high-performance browser extensions designed to
              automate your success.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 shrink-0">
                  <Layers />
                </div>
                <div className="flex flex-col ">
                  <h2 className="font-extrabold">Advanced Web Apps</h2>
                  <p className="text-gray-400">
                    Scalable React & Node.js environments.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 shrink-0">
                  <Chrome />
                </div>
                <div className="flex flex-col ">
                  <h2 className="font-extrabold">Advanced Web Apps</h2>
                  <p className="text-gray-400">
                    Scalable React & Node.js environments.
                  </p>
                </div>
              </div>
            </div>
            <button className="px-8 py-4 bg-green-500 text-black font-extrabold rounded-2xl hover:shadow-lg hover:shadow-green-500/30 transition-all">
              Start Your Project
            </button>
          </div>
          <div className="bg-linear-to-br from-green-900/20 to-transparent flex items-center justify-center p-12 border-l border-white/5">
            <div className="w-full max-w-sm aspect-square glass-card p-6 rounded-3xl flex flex-col items-center justify-center gap-4">
              <div className="w-full h-32 flex items-center justify-center border border-white/5 rounded-2xl bg-white/5 ">
                <p className="text-[10px] uppercase opacity-30 tracking-widest">
                  Development Preview
                </p>
              </div>
              <div className="bg-green-500/20 rounded-lg h-8 w-full"></div>
              <div className="bg-white/5 rounded-lg h-8 w-2/3 mr-auto"></div>
              <div className="bg-white/5 rounded-lg h-24 w-full mt-4 mr-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancing;
