<!-- Start SDK Example Usage [usage] -->
```typescript
import { Kx } from "kx";

const kx = new Kx({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await kx.ai.insertJson({
        table: "myTable",
        rows: [{}, {}],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->