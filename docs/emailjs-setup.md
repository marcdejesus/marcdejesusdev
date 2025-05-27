# Email.js Setup Guide

This guide will help you set up Email.js for your contact form and email marketing functionality.

## 1. Create Email.js Account

1. Go to [Email.js](https://www.emailjs.com/) and create a free account
2. Verify your email address

## 2. Set up Email Service

1. In your Email.js dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## 3. Create Email Templates

### Contact Form Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it "Contact Form Template"
4. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Hello {{to_name}},

You have received a new contact form submission:

From: {{from_name}} ({{from_email}})
Project Type: {{project_type}}
Budget Range: {{budget_range}}
Timeline: {{timeline}}
Social Link: {{social_link}}

Message:
{{message}}

Best regards,
Your Website Contact Form
```

5. Save the template and note down the **Template ID**

### Marketing Subscription Template
1. Create another template named "Marketing Subscription"
2. Use this template content:

```
Subject: New Marketing Subscription: {{subscriber_name}}

Hello {{to_name}},

You have a new email marketing subscriber:

Name: {{subscriber_name}}
Email: {{subscriber_email}}
Source: {{subscription_source}}
Interest Category: {{interest_category}}

Best regards,
Your Website
```

3. Save and note down the **Marketing Template ID**

## 4. Get Your Public Key

1. Go to "Account" > "General"
2. Find your **Public Key**
3. Copy it for use in environment variables

## 5. Environment Variables

Create a `.env.local` file in your project root with these variables:

```env
# Email.js Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_contact_template_id_here
NEXT_PUBLIC_EMAILJS_MARKETING_TEMPLATE_ID=your_marketing_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual Email.js credentials.

## 6. Test Your Setup

After setting up your environment variables:

1. Run your development server: `npm run dev`
2. Navigate to your contact page
3. Fill out and submit the contact form
4. Check your email to confirm you receive the messages

## Security Notes

- Never commit your `.env.local` file to version control
- The `NEXT_PUBLIC_` prefix makes these variables available in the browser
- Email.js handles the secure sending of emails without exposing sensitive credentials

## Troubleshooting

- Make sure your email service is properly configured and verified
- Check the Email.js dashboard for any error logs
- Verify that your template variables match exactly (case-sensitive)
- Ensure your public key is correct and not expired 