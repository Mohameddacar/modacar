"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    opportunity: "freelance",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mohameddacarmohumed@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company || "Not provided",
            opportunity: formData.opportunity,
            subject: formData.subject || `Inquiry from ${formData.name}`,
            message: formData.message,
            _subject: `New Portfolio Inquiry from ${formData.name}: ${formData.subject || "General Inquiry"}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          opportunity: "freelance",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message. Please try again.");
      }
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "There was a problem sending your message. You can try again or email directly."
      );
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-sm">
      <h2 className="font-heading font-bold text-3xl text-primary mb-2">Send a Message</h2>
      <p className="text-secondary mb-8">
        I'm currently ready to freelance and open to new projects and collaborations.
      </p>

      {status === "success" ? (
        <div className="bg-success/10 border border-success/20 text-success p-8 rounded-2xl flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center mb-4 text-success">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-heading font-bold text-2xl mb-2 text-primary">Message Sent Directly!</h3>
          <p className="text-secondary max-w-md mb-2">
            Thank you for reaching out. Your message was delivered straight to{" "}
            <span className="font-semibold text-primary">mohameddacarmohumed@gmail.com</span>.
          </p>
          <p className="text-xs text-secondary/80">I will reply within 24 hours.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-accent-blue transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
              <a
                href={`mailto:mohameddacarmohumed@gmail.com?subject=${encodeURIComponent(
                  formData.subject || "Portfolio Contact"
                )}&body=${encodeURIComponent(
                  `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`
                )}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white rounded-lg text-xs font-medium hover:bg-red-700 shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                Open Gmail directly
              </a>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-primary">
                Your Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-primary">
                Email Address
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-primary">
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all"
                placeholder="Enter company"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="opportunity" className="text-sm font-medium text-primary">
                Opportunity Type
              </label>
              <select
                required
                id="opportunity"
                name="opportunity"
                value={formData.opportunity}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all appearance-none"
              >
                <option value="freelance">Freelance project</option>
                <option value="fulltime">Full-time role</option>
                <option value="internship">Internship</option>
                <option value="collaboration">Collaboration</option>
                <option value="speaking">Speaking or training</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-primary">
              Subject
            </label>
            <input
              required
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all"
              placeholder="Enter subject"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-primary">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all resize-none"
              placeholder="Enter your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full px-6 py-4 bg-primary text-white rounded-xl font-medium hover:bg-accent-blue transition-colors flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
          >
            {status === "submitting" ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
