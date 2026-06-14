export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Hiring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Role-Specific<br />
          <span className="text-[#58a6ff]">Technical Interview Questions</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Paste a job description and a candidate&apos;s GitHub or resume. Get tailored technical questions with difficulty scaling in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $13/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Paste Job Description", desc: "Drop in the role requirements and tech stack." },
          { step: "2", title: "Add Candidate Profile", desc: "Link GitHub or paste resume text for context." },
          { step: "3", title: "Get Tailored Questions", desc: "Receive difficulty-scaled questions ready to use." }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
            <h3 className="text-white font-semibold mb-1">{title}</h3>
            <p className="text-[#8b949e] text-sm">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20 flex justify-center">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 w-full max-w-sm text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$13<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to hire smarter</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited question generation",
              "GitHub & resume profile parsing",
              "Easy, Medium, Hard difficulty tiers",
              "Export questions as PDF or CSV",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI tailor questions to a candidate?",
              a: "We analyze the job description for required skills and the candidate's GitHub activity or resume to generate questions that match their background and the role's expectations."
            },
            {
              q: "What does difficulty scaling mean?",
              a: "Each question set includes easy warm-up questions, medium problem-solving challenges, and hard deep-dive questions — so you can structure a complete interview flow."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel through your Lemon Squeezy customer portal at any time. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} TechQ. All rights reserved.
      </footer>
    </main>
  );
}
