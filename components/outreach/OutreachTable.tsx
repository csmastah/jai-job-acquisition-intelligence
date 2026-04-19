/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { OutreachCampaign, Recipient } from "@/src/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Mail, Share2, Link as LinkIcon, Users, Send, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface OutreachProps {
  campaigns: OutreachCampaign[];
  recipients: Recipient[];
}

export default function OutreachTable({ campaigns, recipients }: OutreachProps) {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Active_Campaigns</h2>
          <Button className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-none h-9 px-6">
            Initialize_New_Flow
          </Button>
        </div>
        
        <div className="border border-[#242424]">
          <Table>
            <TableHeader className="bg-[#121212]">
              <TableRow className="border-b border-[#242424]">
                <TableHead className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Campaign_Name</TableHead>
                <TableHead className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Channels</TableHead>
                <TableHead className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Volume</TableHead>
                <TableHead className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Conversion</TableHead>
                <TableHead className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-[#080808]">
              {campaigns.map((c) => (
                <TableRow key={c.id} className="border-b border-[#242424] hover:bg-muted/30 transition-colors cursor-pointer">
                  <TableCell className="font-bold text-sm tracking-tight uppercase">{c.name}</TableCell>
                  <TableCell>
                    <div className="flex gap-2 text-muted-foreground">
                      {c.channels.includes("email") && <Mail className="w-3.5 h-3.5" />}
                      {c.channels.includes("linkedin") && <Share2 className="w-3.5 h-3.5 text-primary" />}
                      {c.channels.includes("referral") && <Users className="w-3.5 h-3.5 text-primary" />}
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-xs">{c.volume.toLocaleString()}</TableCell>
                  <TableCell className={cn("font-mono text-xs font-bold", c.conversion >= 4 ? "text-primary" : "text-amber")}>
                    {c.conversion}%
                  </TableCell>
                  <TableCell>
                    <Badge className={cn(
                      "rounded-none text-[9px] font-bold uppercase tracking-widest border-border",
                      c.status === "live" ? "bg-primary/10 text-primary border-primary/20" : 
                      c.status === "cooldown" ? "bg-amber/10 text-amber border-amber/20" : 
                      "bg-muted/10 text-muted-foreground border-border/20"
                    )}>
                      {c.status === "live" ? "Live_Transmission" : c.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold uppercase tracking-tighter text-white">Recipient_Density</h2>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
              <Input 
                className="bg-[#121212] border-[#242424] text-[10px] font-mono py-0 h-9 w-40 pl-8 rounded-none focus-visible:ring-primary uppercase" 
                placeholder="SEARCH_ID..." 
              />
            </div>
            <Button variant="outline" className="rounded-none h-9 border-[#242424] text-[10px] font-bold uppercase tracking-widest px-4 hover:bg-muted">
              Filter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1">
          {recipients.map((r) => (
            <div key={r.id} className="bg-[#121212] p-4 flex items-center justify-between border border-transparent hover:border-primary/30 hover:bg-[#1a1a1a] transition-all group cursor-pointer">
              <div className="flex items-center gap-6">
                <div className="w-1 h-8 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-white">{r.name}</span>
                  <span className="text-[10px] text-muted-foreground font-mono">ID: {r.id} // {r.field}</span>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="hidden md:flex flex-col items-end">
                  <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Last_Touch</span>
                  <span className="text-[10px] text-white font-mono">{r.lastTouch}</span>
                </div>
                <div className="flex items-center gap-2 min-w-[120px]">
                  <div className={cn(
                    "w-2 h-2",
                    r.status === "engaged" ? "bg-primary" : 
                    r.status === "replied" ? "bg-primary animate-pulse" : 
                    r.status === "pending" ? "bg-amber" : "bg-muted-foreground"
                  )} />
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest",
                    r.status === "engaged" || r.status === "replied" ? "text-primary" : 
                    r.status === "pending" ? "text-amber" : "text-muted-foreground"
                  )}>
                    {r.status === "engaged" ? "Engaged" : 
                     r.status === "pending" ? "Response_Pending" : 
                     r.status === "replied" ? "Reply_Received" : "No_Engagement"}
                  </span>
                </div>
                <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors hover:scale-110" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
