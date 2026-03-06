# Genkit Compatibility Assistant Integration

## Where to call this API

This Next.js API route (`/api/compatibility`) acts as an intelligent assistant for checking car accessory compatibility. It should be invoked from the following touchpoints:

1. **The Product Detail Page (B2C or B2B Portal):**
   - Add a "Check my car" widget next to products. Users can select their `carModel` (e.g., "Proton X50") and ask a `question` (e.g., "Does this dashcam require a hardwire kit for parking mode?"). The API provides an instant answer based on the user's `locale`.

2. **The Workshop Dashboard WhatsApp Assistant:**
   - Integrate with the "Unread Leads" or "Inbox" feature. When a workshop receives a WhatsApp message from a customer asking about part compatibility, the dashboard backend can quietly ping this API. It can then surface a suggested reply to the workshop mechanic, speeding up their response time.

## Required Environment Variables

To run the Next.js API and Genkit framework properly, ensure the following environment variables are set in your `.env` file (or your deployment environment):

*   `GOOGLE_GENAI_API_KEY`: Required by the `@genkit-ai/googleai` plugin to access the Gemini models (specifically `gemini-1.5-flash`).
*   `GENKIT_ENV`: Optional but recommended. Set to `dev` for local development, which helps with trace logging in the Genkit Developer UI.

**Example `.env.local` snippet:**
```env
GOOGLE_GENAI_API_KEY="AIzaSyYourSecretKeyHere..."
GENKIT_ENV="dev"
```
