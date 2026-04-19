/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModelPerformance } from "@/src/lib/types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const charData = [
  { time: "00:00", value: 30 },
  { time: "04:00", value: 32 },
  { time: "08:00", value: 28 },
  { time: "12:00", value: 45 },
  { time: "16:00", value: 48 },
  { time: "20:00", value: 35 },
  { time: "23:59", value: 42 },
];

interface AnalyticsProps {
  performance: ModelPerformance[];
}

export default function Charts({ performance }: AnalyticsProps) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2 leading-none">
            Intelligence <span className="text-primary">Analytics</span>
          </h2>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Data Streams Synchronized. Last update: 0.02ms ago.</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-primary text-white text-xs font-bold uppercase tracking-widest h-12 px-6 rounded-none gap-2">
            <Download className="w-4 h-4" /> Export Report
          </Button>
          <Button variant="outline" className="border-[#242424] text-white text-xs font-bold uppercase tracking-widest h-12 px-6 rounded-none hover:bg-muted">
            Timeframe: 24h
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-1 bg-[#242424]">
        <div className="md:col-span-8 bg-[#121212] p-8 border border-[#242424]">
          <div className="flex justify-between items-start mb-10">
            <div>
              <h3 className="text-lg font-bold uppercase text-white tracking-widest mb-1">Volume Trajectory</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary" />
                <span className="font-mono text-[10px] text-muted-foreground uppercase">Application_Throughput_MS</span>
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-2xl font-bold text-white tracking-tighter">+12.4%</div>
              <div className="font-mono text-[10px] text-amber font-bold uppercase">Volatility Alert</div>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={charData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#242424" vertical={false} />
                <XAxis 
                  dataKey="time" 
                  stroke="#737373" 
                  fontSize={10} 
                  fontWeight="bold" 
                  tickLine={false} 
                  axisLine={false}
                  tick={{fontFamily: 'JetBrains Mono'}}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#080808', border: '1px solid #242424', borderRadius: '0px' }}
                  itemStyle={{ color: '#6366f1', fontFamily: 'JetBrains Mono', fontSize: '12px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#6366f1" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="md:col-span-4 grid grid-cols-1 gap-1">
          <div className="bg-[#121212] p-6 border border-[#242424] flex flex-col justify-between">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Efficiency_Index</span>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-black text-white">98.2<span className="text-sm font-mono text-primary">%</span></div>
              <div className="w-12 h-1 bg-[#080808]">
                <div className="w-[98%] h-full bg-primary" />
              </div>
            </div>
          </div>
          <div className="bg-[#121212] p-6 border border-[#242424] flex flex-col justify-between">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Inference_Latency</span>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-black text-white">42<span className="text-sm font-mono text-primary">MS</span></div>
              <div className="text-amber text-xs font-mono font-bold">-14ms</div>
            </div>
          </div>
          <div className="bg-[#121212] p-6 border border-[#242424] flex flex-col justify-between">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Model_Saturation</span>
            <div className="flex gap-1 h-8 items-end">
              {[60, 80, 100, 70, 90, 50, 85].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/40 hover:bg-primary transition-colors h-full" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#121212] border border-[#242424] overflow-hidden">
        <div className="p-4 border-b border-[#242424] flex items-center justify-between">
          <h3 className="text-lg font-bold uppercase text-white tracking-widest">Model Matrix // Performance</h3>
          <div className="flex gap-2">
            <Badge variant="outline" className="rounded-none border-primary/30 text-primary uppercase font-mono text-[9px] bg-primary/5 px-2">STABLE</Badge>
            <Badge variant="outline" className="rounded-none border-[#242424] text-muted-foreground uppercase font-mono text-[9px] px-2">UAT_V2</Badge>
          </div>
        </div>
        
        <Table className="font-mono text-[11px]">
          <TableHeader className="bg-[#080808]">
            <TableRow className="border-b border-[#242424]">
              <TableHead className="uppercase font-bold text-muted-foreground">Model_ID</TableHead>
              <TableHead className="uppercase font-bold text-muted-foreground">Throughput (Req/s)</TableHead>
              <TableHead className="uppercase font-bold text-muted-foreground">Accuracy (%)</TableHead>
              <TableHead className="uppercase font-bold text-muted-foreground">CPU Load (%)</TableHead>
              <TableHead className="uppercase font-bold text-muted-foreground">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {performance.map((m) => (
              <TableRow key={m.modelId} className="border-b border-[#242424] hover:bg-[#1a1a1a] transition-colors">
                <TableCell className="text-white font-bold">{m.modelId}</TableCell>
                <TableCell>{m.throughput > 0 ? m.throughput.toLocaleString() : "--"}</TableCell>
                <TableCell className="text-primary">{m.accuracy > 0 ? `${m.accuracy}%` : "--"}</TableCell>
                <TableCell className={cn(m.cpuLoad > 80 ? "text-amber font-bold" : "")}>
                  {m.cpuLoad > 0 ? `${m.cpuLoad}%` : "--"}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "w-2 h-2",
                      m.status === "active" ? "bg-primary" : 
                      m.status === "throttled" ? "bg-amber animate-pulse" : 
                      "bg-muted-foreground"
                    )} />
                    <span className="uppercase">{m.status}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
