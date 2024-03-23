'use server';

import { validateString, getErrorMessage } from '@/lib/utils';
import { Resend } from 'resend';

import React from 'react';
import ContactFormEmail from '@/components/kontakt/contact-email';

const resend = new Resend(process.env.RESEND_API);

export const sendEmail = async (formData) => {
  const senderName = formData.get('senderName');
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'hirtpraxis@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        senderName: senderName,
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
