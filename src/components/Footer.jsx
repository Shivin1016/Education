import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="pt-24 pb-12 px-6 border border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 p-4 bg-green-500 rounded-xl flex items-center justify-center text-black">
                <SchoolOutlinedIcon sx={{ fontSize: 30 }} />
              </div>
              <h2 className="text-3xl font-bold">EduFriend </h2>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed ">
              Redefining the synergy between learning and earning. Join the
              global elite of digital talent today.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 glass-card h-10 rounded-lg p-2 flex items-center justify-center hover:text-green-400 transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="w-10 glass-card h-10 rounded-lg p-2 flex items-center justify-center hover:text-green-400 transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                className="w-10 glass-card h-10 rounded-lg p-2 flex items-center justify-center hover:text-green-400 transition-colors"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-6">Ecosystem</h2>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li>Knowledge Base</li>
              <li>Career Portal </li>
              <li>Mentorship</li>
              <li>Partnerships</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-6">Trust</h2>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li>Privacy Policy </li>
              <li>Terms of Service </li>
              <li>Support Center</li> 
            </ul>
          </div>
        </div>
        <div className="text-gray-600 text-[10px] text-center pt-12 border-t border-white/5 uppercase tracking-[0.2rem]">
          © 2025 Education Friend. Built for the future of talent.
        </div>
      </div>
    </div>
  );
};

export default Footer;
