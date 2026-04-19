/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MetricCard {
  label: string;
  value: string | number;
  change?: number;
  unit?: string;
  status?: "optimal" | "warning" | "error" | "neutral";
}

export interface FunnelData {
  stage: string;
  count: number;
}

export interface TopRole {
  title: string;
  company: string;
  priority: "alpha" | "beta" | "critical";
  id: string;
}

export interface ActivityLog {
  timestamp: string;
  signalStrength: "high" | "low" | "medium";
  description: string;
  id: string;
}

export interface Role {
  id: string;
  company: string;
  role: string;
  status: "applied" | "interview" | "follow-up" | "offer" | "rejected";
  lastAction: string;
  updatedAt: string;
  gtmScore: number;
  recommendation: string;
  hypothesis: string;
  positioning: string;
  differentiation: string;
  contacts: Contact[];
  hooks: string[];
  compensation: Compensation;
}

export interface Contact {
  name: string;
  title: string;
  linkedin: string;
}

export interface Compensation {
  globalRange: [number, number];
  phAdjustedRange: [number, number];
  estimatedRange: [number, number];
  fit: "within range" | "above range" | "below range";
}

export interface OutreachCampaign {
  id: string;
  name: string;
  channels: ("email" | "linkedin" | "referral")[];
  volume: number;
  conversion: number;
  status: "live" | "cooldown" | "stable";
}

export interface Recipient {
  id: string;
  name: string;
  field: string;
  status: "engaged" | "pending" | "none" | "replied";
  lastTouch: string;
}

export interface ModelPerformance {
  modelId: string;
  throughput: number;
  accuracy: number;
  cpuLoad: number;
  errorRate: number;
  status: "active" | "throttled" | "standby";
}
