import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sljaqermtzygbxhqliyj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsamFxZXJtdHp5Z2J4aHFsaXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNDU5NzMsImV4cCI6MTk5NzgyMTk3M30.N_HtWQ7nKo-KHkoWDqUL-lCY5f-NXXoRt1M996INn7E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;