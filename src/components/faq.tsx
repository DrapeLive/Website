import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "What exactly does Drape build?",
    a: "We are a website development company and IT company that builds websites, mobile apps (Android & iOS via Flutter), custom web apps with Django, and anything in between. If your business needs a digital presence — we handle it. We also take on custom solutions involving AI, business analytics dashboards, and more.",
    tags: ["Website development", "App development", "Custom solutions"],
  },
  {
    q: "I'm a small business owner — do you work with people like me?",
    a: "Absolutely. Most of our clients are small to medium businesses. We understand that you need quality work at a realistic budget — not enterprise pricing. Whether you need a simple landing page, an e-commerce store, or a mobile app to serve your customers, we'll scope something that works for you.",
    tags: ["Small business", "SME-friendly"],
  },
  {
    q: "How much does a website or app cost?",
    a: "It depends on what you need. A clean, professional website starts at an affordable one-time price. Mobile app development varies based on features and complexity. We always discuss scope and budget upfront — no hidden surprises. You pay for the build; ongoing hosting or server costs (like a VPS) are your choice to manage separately.",
    tags: ["Pricing", "Transparent"],
  },
  {
    q: "What technologies do you use?",
    a: "We work with React for web frontends, Django for robust backends, Flutter for cross-platform mobile apps (one codebase, both Android and iOS), and standard design tools for UI/UX. If your project needs AI integration or business analytics, we can build that too — we pick the right tool for your problem.",
    tags: ["React", "Django", "Flutter", "AI"],
  },
  {
    q: "How long does it take to build a website or app?",
    a: "A standard business website typically takes 1–3 weeks. A full mobile app or custom web application can take 4–10 weeks depending on the feature set. We'll give you a clear timeline before we start — and we stick to it.",
    tags: ["Timeline", "Website development company in India"],
  },
  {
    q: "Do you only work with clients in India?",
    a: "We are a website development company based in India, which means competitive pricing for international clients too. We work with businesses anywhere — communication happens over Instagram DM or email, so location is never a barrier.",
    tags: ["India", "Remote", "Global"],
  },
  {
    q: "What if I need something very specific or unusual?",
    a: "That's actually where we shine. Beyond standard websites and app development, we take on custom solutions — whether that's an internal business tool, an AI-powered feature, a business analytics dashboard, or an integration with your existing systems. Just describe what you need and we'll tell you if we can build it (we usually can).",
    tags: ["Custom solution", "Business analytics", "AI"],
  },
  {
    q: "How do I get started or reach out?",
    a: "The easiest way is to send us a DM on Instagram or drop us an email. Tell us a bit about your business and what you're looking to build. We'll get back to you quickly, ask a few questions to understand your needs, and share a rough plan and quote — no commitment required.",
    tags: ["Contact", "Instagram", "Email"],
  },
];

const FAQItem: React.FC<{
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}> = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border border-neutral-800 rounded-xl mb-3 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-[15px] font-medium text-black hover:text-white hover:bg-neutral-800 transition-colors gap-3"
      >
        <span className="text-lg">{faq.q}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-neutral-700 flex items-center justify-content-center text-neutral-500 text-lg leading-none transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 py-2">
              <p className="text-lg text-neutral-600 leading-relaxed mb-3">
                {faq.a}
              </p>
              <div className="flex flex-wrap gap-2">
                {faq.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] px-3 py-1 rounded-full  text-neutral-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="px-5 md:px-0 py-20 md:py-32">
      <div className="max-w-7xl mx-auto ">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-center md:text-center mb-8 md:mb-12 font-bold text-5xl leading-12 lg:text-[64px]">
            Got questions?
          </h2>
          <h2 className="text-center text-3xl lg:text-4xl font-bold mb-3 w-full justify-center">
            Frequently asked questions
          </h2>
          <p className="text-center text-gray-800 text-lg leading-relaxed">
            Everything a small or growing business needs to know before reaching
            out.
          </p>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 rounded-2xl border border-neutral-200 border-neutral-800 bg-neutral-50 bg-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-medium text-neutral-100 text-base">
              Still have questions? Let's talk.
            </p>
            <p className="text-sm text-neutral-400 mt-0.5">
              Reach out on Instagram or email — we reply fast.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://instagram.com/drape.live"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-neutral-700 text-sm font-medium  text-neutral-200 hover:bg-neutral-100 hover:text-neutral-800 transition-colors"
            >
              Instagram DM
            </a>
            <a
              href="mailto:drapelive@gmail.com"
              className="px-4 py-2 rounded-lg bg-neutral-900  text-white  text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
