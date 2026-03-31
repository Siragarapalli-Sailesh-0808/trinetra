import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// High-quality splash placeholders from Unsplash for client presentation
const courseThumb1 = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop"; // Students collaborating
const courseThumb2 = "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop"; // Classroom
const courseThumb3 = "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1470&auto=format&fit=crop"; // Science/Medical

const coursesList = [
  {
    id: 1,
    label: "Popular",
    image: courseThumb1,
    seats: 30,
    timing: "7:00 PM - 9:00 PM",
    category: "Intermediate",
    title: "MPC + AI",
    description: "Practical, real-world learning with MPC + AI integration. Learn coding, AI fundamentals, and logical thinking. Career scope: Engineering + AI, Data Science, IT. Competition: Medium. Career growth: Very high. Salary potential: ₹10–90 LPA+. Future demand: Extraordinary. Skills focus: Technology + practical skills.",
    subjects: "Math, Physics, Chemistry, AI Fundamentals",
    competition: "Medium",
    careerGrowth: "Very high",
    salary: "₹10–90 LPA+",
    futureDemand: "Extraordinary",
    skillsFocus: "Tech + Practical Skills",
    rating: 4.8,
    totalRatings: 45,
  },
  {
    id: 2,
    label: "",
    image: courseThumb2,
    seats: 25,
    timing: "6:30 PM - 8:30 PM",
    category: "Foundation",
    title: "MPC + IIT",
    description: "Advanced preparation for IIT entrance exams with rigorous mathematical modeling and physics problem-solving. Led by IIT graduates and expert faculty. Competition: Very high. Career growth: Very high. Salary potential: ₹10–50 LPA+. Future demand: Excellent. Skills focus: Advanced problem-solving and conceptual mastery.",
    subjects: "Physics, Chemistry, Mathematics",
    competition: "Very high",
    careerGrowth: "Very high",
    salary: "₹10–50 LPA+",
    futureDemand: "Excellent",
    skillsFocus: "Advanced",
    rating: 4.7,
    totalRatings: 38,
  },
  {
    id: 3,
    label: "Best Results",
    image: courseThumb3,
    seats: 40,
    timing: "9:30 AM - 5:30 PM",
    category: "Long-Term",
    title: "MPC + EAMCET",
    description: "State-centric approach focused on high-speed calculation techniques and high-weightage topic mastery for EAMCET engineering entrance. Competition: Medium. Career growth: Moderate. Salary potential: ₹3–10 LPA. Future demand: Excellent. Skills focus: Engineering and analytical skills.",
    subjects: "Physics, Chemistry, Mathematics",
    competition: "Medium",
    careerGrowth: "Moderate",
    salary: "₹3–10 LPA",
    futureDemand: "Excellent",
    skillsFocus: "Engineering",
    rating: 4.9,
    totalRatings: 52,
  },
  {
    id: 4,
    label: "Top Ranks",
    image: courseThumb1,
    seats: 35,
    timing: "9:30 AM - 5:30 PM",
    category: "Long-Term",
    title: "JEE Main Long-Term Coaching",
    description: "Complete JEE Main preparation with ISRO scientists and IIT graduates. Focus on conceptual understanding and problem-solving.",
    subjects: "Physics, Chemistry, Mathematics",
    rating: 4.9,
    totalRatings: 48,
  },
  {
    id: 5,
    label: "Foundation",
    image: courseThumb2,
    seats: 20,
    timing: "6:30 PM - 8:30 PM",
    category: "Foundation",
    title: "IIT Foundation Classes",
    description: "Early preparation for IIT-JEE for students in 8th, 9th, and 10th classes. Build strong fundamentals for future success.",
    subjects: "Mathematics, Physics, Chemistry",
    rating: 4.6,
    totalRatings: 32,
  },
    {
      id: 6,
      label: "",
      image: courseThumb1,
      seats: 30,
      timing: "7:00 PM - 9:00 PM",
      category: "Regular",
      title: "MPC + Regular",
      description: "Comprehensive science curriculum with emphasis on theoretical understanding plus problem-solving skills. Builds strong fundamentals in Math, Physics, and Chemistry. Learning style: Theoretical + practical. Skills gained: Strong basics in science. Career scope: Engineering, core sciences. Future demand: Good.",
      subjects: "Math, Physics, Chemistry",
      learningStyle: "Theoretical + Problem Solving",
      skillsGained: "Strong basics in science",
      careerScope: "Engineering, Core Sciences",
      futureDemand: "Good",
      rating: 4.5,
      totalRatings: 20
    },
];

