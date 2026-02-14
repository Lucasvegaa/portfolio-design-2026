import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString() ?? '';
    const email = data.get('email')?.toString() ?? '';
    const message = data.get('message')?.toString() ?? '';

    if (!email.trim()) {
      return redirect('/#contact?error=email');
    }

    // Aquí puedes: enviar email (Resend, Nodemailer), guardar en DB, etc.
    // Por ahora solo confirmamos recepción y redirigimos.
    return redirect('/#contact?sent=1');
  } catch {
    return redirect('/#contact?error=1');
  }
};
