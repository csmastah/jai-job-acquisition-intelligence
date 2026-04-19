/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { getMetricCards, getFunnelData, getTopRoles, getActivityLogs } from "@/src/lib/database";
import { MetricCard, FunnelData, TopRole, ActivityLog } from "@/src/lib/types";
import MetricCards from "@/components/home/MetricCards";
import PipelineFunnel from "@/components/home/PipelineFunnel";
import TopRoles from "@/components/home/TopRoles";
import ActivityFeed from "@/components/home/ActivityFeed";

export default function Home() {
  const [metrics, setMetrics] = useState<MetricCard[]>([]);
  const [funnel, setFunnel] = useState<FunnelData[]>([]);
  const [roles, setRoles] = useState<TopRole[]>([]);
  const [logs, setLogs] = useState<ActivityLog[]>([]);

  useEffect(() => {
    async function load() {
      const [m, f, r, l] = await Promise.all([
        getMetricCards(),
        getFunnelData(),
        getTopRoles(),
        getActivityLogs(),
      ]);
      setMetrics(m);
      setFunnel(f);
      setRoles(r);
      setLogs(l);
    }
    load();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-6 bg-primary" />
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Strategic_Intelligence_Sync</h2>
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
          Morning <span className="text-primary italic">Brief</span>
        </h1>
      </header>

      <section>
        <MetricCards metrics={metrics} />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-[#242424]">
        <div className="lg:col-span-8">
          <PipelineFunnel data={funnel} />
        </div>
        <div className="lg:col-span-4">
          <TopRoles roles={roles} />
        </div>
      </div>

      <section>
        <ActivityFeed logs={logs} />
      </section>
    </div>
  );
}
