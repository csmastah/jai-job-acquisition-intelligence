/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  MetricCard,
  FunnelData,
  TopRole,
  ActivityLog,
  Role,
  OutreachCampaign,
  Recipient,
  ModelPerformance,
} from "./types";

export const getMetricCards = async (): Promise<MetricCard[]> => [
  { label: "OPEN_RATE_GLOBAL", value: 68.4, unit: "%", status: "optimal" },
  { label: "RESPONSE_VELOCITY", value: 12.2, unit: "%", status: "warning" },
  { label: "TOTAL_REACH", value: 2840, status: "neutral" },
  { label: "CAMPAIGN_HEALTH", value: "OPTIMAL", status: "optimal" },
];

export const getFunnelData = async (): Promise<FunnelData[]> => [
  { stage: "APPLICATIONS", count: 1204 },
  { stage: "INTERVIEWS", count: 284 },
  { stage: "OFFERS", count: 18 },
];

export const getTopRoles = async (): Promise<TopRole[]> => [
  {
    id: "#SR-942",
    title: "Director of Strategic Ops",
    company: "Neuro-Static Systems",
    priority: "alpha",
  },
  {
    id: "#ENG-102",
    title: "Principal Systems Architect",
    company: "Kinetic Ventures",
    priority: "beta",
  },
  {
    id: "#PD-221",
    title: "Senior Product Intelligence",
    company: "Void Analytics",
    priority: "critical",
  },
];

export const getActivityLogs = async (): Promise<ActivityLog[]> => [
  {
    id: "1",
    timestamp: "09:42:12",
    signalStrength: "high",
    description: "Email opened by Chen_Sarah (ID: 992-841-A)",
  },
  {
    id: "2",
    timestamp: "09:38:05",
    signalStrength: "medium",
    description: "Campaign PHOENIX reached daily threshold",
  },
  {
    id: "3",
    timestamp: "09:15:44",
    signalStrength: "high",
    description: "LinkedIn Sequence initialized for Lead Cluster B",
  },
  {
    id: "4",
    timestamp: "08:55:01",
    signalStrength: "low",
    description: "System health check: All clear",
  },
];

export const getRoles = async (): Promise<Role[]> => [
  {
    id: "NSS_4002_PX",
    company: "NEURO-STATIC SYSTEMS",
    role: "Head of Tactical Growth",
    status: "interview",
    lastAction: "Panel_Round_02_Confirmed",
    updatedAt: "2023-11-20 // 14:30",
    gtmScore: 8.4,
    recommendation: "PURSUE AGGRESSIVELY",
    hypothesis:
      "Company is transitioning from R&D to commercial scale; requires tactical ops to manage surge in pilot programs.",
    positioning:
      'The "Scale Catalyst" — focusing on bridging the gap between engineering benchmarks and market readiness.',
    differentiation:
      "Deep expertise in high-velocity GTM cycles for industrial AI hardware.",
    contacts: [
      {
        name: "DR. SARAH CHEN",
        title: "HEAD OF QUANT_BIO",
        linkedin: "linkedin.com/in/sarahchen",
      },
    ],
    hooks: [
      "Sarah — noticed Neuro-Static is scaling pilot programs. My experience in commercializing industrial AI hardware could help bridge your current R&D-to-market gap.",
      "Re: Commercial scale-up. Are you seeing bottlenecks in your tactical ops as you hit Series C milestones? I specialized in solving exactly that at my last venture.",
    ],
    compensation: {
      globalRange: [180000, 240000],
      phAdjustedRange: [220000, 280000],
      estimatedRange: [210000, 250000],
      fit: "within range",
    },
  },
  {
    id: "KV_9182_AQ",
    company: "KINETIC VENTURES",
    role: "Principal Strategist",
    status: "follow-up",
    lastAction: "Overdue_Response_48H",
    updatedAt: "2023-11-18 // 09:00",
    gtmScore: 7.2,
    recommendation: "FOLLOW UP MONITORING",
    hypothesis:
      "Venture deployment is slowing down; needs tighter control on portfolio strategic alignment.",
    positioning: "The Alignment Engine.",
    differentiation: "Dual focus on capital deployment and ops.",
    contacts: [
      {
        name: "MARCUS VAUGHN",
        title: "NEURAL_OPS",
        linkedin: "linkedin.com/in/marcusv",
      },
    ],
    hooks: [
      "Marcus - interested in how Kinetic is managing the Q4 deployment freeze.",
    ],
    compensation: {
      globalRange: [150000, 200000],
      phAdjustedRange: [180000, 240000],
      estimatedRange: [190000, 220000],
      fit: "within range",
    },
  },
  {
    id: "VA_3002_LL",
    company: "VOID ANALYTICS",
    role: "VP Global Deployment",
    status: "applied",
    lastAction: "Packet_Transmitted",
    updatedAt: "2023-11-21 // 18:12",
    gtmScore: 6.5,
    recommendation: "STANDBY",
    hypothesis: "Data volume surge requires infrastructure-first ops role.",
    positioning: "The Scaling Partner.",
    differentiation: "Experience with exabyte-scale analytics.",
    contacts: [
      {
        name: "ELARA VANCE",
        title: "STRAT_CAP",
        linkedin: "linkedin.com/in/elaravance",
      },
    ],
    hooks: ["Elara - saw the post about the metadata scaling issues."],
    compensation: {
      globalRange: [200000, 300000],
      phAdjustedRange: [250000, 350000],
      estimatedRange: [260000, 320000],
      fit: "within range",
    },
  },
  {
    id: "FP_0012_KK",
    company: "FLASHPOINT INC",
    role: "Interim Director",
    status: "offer",
    lastAction: "Terms_Under_Review",
    updatedAt: "2023-11-22 // 11:45",
    gtmScore: 9.1,
    recommendation: "FINALIZE IMMEDIATELY",
    hypothesis: "Immediate leadership gap during funding transition.",
    positioning: "The Steady Hand.",
    differentiation: "Proven track record in turnaround situations.",
    contacts: [
      {
        name: "JAXON REED",
        title: "DEFENSE_ARCH",
        linkedin: "linkedin.com/in/jaxonreed",
      },
    ],
    hooks: ["Jaxon - terms are looking solid on my end."],
    compensation: {
      globalRange: [220000, 280000],
      phAdjustedRange: [280000, 340000],
      estimatedRange: [300000, 330000],
      fit: "within range",
    },
  },
];

