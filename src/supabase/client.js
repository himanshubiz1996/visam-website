import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://unboajnptjdagkwcrhez.supabase.co'
const supabaseAnonKey = 'sb_publishable_4AsdLYQNErLFVHnYw00Jtw_zc-9_-n_'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
