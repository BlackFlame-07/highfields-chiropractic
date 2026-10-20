import React, { useState } from 'react';
import { ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div className="bg-[#121F42] text-white rounded-xl p-6 sm:p-10 border border-white/10 shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Before & After: Postural Symmetry Restoration
          </h3>
          <p className="text-white/75 text-sm mt-2 max-w-xl">
            Drag the slider to compare forward head displacement and pelvic torsion before chiropractic intervention versus post 6-week diversified and drop-table care.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#E6286B] bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <ArrowLeftRight className="w-4 h-4" />
          <span>Interactive Slider: Drag left or right</span>
        </div>
      </div>

      {/* Interactive Visual Comparison Window */}
      <div
        className="relative w-full h-[390px] sm:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/15 touch-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER (Base image underneath) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1128] to-[#204CB8] flex items-center justify-center p-4 sm:p-8">
          <div className="relative z-10 max-w-md text-center w-full">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E6286B] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-sm">
              After: Restored Spinal Symmetry
            </span>
            <div className="space-y-2 sm:space-y-3 text-left bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-[#E6286B]/30">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6286B] mt-1.5 flex-shrink-0" />
                <span><strong>Cervical Angle:</strong> Neutral 0° vertical alignment</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6286B] mt-1.5 flex-shrink-0" />
                <span><strong>Pelvic Tilt:</strong> Derefield test balanced, equal leg length</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6286B] mt-1.5 flex-shrink-0" />
                <span><strong>Thoracic Kyphosis:</strong> Decompressed ribcage, easy deep breathing</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6286B] mt-1.5 flex-shrink-0" />
                <span><strong>Pain & Nerve Rating:</strong> 0/10 asymptomatic resting score</span>
              </div>
            </div>
          </div>
        </div>

        {/* BEFORE (Overlay clipped by slider position) */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[#2a1715] to-[#3d1e1c] flex items-center justify-center p-4 sm:p-8"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="relative z-10 max-w-md text-center w-full">
            <span className="inline-block px-3 py-1 rounded-full bg-rose-500 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              Before: Postural Subluxation & Forward Head Tilt
            </span>
            <div className="space-y-2 sm:space-y-3 text-left bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-rose-500/30">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-white">
                <span className="w-2 h-2 rounded-full bg-rose-400 mt-1 flex-shrink-0" />
                <span><strong>Cervical Angle:</strong> +32° forward head posture (18kg strain)</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-white">
                <span className="w-2 h-2 rounded-full bg-rose-400 mt-1 flex-shrink-0" />
                <span><strong>Pelvic Tilt:</strong> Right SI joint locked, 12mm short leg</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-white">
                <span className="w-2 h-2 rounded-full bg-rose-400 mt-1 flex-shrink-0" />
                <span><strong>Thoracic Kyphosis:</strong> Rounded hunch, chronic trap spasm</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-white">
                <span className="w-2 h-2 rounded-full bg-rose-400 mt-1 flex-shrink-0" />
                <span><strong>Pain & Nerve Rating:</strong> 8/10 cervicogenic headache & lumbar ache</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#E6286B] shadow-2xl pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-[#E6286B] text-white flex items-center justify-center shadow-xl shadow-[#E6286B]/40 border-2 border-white pointer-events-auto touch-pan-x cursor-grab active:cursor-grabbing">
            <ArrowLeftRight className="w-5 h-5 sm:w-4 sm:h-4 font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};
