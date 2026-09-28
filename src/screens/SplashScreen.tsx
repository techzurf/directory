import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TizaraLogo } from '../components/common/TizaraLogo';

interface SplashScreenProps {
  onContinue: () => void;
  onExploreDirectly: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onContinue,
  onExploreDirectly,
}) => {
  return (
    <div className="relative w-full min-h-[100dvh] flex flex-col justify-between p-6 bg-tizara-gradient text-white overflow-hidden select-none">
      {/* Background ambient lighting orbs */}
      <div className="absolute top-10 -left-20 w-72 h-72 rounded-full bg-[#08D9F5]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-[#008CFF]/30 blur-3xl pointer-events-none" />

      {/* Top Header Tag */}
      <div className="relative z-10 pt-safe flex items-center justify-between">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
          <Sparkles className="w-3.5 h-3.5 text-[#08D9F5]" />
          <span className="text-[11px] font-bold tracking-wider text-[#08D9F5] uppercase">
            Business Discovery
          </span>
        </div>

        <button
          type="button"
          onClick={onExploreDirectly}
          className="text-xs font-semibold text-white/80 hover:text-white px-3 py-1.5 rounded-lg active:scale-95 transition-all"
        >
          Skip Intro
        </button>
      </div>

      {/* Center Logo & Monogram */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
        {/* Glowing Badge Frame for Official Logo */}
        <div className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-[#071B52]/50 animate-pulse duration-1000">
          <TizaraLogo variant="mark" size="xl" />
        </div>

        <h1 className="font-brand font-extrabold text-4xl sm:text-5xl text-white mt-6 tracking-tight">
          Tizara
        </h1>

        <p className="font-medium text-sm sm:text-base text-[#08D9F5] tracking-widest mt-2">
          Discover • Connect • Grow
        </p>

        <p className="text-xs sm:text-sm text-white/70 max-w-xs mt-4 leading-relaxed font-normal">
          The modern platform to discover verified local businesses, top-rated services, and exclusive offers.
        </p>
      </div>

      {/* Bottom Actions */}
      <div className="relative z-10 pb-safe flex flex-col gap-3 max-w-sm mx-auto w-full">
        <button
          type="button"
          onClick={onContinue}
          className="w-full h-13 rounded-2xl bg-white text-[#071B52] font-brand font-bold text-base flex items-center justify-center gap-2 shadow-xl shadow-black/20 hover:bg-slate-50 active:scale-[0.98] transition-all"
        >
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5 text-[#0757D9]" />
        </button>

        <p className="text-[11px] text-center text-white/60">
          Trusted by 10,000+ local businesses
        </p>
      </div>
    </div>
  );
};
