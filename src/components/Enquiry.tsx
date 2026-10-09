"use client";

import { useState } from "react";
import { courses } from "@/config/site";
import { customEnquiryMsg, waLink } from "@/lib/whatsapp";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  User, 
  BookOpen, 
  Clock, 
  MessageSquare,
  Sparkles,
  ExternalLink
} from "lucide-react";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: courses[0]?.title || "Basic English Grammar",
    timing: "Flexible / Any Batch",
    msg: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const batchTimings = [
    "Morning (7:00 AM - 10:00 AM)",
    "Afternoon (11:00 AM - 2:00 PM)",
    "Evening (4:00 PM - 7:00 PM)",
    "Flexible / Any Batch"
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors: Record<string, string> = {};
    const trimmedName = formData.name.trim();
    const cleanPhone = formData.phone.replace(/\D/g, "");

    if (!trimmedName || trimmedName.length < 2) {
      validationErrors.name = "Please enter your full name (at least 2 letters).";
    }

    if (!/^[6-9]\d{9}$/.test(cleanPhone) && !/^91[6-9]\d{9}$/.test(cleanPhone)) {
      validationErrors.phone = "Please enter a valid 10-digit Indian WhatsApp mobile number.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Generate formatted WhatsApp message
    const formattedMsg = customEnquiryMsg({
      name: trimmedName,
      phone: cleanPhone,
      course: formData.course,
      timing: formData.timing,
      message: formData.msg.trim() || undefined
    });

    const link = waLink(formattedMsg);
    setSubmittedUrl(link);
    setIsSubmitting(false);

    // Open WhatsApp in new tab
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white/90 backdrop-blur-2xl border border-[#E7EAF2] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-gray-200/50 relative overflow-hidden">
      {/* Decorative top accent gradient */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#315CF5] via-[#25D366] to-[#315CF5]" />

      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/10 text-xs font-bold text-[#128C7E] mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FAST-TRACK ADMISSION</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">
          Apply / Enquire for Admission
        </h3>
        <p className="mt-1 text-sm text-[#667085]">
          Fill in your details below to directly connect with Aftab Alam Sir on WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-[#344054] mb-1.5">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. Rahul Kumar"
              autoComplete="name"
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none ${
                errors.name
                  ? "border-red-400 focus:ring-2 focus:ring-red-200 bg-red-50/20"
                  : "border-[#D0D5DD] hover:border-gray-400 focus:border-[#315CF5] focus:ring-2 focus:ring-[#315CF5]/20 bg-gray-50/40"
              }`}
            />
          </div>
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.name}
            </p>
          )}
        </div>

        {/* WhatsApp Mobile Number */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-[#344054] mb-1.5">
            WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Phone className="w-4 h-4" />
            </div>
            <span className="absolute inset-y-0 left-9 flex items-center text-xs font-bold text-gray-500 pointer-events-none">
              +91
            </span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="98765 43210"
              inputMode="numeric"
              autoComplete="tel"
              className={`w-full pl-18 pr-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none ${
                errors.phone
                  ? "border-red-400 focus:ring-2 focus:ring-red-200 bg-red-50/20"
                  : "border-[#D0D5DD] hover:border-gray-400 focus:border-[#315CF5] focus:ring-2 focus:ring-[#315CF5]/20 bg-gray-50/40"
              }`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Course Selection */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-[#344054] mb-1.5">
            Select Course of Interest
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <select
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full pl-10 pr-8 py-3 rounded-xl border border-[#D0D5DD] hover:border-gray-400 focus:border-[#315CF5] focus:ring-2 focus:ring-[#315CF5]/20 bg-gray-50/40 text-sm font-medium text-[#101828] outline-none transition-all cursor-pointer"
            >
              {courses.map((course) => (
                <option key={course.id} value={course.title}>
                  {course.title} ({course.tagline})
                </option>
              ))}
              <option value="All Courses / Complete Package">
                Complete Package (Grammar + Public Speaking + Interview)
              </option>
              <option value="Not sure yet — Need Guidance">
                Not sure yet — Want Free Guidance
              </option>
            </select>
          </div>
        </div>

        {/* Preferred Batch Timing */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-[#344054] mb-1.5">
            Preferred Batch Timing
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Clock className="w-4 h-4" />
            </div>
            <select
              name="timing"
              value={formData.timing}
              onChange={handleInputChange}
              className="w-full pl-10 pr-8 py-3 rounded-xl border border-[#D0D5DD] hover:border-gray-400 focus:border-[#315CF5] focus:ring-2 focus:ring-[#315CF5]/20 bg-gray-50/40 text-sm font-medium text-[#101828] outline-none transition-all cursor-pointer"
            >
              {batchTimings.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message / Questions */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-[#344054] mb-1.5">
            Message or Specific Questions <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3.5 text-gray-400 pointer-events-none">
              <MessageSquare className="w-4 h-4" />
            </div>
            <textarea
              name="msg"
              rows={2}
              value={formData.msg}
              onChange={handleInputChange}
              placeholder="e.g. I want to improve public speaking and overcome hesitation..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D0D5DD] hover:border-gray-400 focus:border-[#315CF5] focus:ring-2 focus:ring-[#315CF5]/20 bg-gray-50/40 text-sm font-medium outline-none transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 text-sm sm:text-base gloss-reflection"
        >
          <Send className="w-4 h-4 fill-white" />
          <span>Send Enquiry via WhatsApp</span>
        </button>

        {/* Submission notification and help note */}
        {submittedUrl ? (
          <div className="p-4 bg-green-50 border border-green-200 rounded-2xl text-xs sm:text-sm text-green-900 flex flex-col gap-2 animate-fadeIn">
            <div className="flex items-center gap-2 font-bold text-green-800">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <span>WhatsApp message prepared!</span>
            </div>
            <p className="text-green-700 text-xs">
              WhatsApp should open with your pre-formatted enquiry. If it didn&apos;t open automatically, tap below:
            </p>
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#128C7E] underline hover:text-[#0b6357]"
            >
              <span>Click here to open WhatsApp directly</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          <p className="text-center text-[11px] text-[#667085]">
            🔒 Your details are securely transmitted directly to IIL WhatsApp. No spam guaranteed.
          </p>
        )}
      </form>
    </div>
  );
}
