import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wssncnzbmpedkajskenp.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_gsuu9vbdctZViWuUwTgTAw_3vIWUc3o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
