import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const About = () => {
  useEffect(() => {
    // Add required body classes for the theme
    document.documentElement.classList.add('light');
    document.body.classList.add(
      'bg-surface', 
      'font-body', 
      'text-on-surface', 
      'selection:bg-secondary-container', 
      'selection:text-on-secondary-container'
    );
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove(
        'bg-surface', 
        'font-body', 
        'text-on-surface', 
        'selection:bg-secondary-container', 
        'selection:text-on-secondary-container'
      );
    };
  }, []);

  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-[100] border-b border-indigo-100/70">
        <div className="h-8 bg-slate-950 text-white text-sm flex items-center justify-center px-4">
          <span className="font-semibold">📢 Admissions Open for 2026 Batch - Limited Seats! Call: 9848137364</span>
        </div>
        <nav className="h-20 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-6">
            <Link to="/" className="shrink-0">
              <img src="/logo.png" alt="Trinetra Academy Logo" className="h-14 w-auto object-contain" />
            </Link>

            <div className="hidden md:flex items-center gap-14">
              <Link className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-indigo-600 transition-colors" to="/">Home</Link>
              <Link className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-indigo-600 transition-colors" to="/about">About</Link>
              <Link className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-indigo-600 transition-colors" to="/courses">Courses</Link>
              <Link className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-indigo-600 transition-colors" to="/contact">Contact</Link>
            </div>

            <button className="bg-[#6253f1] text-white px-10 py-3 rounded-full font-headline font-semibold text-lg hover:bg-[#5446df] transition-all flex items-center gap-2 shadow-md shadow-indigo-200">
              Enroll Now
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-50 py-24 px-6">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#004fa8_0%,transparent_70%)]"></div>
          </div>
          <div className="relative z-10 max-w-5xl text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-headline font-bold uppercase tracking-widest mb-6">AI-Integrated Excellence</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter mb-8 leading-[1.1]">
              Future-Ready <br/> <span className="text-primary">Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto font-body leading-relaxed mb-12">
              Empowering the next generation of leaders through a high-tech lab environment and a curriculum fused with advanced artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-headline font-bold hover:opacity-90 transition-all shadow-xl shadow-primary/20">Explore Campus</button>
              <button className="border border-outline text-on-surface px-8 py-4 rounded-xl font-headline font-bold hover:bg-slate-50 transition-all">Learn More</button>
            </div>
          </div>
        </section>

        {/* Diversity Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-2 block">Our Impact</span>
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight mb-4">The most Diverse University</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Graduate Program */}
            <div className="group relative overflow-hidden rounded-3xl bg-surface-variant flex flex-col justify-end p-8 md:p-12 transition-all hover:shadow-2xl">
              <img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" data-alt="advanced graduate students collaborating in a high-tech laboratory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfQ_bu1GzM66dOprsPwb6eAb5JnD4JpiWdTpeFlZ5mQD9jymV7ZvXlNLuolyimHqNdFCrXWSK_WvXr14gvr8qLE5slz45ptICgqr6JV9jhWxRqyE8BAdOGmanIDBFDGkbdsOe-BYOqFPyPXu6k_dETSX54K2TtJtawWtZhBwiNewlSZgTialKlJmbKdQFv8nsRFfYTla2eLjVUKVHD1T4fVu1MKlbR2aajkawx15YXtH0-Y6FOGsio7QlJv82QSUxGkaiNmT73OnhB" alt="Graduate Program"/>
              <div className="relative z-10">
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">Graduate Program</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">Advanced specializations in Neural Networks, Quantum Computing, and Ethical AI Systems.</p>
                <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  View Curriculum <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Undergraduate Program */}
            <div className="group relative overflow-hidden rounded-3xl bg-surface-variant flex flex-col justify-end p-8 md:p-12 transition-all hover:shadow-2xl">
              <img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" data-alt="diverse group of undergraduate students in a modern workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbH0mjzjWwrXoB7udxObZfyUo2TDPnb1vwjE3oGbamFMUFw3LdHEot6Xq_OLcm_Ao4kiKaAljUBlvfcADJia4wq9kYGS0Q9BLsBMUXG_ZkO5vnEZyNkv3yLNgpC36lydExShdn-Oypp5AqIF2MUNQbm-jA6JDrLhRfATrzXSFNpJWoEjHd82MKqpQLK7EaGfPfhh9WZiRdJ5sN2YH-zr3Yy9_fbk7Q9HhMy8foPEdYsTOST4oTqS4n50jYQHCwPuC7Zor83rsbIunZ" alt="Undergraduate Program"/>
              <div className="relative z-10">
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">Undergraduate Program</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">Foundational excellence across science, arts, and commerce with AI personalized paths.</p>
                <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  Explore Degrees <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation/Modern Cards Section */}
        <section className="relative py-32 bg-gradient-to-br from-[#003b82] via-primary to-[#001f54] text-white overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0366d6]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-1 bg-white/30 rounded-full"></span>
                  <span className="text-white/80 font-headline font-bold uppercase tracking-widest text-sm">Navigate Your Future</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight leading-[1.1]">
                  Experience <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Trinetra</span>
                </h2>
              </div>
              <p className="text-white/70 max-w-md font-body text-lg leading-relaxed mb-4">
                Beyond the classroom, we foster a community that thrives on creativity, health, and competitive excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Campus Student Life */}
              <div className="group relative p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:bg-white/10 hover:border-white/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-700 group-hover:bg-white/20 group-hover:scale-150"></div>
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-xl">
                    <span className="material-symbols-outlined text-white text-3xl font-light">domain</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-headline font-bold mb-3 text-white tracking-tight">Campus Life</h4>
                    <p className="text-white/70 text-sm leading-relaxed">A vibrant community of thinkers and doers from 40+ nations worldwide.</p>
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <span className="material-symbols-outlined text-white/50 text-2xl">arrow_forward</span>
                </div>
              </div>

              {/* Arts & Cultural */}
              <div className="group relative p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:bg-white/10 hover:border-white/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-700 group-hover:bg-white/20 group-hover:scale-150"></div>
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                    <span className="material-symbols-outlined text-white text-3xl font-light">history_edu</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-headline font-bold mb-3 text-white tracking-tight">Arts &amp; Culture</h4>
                    <p className="text-white/70 text-sm leading-relaxed">Expressing boundless creativity through traditional fine arts and digital media.</p>
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <span className="material-symbols-outlined text-white/50 text-2xl">arrow_forward</span>
                </div>
              </div>

              {/* Recreations & Wellness */}
              <div className="group relative p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:bg-white/10 hover:border-white/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-700 group-hover:bg-white/20 group-hover:scale-150"></div>
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-xl">
                    <span className="material-symbols-outlined text-white text-3xl font-light">self_improvement</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-headline font-bold mb-3 text-white tracking-tight">Wellness</h4>
                    <p className="text-white/70 text-sm leading-relaxed">Mindful, dedicated spaces for recovery, reflection, and holistic mental health.</p>
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <span className="material-symbols-outlined text-white/50 text-2xl">arrow_forward</span>
                </div>
              </div>

              {/* Sports & Fitness */}
              <div className="group relative p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:bg-white/10 hover:border-white/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-700 group-hover:bg-white/20 group-hover:scale-150"></div>
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                    <span className="material-symbols-outlined text-white text-3xl font-light">sports_esports</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-headline font-bold mb-3 text-white tracking-tight">Sports</h4>
                    <p className="text-white/70 text-sm leading-relaxed">High-performance training complexes and intensely competitive collegiate leagues.</p>
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <span className="material-symbols-outlined text-white/50 text-2xl">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Insight Banner */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto bg-primary/5 rounded-[2.5rem] p-4 md:p-8 overflow-hidden border border-primary/10">
            <div className="bg-white rounded-[2rem] py-12 px-8 md:px-16 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-1 bg-primary rounded-full"></span>
                  <span className="text-primary font-headline font-bold text-sm uppercase tracking-widest">AI Insight</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-headline font-bold text-on-surface mb-4 leading-tight">Predictive Learning Journeys</h3>
                <p className="text-on-surface-variant max-w-xl">Our proprietary AI engine maps your career trajectory from day one, suggesting modules and industry connections that match your unique cognitive profile.</p>
              </div>
              <div className="relative w-full md:w-auto">
                <button className="bg-primary text-white w-full md:w-auto px-10 py-5 rounded-2xl font-headline font-extrabold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all">Start Your Assessment</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="mb-4">
              <img src="/logo.png" alt="Trinetra Academy Logo" className="h-14 w-auto object-contain" />
            </div>
            <p className="font-['Inter'] text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Empowering the next generation of scholars with cutting-edge pedagogy and personalized mentorship.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-headline font-bold text-sm text-on-surface mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><Link className="font-['Inter'] text-sm text-slate-500 hover:text-blue-700 transition-colors" to="#">NEET Prep</Link></li>
                <li><Link className="font-['Inter'] text-sm text-slate-500 hover:text-blue-700 transition-colors" to="#">JEE Main</Link></li>
                <li><Link className="font-['Inter'] text-sm text-slate-500 hover:text-blue-700 transition-colors" to="#">JEE Advanced</Link></li>
                <li><Link className="font-['Inter'] text-sm text-slate-500 hover:text-blue-700 transition-colors" to="#">EAMCET</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-sm text-on-surface mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link className="font-['Inter'] text-sm text-slate-500 hover:text-blue-700 transition-colors" to="/contact">Contact Support</Link></li>
                <li><Link className="font-['Inter'] text-sm text-slate-500 hover:text-blue-700 transition-colors" to="#">Global Centers</Link></li>
                <li><Link className="font-['Inter'] text-sm text-slate-500 hover:text-blue-700 transition-colors" to="#">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-headline font-bold text-sm text-on-surface mb-4">Connect</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-xl">share</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-xl">alternate_email</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-xl">call</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 pt-12 mt-12 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Inter'] text-sm text-slate-500">&copy; 2024 Trinetra Academy. Empowering the next generation of scholars.</p>
          <div className="flex gap-6">
            <Link className="font-['Inter'] text-sm text-slate-500 hover:text-blue-700 transition-colors" to="#">Terms of Service</Link>
            <Link className="font-['Inter'] text-sm text-slate-500 hover:text-blue-700 transition-colors" to="#">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};
