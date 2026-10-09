import { site } from "@/config/site";

export const waLink = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const admissionMsg = `Hello IIL Team & Aftab Sir,
I am interested in taking admission at Indian Institute of Language (IIL) Gopalganj.
Please share current batch schedules, fee structure, eligibility, and the enrollment process.`;

export const courseMsg = (courseTitle: string) => `Hello IIL Team & Aftab Sir,
I want to enquire specifically about the "${courseTitle}" course at IIL Gopalganj.
Could you please share the curriculum, batch timings, duration, and admission fees?`;

export const customEnquiryMsg = ({
  name,
  phone,
  course,
  timing,
  message,
}: {
  name: string;
  phone: string;
  course: string;
  timing?: string;
  message?: string;
}) => {
  return `*New Website Admission Enquiry — IIL Gopalganj*
━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${name}
📱 *Phone / WhatsApp:* ${phone}
🎯 *Interested Course:* ${course}
⏰ *Preferred Timing:* ${timing || "Flexible / Not specified"}
${message ? `💬 *Message / Query:* ${message}\n` : ""}━━━━━━━━━━━━━━━━━━━━
Please let me know how I can get started. Thank you!`;
};
