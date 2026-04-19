/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Shield, Info } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ProfileEditor() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex items-center gap-2 mb-6 uppercase text-muted-foreground font-bold text-[10px] tracking-[0.2em]">
          <User className="w-3.5 h-3.5 text-primary" />
          Profile_Editor
        </div>

        <div className="space-y-8">
          <div className="relative group w-32 h-32">
            <Avatar className="w-full h-full rounded-none border border-[#242424] grayscale group-hover:grayscale-0 transition-all duration-500">
              <AvatarImage src="https://picsum.photos/seed/operator/200/200" />
              <AvatarFallback className="rounded-none">OP</AvatarFallback>
            </Avatar>
            <Button className="absolute bottom-2 left-2 h-7 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-3 rounded-none">
              Change
            </Button>
          </div>

          <div className="space-y-4 max-w-sm">
            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Operator_ID</Label>
              <Input 
                defaultValue="OPERATOR_01" 
                className="bg-[#121212] border-[#242424] rounded-none focus-visible:ring-primary h-11 font-mono text-sm uppercase"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Designation</Label>
              <Input 
                defaultValue="GTM STRATEGY" 
                className="bg-[#121212] border-[#242424] rounded-none focus-visible:ring-primary h-11 font-mono text-sm uppercase"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#121212] p-6 border border-[#242424]">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h4 className="text-sm font-bold uppercase tracking-tight">System_Active_Mode</h4>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Global AI presence status enabled</p>
          </div>
          <div className="w-12 h-6 bg-primary p-1 flex justify-end">
            <div className="w-4 h-full bg-white" />
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4 uppercase text-muted-foreground font-bold text-[10px] tracking-[0.2em]">
          <Shield className="w-3.5 h-3.5 text-primary" />
          Security_Protocol
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-[#121212] border border-[#242424]">
            <span className="text-xs uppercase font-medium">2FA_Encryption</span>
            <div className="w-10 h-5 bg-[#242424] p-1">
              <div className="w-3 h-full bg-[#333]" />
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#121212] border border-[#242424]">
            <span className="text-xs uppercase font-medium">IP_Whitelist</span>
            <div className="w-10 h-5 bg-primary p-1">
              <div className="w-3 h-full bg-white ml-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
