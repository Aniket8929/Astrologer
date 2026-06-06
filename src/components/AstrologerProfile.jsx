import { useState, useEffect } from "react";
import {
  ArrowLeft, Share2, Heart, Star, CheckCircle,
  MessageCircle, Phone, Award, Globe, Clock,
  Coins, Calendar, BadgeCheck,
} from "lucide-react";

/* ─── Sample data ─── */
const defaultAstrologer = {
  id: 1,
  name: "Sidhi Sharma",
  image: "https://i.pravatar.cc/200?img=47",
  skills: "Vedic · Tarot · Vastu · Numerology · Marriage · Career",
  rating: 4.96,
  about:
    "A highly experienced astrologer specialising in Vedic Astrology, Tarot Reading, and Marriage Consultation. With over a decade of practice and thousands of successful consultations, Sidhi helps people gain clarity and confidence in life's most important decisions — from career crossroads to matters of the heart.\n\nHer approach combines ancient astrological wisdom with a compassionate, modern perspective. Every consultation is personalised and conducted with complete confidentiality.",
};

const expertise = [
  "Vedic Astrology", "Tarot", "Marriage", "Career",
  "Finance", "Love & Relationships", "Vastu", "Numerology", "Palmistry",
];


const availability = [
  { day: "Today (Mon)", status: "Available now", open: true },
  { day: "Tuesday", status: "9am – 9pm", open: true },
  { day: "Wednesday", status: "Busy", open: false },
  { day: "Thursday", status: "10am – 8pm", open: true },
  { day: "Friday", status: "9am – 9pm", open: true },
];



const stats = [
  { icon: Clock, val: "10+ yrs", lbl: "Experience" },
  { icon: Globe, val: "Hindi, English", lbl: "Languages" },
  { icon: Award, val: "212K+", lbl: "Orders completed" },
  { icon: Coins, val: "₹27 / min", lbl: "Consultation fee" },
];

