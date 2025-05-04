import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('https://vajbdyzorlpsytzwhmtj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhamJkeXpvcmxwc3l0endobXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNTE0NjIsImV4cCI6MjA2MTcyNzQ2Mn0.COKJ3RU7M2cKlGzsruvhbRnbqYZ0Tm2hZ8cfbwefnDg')