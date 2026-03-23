export default function Footer() {
  return (
    <footer className="border-t border-cream/[0.06] bg-charcoal-dark py-14">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <span className="text-[15px] font-medium tracking-tight text-cream" style={{ fontFamily: "var(--font-clash)" }}>
            AutoBoss<span className="text-copper">.</span>
          </span>

          <div className="flex gap-8">
            {[
              { label: "The Guarantee", href: "/#guarantee" },
              { label: "What You Get", href: "/#offer" },
              { label: "Free Tools", href: "/resources" },
              { label: "Apply", href: "/#apply" },
              { label: "Contact", href: "mailto:hello@autoboss.io" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-stone transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-[12px] text-stone/50">
            &copy; {new Date().getFullYear()} AutoBoss
          </p>
        </div>
      </div>
    </footer>
  );
}
