# Email.js Integration

This project uses Email.js for contact form submissions and email marketing subscriptions. Email.js allows sending emails directly from client-side JavaScript without exposing sensitive credentials.

## Features

- ✅ Contact form email notifications
- ✅ Email marketing subscriptions
- ✅ Error handling and user feedback
- ✅ Reusable components and hooks
- ✅ TypeScript support
- ✅ Multiple newsletter subscription variants

## Quick Setup

1. **Install Dependencies** (already done)
   ```bash
   npm install @emailjs/browser
   ```

2. **Set up Email.js Account**
   - Create account at [emailjs.com](https://www.emailjs.com/)
   - Set up email service (Gmail, Outlook, etc.)
   - Create email templates
   - Get your Service ID, Template IDs, and Public Key

3. **Configure Environment Variables**
   Create `.env.local` in your project root:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_contact_template_id_here
   NEXT_PUBLIC_EMAILJS_MARKETING_TEMPLATE_ID=your_marketing_template_id_here
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

## File Structure

```
src/
├── lib/
│   └── emailjs.ts              # Email.js configuration and functions
├── hooks/
│   └── use-emailjs.ts          # Custom hook for email functionality
├── components/
│   ├── contact/
│   │   ├── ContactForm.tsx     # Main contact form with Email.js
│   │   └── ContactFormFields.tsx
│   └── shared/
│       └── NewsletterSubscription.tsx  # Reusable newsletter component
└── docs/
    └── emailjs-setup.md        # Detailed setup guide
```

## Components

### ContactForm
Enhanced contact form with Email.js integration:
- Sends contact inquiries via email
- Optional marketing subscription
- Error handling and user feedback
- Form validation with Zod

### NewsletterSubscription
Standalone newsletter subscription component with three variants:
- `default`: Full form with labels and description
- `compact`: Minimal vertical layout
- `inline`: Horizontal layout for headers/footers

Usage examples:
```tsx
// Default variant
<NewsletterSubscription />

// Compact variant for sidebar
<NewsletterSubscription 
  variant="compact"
  title="Newsletter"
  className="bg-muted p-4 rounded-lg"
/>

// Inline variant for footer
<NewsletterSubscription 
  variant="inline"
  title="Stay Updated"
  description="Get the latest updates"
/>
```

### useEmailJS Hook
Custom hook providing:
- `isLoading`: Loading state
- `error`: Error messages
- `sendContactForm()`: Send contact emails
- `sendMarketingEmail()`: Send marketing subscriptions
- `clearError()`: Clear error state

## Email Templates

### Contact Form Template
Variables available:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{project_type}}` - Type of inquiry
- `{{message}}` - Message content
- `{{budget_range}}` - Budget information
- `{{timeline}}` - Project timeline
- `{{social_link}}` - Optional social media link
- `{{to_name}}` - Recipient name

### Marketing Subscription Template
Variables available:
- `{{subscriber_name}}` - Subscriber's name
- `{{subscriber_email}}` - Subscriber's email
- `{{subscription_source}}` - Where they subscribed from
- `{{interest_category}}` - Their area of interest
- `{{to_name}}` - Recipient name

## Security & Best Practices

- Environment variables use `NEXT_PUBLIC_` prefix (client-side accessible)
- Email.js handles secure email delivery
- No sensitive credentials exposed in client code
- Form validation prevents malformed submissions
- Error boundaries prevent crashes

## Error Handling

The implementation includes comprehensive error handling:
- Network failures
- Invalid email configurations
- Form validation errors
- User-friendly error messages
- Toast notifications for feedback

## Development

To test the email functionality:

1. Set up your Email.js account and templates
2. Add environment variables to `.env.local`
3. Run the development server: `npm run dev`
4. Navigate to `/contact` to test the contact form
5. Test the newsletter subscription component

## Production Deployment

Ensure your environment variables are set in your deployment platform:
- Vercel: Add to Environment Variables in project settings
- Netlify: Add to Site settings > Environment variables
- Other platforms: Follow their environment variable setup

## Troubleshooting

**Emails not sending:**
- Check Email.js dashboard for error logs
- Verify environment variables are correct
- Ensure email service is properly configured
- Check browser console for JavaScript errors

**Template variables not working:**
- Variable names are case-sensitive
- Ensure template variables match exactly: `{{variable_name}}`
- Test templates in Email.js dashboard

**Form validation errors:**
- Check Zod schema in `ContactFormFields.tsx`
- Verify required fields are filled
- Ensure email format is valid

## License

This Email.js integration is part of the portfolio project and follows the same license terms. 