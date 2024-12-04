import { createClient } from '@supabase/supabase-js';
import { json } from '@sveltejs/kit';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import type { RequestHandler } from './$types';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { email } = await request.json();
    ``;
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ success: false, message: 'Invalid email address' }, { status: 400 });
    }

    const { error } = await supabase.from('subscribers').insert([{ email }]);

    if (error) throw error;

    return json({ success: true, message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Subscription error:', error);
    return json({ success: false, message: 'Failed to subscribe' }, { status: 500 });
  }
};
