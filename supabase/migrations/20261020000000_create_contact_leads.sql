create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) between 3 and 254),
  message text not null check (char_length(message) between 10 and 5000),
  created_at timestamptz not null default now()
);

alter table public.contact_leads enable row level security;

revoke all on table public.contact_leads from anon, authenticated;
grant insert (name, email, message) on table public.contact_leads to anon;

drop policy if exists "Allow anonymous contact submissions" on public.contact_leads;
create policy "Allow anonymous contact submissions"
  on public.contact_leads
  for insert
  to anon
  with check (
    char_length(name) between 2 and 120
    and char_length(email) between 3 and 254
    and char_length(message) between 10 and 5000
  );
