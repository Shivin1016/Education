import React from "react";
import { useState } from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navDetails = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/platform",
      name: "Platform",
    },
    {
      path: "/opportunities",
      name: "Opportunities",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/resources",
      name: "Resources",
    },
  ];
  return (
    <div className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-6 py-3 glass-card">
        {/* site name */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-linear-to-br from-green-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
            <SchoolOutlinedIcon sx={{ fontSize: 30 }} />
          </div>
          <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
            EduFriend
          </span>
        </div>

        {/* navlinks */}
        <div className="nav-hidden flex items-center gap-8 text-sm font-medium text-gray-400 ">
          {navDetails.map((nav, idx) => {
            return (
              <Link
                key={idx}
                className="hover:text-green-400 transition-colors"
                to={nav.path}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>

        {/* sign in / signup / menuButton */}
        <div className={"flex items-center gap-4"}>
          <Link className="text-sm hidden sm:block font-semibold transition-colors hover:text-green-400">
            Sign in
          </Link>
          <Link className="bg-green-500 hover:bg-green-400 text-sm rounded-xl py-2 px-3 font-bold text-black transition-all hover:shadow-[0_0_20px_rgba(34 , 197 , 94 , 0.4)] get-started ">
            Get Started
          </Link>
          <button onClick={() =>{
            setMenuOpen(!menuOpen)
          }} className="menu hidden">
            <MenuIcon sx={{ fontSize: 30 }} />
          </button>
        </div>
      </div>
       {/* mobile navbar */}
        <div className={`fixed inset-0 z-60 bg-black/95 p-8 ${menuOpen ? "flex" : "hidden"}  flex-col gap-8`}>
          <div className="flex justify-end">
            <button onClick={() =>{
              setMenuOpen(false)
            }}>
                <ClearIcon sx={{fontSize:30}}/>
            </button>
          </div>
          {navDetails.map((nav, idx) => {
            return (
              <Link key={idx} className="text-lg" to={nav.path}  onClick={() => setMenuOpen(false)} >
                {nav.name}
              </Link>
            );
          })}
        </div>
    </div>
  );
};

export default Navbar;
