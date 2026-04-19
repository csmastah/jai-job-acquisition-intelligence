/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { getCampaigns, getRecipients } from "@/src/lib/mockData";
import { OutreachCampaign, Recipient } from "@/src/lib/types";
import OutreachTable from "@/components/outreach/OutreachTable";

export default function OutreachPage() {
  const [campaigns, setCampaigns] = useState<OutreachCampaign[]>([]);
  const [recipients, setRecipients] = useState<Recipient[]>([]);

  useEffect(() => {
    async function load() {
      const [c, r] = await Promise.all([getCampaigns(), getRecipients()]);
      setCampaigns(c || []);
      setRecipients(r || []);
    }
    load();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="mb-12">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2 leading-none">
          Outreach
        </h2>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          Active_Campaigns: {campaigns.length} // Intelligence_Latency: 14ms
        </p>
      </header>

      <OutreachTable campaigns={campaigns} recipients={recipients} />
    </div>
  );
}
