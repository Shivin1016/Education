import {
  BookOpen,
  Briefcase,
  Globe,
  Wrench,
  Users,
  FileText,
  PlayCircle,
  Target,
  Map,
  Calculator,
  Calendar,
  Award,
  UserCheck,
} from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#0b0f0d] text-white px-6 py-28">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Resources</h1>
        <p className="text-gray-400 mt-2">
          Everything you need to learn, grow & get hired — all in one place.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { icon: <BookOpen />, label: "Learn" },
          { icon: <Briefcase />, label: "Career" },
          { icon: <Globe />, label: "Opportunities" },
          { icon: <Wrench />, label: "Tools" },
          { icon: <Users />, label: "Community" },
        ].map((tab, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#111816] border border-[#1f2a26] hover:bg-green-600 transition cursor-pointer"
          >
            {tab.icon}
            <span>{tab.label}</span>
          </div>
        ))}
      </div>

      {/* Section */}
      <Section
        title="Learning Resources"
        subtitle="Study programming, core subjects, aptitude & roadmaps."
        cards={[
          {
            icon: <FileText />,
            title: "Programming Notes",
            desc: "Java, Python, Web Dev PDFs",
            btn: "Download PDF",
          },
          {
            icon: <BookOpen />,
            title: "Core Subjects",
            desc: "CS, Electronics fundamentals",
            btn: "Start Learning",
          },
          {
            icon: <Target />,
            title: "Aptitude Practice",
            desc: "Practice questions & tests",
            btn: "Practice Now",
          },
          {
            icon: <Map />,
            title: "Career Roadmaps",
            desc: "Step-by-step learning paths",
            btn: "View Roadmaps",
          },
        ]}
      />

      <Section
        title="Career Resources"
        subtitle="Ace interviews & job preparation."
        cards={[
          {
            icon: <FileText />,
            title: "Resume Templates",
            desc: "ATS friendly resumes",
            btn: "Download",
          },
          {
            icon: <PlayCircle />,
            title: "Interview Questions",
            desc: "Role & company based",
            btn: "Start Practice",
          },
          {
            icon: <Briefcase />,
            title: "Career Guides",
            desc: "Fresher to professional",
            btn: "Read Guide",
          },
          {
            icon: <Award />,
            title: "Skill Growth",
            desc: "Upskill & certifications",
            btn: "Explore",
          },
        ]}
      />

      <Section
        title="Tools & Utilities"
        subtitle="Plan, track & calculate easily."
        cards={[
          {
            icon: <Calendar />,
            title: "Study Planner",
            desc: "Daily & weekly planner",
            btn: "Plan Studies",
          },
          {
            icon: <Target />,
            title: "Practice Tool",
            desc: "Aptitude & logic",
            btn: "Practice",
          },
          {
            icon: <Calculator />,
            title: "CGPA Calculator",
            desc: "Calculate semester CGPA",
            btn: "Calculate",
          },
          {
            icon: <Calculator />,
            title: "Overall CGPA",
            desc: "Complete degree CGPA",
            btn: "Calculate",
          },
        ]}
      />

      <Section
        title="Community & Growth"
        subtitle="Learn with mentors & peers."
        cards={[
          {
            icon: <Users />,
            title: "Student Stories",
            desc: "Real success journeys",
            btn: "Read Stories",
          },
          {
            icon: <UserCheck />,
            title: "Mentor Sessions",
            desc: "Expert guidance",
            btn: "Watch Sessions",
          },
          
        ]}
      />
    </div>
  );
}

/* Reusable Section */
function Section({ title, subtitle, cards }) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-400 mb-6">{subtitle}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-[#111816] border border-[#1f2a26] rounded-xl p-6 hover:border-green-500 transition"
          >
            <div className="text-green-500 mb-3">{card.icon}</div>
            <h3 className="font-semibold text-lg">{card.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{card.desc}</p>
            <button className="mt-4 w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg text-sm">
              {card.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

