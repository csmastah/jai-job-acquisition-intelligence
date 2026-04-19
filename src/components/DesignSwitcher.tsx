/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { useDesignSystem, DesignPreset } from "./DesignSystemProvider";
import { ChevronUp, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const presets: DesignPreset[] = [
  "Bento Grid",
  "Professional Polish",
  "High Density",
  "Elegant Dark",
  "Sleek Interface"
];

export default function DesignSwitcher() {
  const { preset, setPreset } = useDesignSystem();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 w-12 h-12 bg-indigo-600/20 border border-indigo-500/30 backdrop-blur-md rounded-full flex items-center justify-center z-[70] hover:bg-indigo-600/40 transition-all text-white shadow-lg"
      >
        <div className="w-5 h-5 flex flex-wrap gap-0.5">
          <div className="w-2 h-2 bg-indigo-400" />
          <div className="w-2 h-2 bg-indigo-400 opacity-60" />
          <div className="w-2 h-2 bg-indigo-400 opacity-60" />
          <div className="w-2 h-2 bg-indigo-400" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed top-0 right-0 h-screen w-80 bg-neutral-950/80 backdrop-blur-xl border-l border-[#242424] z-[80] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Design Explorer</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-12">
              <button className="p-3 bg-[#1a1a1a] border border-[#333] hover:border-indigo-500 transition-colors">
                <ChevronUp className="w-5 h-5 text-indigo-400" />
              </button>

              <div className="flex flex-col gap-8 w-full">
                {presets.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPreset(p)}
                    className={cn(
                      "flex items-center gap-4 group transition-all text-left",
                      preset === p ? "translate-x-2" : "hover:translate-x-1"
                    )}
                  >
                    <div className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      preset === p ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-neutral-800 group-hover:bg-neutral-600"
                    )} />
                    <span className={cn(
                      "text-sm font-bold tracking-tight uppercase transition-all",
                      preset === p ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"
                    )}>
                      {p}
                    </span>
                    {preset === p && <Check className="w-3 h-3 text-indigo-400 ml-auto" />}
                  </button>
                ))}
              </div>

              <button className="p-3 bg-[#1a1a1a] border border-[#333] hover:border-indigo-500 transition-colors">
                <ChevronDown className="w-5 h-5 text-indigo-400" />
              </button>
            </div>

            <div className="mt-auto space-y-4">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full h-12 bg-indigo-600 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-indigo-500 transition-all rounded-none"
              >
                Select This Design
              </button>
              <button className="w-full text-center text-[10px] font-bold text-neutral-500 uppercase tracking-widest hover:text-neutral-300">
                Skip Preview
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
