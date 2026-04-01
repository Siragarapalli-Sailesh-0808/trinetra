import React, { useEffect, useState } from "react";
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
      title: "MPC Regular",
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflowY = isMobileMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header synchronized from verified layout */}
      <header className="fixed top-0 w-full z-[100] border-b border-[#004fa8]/10">
        <div className="h-8 bg-slate-950 text-white text-sm flex items-center justify-center px-4">
          <span className="font-semibold">📢 Admissions Open for 2026- 2027 Batch - Limited Seats! Call on :+91 8639096679, +91 7569316737</span>
        </div>
        <nav className="h-auto sm:h-20 bg-white/95 backdrop-blur-sm shadow-sm opacity-100 mix-blend-normal">
          <div className="max-w-7xl mx-auto h-full px-3 sm:px-6 flex items-center w-full gap-2 sm:gap-6 py-2 sm:py-0">
            <Link to="/" className="shrink-0">
              <img src="/logo.png" alt="Trinetra Academy Logo" className="h-10 sm:h-14 w-auto object-contain" />
            </Link>

            <div className="hidden sm:flex flex-1 items-center justify-center gap-14">
              <Link className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-primary transition-colors" to="/">Home</Link>
              <Link className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-primary transition-colors" to="/about">About Us</Link>
              <Link className="font-headline font-semibold text-lg tracking-tight text-primary transition-colors border-b-2 border-primary" to="/courses">Courses</Link>
              <Link className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-primary transition-colors" to="/contact">Contact</Link>
            </div>

            <div className="flex-1 sm:hidden"></div>

            <button className="bg-[#004fa8] text-white px-4 sm:px-10 py-2 sm:py-3 rounded-full font-headline font-semibold text-xs sm:text-lg hover:bg-[#003b82] transition-all flex items-center gap-1 sm:gap-2 shadow-md shadow-[#004fa8]/20 whitespace-nowrap shrink-0">
              Enroll Now
              <span className="material-symbols-outlined text-base sm:text-lg">arrow_forward</span>
            </button>

            <button
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="sm:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors shrink-0"
            >
              <span className="material-symbols-outlined text-2xl text-slate-800">menu</span>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="sm:hidden bg-white border-t border-[#004fa8]/15 absolute top-full left-0 right-0 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
                <Link onClick={() => setIsMobileMenuOpen(false)} className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors" to="/">Home</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors" to="/about">About Us</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} className="font-headline font-semibold text-lg tracking-tight text-primary bg-blue-50 px-4 py-2 rounded-lg transition-colors" to="/courses">Courses</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors" to="/contact">Contact</Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-[112px] bg-slate-50">
        {/* Deep Blue Hero Section */}
        <section className="relative bg-[#004fa8] py-16 sm:py-24 md:py-32 overflow-hidden flex items-center justify-center">
          {/* Decorative Backdrops */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-[#002a63]/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 text-white font-headline font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6 border border-white/20 backdrop-blur-md">Academic Excellence</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-headline font-extrabold text-white tracking-tighter mb-4 sm:mb-6 leading-tight">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">Programs</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-blue-100 font-body leading-relaxed max-w-2xl mx-auto">
              Discover cutting-edge curriculum designed by experts to guarantee top-tier results in competitive entrance exams like IIT-JEE, EAMCET, MPC & BIPC with AI.
            </p>
          </div>
        </section>

        {/* Courses Grid Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 relative">
          <div className="max-w-7xl mx-auto">
            {/* Filter / Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-4 sm:gap-6">
              <div>
                <span className="text-primary font-headline font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">Curriculum</span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-headline font-extrabold text-slate-900 tracking-tight">Explore Courses</h2>
                <div className="w-16 h-1.5 bg-primary rounded-full mt-4 sm:mt-6"></div>
              </div>
              <p className="text-slate-500 max-w-md text-sm sm:text-lg leading-relaxed">
                Filter through our specialized offerings to find the perfect track for your academic goals from foundational to long-term.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {coursesList.map((course) => (
                <div key={course.id} className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex flex-col h-full hover:border-[#004fa8]/30">
                  
                  {/* Image Container with inner gradient hover */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                    
                    {/* Tags */}
                    <div className="absolute top-3 sm:top-5 left-3 sm:left-5 flex gap-2">
                       <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/95 backdrop-blur-md text-[#004fa8] text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
                         {course.category}
                       </span>
                    </div>
                    {course.label && (
                      <div className="absolute top-3 sm:top-5 right-3 sm:right-5">
                         <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#ff4d4f] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                           {course.label}
                         </span>
                      </div>
                    )}
                    
                  </div>

                  {/* Body Container */}
                  <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1 relative z-10 bg-white">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-5">
                       <div className="flex items-center gap-1.5">
                         <span className="material-symbols-outlined text-base sm:text-[20px] text-amber-500">star</span>
                         <span className="font-bold text-slate-800 text-sm sm:text-base">{course.rating}</span>
                         <span className="text-slate-400 text-xs sm:text-sm">({course.totalRatings})</span>
                       </div>
                       <div className="flex items-center gap-2 text-[#004fa8] text-xs sm:text-sm font-bold bg-[#004fa8]/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
                          <span className="material-symbols-outlined text-base sm:text-[18px]">group</span> <span className="hidden sm:inline">{course.seats}</span>
                       </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-headline font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-[#004fa8] transition-colors leading-tight sm:leading-[1.3]">
                      {course.title}
                    </h3>
                    
                    <p className="text-slate-500 mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm flex-1">
                      {course.description}
                    </p>

                    <div className="mb-6 sm:mb-8 p-3 sm:p-5 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-[#004fa8]/5 group-hover:border-[#004fa8]/10 transition-colors">
                       <span className="block text-xs font-bold text-[#004fa8] uppercase tracking-wider mb-2">Core Subjects</span>
                       <span className="font-semibold text-slate-700 text-xs sm:text-sm block leading-tight">{course.subjects}</span>
                    </div>

                    <Link to="/contact" className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-white text-slate-700 border-2 border-slate-200 hover:border-[#004fa8] hover:bg-[#004fa8] hover:text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-headline font-bold text-sm sm:text-base transition-all duration-300 shadow-sm group-hover:shadow-md min-h-[44px]">
                      Enroll Course
                      <span className="material-symbols-outlined text-base sm:text-[20px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-slate-200 bg-slate-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-12">
          <div className="max-w-sm">
            <div className="mb-4 sm:mb-6 bg-white p-2 sm:p-3 rounded-xl inline-block">
              <img src="/logo.png" alt="Trinetra Academy Logo" className="h-8 sm:h-10 w-auto object-contain" />
            </div>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-slate-400">
              Empowering the next generation of scholars with cutting-edge pedagogy and personalized mentorship for guaranteed results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 flex-1 md:ml-12 w-full md:w-auto">
            <div>
              <h4 className="font-headline font-bold text-sm sm:text-lg text-white mb-4 sm:mb-6">Programs</h4>
              <ul className="space-y-2 sm:space-y-4">
                <li><Link className="font-body text-xs sm:text-sm text-slate-400 hover:text-white transition-colors" to="#">NEET Prep</Link></li>
                <li><Link className="font-body text-xs sm:text-sm text-slate-400 hover:text-white transition-colors" to="#">JEE Main</Link></li>
                <li><Link className="font-body text-xs sm:text-sm text-slate-400 hover:text-white transition-colors" to="#">JEE Advanced</Link></li>
                <li><Link className="font-body text-xs sm:text-sm text-slate-400 hover:text-white transition-colors" to="#">EAMCET</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-sm sm:text-lg text-white mb-4 sm:mb-6">Support</h4>
              <ul className="space-y-2 sm:space-y-4">
                <li><Link className="font-body text-xs sm:text-sm text-slate-400 hover:text-white transition-colors" to="/contact">Contact Support</Link></li>
                <li><Link className="font-body text-xs sm:text-sm text-slate-400 hover:text-white transition-colors" to="#">Global Centers</Link></li>
                <li><Link className="font-body text-xs sm:text-sm text-slate-400 hover:text-white transition-colors" to="#">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-headline font-bold text-sm sm:text-lg text-white mb-4 sm:mb-6">Connect</h4>
              <div className="flex gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#004fa8] hover:text-white text-slate-300 transition-all cursor-pointer border border-slate-700">
                  <span className="material-symbols-outlined text-base sm:text-[20px]">share</span>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#004fa8] hover:text-white text-slate-300 transition-all cursor-pointer border border-slate-700">
                  <span className="material-symbols-outlined text-base sm:text-[20px]">alternate_email</span>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#004fa8] hover:text-white text-slate-300 transition-all cursor-pointer border border-slate-700">
                  <span className="material-symbols-outlined text-base sm:text-[20px]">call</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="font-body text-xs sm:text-sm text-slate-500 text-center md:text-left">&copy; 2024 Trinetra Academy. Empowering the next generation of scholars.</p>
          <div className="flex gap-4 sm:gap-8">
            <Link className="font-body text-xs sm:text-sm text-slate-500 hover:text-white transition-colors" to="#">Terms of Service</Link>
            <Link className="font-body text-xs sm:text-sm text-slate-500 hover:text-white transition-colors" to="#">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};
