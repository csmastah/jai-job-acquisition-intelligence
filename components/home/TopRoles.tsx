/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopRole } from "@/src/lib/types";
import { TrendingUp, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopRolesProps {
  roles: TopRole[];
}

export default function TopRoles({ roles }: TopRolesProps) {
  return (
    <div className="bg-[#121212] p-6 border-l-4 border-primary border-y border-r border-[#242424] h-full flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-bold uppercase tracking-widest">Top_Roles</h2>
        <TrendingUp className="w-4 h-4 text-primary" />
      </div>

      <div className="space-y-2 flex-1">
        {roles.map((role) => (
          <div 
            key={role.id} 
            className="bg-[#080808] p-4 border border-[#242424] hover:bg-[#1a1a1a] transition-all cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[9px] text-primary font-bold">{role.id}</span>
              <div className={cn(
                "w-1.5 h-1.5",
                role.priority === "alpha" ? "bg-primary" : 
                role.priority === "beta" ? "bg-muted-foreground" : 
                "bg-amber"
              )} />
            </div>
            <div className="font-bold text-xs uppercase text-white mb-1 tracking-tight group-hover:text-primary transition-colors">
              {role.title}
            </div>
            <div className="font-mono text-[9px] text-muted-foreground uppercase">
              {role.company} // {role.priority.toUpperCase()}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 bg-[#080808] hover:bg-[#1a1a1a] text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors border border-[#242424]">
        View_All_Open_Reqs
      </button>

      <button className="absolute bottom-6 right-6 w-14 h-14 bg-primary text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-2xl z-10">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
