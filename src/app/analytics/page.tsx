/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { getModelPerformance } from "@/src/lib/database";
import { ModelPerformance } from "@/src/lib/types";
import Charts from "@/components/analytics/Charts";

export default function AnalyticsPage() {
  const [performance, setPerformance] = useState<ModelPerformance[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getModelPerformance();
      setPerformance(data);
    }
    load();
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <Charts performance={performance} />
    </div>
  );
}
