/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Role } from "@/src/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoleTableProps {
  roles: Role[];
  onSelectRole: (role: Role) => void;
}

export default function RoleTable({ roles, onSelectRole }: RoleTableProps) {
  return (
    <div className="border border-border">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow className="border-b border-border">
            <TableHead className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground w-[300px]">Company // ID</TableHead>
            <TableHead className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Strategic Role</TableHead>
            <TableHead className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Status</TableHead>
            <TableHead className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground text-right">Last Action // Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map((role) => (
            <TableRow 
              key={role.id} 
              className="border-b border-border hover:bg-muted/30 cursor-pointer group transition-colors"
              onClick={() => onSelectRole(role)}
            >
              <TableCell className="py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                    <span className="text-[10px] font-mono text-muted-foreground">{role.company.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm tracking-tight group-hover:text-primary transition-colors uppercase">{role.company}</div>
                    <div className="font-mono text-[9px] text-muted-foreground">INSTANCE_ID: {role.id}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-xs font-medium">{role.role}</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Circle className={cn(
                    "w-1.5 h-1.5 fill-current",
                    role.status === "interview" ? "text-primary" : 
                    role.status === "follow-up" ? "text-amber" : 
                    "text-muted-foreground"
                  )} />
                  <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-widest small-caps rounded-none border-border bg-muted/20 px-1.5 py-0">
                    {role.status}
                  </Badge>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="font-mono text-[11px] font-bold text-foreground">{role.updatedAt}</div>
                <div className="text-[9px] text-muted-foreground uppercase">{role.lastAction}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
