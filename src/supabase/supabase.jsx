import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dfqkfhudjptdnrrnbhuu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmcWtmaHVkanB0ZG5ycm5iaHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1OTUyMjgsImV4cCI6MjAzMTE3MTIyOH0.5IsLN3Ox_CivP8ebDq9CBDAXaP4tKmdR4tgWmXT2JWM'

export const supabase = createClient(supabaseUrl, supabaseKey)