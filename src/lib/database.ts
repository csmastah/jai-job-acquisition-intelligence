import { supabase } from './supabase'
import type {
  MetricCard,
  FunnelData,
  TopRole,
  ActivityLog,
  Role,
  OutreachCampaign,
  Recipient,
  ModelPerformance,
} from './types'

export const getMetricCards = async (): Promise<MetricCard[]> => {
  const { data: jobs } = await supabase.from('jobs').select('status, gtm_score')
  if (!jobs || jobs.length === 0) return [
    { label: 'TOTAL_ROLES_TRACKED', value: 0, status: 'neutral' },
    { label: 'ACTIVE_APPLICATIONS', value: 0, status: 'neutral' },
    { label: 'OUTREACH_SENT', value: 0, status: 'neutral' },
    { label: 'AVG_GTM_SCORE', value: 0, unit: '/10', status: 'neutral' },
  ]
  const total = jobs.length
  const active = jobs.filter(j => ['Applied','Warming','Engaged','Interviewing'].includes(j.status)).length
  const avgScore = jobs.reduce((sum, j) => sum + (j.gtm_score || 0), 0) / total
  const { count: outreachCount } = await supabase.from('outreach').select('*', { count: 'exact', head: true })
  return [
    { label: 'TOTAL_ROLES_TRACKED', value: total, status: 'optimal' },
    { label: 'ACTIVE_APPLICATIONS', value: active, status: active > 0 ? 'optimal' : 'neutral' },
    { label: 'OUTREACH_SENT', value: outreachCount || 0, status: 'neutral' },
    { label: 'AVG_GTM_SCORE', value: parseFloat(avgScore.toFixed(1)), unit: '/10', status: avgScore >= 7 ? 'optimal' : 'warning' },
  ]
}

export const getFunnelData = async (): Promise<FunnelData[]> => {
  const { data: jobs } = await supabase.from('jobs').select('status')
  if (!jobs) return []
  const stages = ['Identified','Applied','Warming','Engaged','Interviewing','Offer']
  return stages.map(stage => ({
    stage: stage.toUpperCase(),
    count: jobs.filter(j => j.status === stage).length,
  }))
}

export const getTopRoles = async (): Promise<TopRole[]> => {
  const { data } = await supabase
    .from('jobs')
    .select('id, role_title, company, gtm_score, recommendation')
    .in('recommendation', ['PURSUE AGGRESSIVELY', 'PURSUE SELECTIVELY'])
    .order('gtm_score', { ascending: false })
    .limit(3)
  if (!data) return []
  return data.map(job => ({
    id: job.id,
    title: job.role_title,
    company: job.company,
    priority: job.gtm_score >= 8 ? 'critical' : job.gtm_score >= 7 ? 'alpha' : 'beta',
  }))
}

