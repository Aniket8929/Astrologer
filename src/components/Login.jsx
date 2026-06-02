import React from "react";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="h-screen w-full bg-white flex items-center justify-center px-5 overflow-hidden">

      <div className="w-full max-w-md flex flex-col justify-center h-full">

        <div className="flex justify-center items-center   sm:w-full sm:h-75">
          <img
            src="https://plain-apac-prod-public.komododecks.com/202606/01/m7xImO4qqakHC6Sd1RTk/image.png"
            alt="Astrology"
            className="w-52 h-52 sm:w-full sm:h-full object-contain sm:object-cover"
          />
        </div>

        <div className="text-center mt-2">
          <h1 className="text-2xl sm:text-3xl font-semibold text-black tracking-tight">
            Your Destiny Awaits 🌙
          </h1>

          <p className="mt-2 text-sm text-gray-500 leading-relaxed px-2">
            Connect with expert astrologers and discover your future path.
          </p>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number
          </label>

          <div className="flex items-center h-12 rounded-2xl border border-gray-200 bg-gray-50 px-4 focus-within:border-black transition">
            <span className="font-medium text-gray-700">+91</span>

            <div className="w-px h-4 bg-gray-300 mx-3" />

            <input
              type="tel"
              placeholder="Enter mobile number"
              className="flex-1 bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm"
            />
          </div>
        </div>

        <button className="w-full mt-5 h-12 rounded-2xl bg-black text-white font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition">
          Continue with OTP
          <ArrowRight size={18} />
        </button>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Secure login • Verified astrologers
          </p>
        </div>
      </div>
    </div>
  );
}