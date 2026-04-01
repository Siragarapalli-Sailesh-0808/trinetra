import React, { useEffect, useState } from "react";

const WEB3FORMS_ACCESS_KEY = "521931db-a5d7-4b9d-9f38-8517213e29fe";

export const AdmissionFormModal = ({ isOpen, onClose, source = "website" }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Admission Enquiry - Trinetra");
    formData.append("from_name", "Trinetra Website");
    formData.append("source", source);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully.");
        event.target.reset();
      } else {
        setResult("Submission failed. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[200] bg-slate-950/55 backdrop-blur-[2px] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Admission Enquiry Form"
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 mb-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-headline font-extrabold text-slate-900 tracking-tight">
              Admission Enquiry
            </h3>
            <p className="text-slate-500 mt-1 text-sm sm:text-base">
              Share your details and our team will contact you shortly.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Close form"
          >
            x
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="admission-name">
              Name
            </label>
            <input
              id="admission-name"
              type="text"
              name="name"
              required
              className="w-full rounded-xl border-slate-300 focus:border-blue-600 focus:ring-blue-600"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="admission-email">
              Email
            </label>
            <input
              id="admission-email"
              type="email"
              name="email"
              required
              className="w-full rounded-xl border-slate-300 focus:border-blue-600 focus:ring-blue-600"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1" htmlFor="admission-message">
              Message
            </label>
            <textarea
              id="admission-message"
              name="message"
              required
              rows={4}
              className="w-full rounded-xl border-slate-300 focus:border-blue-600 focus:ring-blue-600"
              placeholder="Tell us your preferred course and timing"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-blue-700 text-white py-3.5 font-headline font-bold hover:bg-blue-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Form"}
          </button>

          <p className="text-sm text-slate-600 min-h-[20px]">{result}</p>
        </form>
      </div>
    </div>
  );
};
