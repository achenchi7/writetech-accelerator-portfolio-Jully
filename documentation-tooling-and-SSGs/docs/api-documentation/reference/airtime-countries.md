# List of all supported airtime Countries.

Retrieves a list of countries supported for airtime transactions.

---

### Endpoint
This is a **GET request**, which means you’re asking the API to *fetch* information for you.  
In this case, it’s ythe list of all supported airtime countries


### Request Details
- **Method:** `GET`  
- **Path:** `/airtime-countries`

### Headers
- `X-API-Key: YOUR_API_KEY` → proves you’re authorized.
- `Content-Type: application/json` → tells the API the format of the response.

---

#### Example Request
```bash
curl --request GET \
     --url https://api-v2-sandbox.chimoney.io/v0.2.4/info/airtime-countries \
     --header 'X-API-KEY: 8cdd3416726509055ffaa00f0230dc118f5cbafad38a0a6d413ef357a7cade49' \
     --header 'accept: application/json'
```

#### Sample response
```JSON
{
  "status": "success",
  "message": "Supported airtime countries retrieved successfully",
  "data": [
    "Ghana",
    "Kenya",
    "Nigeria",
    "Rwanda",
    "Tanzania",
    "Uganda",
    "Zambia"
  ]
}
```