/* ─── Global keyframe + Cormorant font ─── */
const SpinStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap');
    @keyframes spin-slow { to { transform: rotate(360deg); } }
    .spin-slow  { animation: spin-slow 8s linear infinite; }
    .font-cormorant { font-family: 'Cormorant Garamond', serif; }
  `}</style>
);

/* ─── Reusable: animated avatar ─── */
function Avatar({ src, name, size = "w-36 h-36" }) {
  return (
    <div className={`relative ${size} flex-shrink-0`}>
      <div
        className="spin-slow absolute rounded-full"
        style={{ inset: "-4px", background: "conic-gradient(from 0deg,#E8457A,#FFB3D0,#E8457A,#B5235A,#E8457A)" }}
      />
      <div className="absolute rounded-full bg-pink-50" style={{ inset: "2px" }} />
      <img
        src={src || "https://i.pravatar.cc/200?img=47"}
        alt={name}
        className="absolute rounded-full object-cover"
        style={{ inset: "6px", width: "calc(100% - 12px)", height: "calc(100% - 12px)" }}
      />
      <span className="absolute bottom-1.5 right-1.5 z-10 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-white" />
    </div>
  );
}

/* ─── Reusable: icon button ─── */
function IconBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-pink-200 bg-white/70 flex items-center justify-center text-pink-700 hover:bg-white transition-colors"
    >
      {children}
    </button>
  );
}

/* ─── Reusable: section title with fading rule ─── */
function SectionTitle({ children, size = "text-2xl" }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <h3 className={`font-cormorant ${size} font-bold text-pink-950 whitespace-nowrap`}>{children}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-pink-300 to-transparent" />
    </div>
  );
}

/* ─── Reusable: star row ─── */
function Stars({ size = 14 }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4].map(i => <Star key={i} size={size} className="fill-pink-500 text-pink-500" />)}
      <Star size={size} className="text-pink-500" />
    </div>
  );
}

/* ─── Reusable: hero wave divider ─── */
function Wave({ d }) {
  return (
    <svg viewBox={`0 0 ${d === "mobile" ? 380 : 1440} 40`} preserveAspectRatio="none" className="block w-full -mb-px">
      <path
        d={d === "mobile"
          ? "M0,16 C80,32 160,0 240,16 C300,28 340,8 380,16 L380,32 L0,32 Z"
          : "M0,20 C240,40 480,0 720,20 C960,40 1200,0 1440,20 L1440,40 L0,40 Z"}
        fill="#fdf2f8"
      />
    </svg>
  );
}

/* ════════════════════════════
   MOBILE
════════════════════════════ */
function MobileProfile({ astrologer, onBack }) {
  const [liked, setLiked] = useState(false);
  const back = onBack || (() => window.history.back());

  return (
    <div className="min-h-screen bg-pink-50 pb-28">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(140deg,#FFF0F5 0%,#FFD6E7 55%,#FFC2DC 100%)" }}>
        <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-pink-300/20 pointer-events-none" />
        <div className="absolute -bottom-8 left-[10%] w-40 h-40 rounded-full bg-pink-300/10 pointer-events-none" />

        {/* nav */}
        <div className="relative z-10 flex items-center justify-between px-5 pt-6">
          <IconBtn onClick={back}><ArrowLeft size={18} /></IconBtn>
          <span className="text-xs font-medium text-pink-700 tracking-widest uppercase">Astrologer Profile</span>
          <IconBtn onClick={() => setLiked(v => !v)}>
            <Heart size={18} className={liked ? "fill-pink-500 text-pink-500" : ""} />
          </IconBtn>
        </div>

        {/* profile block */}
        <div className="relative z-10 flex flex-col items-center px-5 pt-6 pb-2">
          <Avatar src={astrologer.image} name={astrologer.name} size="w-28 h-28" />

          <div className="flex items-center gap-2 mt-4">
            <h2 className="font-cormorant text-3xl font-bold text-pink-950">{astrologer.name}</h2>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <CheckCircle size={11} className="text-white" strokeWidth={3} />
            </div>
          </div>

          <p className="text-xs text-pink-500 mt-1 text-center">{astrologer.skills}</p>

          <div className="flex items-center gap-2 mt-3 px-5 py-2 bg-white/80 border border-pink-200 rounded-full">
            <Star size={13} className="fill-pink-500 text-pink-500" />
            <span className="text-sm font-medium text-pink-950">{astrologer.rating}</span>
            <div className="w-px h-3.5 bg-pink-200" />
            <span className="text-xs text-pink-400">212k consultations</span>
          </div>
        </div>

        <Wave d="mobile" />
      </div>

      {/* ── Stats ── */}
      <div className="px-4 mt-4 grid grid-cols-2 gap-3">
        {stats.map(({ icon: Icon, val, lbl }, i) => (
          <div key={i} className="bg-white border border-pink-100 rounded-2xl p-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
              <Icon size={18} className="text-pink-500" />
            </div>
            <div>
              <div className="text-sm font-medium text-pink-950">{val}</div>
              <div className="text-xs text-pink-300 mt-0.5">{lbl}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Expertise ── */}
      <div className="mx-4 mt-4 bg-white border border-pink-100 rounded-2xl p-5">
        <SectionTitle>Expertise</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {expertise.map(t => (
            <span key={t} className="px-4 py-1.5 text-xs font-medium text-pink-700 bg-pink-50 border border-pink-200 rounded-full">{t}</span>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <div className="mx-4 mt-4 bg-white border border-pink-100 rounded-2xl p-5">
        <SectionTitle>About</SectionTitle>
        {astrologer.about.split("\n\n").map((p, i) => (
          <p key={i} className="text-sm text-pink-700 leading-relaxed mb-3 last:mb-0">{p}</p>
        ))}
      </div>

      {/* ── Fixed bottom CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 px-5 pt-3 pb-6 z-50">
        <div className="grid grid-cols-2 gap-3">
          <button className="py-3.5 rounded-2xl border border-pink-200 bg-white text-pink-700 font-medium text-sm flex items-center justify-center gap-2 hover:bg-pink-50 transition-colors">
            <Phone size={17} className="text-pink-500" /> Call Now
          </button>
          <button
            className="py-3.5 rounded-2xl text-white font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(135deg,#B5235A,#E8457A,#FF7BAC)", boxShadow: "0 4px 18px rgba(232,69,122,0.35)" }}
          >
            <MessageCircle size={17} /> Chat Now
          </button>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════
   DESKTOP
════════════════════════════ */
function DesktopProfile({ astrologer, onBack }) {
  const [liked, setLiked] = useState(false);
  const back = onBack || (() => window.history.back());

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(140deg,#FFF0F5 0%,#FFD6E7 55%,#FFC2DC 100%)" }}>
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-pink-300/10 pointer-events-none" />
        <div className="absolute -bottom-10 left-[10%] w-56 h-56 rounded-full bg-pink-300/10 pointer-events-none" />
        <div className="absolute top-5 left-[5%] w-28 h-28 rounded-full bg-white/25 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-10 pt-8">
          {/* nav */}
          <div className="flex items-center justify-between mb-10">
            <IconBtn onClick={back}><ArrowLeft size={18} /></IconBtn>
            <span className="text-xs font-medium text-pink-700 tracking-widest uppercase">Astrologer Profile</span>
            <div className="flex gap-2.5">
              <IconBtn onClick={() => setLiked(v => !v)}>
                <Heart size={18} className={liked ? "fill-pink-500 text-pink-500" : ""} />
              </IconBtn>
              <IconBtn><Share2 size={18} /></IconBtn>
            </div>
          </div>

          {/* hero row */}
          <div className="grid grid-cols-[auto_1fr_auto] gap-10 items-center pb-2">
            <Avatar src={astrologer.image} name={astrologer.name} size="w-36 h-36" />

            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <h1 className="font-cormorant text-5xl font-bold text-pink-950 leading-tight">{astrologer.name}</h1>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <CheckCircle size={14} className="text-white" strokeWidth={3} />
                </div>
              </div>
              <p className="text-sm text-pink-500 tracking-wide mb-4">{astrologer.skills}</p>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 border border-pink-200 rounded-full">
                <Star size={14} className="fill-pink-500 text-pink-500" />
                <span className="text-sm font-medium text-pink-950">{astrologer.rating}</span>
                <div className="w-px h-3.5 bg-pink-200" />
                <span className="text-xs text-pink-400">212k consultations</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="h-12 px-7 rounded-xl border border-pink-200 bg-white text-pink-700 font-medium text-sm flex items-center gap-2 hover:bg-pink-50 transition-colors">
                <Phone size={17} className="text-pink-500" /> Call Now
              </button>
              <button
                className="h-12 px-7 rounded-xl text-white font-medium text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg,#B5235A,#E8457A,#FF7BAC)", boxShadow: "0 4px 18px rgba(232,69,122,0.35)" }}
              >
                <MessageCircle size={17} /> Chat Now
              </button>
            </div>
          </div>
        </div>

        <Wave d="desktop" />
      </div>
            <div className="max-w-6xl mx-auto px-10 py-10 grid grid-cols-[1fr_340px] gap-7">

        <div className="flex flex-col gap-6">

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, val, lbl }, i) => (
              <div key={i} className="bg-white border border-pink-100 rounded-2xl p-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-pink-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-pink-950">{val}</div>
                  <div className="text-xs text-pink-300 mt-0.5">{lbl}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Expertise */}
          <div className="bg-white border border-pink-100 rounded-2xl p-6">
            <SectionTitle>Expertise</SectionTitle>
            <div className="flex flex-wrap gap-2">
              {expertise.map(t => (
                <span key={t} className="px-4 py-2 text-xs font-medium text-pink-700 bg-pink-50 border border-pink-200 rounded-full">{t}</span>
              ))}
            </div>
          </div>

          {/* About */}
          <div className="bg-white border border-pink-100 rounded-2xl p-6">
            <SectionTitle>About</SectionTitle>
            {astrologer.about.split("\n\n").map((p, i) => (
              <p key={i} className="text-sm text-pink-700 leading-relaxed mb-4 last:mb-0">{p}</p>
            ))}
          </div>

      
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="flex flex-col gap-5">

          <div className="bg-white border border-pink-100 rounded-2xl p-6">
            <h3 className="font-cormorant text-xl font-bold text-pink-950 mb-4">Availability</h3>
            {availability.map((a, i) => (
              <div key={i} className={`flex items-center justify-between py-2.5 ${i < availability.length - 1 ? "border-b border-pink-100" : ""}`}>
                <span className="text-sm text-pink-600">{a.day}</span>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${a.open ? "bg-green-50 text-green-700" : "bg-pink-50 text-pink-600"}`}>
                  {a.status}
                </span>
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
}

export default function AstrologerProfile({ astrologer: propAstrologer, onBack }) {
  const astrologer = propAstrologer || defaultAstrologer;
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <SpinStyle />
      {isMobile
        ? <MobileProfile astrologer={astrologer} onBack={onBack} />
        : <DesktopProfile astrologer={astrologer} onBack={onBack} />
      }
    </>
  );
}