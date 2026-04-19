/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ProfileEditor from "@/components/settings/ProfileEditor";
import ModelSelector from "@/components/settings/ModelSelector";

export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-6 bg-primary" />
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Configuration_Center</h2>
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
          Settings
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-[#242424]">
        <div className="lg:col-span-5 bg-[#0e0e0e]">
          <div className="p-8 h-full bg-[#121212]/30">
            <ProfileEditor />
          </div>
        </div>
        <div className="lg:col-span-7 bg-[#0e0e0e]">
          <div className="p-8 h-full bg-[#121212]/30 border-l border-[#242424]">
            <ModelSelector />
          </div>
        </div>
      </div>
    </div>
  );
}
