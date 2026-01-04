import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { BarChart3, Database, Layout, Dot, ArrowRight } from "lucide-react";
const JobGrid = () => {
  const jobs = [
    {
      id: "job-001",
      title: "Frontend Architect",
      company: {
        name: "TechNova Systems",
        location: "Bangalore",
        logo: Layout,
        job_type: "Remote",
      },
      skills: ["React", "Tailwind", "TypeScript"],
      salary: {
        currency: "INR",
        minLPA: 8,
        maxLPA: 12,
        unit: "LPA",
      },

      theme: {
        bg: "bg-green-400",
        bg_blur: "bg-green-500/10",
        color: "text-green-400",
      },
    },

    {
      id: "job-002",
      title: "Backend Engineer",
      company: {
        name: "CloudCraft",
        location: "Delhi",
        logo: Database,
        job_type: "On-Site",
      },
      skills: ["Node.js", "PostgreSQL", "MongoDB"],
      salary: {
        currency: "INR",
        minLPA: 0,
        maxLPA: 15,
        unit: "k/mo(Intern)",
      },
      theme :{
          bg: "bg-blue-400",
          bg_blur: "bg-blue-500/10",
          color: "text-blue-400",
      }
    },

    {
      id: "job-003",
      title: "Senior Data Analyst",
      company: {
        name: "InnovaTech",
        location: "Mumbai",
        logo: BarChart3,
        job_type: "Hybrid",
      },
      skills: ["Python", "PowerBI"],
      salary: {
        currency: "INR",
        minLPA: 10,
        maxLPA: 15,
        unit: "LPA",
      },
      theme:{ 
          bg_blur: "bg-purple-500/10",
          color: "text-purple-400",
      },
    },
  ];

  return (
    <div className="px-6 py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-bold text-3xl mb-4">
              Elite <span className="text-green-500">Career Hub</span>{" "}
            </h2>
            <p>
              The most sought-after roles in modern technology, curated for you.
            </p>
          </div>
          <a
            className="text-green-500 font-bold flex items-center gap-2 hover:underline"
            href="#"
          >
            <p>Explore Full Board</p>
            <ArrowOutwardIcon sx={{ fontSize: 20 }} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => {
            return (
              <div key={job.id} className="glass-card p-6 rounded-3xl group">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${job.theme.color}`}
                  >
                    <job.company.logo />
                  </div>
                  <span className={`px-3 py-1 uppercase text-[10px] font-bold rounded-full tracking-tighter ${job.theme.bg_blur} ${job.theme.color}`}>
                    {job.company.job_type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                  {job.title}
                </h3>
                <p className="text-[15px] text-gray-500 font-medium mb-6  ">
                  {job.company.name} • {job.company.location}
                </p>
                <div className="flex flex-wrap mb-8 gap-2">
                  {job.skills.map((index, skill) => {
                    <span
                      className="text-[10px] rounded bg-white/5 px-2 py-1"
                      key={index}
                    >
                      {skill}
                    </span>;
                  })}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="font-bold">
                    ₹{job.salary.minLPA === 0 ? `` : job.salary.minLPA}
                    {job.salary.minLPA === 0 ? "" : "-"} {job.salary.maxLPA}
                    {job.salary.unit}
                  </span>
                  <button className="p-2 bg-white text-black rounded-lg hover:bg-green-500 transition-colors">
                    <ArrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobGrid;
