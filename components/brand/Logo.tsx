"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon" | "button";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "full",
  size = "md",
  className = "",
  href = "/",
  onClick,
}) => {
  // Dimensions for Logo icon mark
  const iconDimensions = {
    sm: "w-8 h-8 sm:w-9 sm:h-9",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-13 h-13 sm:w-14 sm:h-14",
    xl: "w-16 h-16 sm:w-20 sm:h-20",
  }[size];

  // Font sizes for 2-row layout
  const row1Size = {
    sm: "text-[14px] sm:text-[15px]",
    md: "text-[17px] sm:text-[19px]",
    lg: "text-[22px] sm:text-[26px]",
    xl: "text-[28px] sm:text-[34px]",
  }[size];

  const row2Size = {
    sm: "text-[11px] sm:text-[12px]",
    md: "text-[13px] sm:text-[14.5px]",
    lg: "text-[16px] sm:text-[19px]",
    xl: "text-[20px] sm:text-[25px]",
  }[size];

  // Logo Image Mark (stylized P pixel check mark)
  const IconMark = (
    <div
      className={`relative ${iconDimensions} shrink-0 transition-transform group-hover:scale-105 duration-200 flex items-center justify-center`}
    >
      <img
        src="/logo.png"
        alt="PixelCheck365 Logo"
        className="w-full h-full object-contain drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(56,189,248,0.3)] transition-all"
      />
    </div>
  );

  // If icon only
  if (variant === "icon") {
    if (href) {
      return (
        <Link href={href} onClick={onClick} className={`inline-flex items-center group ${className}`} aria-label="PixelCheck365">
          {IconMark}
        </Link>
      );
    }
    return <div className={`inline-flex items-center group ${className}`}>{IconMark}</div>;
  }

  // 2-Row Text Content
  const TextContent = (
    <div className="flex flex-col text-left justify-center select-none leading-none">
      {/* Row 1: Pixel */}
      <span className={`font-black ${row1Size} tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-none`}>
        Pixel
      </span>
      {/* Row 2: Check 365 */}
      <span className={`font-extrabold ${row2Size} tracking-tight leading-none flex items-center gap-1 mt-0.5 sm:mt-1`}>
        <span className="text-slate-700 dark:text-slate-300">Check</span>
        <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent font-black">
          365
        </span>
      </span>
    </div>
  );

  // If interactive button badge
  if (variant === "button") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`group relative inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 shadow-md hover:shadow-xl shadow-primary/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}
      >
        {IconMark}
        {TextContent}
      </Link>
    );
  }

  // Full Brand Logo with dynamic dark-mode compatible 2-row text
  const Content = (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {IconMark}
      {TextContent}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1 -ml-1 transition-transform active:scale-95"
        aria-label="PixelCheck365 Home"
      >
        {Content}
      </Link>
    );
  }

  return Content;
};
