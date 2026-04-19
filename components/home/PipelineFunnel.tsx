/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FunnelData } from "@/src/lib/types";
import { cn } from "@/lib/utils";

interface PipelineFunnelProps {
  data: FunnelData[];
}

export default function PipelineFunnel({ data }: PipelineFunnelProps) {
  const maxCount = Math.max(...data.map(d => d.count));

  return (
    <div className="bg-[#121212] p-6 border border-[#242424] h-full flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <div className="w-2 h-2 bg-primary" />
          Pipeline_Funnel_Visualization
        </h2>
        <span className="font-mono text-[10px] text-muted-foreground uppercase">Timestamp: 08:42:11</span>
      </div>

      <div className="flex-1 flex flex-col gap-6 justify-center">
        {data.map((stage, i) => {
          const width = (stage.count / maxCount) * 100;
          return (
            <div key={stage.stage} className="relative">
              <div className="flex justify-between items-end mb-1 px-2">
                <span className="font-mono text-[11px] text-muted-foreground font-medium uppercase">{stage.stage}</span>
                <span className="font-mono text-xs text-white font-bold">{stage.count.toLocaleString()}</span>
              </div>
              <div className="h-10 w-full bg-[#080808] border border-[#242424]/50 flex justify-center">
                <div 
                  className={cn(
                    "h-full border-r-4 border-primary transition-all duration-1000",
                    i === 0 ? "bg-primary/20" : i === 1 ? "bg-primary/40" : "bg-primary/60"
                  )}
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-3 gap-2 border-t border-[#242424] pt-6">
        <div className="text-center">
          <div className="font-mono text-sm font-black text-white">23.6%</div>
          <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-tighter">CONV_RATE_ALPHA</div>
        </div>
        <div className="text-center">
          <div className="font-mono text-sm font-black text-white">6.3%</div>
          <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-tighter">CONV_RATE_BETA</div>
        </div>
        <div className="text-center">
          <div className="font-mono text-sm font-black text-amber animate-pulse">ALERT</div>
          <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-tighter">BTLNK_DETECTED</div>
        </div>
      </div>
    </div>
  );
}
