/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  BarChart2, 
  Send, 
  LayoutList, 
  Settings, 
  Circle,
  Hash
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: LayoutList, label: "Pipeline", path: "/pipeline" },
  { icon: Send, label: "Outreach", path: "/outreach" },
  { icon: BarChart2, label: "Analytics", path: "/analytics" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-[220px] h-screen bg-background border-r border-[#242424] flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-1">
          <Hash className="w-5 h-5 text-primary" />
          <h1 className="font-mono text-xl font-black tracking-tighter text-white">JAI</h1>
        </div>
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest leading-none">
          Job Acquisition Intelligence
        </p>
      </div>

      <nav className="flex-1 mt-6">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors hover:bg-muted group/item",
                isActive ? "text-primary border-l-2 border-primary bg-muted/50" : "text-muted-foreground hover:text-white"
              )}
            >
              <item.icon className={cn("w-4 h-4", isActive ? "text-primary" : "group-hover/item:text-white")} />
              <span className="uppercase tracking-widest text-[11px] font-bold">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-[#242424] space-y-4">
        <div className="space-y-1">
          <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">System Status</p>
          <div className="flex items-center gap-2">
            <Circle className="w-1.5 h-1.5 fill-emerald-500 text-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-500">TG_ACTIVE // OP_CONNECTED</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Last Run</p>
          <p className="text-[10px] font-mono text-white opacity-80">08.24.2024 // 14:30</p>
        </div>

        <div className="space-y-1">
          <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Next Run</p>
          <p className="text-[10px] font-mono text-primary animate-pulse">EST: 22.5M</p>
        </div>
      </div>
    </aside>
  );
}
