# 🚀 Quick Reference - EcoSentinel AI Demo

## One-Minute Setup

### To Test Demo Request:
1. Visit homepage
2. Click "Request Demo" button (navigation, hero, or CTA sections)
3. Fill form → Submit
4. See success message ✓

### To View Submissions:
1. Click "Admin" link in footer OR go to `/admin`
2. View all demo requests
3. Click "Refresh" to reload data

### To Add Sample Data:
1. Go to `/admin`
2. Click "Seed Test Data" (purple button, bottom-right)
3. Wait 2 seconds
4. Click "Refresh"
5. See 5 new requests ✓

---

## Routes

| URL | Description |
|-----|-------------|
| `/` | Landing page with all sections |
| `/admin` | Admin dashboard to view requests |

---

## API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/make-server-b84cc350/health` | Health check |
| POST | `/make-server-b84cc350/demo-request` | Submit demo request |
| GET | `/make-server-b84cc350/demo-requests` | Get all requests |
| POST | `/make-server-b84cc350/contact` | Newsletter signup |

---

## Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `DemoModal` | `/src/app/components/` | Form modal for demo requests |
| `AdminDashboard` | `/src/app/components/` | Admin panel to view submissions |
| `TestDataSeeder` | `/src/app/components/` | Sample data generator |
| `InteractiveDemoSection` | `/src/app/components/` | Showcase section |

---

## Demo Buttons

All these buttons open the demo modal:
- **Navigation** → "Request Demo"
- **Hero** → "View Demo"
- **Interactive Demo** → "Try Live Demo"
- **Final CTA** → "Request Demo" & "Start Pilot Program"

---

## Features Checklist

### ✅ Backend
- [x] Data storage (Supabase KV)
- [x] API endpoints (4 total)
- [x] Validation
- [x] Error handling

### ✅ Frontend  
- [x] Demo modal with form
- [x] Admin dashboard
- [x] Test data seeder
- [x] Routing (React Router)
- [x] Animations (Motion)

### ✅ UX
- [x] Loading states
- [x] Success/error feedback
- [x] Responsive design
- [x] Smooth animations

---

## Sample Request Data

```json
{
  "name": "Sarah Johnson",
  "email": "sarah@petrocorp.com",
  "company": "PetroCorp Industries",
  "message": "Interested in demo"
}
```

---

## Console Commands

### Health Check
```bash
curl https://qxrxvimogjyhbtikrhqx.supabase.co/functions/v1/make-server-b84cc350/health
```

### Submit Request
```bash
curl -X POST https://qxrxvimogjyhbtikrhqx.supabase.co/functions/v1/make-server-b84cc350/demo-request \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{"name":"Test","email":"test@example.com","company":"Test Co","message":"Hi"}'
```

---

## Troubleshooting

### Modal doesn't open?
- Check console for errors
- Verify button `onClick` handlers
- Ensure `isDemoModalOpen` state works

### Data not saving?
- Check Network tab in DevTools
- Verify Supabase endpoint is reachable
- Check server logs in console

### Admin dashboard empty?
- Click "Seed Test Data" button
- Submit a demo request from homepage
- Check Network tab for API response

---

## Key Files

```
/src/app/App.tsx                    # Main app with routing
/src/app/routes.tsx                 # Route configuration
/src/app/pages/LandingPage.tsx      # Homepage
/src/app/components/DemoModal.tsx   # Demo form modal
/src/app/components/AdminDashboard.tsx  # Admin panel
/supabase/functions/server/index.tsx    # Backend API
```

---

## Browser Console Logs

Look for these messages:
- ✅ `Demo request submitted successfully: [ID]`
- ✅ `Fetched demo requests: [array]`
- ✅ `Seeded: [name]`
- ❌ `Error submitting demo request: [error]`

---

## Presentation Flow (5 min)

1. **Homepage** (1 min) - Scroll through sections
2. **Submit Request** (1 min) - Click button, fill form
3. **Admin View** (2 min) - `/admin`, seed data, show requests
4. **Backend** (1 min) - Console logs, API calls

---

## Tech Stack (Quick)

- React 18 + TypeScript
- Tailwind CSS v4
- Motion (animations)
- React Router v7
- Supabase (backend)
- Hono (API framework)

---

## Status

🟢 **LIVE & FUNCTIONAL**

- Backend: ✅ Online
- Frontend: ✅ Working
- Database: ✅ Storing data
- Animations: ✅ Smooth

---

## Support

For help, check:
1. `README.md` - Overview
2. `DEMO_GUIDE.md` - Detailed instructions
3. `IMPLEMENTATION_SUMMARY.md` - Technical details
4. Browser console - Error messages

---

**Last Updated: Feb 28, 2026**
**Version: 1.0.0**
