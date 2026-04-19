/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Info, Zap, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModelSelector() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex items-center gap-2 mb-6 uppercase text-muted-foreground font-bold text-[10px] tracking-[0.2em]">
          <Zap className="w-3.5 h-3.5 text-primary" />
          Intelligence_Configuration
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
              Model_Selector <Info className="w-3 h-3" />
            </Label>
            <Select defaultValue="claude">
              <SelectTrigger className="bg-[#121212] border-[#242424] rounded-none h-12 font-mono text-xs uppercase focus:ring-primary">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent className="bg-[#080808] border-[#242424] rounded-none text-white">
                <SelectItem value="claude" className="font-mono text-xs uppercase focus:bg-primary focus:text-white">anthropic/claude-3.5-sonnet</SelectItem>
                <SelectItem value="gpt4o" className="font-mono text-xs uppercase focus:bg-primary focus:text-white">openai/gpt-4o</SelectItem>
                <SelectItem value="llama3" className="font-mono text-xs uppercase focus:bg-primary focus:text-white">meta/llama-3.1-405b</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Optimization_Tier</Label>
            <div className="flex gap-1 h-12 bg-[#242424]/20">
              <Button variant="ghost" className="flex-1 rounded-none text-[10px] font-bold uppercase tracking-widest hover:bg-[#121212] transition-colors">Latency</Button>
              <Button className="flex-1 rounded-none bg-primary text-white text-[10px] font-bold uppercase tracking-widest">Reasoning</Button>
              <Button variant="ghost" className="flex-1 rounded-none text-[10px] font-bold uppercase tracking-widest hover:bg-[#121212] transition-colors">Economy</Button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center mb-1">
            <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Evaluation_Prompt</Label>
            <span className="font-mono text-[9px] text-muted-foreground uppercase">Tokens: 428 / 8000</span>
          </div>
          <Textarea 
            className="bg-[#121212] border-[#242424] rounded-none p-6 font-mono text-sm leading-relaxed min-h-[300px] focus:ring-primary"
            defaultValue={`You are JAI Strategic Vanguard. Your role is to provide surgical analysis of GTM pipelines. 

Discard generalities. Prioritize high-velocity signals. 
1. Map prospect heat to industrial benchmarks.
2. Flag structural anomalies in outreaches.
3. Quantify intelligence gaps in the 'Pipeline' stack.

Output must be authoritative, dense, and formatted for rapid terminal reading.`}
          />
        </div>
      </section>

      <div className="flex justify-end gap-3">
        <Button variant="outline" className="rounded-none border-[#242424] hover:bg-muted text-[10px] font-bold uppercase tracking-widest h-12 px-8">
          Discard
        </Button>
        <Button className="rounded-none bg-primary text-white hover:bg-primary/90 text-[10px] font-bold uppercase tracking-widest h-12 px-8 gap-3 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          Update_Core_Parameters <Zap className="w-4 h-4 fill-white" />
        </Button>
      </div>

      <section className="bg-[#121212] p-6 border border-[#242424] space-y-4">
        <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase block border-b border-[#242424] pb-4">Data_Persistence</span>
        <div className="space-y-4">
          <div className="flex gap-1 h-1">
            <div className="flex-[68] bg-primary h-full" />
            <div className="flex-[32] bg-[#242424] h-full" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest">68% Storage_Utilization</span>
            <Button variant="ghost" className="h-auto p-0 text-[10px] text-destructive font-black uppercase tracking-widest hover:bg-transparent flex gap-2">
              <Trash2 className="w-3.5 h-3.5" /> Purge_Cached_Intelligence
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
