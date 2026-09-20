"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  TestMode,
  DiagnosticColor,
  AutoPlayInterval,
  MagnifierZoom,
  DisplayInfo,
} from "@/lib/types";
import { TEST_SEQUENCES, DIAGNOSTIC_COLORS } from "@/lib/test-data";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Maximize,
  Minimize,
  X,
  Search,
  Grid,
  Info,
  Sparkles,
  HelpCircle,
  CheckCircle,
  Sliders,
  Award,
} from "lucide-react";
import { DisplayReportModal } from "./DisplayReportModal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ScreenTesterProps {
  initialMode?: TestMode;
}

export const ScreenTester: React.FC<ScreenTesterProps> = ({
  initialMode = "fullscreen",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useLanguage();

  // Mode resolution
  const queryMode = searchParams.get("mode") as TestMode | null;
  const currentMode: TestMode =
    queryMode && TEST_SEQUENCES[queryMode] ? queryMode : initialMode;

  const sequence = TEST_SEQUENCES[currentMode] || TEST_SEQUENCES.fullscreen;
  const colors = sequence.colors;

  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalMs, setIntervalMs] = useState<AutoPlayInterval>(
    sequence.recommendedInterval
  );
  const [hudVisible, setHudVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  // Tools state
  const [magnifierActive, setMagnifierActive] = useState(false);
  const [magnifierZoom, setMagnifierZoom] = useState<MagnifierZoom>(8);
  const [magnifierPos, setMagnifierPos] = useState({ x: 100, y: 100 });
  const [gridActive, setGridActive] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showReport, setShowReport] = useState(false);

  // Display metrics
  const [displayInfo, setDisplayInfo] = useState<DisplayInfo>({
    viewportWidth: 0,
    viewportHeight: 0,
    devicePixelRatio: 1,
    orientation: "landscape",
    colorDepth: 24,
    touchSupported: false,
    maxTouchPoints: 0,
    pixelRatioCategory: "1x Standard",
  });

  // Timers & refs
  const hudTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);

  // Update display metrics
  const updateDisplayInfo = useCallback(() => {
    if (typeof window === "undefined") return;
    const dpr = window.devicePixelRatio || 1;
    let dprCat = "1x Standard";
    if (dpr >= 3) dprCat = "3x Ultra Retina / High-DPI";
    else if (dpr >= 2) dprCat = "2x Retina / High-DPI";
    else if (dpr > 1) dprCat = `${dpr.toFixed(2)}x Scaling`;

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const orientationStr =
      window.screen?.orientation?.type ||
      (window.innerWidth > window.innerHeight ? "landscape-primary" : "portrait-primary");

    setDisplayInfo({
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      devicePixelRatio: dpr,
      orientation: orientationStr,
      colorDepth: window.screen?.colorDepth || 24,
      touchSupported: isTouch,
      maxTouchPoints: navigator.maxTouchPoints || 0,
      pixelRatioCategory: dprCat,
    });
  }, []);

  useEffect(() => {
    updateDisplayInfo();
    window.addEventListener("resize", updateDisplayInfo);
    window.addEventListener("orientationchange", updateDisplayInfo);
    return () => {
      window.removeEventListener("resize", updateDisplayInfo);
      window.removeEventListener("orientationchange", updateDisplayInfo);
    };
  }, [updateDisplayInfo]);

  // Handle Fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  // Request / Exit Fullscreen
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          await elem.requestFullscreen();
        } else if ((elem as unknown as { webkitRequestFullscreen?: () => Promise<void> }).webkitRequestFullscreen) {
          await (elem as unknown as { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as unknown as { webkitExitFullscreen?: () => Promise<void> }).webkitExitFullscreen) {
          await (document as unknown as { webkitExitFullscreen: () => Promise<void> }).webkitExitFullscreen();
        }
      }
    } catch {
      // Browser denied or restricted fullscreen; fallback to viewport mode
      setIsFullscreen(false);
    }
  }, []);

  // Activity HUD auto-fade
  const showHudTemporarily = useCallback(() => {
    setHudVisible(true);
    if (hudTimeoutRef.current) {
      clearTimeout(hudTimeoutRef.current);
    }
    hudTimeoutRef.current = setTimeout(() => {
      // Don't auto-hide if modal is open or playing with active interaction
      setHudVisible(false);
    }, 2800);
  }, []);

  // Reset index on mode change
  useEffect(() => {
    setCurrentIndex(0);
    setShowComplete(false);
    showHudTemporarily();
  }, [currentMode, showHudTemporarily]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev >= colors.length - 1) {
        setShowComplete(true);
        setIsPlaying(false);
        return prev;
      }
      return prev + 1;
    });
    showHudTemporarily();
  }, [colors.length, showHudTemporarily]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    setShowComplete(false);
    showHudTemporarily();
  }, [showHudTemporarily]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setShowComplete(false);
    showHudTemporarily();
  }, [showHudTemporarily]);

  const handleExit = useCallback(() => {
    if (document.fullscreenElement) {
      try {
        document.exitFullscreen();
      } catch {
        // ignore
      }
    }
    router.push("/");
  }, [router]);

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isPlaying && !showComplete) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= colors.length - 1) {
            setShowComplete(true);
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, intervalMs);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, intervalMs, colors.length, showComplete]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Wake up HUD on any key
      showHudTemporarily();

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        setIsPlaying((p) => !p);
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === "Escape") {
        if (showReport) setShowReport(false);
        else if (showInfo) setShowInfo(false);
        else if (showComplete) setShowComplete(false);
        else if (magnifierActive) setMagnifierActive(false);
        else if (gridActive) setGridActive(false);
      } else if (e.key === "m" || e.key === "M") {
        setMagnifierActive((p) => !p);
      } else if (e.key === "g" || e.key === "G") {
        setGridActive((p) => !p);
      } else if (e.key === "i" || e.key === "I") {
        setShowInfo((p) => !p);
      } else if (e.key === "r" || e.key === "R") {
        setShowReport((p) => !p);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    handleNext,
    handlePrev,
    showHudTemporarily,
    toggleFullscreen,
    showInfo,
    showReport,
    showComplete,
    magnifierActive,
    gridActive,
  ]);

  // Mouse & Touch listeners for auto-hud & magnifier position
  const handleMouseMove = (e: React.MouseEvent) => {
    showHudTemporarily();
    if (magnifierActive) {
      setMagnifierPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      };
      if (magnifierActive) {
        setMagnifierPos({ x: touch.clientX, y: touch.clientY });
      }
    }
    showHudTemporarily();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touch = e.changedTouches[0];
    const diffX = touch.clientX - touchStartRef.current.x;
    const diffY = touch.clientY - touchStartRef.current.y;
    const timeElapsed = Date.now() - touchStartRef.current.time;

    // Detect swipe (horizontal diff > 50px, duration < 400ms)
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) && timeElapsed < 400) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    } else if (Math.abs(diffX) < 10 && Math.abs(diffY) < 10 && timeElapsed < 300) {
      // Tap toggle HUD
      setHudVisible((v) => !v);
    }
    touchStartRef.current = null;
  };

  const currentColor: DiagnosticColor = colors[currentIndex] || colors[0];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-screen h-screen overflow-hidden select-none cursor-default touch-none"
      style={{
        backgroundColor: currentColor.type === "solid" ? currentColor.hex : "#000000",
        backgroundImage: currentColor.type === "gradient" ? currentColor.gradientCss : undefined,
      }}
    >
      {/* Optional Pixel Grid Overlay */}
      {gridActive && (
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden="true"
        />
      )}

      {/* Magnifier Lens */}
      {magnifierActive && (
        <div
          className="absolute pointer-events-none z-30 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-2xl overflow-hidden bg-black flex items-center justify-center"
          style={{
            left: `${magnifierPos.x}px`,
            top: `${magnifierPos.y}px`,
            width: "180px",
            height: "180px",
            boxShadow: "0 0 0 3px rgba(0,0,0,0.6), 0 20px 30px rgba(0,0,0,0.5)",
          }}
        >
          {/* Simulated subpixel matrix grid inside the magnifier */}
          <div
            className="w-full h-full relative"
            style={{
              backgroundColor: currentColor.type === "solid" ? currentColor.hex : "#000000",
              backgroundImage: currentColor.type === "gradient" ? currentColor.gradientCss : undefined,
            }}
          >
            {/* Subpixel grid simulation */}
            <div
              className="absolute inset-0 opacity-45"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.7) 1px, transparent 1px)",
                backgroundSize: `${20 / (magnifierZoom / 4)}px ${20 / (magnifierZoom / 4)}px`,
              }}
            />
            {/* Crosshair */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-4 h-[1px] bg-red-500 shadow-sm" />
              <div className="h-4 w-[1px] bg-red-500 shadow-sm absolute" />
            </div>
            {/* Zoom Badge */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/80 text-[10px] font-mono text-white tracking-wider">
              {magnifierZoom}× MAGNIFIER
            </div>
          </div>
        </div>
      )}

      {/* Top Floating Mini Header / Progress Indicator */}
      <div
        className={`absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-3 sm:p-4 transition-opacity duration-300 pointer-events-none ${
          hudVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 pointer-events-auto bg-black/75 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg text-xs sm:text-sm font-medium">
          <span
            className="w-3 h-3 rounded-full border border-white/30"
            style={{
              backgroundColor:
                currentColor.type === "solid" ? currentColor.hex : "#FFFFFF",
            }}
          />
          <span className="font-semibold uppercase tracking-wide">
            {currentColor.name}
          </span>
          <span className="text-white/50">•</span>
          <span className="text-white/80 font-mono text-xs">
            {currentIndex + 1} / {colors.length}
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Quick Exit */}
          <button
            onClick={handleExit}
            className="p-2 rounded-full bg-black/75 text-white/90 hover:text-white hover:bg-black border border-white/10 backdrop-blur-md shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary"
            title="Exit Test (Esc)"
            aria-label="Exit Test"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Main Floating HUD Bar */}
      <div
        className={`absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 w-[95%] max-w-2xl transition-all duration-300 pointer-events-none ${
          hudVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="pointer-events-auto bg-black/85 text-white backdrop-blur-xl border border-white/15 rounded-2xl p-3 sm:p-4 shadow-2xl">
          {/* Top Row: Navigation & Playback */}
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Previous */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none transition-colors text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/40"
              title="Previous (Left Arrow)"
              aria-label="Previous Test Color"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden xs:inline">{t.tester.prev}</span>
            </button>

            {/* Play/Pause & Speed */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-90 active:scale-95 transition-all shadow-md shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-white"
                title="Auto-Test Play/Pause (Space)"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>{t.tester.autoPlay} ({intervalMs / 1000}s)</span>
                  </>
                )}
              </button>

              {/* Speed Selector */}
              <div className="hidden sm:flex items-center bg-white/10 rounded-xl p-0.5 text-xs font-mono">
                {([1000, 2000, 3000, 5000] as AutoPlayInterval[]).map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setIntervalMs(spd)}
                    className={`px-2 py-1.5 rounded-lg transition-colors ${
                      intervalMs === spd
                        ? "bg-white text-black font-bold"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {spd / 1000}s
                  </button>
                ))}
              </div>
            </div>

            {/* Next */}
            <button
              onClick={handleNext}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/40"
              title="Next (Right Arrow)"
              aria-label="Next Test Color"
            >
              <span className="hidden xs:inline">{t.tester.next}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Row: Inspection Tools */}
          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
            {/* Left Tool Toggles */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Magnifier Toggle */}
              <button
                onClick={() => setMagnifierActive(!magnifierActive)}
                className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                  magnifierActive
                    ? "bg-white text-black font-semibold"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
                title="Toggle Magnifier Lens (M)"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.tester.magnifier}</span>
              </button>

              {/* Zoom Selector (if active) */}
              {magnifierActive && (
                <div className="flex items-center bg-white/20 rounded-lg p-0.5 text-[10px] font-mono">
                  {([4, 8, 16] as MagnifierZoom[]).map((z) => (
                    <button
                      key={z}
                      onClick={() => setMagnifierZoom(z)}
                      className={`px-1.5 py-0.5 rounded ${
                        magnifierZoom === z
                          ? "bg-white text-black font-bold"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {z}×
                    </button>
                  ))}
                </div>
              )}

              {/* Grid Toggle */}
              <button
                onClick={() => setGridActive(!gridActive)}
                className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                  gridActive
                    ? "bg-white text-black font-semibold"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
                title="Toggle Pixel Grid (G)"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.tester.grid}</span>
              </button>

              {/* Display Info Drawer Toggle */}
              <button
                onClick={() => setShowInfo(!showInfo)}
                className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                  showInfo
                    ? "bg-white text-black font-semibold"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
                title="Display & Viewport Info (I)"
              >
                <Info className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.tester.info}</span>
              </button>

              {/* Display Health & Score Report Toggle */}
              <button
                onClick={() => setShowReport(true)}
                className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                  showReport
                    ? "bg-emerald-400 text-black font-semibold"
                    : "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40"
                }`}
                title="Display Health Report & Score (R)"
              >
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline font-semibold">{t.nav.displayScore}</span>
              </button>
            </div>

            {/* Right Controls: Restart & Fullscreen */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={handleRestart}
                className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-colors"
                title="Restart Test"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.tester.restartTest}</span>
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-colors"
                title="Toggle Fullscreen (F)"
              >
                {isFullscreen ? (
                  <>
                    <Minimize className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t.tester.exitFullscreen}</span>
                  </>
                ) : (
                  <>
                    <Maximize className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t.tester.fullscreen}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Progress Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-2.5 pt-2 border-t border-white/10">
            {colors.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setShowComplete(false);
                }}
                className={`transition-all rounded-full ${
                  idx === currentIndex
                    ? "w-4 h-1.5 bg-primary"
                    : idx < currentIndex
                    ? "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
                title={`Jump to ${c.name}`}
                aria-label={`Jump to color ${idx + 1}: ${c.name}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Screen Information Drawer / Modal */}
      {showInfo && (
        <div className="absolute inset-0 z-40 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-700 text-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-fade-in">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                <h2 className="text-base font-bold">{t.tester.infoTitle}</h2>
              </div>
              <button
                onClick={() => setShowInfo(false)}
                className="p-1 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 space-y-1">
                <span className="text-neutral-400 font-mono uppercase text-[10px]">
                  {t.report.viewport}
                </span>
                <p className="font-bold text-sm text-neutral-100 font-mono">
                  {displayInfo.viewportWidth} × {displayInfo.viewportHeight}
                </p>
                <span className="text-[10px] text-neutral-400">
                  CSS rendering canvas
                </span>
              </div>

              <div className="p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 space-y-1">
                <span className="text-neutral-400 font-mono uppercase text-[10px]">
                  {t.report.dprScaling}
                </span>
                <p className="font-bold text-sm text-neutral-100 font-mono">
                  {displayInfo.devicePixelRatio}
                </p>
                <span className="text-[10px] text-neutral-400">
                  {displayInfo.pixelRatioCategory}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 space-y-1">
                <span className="text-neutral-400 font-mono uppercase text-[10px]">
                  {t.report.orientation}
                </span>
                <p className="font-bold text-sm text-neutral-100 capitalize">
                  {displayInfo.orientation.replace("-", " ")}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/60 space-y-1">
                <span className="text-neutral-400 font-mono uppercase text-[10px]">
                  {t.report.colorDepth}
                </span>
                <p className="font-bold text-sm text-neutral-100 font-mono">
                  {displayInfo.colorDepth}-bit
                </p>
              </div>
            </div>

            <div className="text-[11px] text-neutral-400 leading-relaxed bg-neutral-800/30 p-3 rounded-xl border border-neutral-800">
              <p>
                <strong className="text-neutral-300">Note:</strong> Browser APIs report CSS viewport dimensions and pixel ratios. Due to OS DPI scaling, raw physical subpixel layouts cannot be certified with certainty by web applications.
              </p>
            </div>

            <button
              onClick={() => setShowInfo(false)}
              className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90"
            >
              {t.tester.infoClose}
            </button>
          </div>
        </div>
      )}

      {/* Test Complete Modal */}
      {showComplete && (
        <div className="absolute inset-0 z-40 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-700 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 text-center animate-fade-in">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                {t.tester.completeTitle}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
                {t.tester.completeSubtitle}
              </p>
            </div>

            <div className="bg-neutral-800/60 border border-neutral-700/60 rounded-2xl p-4 text-xs text-neutral-300 text-left space-y-2">
              <div className="flex items-center gap-2 font-semibold text-white">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span>Quick Diagnostic Summary:</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-neutral-400">
                <li>{t.deadVsStuck.dead.title}: {t.deadVsStuck.dead.visibility}</li>
                <li>{t.deadVsStuck.stuck.title}: {t.deadVsStuck.stuck.visibility}</li>
              </ul>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => {
                  setShowComplete(false);
                  setShowReport(true);
                }}
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-500 text-black font-extrabold text-sm hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Award className="w-5 h-5 fill-current" />
                <span>{t.tester.generateReport}</span>
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={handleRestart}
                  className="py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t.tester.restartTest}</span>
                </button>

                <button
                  onClick={() => router.push("/")}
                  className="py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition-all flex items-center justify-center gap-2"
                >
                  <span>{t.tester.backHome}</span>
                </button>
              </div>
            </div>

            <p className="text-[10px] text-neutral-500">
              PixelCheck365 is a visual inspection aid. Web software cannot replace laboratory warranty certification.
            </p>
          </div>
        </div>
      )}

      {/* Display Health & Score Report Modal */}
      <DisplayReportModal
        isOpen={showReport}
        onClose={() => setShowReport(false)}
        onRetest={handleRestart}
        displayInfo={displayInfo}
        testMode={currentMode}
        totalColorsTested={colors.length}
      />
    </div>
  );
};
