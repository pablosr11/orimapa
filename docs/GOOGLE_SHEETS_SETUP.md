# Google Sheets Setup Guide

## 1. Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API for your project

## 2. Create Service Account
1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Name it (e.g., "baby-map-sheets")
4. Grant role: "Editor" for Google Sheets API
5. Click "Create Key" (JSON type)
6. Download the JSON key file

## 3. Share Your Sheet
1. Open your Google Sheet
2. Click "Share"
3. Add the service account email (found in the JSON file) with "Editor" access
4. Copy your sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```

## 4. Add to GitHub Secrets
1. Go to your GitHub repository
2. Navigate to Settings > Secrets and Variables > Actions
3. Add two new repository secrets:

### GOOGLE_SHEETS_ID
- Name: `GOOGLE_SHEETS_ID`
- Value: Your sheet ID from step 3

### GOOGLE_SERVICE_ACCOUNT
- Name: `GOOGLE_SERVICE_ACCOUNT`
- Value: The entire contents of your service account JSON key file

Example JSON structure (DO NOT USE THIS, USE YOUR OWN):
```json
{
  "type": "service_account",
  "project_id": "your-project",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "your-service@your-project.iam.gserviceaccount.com",
  "client_id": "123456789",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/..."
}
```

## Security Notes
- Never commit the service account JSON file to your repository
- Always use GitHub Secrets for sensitive credentials
- Make sure your `.gitignore` includes any local credential files

## Local Development
For local development, create a `.env` file with:
```
GOOGLE_SHEETS_ID=your_sheet_id
GOOGLE_SERVICE_ACCOUNT='{"type": "service_account", ...}'
```

Make sure `.env` is in your `.gitignore`! 