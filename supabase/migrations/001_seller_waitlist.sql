-- Migration: Create seller_waitlist table with RLS
-- This migration creates the table for the GRIDMARKET seller waitlist

-- Create seller_waitlist table
CREATE TABLE IF NOT EXISTS seller_waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  whatsapp_number TEXT NOT NULL,
  email TEXT NOT NULL,
  product_category TEXT NOT NULL,
  business_location TEXT NOT NULL,
  sells_internationally BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE seller_waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts on re-run)
DROP POLICY IF EXISTS "Public can insert into seller_waitlist" ON seller_waitlist;
DROP POLICY IF EXISTS "No public reads from seller_waitlist" ON seller_waitlist;
DROP POLICY IF EXISTS "No public updates on seller_waitlist" ON seller_waitlist;
DROP POLICY IF EXISTS "No public deletes on seller_waitlist" ON seller_waitlist;
DROP POLICY IF EXISTS "Authenticated users can read seller_waitlist" ON seller_waitlist;

-- Create policy to allow public inserts (anyone can submit to waitlist)
CREATE POLICY "Public can insert into seller_waitlist"
  ON seller_waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to prevent public reads (no one can read seller data through the API)
CREATE POLICY "No public reads from seller_waitlist"
  ON seller_waitlist
  FOR SELECT
  TO anon
  USING (false);

-- Create policy to prevent public updates
CREATE POLICY "No public updates on seller_waitlist"
  ON seller_waitlist
  FOR UPDATE
  TO anon
  USING (false);

-- Create policy to prevent public deletes
CREATE POLICY "No public deletes on seller_waitlist"
  ON seller_waitlist
  FOR DELETE
  TO anon
  USING (false);

-- Create policy to allow authenticated users to read (for future admin dashboard)
CREATE POLICY "Authenticated users can read seller_waitlist"
  ON seller_waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_seller_waitlist_email ON seller_waitlist(email);
