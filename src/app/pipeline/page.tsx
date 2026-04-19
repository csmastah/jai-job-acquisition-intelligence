/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { getRoles } from "@/src/lib/mockData";
import { Role } from "@/src/lib/types";
import RoleTable from "@/components/pipeline/RoleTable";
import RoleDetailPanel from "@/components/pipeline/RoleDetailPanel";
import { Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PipelinePage() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await getRoles();
      setRoles(data);
    }
    load();
  }, []);

  const handleSelectRole = (role: Role) => {
    setSelectedRole(role);
    setIsPanelOpen(true);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2 leading-none">
            Pipeline
          </h2>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            Active_Instances: {roles.length} // Revenue_Target: $2.4M
          </p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-primary text-white text-xs font-bold uppercase tracking-widest h-12 px-6 rounded-none gap-2">
            <Plus className="w-4 h-4" /> New Entry
          </Button>
          <Button variant="outline" className="border-[#242424] text-white text-xs font-bold uppercase tracking-widest h-12 px-6 rounded-none hover:bg-muted gap-2">
            <Filter className="w-4 h-4" /> Filter
          </Button>
        </div>
      </header>

      <RoleTable roles={roles} onSelectRole={handleSelectRole} />

      <RoleDetailPanel 
        role={selectedRole} 
        isOpen={isPanelOpen} 
        onClose={() => setIsPanelOpen(false)} 
      />
    </div>
  );
}
