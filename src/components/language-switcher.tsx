"use client"

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "hi" : "en";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    window.location.href = segments.join("/") || `/${nextLocale}`;
  };

  const isEn = locale === "en";

  return (
    <div 
      onClick={toggleLocale}
      className="relative flex items-center justify-between w-14 h-7 px-1 rounded-full cursor-pointer bg-gradient-to-b from-gray-300 to-gray-100 dark:from-zinc-900 dark:to-zinc-700 shadow-[inset_0_4px_6px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.4)] border border-gray-400 dark:border-zinc-800 transition-all overflow-hidden"
    >
      <span className="text-[9px] font-bold text-gray-500 dark:text-zinc-400 z-10 w-1/2 text-center select-none shadow-sm pointer-events-none">
        EN
      </span>
      <span className="text-[9px] font-bold text-gray-500 dark:text-zinc-400 z-10 w-1/2 text-center select-none shadow-sm pointer-events-none">
        HI
      </span>
      
      {/* Physical Toggle Thumb */}
      <div 
        className={`absolute top-1 bottom-1 w-5 rounded-full bg-gradient-to-b from-white to-gray-200 dark:from-zinc-300 dark:to-zinc-500 shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_2px_2px_rgba(255,255,255,0.9)] border border-gray-300 dark:border-zinc-600 transition-transform duration-300 ease-in-out z-20 ${
          isEn ? "translate-x-0" : "translate-x-7"
        }`}
      >
        {/* Thumb Grip Ridges */}
        <div className="absolute inset-0 flex items-center justify-center gap-[1px]">
          <div className="w-[1px] h-2 bg-gray-400/50 shadow-[1px_0_0_rgba(255,255,255,0.8)]"></div>
          <div className="w-[1px] h-2 bg-gray-400/50 shadow-[1px_0_0_rgba(255,255,255,0.8)]"></div>
          <div className="w-[1px] h-2 bg-gray-400/50 shadow-[1px_0_0_rgba(255,255,255,0.8)]"></div>
        </div>
      </div>
    </div>
  );
}