export const getActivityLogs = async (): Promise<ActivityLog[]> => {
  const { data } = await supabase
    .from('search_log')
    .select('*')
    .order('run_at', { ascending: false })
    .limit(5)
  if (!data || data.length === 0) return []
  return data.map(log => ({
    id: log.id,
    timestamp: new Date(log.run_at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    signalStrength: log.jobs_added > 5 ? 'high' : log.jobs_added > 2 ? 'medium' : 'low',
    description: `JAI found ${log.jobs_found} roles · ${log.jobs_added} added · ${log.jobs_skipped} skipped`,
  }))
}

export const getRoles = async (): Promise<Role[]> => {
  const { data } = await supabase
    .from('jobs')
    .select(`*, outreach_hooks (hook_pain_led, hook_value_led, hook_authority_led, who_to_reach, who_to_reach_title, who_to_reach_platform)`)
    .order('gtm_score', { ascending: false })
  if (!data) return []
  return data.map(job => ({
    id: job.unique_id || job.id,
    company: job.company.toUpperCase(),
    role: job.role_title,
    status: (job.status?.toLowerCase().replace(' ', '-') || 'identified') as Role['status'],
    lastAction: job.updated_at ? new Date(job.updated_at).toLocaleDateStrincat > src/lib/database.ts << 'DBEOF'
import { supabase } from './supabase'
import type {
  MetricCard,
  FunnelData,
  TopRole,
  ActivityLog,
  Role,
  OutreachCampaign,
  Recipient,
  ModelPerformance,
} from './types'

export const getMetricCards = async (): Promise<MetricCard[]> => {
  const { data: jobs } = await supabase.from('jobs').select('status, gtm_score')
  if (!jobs || jobs.length === 0) return [
    { label: 'TOTAL_ROLES_TRACKED', value: 0, status: 'neutral' },
    { label: 'ACTIVE_APPLICATIONS', value: 0, status: 'neutral' },
    { label: 'OUTREACH_SENT', value: 0, status: 'neutral' },
    { label: 'AVG_GTM_SCORE', value: 0, unit: '/10', status: 'neutral' },
  ]
  const total = jobs.length
  const active = jobs.filter(j => ['Applied','Warming','Engaged','Interviewing'].includes(j.status)).length
  const avgScore = jobs.reduce((sum, j) => sum + (j.gtm_score || 0), 0) / total
  const { count: outreachCount } = await supabase.from('outreach').select('*', { count: 'exact', head: true })
  return [
    { label: 'TOTAL_ROLES_TRACKED', value: total, status: 'optimal' },
    { label: 'ACTIVE_APPLICATIONS', value: active, status: active > 0 ? 'optimal' : 'neutral' },
    { label: 'OUTREACH_SENT', value: outreachCount || 0, status: 'neutral' },
    { label: 'AVG_GTM_SCORE', value: parseFloat(avgScore.toFixed(1)), unit: '/10', status: avgScore >= 7 ? 'optimal' : 'warning' },
  ]
}

export const getFunnelData = async (): Promise<FunnelData[]> => {
  const { data: jobs } = await supabase.from('jobs').select('status')
  if (!jobs) return []
  const stages = ['Identified','Applied','Warming','Engaged','Interviewing','Offer']
  return stages.map(stage => ({
    stage: stage.toUpperCase(),
    count: jobs.filter(j => j.status === stage).length,
  }))
}

export const getTopRoles = async (): Promise<TopRole[]> => {
  const { data } = await supabase
    .from('jobs')
    .select('id, role_title, company, gtm_score, recommendation')
    .in('recommendation', ['PURSUE AGGRESSIVELY', 'PURSUE SELECTIVELY'])
    .order('gtm_score', { ascending: false })
    .limit(3)
  if (!data) return []
  return data.map(job => ({
    id: job.id,
    title: job.role_title,
    company: job.company,
    priority: job.gtm_score >= 8 ? 'critical' : job.gtm_score >= 7 ? 'alpha' : 'beta',
  }))
}

export const getActivityLogs = async (): Promise<ActivityLog[]> => {
  const { data } = await supabase
    .from('search_log')
    .select('*')
    .order('run_at', { ascending: false })
    .limit(5)
  if (!data || data.length === 0) return []
  return data.map(log => ({
    id: log.id,
    timestamp: new Date(log.run_at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    signalStrength: log.jobs_added > 5 ? 'high' : log.jobs_added > 2 ? 'medium' : 'low',
    description: `JAI found ${log.jobs_found} roles · ${log.jobs_added} added · ${log.jobs_skipped} skipped`,
  }))
}

export const getRoles = async (): Promise<Role[]> => {
  const { data } = await supabase
    .from('jobs')
    .select(`*, outreach_hooks (hook_pain_led, hook_value_led, hook_authority_led, who_to_reach, who_to_reach_title, who_to_reach_platform)`)
    .order('gtm_score', { ascending: false })
  if (!data) return []
  return data.map(job => ({
    id: job.unique_id || job.id,
    company: job.company.toUpperCase(),
    role: job.role_title,
    status: (job.status?.toLowerCase().replace(' ', '-') || 'identified') as Role['status'],
    lastAction: job.updated_at ? new Date(job.updated_at).toLocaleDateString() : '',
    updatedAt: job.updated_at ? new Date(job.updated_at).toLocaleString() : '',
    gtmScore: job.gtm_score || 0,
    recommendation: job.recommendation || '',
    hypothesis: job.gtm_problem || '',
    positioning: job.positioning_angle || '',
    differentiation: job.differentiation || '',
    contacts: job.outreach_hooks?.[0] ? [{
      name: job.outreach_hooks[0].who_to_reach || '',
      title: job.outreach_hooks[0].who_to_reach_title || '',
      linkedin: job.outreach_hooks[0].who_to_reach_platform || '',
    }] : [],
    hooks: job.outreach_hooks?.[0] ? [
      job.outreach_hooks[0].hook_pain_led || '',
      job.outreach_hooks[0].hook_value_led || '',
      job.outreach_hooks[0].hook_authority_led || '',
    ].filter(Boolean) : [],
    compensation: {
      globalRange: [job.comp_global_min || 0, job.comp_global_max || 0] as [number, number],
      phAdjustedRange: [job.comp_ph_min || 0, job.comp_ph_max || 0] as [number, number],
      estimatedRange: [job.comp_estimate_min || 0, job.comp_estimate_max || 0] as [number, number],
      fit: (job.compensation_fit?.toLowerCase() || 'below range') as Compensation['fit'],
    },
  }))
}

export const getCampaigns = async (): Promise<OutreachCampaign[]> => {
  const { data } = await supabase.from('outreach').select('platform, response_status')
  if (!data || data.length === 0) return []
  const byPlatform: Record<string, typeof data> = {}
  data.forEach(o => {
    if (!byPlatform[o.platform]) byPlatform[o.platform] = []
    byPlatform[o.platform].push(o)
  })
  return Object.entries(byPlatform).map(([platform, items], i) => ({
    id: String(i + 1),
    name: `${platform.toUpperCase()}_OUTREACH`,
    channels: [platform.toLowerCase() as 'email' | 'linkedin' | 'referral'],
    volume: items.length,
    conversion: parseFloat(((items.filter(o => o.response_status === 'Positive').length / items.length) * 100).toFixed(1)),
    status: 'live' as const,
  }))
}

export const getRecipients = async (): Promise<Recipient[]> => {
  const { data } = await supabase
    .from('outreach')
    .select('*')
    .order('sent_at', { ascending: false })
    .limit(10)
  if (!data) return []
  return data.map(o => ({
    id: o.id,
    name: o.contact_name?.toUpperCase() || '',
    field: o.contact_title?.toUpperCase() || '',
    status: (o.response_status === 'Positive' ? 'engaged' : o.response_status === 'Replied' ? 'replied' : o.response_status === 'No Response' ? 'none' : 'pending') as Recipient['status'],
    lastTouch: o.sent_at ? new Date(o.sent_at).toLocaleDateString() : '',
  }))
}

export const getModelPerformance = async (): Promise<ModelPerformance[]> => {
  const { data } = await supabase
    .from('search_log')
    .select('model_used, jobs_found, jobs_added, duration_seconds')
    .order('run_at', { ascending: false })
    .limit(50)
  if (!data || data.length === 0) return []
  const byModel: Record<string, typeof data> = {}
  data.forEach(log => {
    const model = log.model_used || 'unknown'
    if (!byModel[model]) byModel[model] = []
    byModel[model].push(log)
  })
  return Object.entries(byModel).map(([model, logs]) => ({
    modelId: model,
    throughput: parseFloat((logs.reduce((sum, l) => sum + (l.jobs_found || 0), 0) / logs.length).toFixed(2)),
    accuracy: parseFloat(((logs.reduce((sum, l) => sum + (l.jobs_added || 0), 0) / Math.max(logs.reduce((sum, l) => sum + (l.jobs_found || 0), 0), 1)) * 100).toFixed(2)),
    cpuLoad: parseFloat((logs.reduce((sum, l) => sum + (l.duration_seconds || 0), 0) / logs.length).toFixed(1)),
    errorRate: 0,
    status: 'active' as const,
  }))
}

interface Compensation {
  fit: 'within range' | 'above range' | 'below range'
}
