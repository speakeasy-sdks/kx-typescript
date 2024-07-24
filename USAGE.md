<!-- Start SDK Example Usage [usage] -->
```typescript
import { Kx } from "kx";

const kx = new Kx({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await kx.ai.insertRaw(new TextEncoder().encode("0x02eF1eFB84"));

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->