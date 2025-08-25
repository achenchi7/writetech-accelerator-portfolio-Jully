
## 📌 `reference/payment-request.md`

```markdown
# Payments request API

Initiates a payment request which is sent to the payer's email address specified.
---

## Endpoint
This is a **POST request**. POST is used to send data to a server.

### Request Body Parameters

You need to send certain details so Chimoney can craft the request properly:

| Field        | Type   | Required | Description                                                       |
|--------------|--------|----------|-------------------------------------------------------------------|
| `amount`     | number | Yes      | The amount being requested in USD.                                |
| `currency`   | string | Yes      | Currency code (e.g., `"USD"`).                                    |
| `email`      | string | No       | Payer’s email (for notification or auto-identification).         |
| `phoneNumber`| string | No       | Payer’s phone (formatted in E.164, e.g., `+1234567890`).          |
| `description`| string | No       | Reason for the request (e.g., `"Event registration fee"`).        |
| `tx_ref`     | string | Yes      | Your unique transaction reference ID (to track requests).         |

### Headers
- `X-API-Key: YOUR_API_KEY` → proves you’re authorized.
- `Content-Type: application/json` → tells the API the format of the response.

---

#### Sample request
```bash
curl --request POST \
     --url https://api-v2-sandbox.chimoney.io/v0.2.4/payment/initiate \
     --header 'X-API-KEY: 8cdd3416726509055ffaa00f0230dc118f5cbafad38a0a6d413ef357a7cade49' \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "payerEmail": "jullyachenchi8@gmail.com"
}
'
```

### Sample response
```JSON
{
  "status": "success",
  "message": "Payment initiated successfully",
  "data": {
    "id": "rZSUdjyqBpGeWgcTtqiL",
    "payerEmail": "jullyachenchi8@gmail.com",
    "valueInUSD": 10,
    "meta": {},
    "redeemData": {
      "walletID": "CM3UtHneUpRugaq7DWLs"
    },
    "type": "api-payment",
    "issuer": "se2xHe2ZfZeiatbzCxRlAQbhhbB2",
    "chimoney": 10000,
    "issueID": "se2xHe2ZfZeiatbzCxRlAQbhhbB2_10_1756151339740",
    "initiatedBy": "se2xHe2ZfZeiatbzCxRlAQbhhbB2",
    "integration": {
      "appID": "025koIyf9NNRkXKH45Aq",
      "isFromScrim": false
    },
    "redirect_url": ".",
    "turnOffNotification": true,
    "narration": "",
    "chiRef": "3f04adec-f908-4413-91ce-eb4e0882d5e1",
    "issueDate": "2025-08-25T19:48:59.898Z",
    "t_id": 243358071500900,
    "status": "unpaid",
    "fee": 0,
    "bankDetails": null,
    "paymentRef": "se2xHe2ZfZeiatbzCxRlAQbhhbB2_10_1756151339740",
    "paymentLink": "https://sandbox.chimoney.io/pay/?issueID=se2xHe2ZfZeiatbzCxRlAQbhhbB2_10_1756151339740"
  }
}
```
What this means:

- `payment_request_id`: Chimoney’s unique ID for the request.

- `tx_ref`: Your transaction ref, echoed back for matching.

- `expires_at`: When the request expires—after which the link is invalid.

- `payment_url`: Share this link with the payer to complete payment.

- `status`: Current status of the request (pending, paid, expired, etc.).

### Notes: Common Errors, Edge Cases & Limitations

- `400 Bad Request` — Likely due to missing required fields (e.g., `amount`, `currency`, or `tx_ref`) or invalid format (e.g., wrong email format).

- `401 Unauthorized` — Occurs when your X-API-Key is missing or invalid.

- `INVALID_CURRENCY` — Sent if you use a currency that Chimoney doesn’t support.

- `INVALID_AMOUNT` — If the amount is too large, negative, or outside allowed limits.

- `INVALID_PHONE_NUMBER` / `INVALID_EMAIL` — If optional contact fields are malformed.

- `Expiration Consideration` — Be clear about the expires_at field. After this, the payment can’t be made using that link.

- Duplicate `tx_ref` — Using the same `tx_ref` twice might have different outcomes depending on server logic—could return the same request or fail due to duplication.

- No Real-time Status Updates — You may need to poll or use a webhook to check when payment completes (e.g., change of status from `pending` to `paid`).