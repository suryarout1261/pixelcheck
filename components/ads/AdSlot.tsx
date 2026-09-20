import React from "react";

interface AdSlotProps {
  slotId?: string;
  format?: "horizontal" | "rectangle" | "auto";
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  format = "auto",
  className = "",
}) => {
  // In production with ads active, this renders Google AdSense / Carbon / Ethical Ads tags.
  // When inactive, it renders nothing or a subtle clean spacer with zero visual clutter.
  if (!slotId) {
    return null;
  }

  return (
    <div
      className={`ad-container my-8 flex justify-center items-center overflow-hidden rounded-lg bg-muted/20 border border-border/40 p-2 text-xs text-muted-foreground/60 ${className}`}
      data-ad-slot={slotId}
      data-ad-format={format}
      aria-hidden="true"
    >
      <div className="text-center py-2">
        <span className="text-[10px] tracking-wider uppercase font-mono">Sponsored</span>
      </div>
    </div>
  );
};