export const getCampaigns = async (): Promise<OutreachCampaign[]> => [
  {
    id: "1",
    name: "PHOENIX_REACH_V2",
    channels: ["email", "linkedin"],
    volume: 1200,
    conversion: 4.2,
    status: "live",
  },
  {
    id: "2",
    name: "DIRECT_INBOUND_Q4",
    channels: ["email"],
    volume: 450,
    conversion: 1.8,
    status: "cooldown",
  },
  {
    id: "3",
    name: "REFERRAL_ENGINE_X",
    channels: ["referral"],
    volume: 84,
    conversion: 12.5,
    status: "stable",
  },
];

export const getRecipients = async (): Promise<Recipient[]> => [
  {
    id: "992-841-A",
    name: "DR. SARAH CHEN",
    field: "QUANT_BIO",
    status: "engaged",
    lastTouch: "2M_AGO",
  },
  {
    id: "881-209-C",
    name: "MARCUS VAUGHN",
    field: "NEURAL_OPS",
    status: "pending",
    lastTouch: "14H_AGO",
  },
  {
    id: "442-111-B",
    name: "ELARA VANCE",
    field: "STRAT_CAP",
    status: "none",
    lastTouch: "2D_AGO",
  },
  {
    id: "102-005-X",
    name: "JAXON REED",
    field: "DEFENSE_ARCH",
    status: "replied",
    lastTouch: "JUST_NOW",
  },
];

export const getModelPerformance = async (): Promise<ModelPerformance[]> => [
  {
    modelId: "Vanguard-Prime_01",
    throughput: 1240,
    accuracy: 99.42,
    cpuLoad: 12.4,
    errorRate: 0.002,
    status: "active",
  },
  {
    modelId: "Neural_Observer_V4",
    throughput: 856.24,
    accuracy: 98.15,
    cpuLoad: 44.8,
    errorRate: 0.015,
    status: "active",
  },
  {
    modelId: "Strategy_GTM_Engine",
    throughput: 2410.99,
    accuracy: 96.0,
    cpuLoad: 89.2,
    errorRate: 0.42,
    status: "throttled",
  },
  {
    modelId: "Shadow_Protocol_Beta",
    throughput: 0,
    accuracy: 0,
    cpuLoad: 0,
    errorRate: 0,
    status: "standby",
  },
];
