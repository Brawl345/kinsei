金星 (kinsei)
========================
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBrawl345%2Fkinsei&env=NEXT_TELEMETRY_DISABLED,NEXT_PUBLIC_FEEDS&envDescription=Set%20%22NEXT_TELEMETRY_DISABLED%22%20to%20%221%22%2C%20to%20disable%20telemetry.%20Set%20%22NEXT_PUBLIC_FEEDS%22%20to%20your%20feed%20JSON%20(generste%20with%20prepareEnv.js)&envLink=https%3A%2F%2Fgithub.com%2FBrawl345%2Fkinsei)

Feed aggregator that shows various RSS feeds in a continous stream.

## Build

```bash
cp feeds.example.json feeds.json # Fill it in
npm run generate-env # Serializes feeds.json into .env.local
npm ci
npm run dev # Development
npm run build && npm run start ## Production
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Please don't send feature requests.
