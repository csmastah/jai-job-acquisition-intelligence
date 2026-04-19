/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MetricCard as IMetricCard } from "@/src/lib/types";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardsProps {
  metrics: IMetricCard[];
}

export default function MetricCards({ metrics }: MetricCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 bg-[#242424]">
      {metrics.map((metric) => (
        <Card key={metric.label} className="bg-[#121212] border-none p-6 flex flex-col justify-between h-40 rounded-none group hover:bg-[#1a1a1a] transition-colors">
          <span className="text-muted-foreground font-bold text-[10px] uppercase tracking-widest leading-none">
            {metric.label}
          </span>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-5xl font-black text-white group-hover:text-primary transition-colors">
                {metric.value}
              </span>
              {metric.unit && <span className="font-mono text-primary text-xl font-bold">{metric.unit}</span>}
            </div>
            {metric.change !== undefined && (
              <span className={cn("text-[10px] font-mono", metric.change > 0 ? "text-primary" : "text-destructive")}>
                {metric.change > 0 ? "+" : ""}{metric.change}%
              </span>
            )}
          </div>
          <div className="w-full bg-[#080808] h-1">
            <div 
              className={cn(
                "h-full transition-all duration-1000",
                metric.status === "optimal" ? "bg-primary" : 
                metric.status === "warning" ? "bg-amber" : 
                "bg-muted-foreground"
              )} 
              style={{ width: metric.status === "optimal" ? "68%" : metric.status === "warning" ? "12%" : "40%" }}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
