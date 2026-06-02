import {
  ArrowLeft,
  Share2,
  Star,
  CheckCircle,
  MessageCircle,
  Phone,
  Award,
  Globe,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { experts } from "../data/dashboardData.js";

export default function AstrologerProfile() {
  const navigate = useNavigate();

  const astrologerId = window.location.pathname.split("/").pop();

  const astrologer =
    experts.find((a) => String(a.id) === astrologerId) ||
    astrologers[0];

  const expertise = [
    "Vedic",
    "Tarot",
    "Marriage",
    "Career",
    "Finance",
    "Love",
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-28">
      <div className="bg-[#D8C300] rounded-b-[40px] shadow-sm">
        <div className="flex items-center justify-between px-5 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>

          <h1 className="font-bold text-lg">
            Astrologer Profile
          </h1>

          <button className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center">
            <Share2 size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center px-5 pt-8 pb-10">
          <div className="relative">
            <img
              src={astrologer.image || "/profile.jpg"}
              alt={astrologer.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-xl"
            />

            <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-4 border-white" />
          </div>

          <div className="flex items-center gap-2 mt-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {astrologer.name || "Sidhi"}
            </h2>

            <CheckCircle
              size={18}
              className="fill-green-500 text-green-500"
            />
          </div>

          <p className="text-sm text-slate-700 mt-1">
            {astrologer.skills ||
              "Vedic • Tarot • Vastu"}
          </p>

          <div className="flex items-center gap-2 mt-3 bg-white/60 backdrop-blur px-4 py-2 rounded-full">
            <Star
              size={15}
              className="fill-black text-black"
            />

            <span className="font-bold">
              {astrologer.rating || "4.96"}
            </span>

            <span className="text-slate-600">
              • 212k Consultations
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 -mt-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <Clock
              size={18}
              className="text-[#D8C300] mb-2"
            />
            <h3 className="font-bold text-lg">
              10+
            </h3>
            <p className="text-xs text-slate-500">
              Years Experience
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <Globe
              size={18}
              className="text-[#D8C300] mb-2"
            />
            <h3 className="font-bold text-lg">
              Hindi, English
            </h3>
            <p className="text-xs text-slate-500">
              Languages
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <Award
              size={18}
              className="text-[#D8C300] mb-2"
            />
            <h3 className="font-bold text-lg">
              212K+
            </h3>
            <p className="text-xs text-slate-500">
              Orders
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <Star
              size={18}
              className="text-[#D8C300] mb-2"
            />
            <h3 className="font-bold text-lg">
              ₹27/min
            </h3>
            <p className="text-xs text-slate-500">
              Consultation Fee
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 mt-8">
        <h3 className="font-bold text-lg mb-4">
          Expertise
        </h3>

        <div className="flex flex-wrap gap-2">
          {expertise.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-yellow-50 text-yellow-900 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 sm:px-6 mt-8">
        <h3 className="font-bold text-lg mb-4">
          About Astrologer
        </h3>

        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <p className="text-slate-600 leading-7 text-sm sm:text-base">
            {astrologer.about ||
              "A highly experienced astrologer specializing in Vedic Astrology, Tarot Reading, Marriage Consultation, Career Guidance, and Financial Predictions. With years of practice and thousands of successful consultations, she helps people gain clarity and confidence in life's most important decisions."}
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 mt-8">
        <h3 className="font-bold text-lg mb-4">
          Customer Reviews
        </h3>

        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="font-bold text-lg">
              4.96
            </span>
            <span className="text-slate-500">
              based on 212k reviews
            </span>
          </div>

          <p className="text-slate-600 text-sm">
            "Very accurate predictions and
            excellent guidance. Helped me make
            better career decisions."
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t backdrop-blur">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex gap-3">
            <button className="flex-1 h-14 rounded-2xl border border-slate-200 bg-white font-semibold flex items-center justify-center gap-2">
              <Phone size={18} />
              Call Now
            </button>

            <button className="flex-1 h-14 rounded-2xl bg-[#D8C300] font-semibold flex items-center justify-center gap-2 text-slate-900">
              <MessageCircle size={18} />
              Chat Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}