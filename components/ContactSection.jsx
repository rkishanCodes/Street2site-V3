"use client";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Ready to launch something?
          </h2>
          <p className="text-neutral-600 mb-4">
            Share a bit about your idea, budget, and timeline. Street2Site will
            reply with next steps and a simple plan.
          </p>
          <p className="text-sm text-neutral-700">
            Prefer email? Reach out at{" "}
            <a
              href="mailto:hello@street2site.com"
              className="underline decoration-streetAccent"
            >
              hello@street2site.com
            </a>
          </p>
        </div>
        <form className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-neutral-200 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Name / brand
            </label>
            <input
              type="text"
              className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-streetAccent focus:border-streetAccent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Project type
            </label>
            <input
              type="text"
              placeholder="Launch page, full site, drop microsite…"
              className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-streetAccent focus:border-streetAccent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Budget range
            </label>
            <input
              type="text"
              placeholder="e.g. $500–$1500"
              className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-streetAccent focus:border-streetAccent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-streetAccent focus:border-streetAccent"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-full bg-streetAccent text-white text-sm font-medium"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
