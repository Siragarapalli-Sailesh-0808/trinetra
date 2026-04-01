import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdmissionFormModal } from "../../components/shared/AdmissionFormModal";

// Premium Unsplash image for Contact splash
const contactImg = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop";

export const Contact = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdmissionFormOpen, setIsAdmissionFormOpen] = useState(false);

  useEffect(() => {
    // Standardize theme variables
    document.documentElement.classList.add('light');
    document.body.classList.add(
      'bg-slate-50', 
      'font-body', 
      'text-slate-800'
    );
    
    return () => {
      document.body.classList.remove(
        'bg-slate-50', 
        'font-body', 
        'text-slate-800'
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
              <Link className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-primary transition-colors" to="/courses">Courses</Link>
              <Link className="font-headline font-semibold text-lg tracking-tight text-primary transition-colors border-b-2 border-primary" to="/contact">Contact</Link>
            </div>

            <div className="flex-1 sm:hidden"></div>

            <button
              type="button"
              onClick={() => setIsAdmissionFormOpen(true)}
              className="bg-[#004fa8] text-white px-4 sm:px-10 py-2 sm:py-3 rounded-full font-headline font-semibold text-xs sm:text-lg hover:bg-[#003b82] transition-all flex items-center gap-1 sm:gap-2 shadow-md shadow-[#004fa8]/20 whitespace-nowrap shrink-0"
            >
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
                <Link onClick={() => setIsMobileMenuOpen(false)} className="font-headline font-semibold text-lg tracking-tight text-slate-800 hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors" to="/courses">Courses</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} className="font-headline font-semibold text-lg tracking-tight text-primary bg-blue-50 px-4 py-2 rounded-lg transition-colors" to="/contact">Contact</Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-[112px] bg-slate-50 pb-24">
        {/* Deep Blue Hero Section */}
        <section className="relative bg-[#004fa8] py-20 overflow-hidden flex items-center justify-center mb-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-white tracking-tight mb-4 leading-tight">
              Get In Touch With Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100 font-body max-w-2xl mx-auto">
              We're here to answer any questions you have about our curriculum, admissions or campus life.
            </p>
          </div>
        </section>

        {/* Contact Info & Splash Image */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            
            {/* Splash Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,74,0.15)] group">
                <div className="absolute inset-0 bg-[#004fa8]/10 group-hover:bg-[#004fa8]/0 transition-colors duration-500 z-10 pointer-events-none"></div>
                <img src={contactImg} alt="Contact Support Team" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                
                {/* Floating Contact Card over Image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 border border-white/40 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-headline font-bold text-[#004fa8] text-xl mb-2">Ready to Enroll?</h3>
                  <p className="text-slate-600 text-sm mb-4">Our admissions officers are available to help you register for the upcoming batch.</p>
                  <button
                    type="button"
                    onClick={() => setIsAdmissionFormOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#004fa8] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-[#003b82] transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">phone_in_talk</span> Call Admissions
                  </button>
                </div>
              </div>
            </div>

            {/* Information Grid */}
            <div className="w-full lg:w-1/2">
              <div className="mb-10">
                <span className="text-[#004fa8] font-headline font-bold uppercase tracking-widest text-sm block mb-2">Campus Location</span>
                <h2 className="text-4xl font-headline font-extrabold text-slate-900 tracking-tight">Trinetra Academy</h2>
              </div>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-5 items-start p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-[#004fa8]/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px] text-[#004fa8]">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-xl text-slate-800 mb-2">Address</h4>
                    <p className="text-slate-600 leading-relaxed font-body">
                      Street Opposite Sri Venkateswara Swamy Temple, Pittalavani cheruvu,<br />
                      Morampudi, Rajahmundry, Andhra Pradesh 533107
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5 items-start p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-[#004fa8]/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px] text-[#004fa8]">call</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-xl text-slate-800 mb-2">Direct Lines</h4>
                    <div className="space-y-1">
                      <a href="tel:+918639096679" className="block text-slate-600 hover:text-[#004fa8] font-medium transition-colors">+91 8639096679</a>
                      <a href="tel:+917569316737" className="block text-slate-600 hover:text-[#004fa8] font-medium transition-colors">+91 7569316737</a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-5 items-start p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-[#004fa8]/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px] text-[#004fa8]">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-xl text-slate-800 mb-2">Office Hours</h4>
                    <p className="text-slate-600 font-medium">Monday - Saturday:<span className="text-slate-800 font-bold ml-2">9:00 AM - 6:00 PM</span></p>
                    <p className="text-slate-500 text-sm mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[500px] w-full bg-slate-200 relative">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2849!2d81.7880!3d17.0005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAwJzAxLjgiTiA4McKwNDcnMTYuOCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </main>

      <AdmissionFormModal
        isOpen={isAdmissionFormOpen}
        onClose={() => setIsAdmissionFormOpen(false)}
        source="contact-page"
      />

      <footer className="w-full border-t border-slate-200 bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="mb-6 bg-white p-3 rounded-xl inline-block">
              <img src="/logo.png" alt="Trinetra Academy Logo" className="h-10 w-auto object-contain" />
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