export const CoursesGridView = () => {
  useEffect(() => {
    // Standardize theme variables
    document.documentElement.classList.add('light');
    document.body.classList.add(
      'bg-surface', 
      'font-body', 
      'text-on-surface'
    );
    
    return () => {
      document.body.classList.remove(
        'bg-surface', 
        'font-body', 
        'text-on-surface'
      );
    };
  }, []);

  return (
    <>
      {/* Header synchronized from verified layout */}
      <header className="fixed top-0 w-full z-[100] border-b border-[#004fa8]/10">
        <div className="h-8 bg-slate-950 text-white text-sm flex items-center justify-center px-4">
          <span className="font-semibold">📢 Admissions Open for 2026 Batch - Limited Seats! Call: 9848137364</span>
        </div>
        <nav className="h-20 bg-white/95 backdrop-blur-sm shadow-sm opacity-100 mix-blend-normal">
          <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-6">
            <Link to="/" className="shrink-0">
              <img src="/src/assets/img/logio/Logo.png" alt="Trinetra Academy Logo" className="h-14 w-auto object-contain" />
            </Link>

            <div className="hidden md:flex items-center gap-14">
              <Link className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-primary transition-colors" to="/">Home</Link>
              <Link className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-primary transition-colors" to="/about">About</Link>
              <Link className="font-headline font-semibold text-lg tracking-tight text-primary transition-colors border-b-2 border-primary" to="/courses">Courses</Link>
              <Link className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-primary transition-colors" to="/contact">Contact</Link>
            </div>

            <button className="bg-[#004fa8] text-white px-10 py-3 rounded-full font-headline font-semibold text-lg hover:bg-[#003b82] transition-all flex items-center gap-2 shadow-md shadow-[#004fa8]/20">
              Enroll Now
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-[112px] bg-slate-50">
        {/* Deep Blue Hero Section */}
        <section className="relative bg-[#004fa8] py-24 md:py-32 overflow-hidden flex items-center justify-center">
          {/* Decorative Backdrops */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#002a63]/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl px-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-headline font-bold uppercase tracking-widest text-sm mb-6 border border-white/20 backdrop-blur-md">Academic Excellence</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white tracking-tighter mb-6 leading-tight">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">Programs</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-body leading-relaxed max-w-2xl mx-auto">
              Discover cutting-edge curriculum designed by experts to guarantee top-tier results in competitive entrance exams.
            </p>
          </div>
        </section>

        {/* Courses Grid Section */}
        <section className="py-24 px-6 md:px-12 relative">
          <div className="max-w-7xl mx-auto">
            {/* Filter / Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-primary font-headline font-bold uppercase tracking-widest text-sm block mb-2">Curriculum</span>
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-slate-900 tracking-tight">Explore Courses</h2>
                <div className="w-16 h-1.5 bg-primary rounded-full mt-6"></div>
              </div>
              <p className="text-slate-500 max-w-md text-lg leading-relaxed">
                Filter through our specialized offerings to find the perfect track for your academic goals from foundational to long-term.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesList.map((course) => (
                <div key={course.id} className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex flex-col h-full hover:border-[#004fa8]/30">
                  
                  {/* Image Container with inner gradient hover */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                    
                    {/* Tags */}
                    <div className="absolute top-5 left-5 flex gap-2">
                       <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-[#004fa8] text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
                         {course.category}
                       </span>
                    </div>
                    {course.label && (
                      <div className="absolute top-5 right-5">
                         <span className="px-4 py-1.5 bg-[#ff4d4f] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                           {course.label}
                         </span>
                      </div>
                    )}
                    
                    {/* Floating Info inside Image */}
                    <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center">
                       <div className="flex bg-white/20 backdrop-blur-md rounded-2xl p-2.5 gap-4 border border-white/30">
                          <div className="flex items-center gap-2 text-white text-sm font-semibold">
                            <span className="material-symbols-outlined text-[18px]">schedule</span> {course.timing}
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Body Container */}
                  <div className="p-8 flex flex-col flex-1 relative z-10 bg-white">
                    <div className="flex items-center justify-between mb-5">
                       <div className="flex items-center gap-1.5">
                         <span className="material-symbols-outlined text-[20px] text-amber-500">star</span>
                         <span className="font-bold text-slate-800">{course.rating}</span>
                         <span className="text-slate-400 text-sm">({course.totalRatings})</span>
                       </div>
                       <div className="flex items-center gap-2 text-[#004fa8] text-sm font-bold bg-[#004fa8]/10 px-4 py-1.5 rounded-full">
                          <span className="material-symbols-outlined text-[18px]">group</span> {course.seats}
                       </div>
                    </div>
                    
                    <h3 className="text-2xl font-headline font-bold text-slate-900 mb-4 group-hover:text-[#004fa8] transition-colors leading-[1.3]">
                      {course.title}
                    </h3>
                    
                    <p className="text-slate-500 mb-8 leading-relaxed text-sm flex-1">
                      {course.description}
                    </p>

                    <div className="mb-8 p-5 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-[#004fa8]/5 group-hover:border-[#004fa8]/10 transition-colors">
                       <span className="block text-xs font-bold text-[#004fa8] uppercase tracking-wider mb-2">Core Subjects</span>
                       <span className="font-semibold text-slate-700 text-sm block leading-tight">{course.subjects}</span>
                    </div>

                    <Link to="/contact" className="w-full flex items-center justify-center gap-3 bg-white text-slate-700 border-2 border-slate-200 hover:border-[#004fa8] hover:bg-[#004fa8] hover:text-white px-6 py-4 rounded-xl font-headline font-bold transition-all duration-300 shadow-sm group-hover:shadow-md">
                      Enroll Course
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-slate-200 bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="mb-6 bg-white p-3 rounded-xl inline-block">
              <img src="/src/assets/img/logio/Logo.png" alt="Trinetra Academy Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="font-body text-sm leading-relaxed text-slate-400">
              Empowering the next generation of scholars with cutting-edge pedagogy and personalized mentorship for guaranteed results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 flex-1 md:ml-12">
            <div>
              <h4 className="font-headline font-bold text-lg text-white mb-6">Programs</h4>
              <ul className="space-y-4">
                <li><Link className="font-body text-sm text-slate-400 hover:text-white transition-colors" to="#">NEET Prep</Link></li>
                <li><Link className="font-body text-sm text-slate-400 hover:text-white transition-colors" to="#">JEE Main</Link></li>
                <li><Link className="font-body text-sm text-slate-400 hover:text-white transition-colors" to="#">JEE Advanced</Link></li>
                <li><Link className="font-body text-sm text-slate-400 hover:text-white transition-colors" to="#">EAMCET</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-lg text-white mb-6">Support</h4>
              <ul className="space-y-4">
                <li><Link className="font-body text-sm text-slate-400 hover:text-white transition-colors" to="/contact">Contact Support</Link></li>
                <li><Link className="font-body text-sm text-slate-400 hover:text-white transition-colors" to="#">Global Centers</Link></li>
                <li><Link className="font-body text-sm text-slate-400 hover:text-white transition-colors" to="#">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-headline font-bold text-lg text-white mb-6">Connect</h4>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#004fa8] hover:text-white text-slate-300 transition-all cursor-pointer border border-slate-700">
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#004fa8] hover:text-white text-slate-300 transition-all cursor-pointer border border-slate-700">
                  <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#004fa8] hover:text-white text-slate-300 transition-all cursor-pointer border border-slate-700">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 mt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-sm text-slate-500">&copy; 2024 Trinetra Academy. Empowering the next generation of scholars.</p>
          <div className="flex gap-8">
            <Link className="font-body text-sm text-slate-500 hover:text-white transition-colors" to="#">Terms of Service</Link>
            <Link className="font-body text-sm text-slate-500 hover:text-white transition-colors" to="#">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};
