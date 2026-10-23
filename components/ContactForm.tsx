"use client";


import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-sm">
      <h2 className="font-heading font-bold text-3xl text-primary mb-2">Send a Message</h2>
      <p className="text-secondary mb-8">I'm currently available for new opportunities and collaborations.</p>

      {status === "success" ? (
        <div className="bg-success/10 border border-success/20 text-success p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h3 className="font-heading font-bold text-xl mb-2">Message Sent!</h3>
          <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
          <button onClick={() => setStatus("idle")} className="mt-6 px-6 py-2 bg-white rounded-full text-success text-sm font-medium hover:bg-success/5 transition-colors">
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-primary">Your Name</label>
              <input required type="text" id="name" name="name" className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-primary">Email Address</label>
              <input required type="email" id="email" name="email" className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all" placeholder="john@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-primary">Company (Optional)</label>
              <input type="text" id="company" name="company" className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all" placeholder="Acme Inc." />
            </div>
            <div className="space-y-2">
              <label htmlFor="opportunity" className="text-sm font-medium text-primary">Opportunity Type</label>
              <select required id="opportunity" name="opportunity" className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all appearance-none">
                <option value="">Select an option...</option>
                <option value="fulltime">Full-time role</option>
                <option value="internship">Internship</option>
                <option value="freelance">Freelance project</option>
                <option value="collaboration">Collaboration</option>
                <option value="speaking">Speaking or training</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-primary">Subject</label>
            <input required type="text" id="subject" name="subject" className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all" placeholder="How can I help you?" />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
            <textarea required id="message" name="message" rows={5} className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all resize-none" placeholder="Tell me about your project or opportunity..."></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === "submitting"}
            className="w-full px-6 py-4 bg-primary text-white rounded-xl font-medium hover:bg-accent-blue transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
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
