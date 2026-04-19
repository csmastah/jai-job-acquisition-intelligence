/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Role } from "@/src/lib/types";
import {
  Sheet as ShadcnSheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Bookmark, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoleDetailPanelProps {
  role: Role | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RoleDetailPanel({ role, isOpen, onClose }: RoleDetailPanelProps) {
  if (!role) return null;

  return (
    <ShadcnSheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full sm:max-w-[480px] bg-[#0e0e0e] border-l border-[#242424] p-0 flex flex-col">
        <SheetHeader className="p-8 border-b border-[#242424]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-amber" />
            <div className="w-2 h-2 bg-primary animate-pulse" />
          </div>
          <SheetTitle className="text-xl font-bold tracking-tight text-white uppercase leading-tight">
            {role.role} // <span className="text-primary">{role.company}</span>
          </SheetTitle>
        </SheetHeader>

        <Tabs defaultValue="brief" className="flex-1 flex flex-col">
          <TabsList className="w-full justify-start rounded-none bg-transparent border-b border-[#242424] px-8 h-14">
            <TabsTrigger 
              value="brief" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent uppercase font-mono text-[10px] tracking-widest h-full px-4"
            >
              Brief
            </TabsTrigger>
            <TabsTrigger 
              value="outreach" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent uppercase font-mono text-[10px] tracking-widest h-full px-4"
            >
              Outreach
            </TabsTrigger>
            <TabsTrigger 
              value="compensation" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent uppercase font-mono text-[10px] tracking-widest h-full px-4"
            >
              Compensation
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            <TabsContent value="brief" className="m-0 space-y-10">
              <section className="grid grid-cols-2 gap-4">
                <div className="bg-[#121212] p-6 flex flex-col justify-between h-36 border border-[#242424]">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">GTM_ALIGNMENT</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-5xl font-black text-primary">{role.gtmScore}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">/ 10</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-[#121212] p-4 flex-1 border border-[#242424]">
                    <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Recommendation</p>
                    <Badge className="bg-[#00c853]/10 text-[#00c853] border-[#00c853]/20 rounded-none text-[9px] font-bold uppercase tracking-widest">
                      {role.recommendation}
                    </Badge>
                  </div>
                  <div className="bg-[#121212] p-4 flex-1 border border-[#242424]">
                    <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Leverage</p>
                    <Badge className="bg-amber/10 text-amber border-amber/20 rounded-none text-[9px] font-bold uppercase tracking-widest">
                      HIGH LEVERAGE
                    </Badge>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Problem Hypothesis</h4>
                <div className="bg-[#121212]/50 p-4 border-l-2 border-primary border border-border/10">
                  <p className="text-sm leading-relaxed font-medium">{role.hypothesis}</p>
                </div>
              </section>

              <section className="space-y-3">
                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Positioning Angle</h4>
                <div className="bg-[#121212]/50 p-4 border border-border/10 italic">
                  <p className="text-sm leading-relaxed">"{role.positioning}"</p>
                </div>
              </section>

              <section className="space-y-3">
                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Differentiation Strategy</h4>
                <div className="bg-[#121212]/50 p-4 border border-border/10">
                  <p className="text-sm leading-relaxed">{role.differentiation}</p>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="outreach" className="m-0 space-y-10">
              <section className="space-y-4">
                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Who to Reach</h4>
                <div className="space-y-2">
                  {role.contacts.map((contact) => (
                    <div key={contact.name} className="bg-[#121212] p-4 border border-[#242424] flex items-center justify-between group cursor-pointer hover:bg-muted/50 transition-colors">
                      <div>
                        <div className="font-bold text-sm uppercase">{contact.name}</div>
                        <div className="font-mono text-[10px] text-primary">{contact.title}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Outreach Hooks</h4>
                {role.hooks.map((hook, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[9px] text-muted-foreground uppercase">Hook_{String(i+1).padStart(2, '0')}</span>
                      <Button variant="ghost" className="h-auto p-0 text-[9px] font-bold text-primary gap-1.5 uppercase tracking-widest hover:bg-transparent">
                        <Copy className="w-3 h-3" /> Copy
                      </Button>
                    </div>
                    <div className="bg-[#121212] p-5 border-l-2 border-primary/50 text-sm leading-relaxed">
                      {hook}
                    </div>
                  </div>
                ))}
              </section>
            </TabsContent>

            <TabsContent value="compensation" className="m-0 space-y-10">
              <section className="space-y-6">
                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Market Intelligence</h4>
                <div className="space-y-4">
                  <div className="bg-[#121212] p-6 border border-[#242424] flex justify-between items-center">
                    <div>
                      <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Global Market Range</p>
                      <p className="font-mono text-2xl font-bold text-white">${role.compensation.globalRange[0].toLocaleString()} - ${role.compensation.globalRange[1].toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="bg-[#121212] p-6 border border-[#242424] flex justify-between items-center">
                    <div>
                      <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-1">PH Remote Adjusted</p>
                      <p className="font-mono text-2xl font-bold text-white">₱{role.compensation.phAdjustedRange[0].toLocaleString()} - ₱{role.compensation.phAdjustedRange[1].toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Internal Projection</h4>
                  <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 rounded-none text-[9px] font-bold uppercase tracking-widest animation-pulse">
                    WITHIN RANGE
                  </Badge>
                </div>
                <div className="bg-[#121212] p-8 border-l-4 border-primary border border-border/10">
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-2">Estimated Range</p>
                  <p className="font-mono text-4xl font-black text-white mb-8">
                    ₱{role.compensation.estimatedRange[0].toLocaleString()} - ₱{role.compensation.estimatedRange[1].toLocaleString()}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-[9px] font-mono text-muted-foreground">
                      <span>MIN: ₱{(role.compensation.estimatedRange[0]-10000).toLocaleString()}</span>
                      <span>TARGET: ₱{(role.compensation.estimatedRange[0]+20000).toLocaleString()}</span>
                      <span>MAX: ₱{(role.compensation.estimatedRange[1]+10000).toLocaleString()}</span>
                    </div>
                    <div className="h-3 bg-[#080808] relative">
                      <div className="absolute top-0 left-[20%] right-[10%] h-full bg-primary/40 shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
                      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white shadow-sm" />
                    </div>
                    <p className="text-[10px] italic text-muted-foreground">Historical data alignment: <span className="text-primary font-bold">98.2%</span></p>
                  </div>
                </div>
              </section>
            </TabsContent>
          </div>

          <div className="p-8 border-t border-[#242424] bg-[#0e0e0e] flex gap-4">
            <Button className="flex-1 h-14 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-xs rounded-none gap-3">
              Initialize Outreach <Zap className="w-4 h-4 fill-white" />
            </Button>
            <Button variant="outline" className="w-14 h-14 rounded-none border-[#242424] hover:bg-muted p-0">
              <Bookmark className="w-5 h-5" />
            </Button>
          </div>
        </Tabs>
      </SheetContent>
    </ShadcnSheet>
  );
}
