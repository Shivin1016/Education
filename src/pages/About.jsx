import { motion } from "framer-motion";
const About = () => {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi ipsa numquam.",
    },
    {
      number: "02",
      title: "Content Writer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi ipsa numquam.",
    },
    {
      number: "03",
      title: "Social Media",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi ipsa numquam.",
    },
    {
      number: "04",
      title: "Graphics Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi ipsa numquam.",
    },
  ];

  function AboutSection() {
    return (
      <motion.section
        className="w-full bg-black text-white py-10 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-green-400">Education Friend</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-base md:text-lg leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Education Friend empowers aspiring individuals with timely job and
            internship updates, curated learning resources, and high-quality
            handwritten notes. We also provide professional freelancing
            services, helping talents gain real-world experience while building
            in-demand skills. By bridging academic knowledge with industry
            insights, we guide the next generation toward career growth and
            success.
          </motion.p>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              {
                title: "Career Updates",
                desc: "Jobs, internships, and opportunities that keep you industry-ready.",
              },
              {
                title: "Smart Learning",
                desc: "Curated content and handwritten notes for deep understanding.",
              },
              {
                title: "Real Experience",
                desc: "Freelancing services that turn skills into real-world impact.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.div
      className="relative min-h-screen overflow-x-hidden pt-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero section */}

      <motion.div
        className="relative max-w-7xl mx-auto bg-[url('/assets/bg.webp')] bg-cover bg-center flex flex-col justify-center items-center gap-6 py-6 px-4 mt-6 z-20 "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h3
          className="bg-[#1F2022] rounded-4xl px-4 py-2 text-sm flex gap-2 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Your Career, Our Commitment
        </motion.h3>

        <motion.h1
          className="max-w-3xl text-5xl lg:text-7xl font-bold leading-[1.1] text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We're not just another platform — we're your career partner
        </motion.h1>

        <motion.p
          className="relative max-w-3xl text-[15px] lg:text-lg text-gray-400 font-medium leading-relaxed text-center z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Education Friend is India’s fastest-growing talent hub, committed to
          bridging the gap between students, companies, and educational
          institutions.
        </motion.p>

        <motion.div
          className="relative z-20 flex items-center justify-center gap-4 w-full "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button className="text-black w-full sm:w-auto bg-green-500 px-4 py-2 text-lg rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50">
            Get Courses
          </button>
          <button className="bg-black  w-full sm:w-auto  text-gray-100 px-4 py-2 text-lg rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-gray-100/20">
            Learn More
          </button>
        </motion.div>
        {/* <h2 className="bg-gray-500/50 h-full  rounded-2xl px-10 py-6 text-lg lg:text-xl text-center">
            We empower aspiring individuals through job and internship updates,
            curated educational content, and high-quality handwritten notes. Our
            dedicated team also offers professional freelancing services to help
            talents grow in real-world scenarios. By combining industry insights
            with academic support, Education Friend guides the next generation
            toward career success and skill development.
          </h2> */}

        <AboutSection />
        <div
          className="absolute top-[40%] left-1/2 -translate-x-1/2
            w-160 md:w-200 lg:w-225 h-100 bg-linear-to-b from-green-500/40 via-green-400/50 to-transparent rounded-full
            rounded-t-full blur-[140px] z-10"
        ></div>
      </motion.div>

      <motion.div
        className="relative max-w-7xl mx-auto flex flex-col items-center justify-center pt-8 pb-4 px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <motion.h2
          className="text-2xl lg:text-4xl max-w-3xl font-semibold text-center pb-3 border-b-2 border-green-500"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
        >
          Key{" "}
          <span className="text-green-500 font-bold ">Services Offered</span> by
          Education Friend
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="relative py-2"
              variants={{
                hidden: { opacity: 0, x: 100 },
                show: { opacity: 1, x: 0 },
              }}
            >
              <div className="text-6xl font-bold text-green-400/50 mb-6">
                {service.number}
              </div>
              <div className="text-white text-lg font-semibold mb-2">
                {service.title}
              </div>
              <div className="text-gray-400 text-sm leading-relaxed ">
                {service.description}
              </div>
              <div className="hidden md:block absolute top-20 right-0 h-px w-full bg-white/10 translate-x-0.5">
                <div className="w-2 h-2 absolute -top-0.5 left-0 rounded-full bg-green-500"></div>
                <div className="w-2 h-2 absolute -top-0.5 right-0 rounded-full bg-green-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
