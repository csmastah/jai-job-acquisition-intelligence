/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActivityLog } from "@/src/lib/types";
import { Rss } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityFeedProps {
  logs: ActivityLog[];
}

export default function ActivityFeed({ logs }: ActivityFeedProps) {
  return (
    <div className="bg-[#080808] border border-[#242424] overflow-hidden">
      <div className="p-3 bg-[#121212] flex justify-between items-center border-b border-[#242424]">
        <div className="flex items-center gap-2">
          <Rss className="w-3.5 h-3.5 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-white">Real_Time_Signal_Feed</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[9px] text-muted-foreground uppercase">Filters: All_Channels</span>
          <span className="font-mono text-[9px] text-primary font-bold uppercase">Sync: Ready</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#242424]">
        {logs.map((log) => (
          <div key={log.id} className="p-4 hover:bg-[#121212] transition-colors group">
            <div className="flex justify-between mb-1">
              <span className="font-mono text-[10px] text-primary font-bold">{log.timestamp}</span>
              <span className="font-mono text-[9px] text-muted-foreground uppercase">{log.signalStrength}</span>
            </div>
            <div className="text-[11px] text-muted-foreground group-hover:text-white transition-colors leading-relaxed uppercase font-medium">
              {log.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
