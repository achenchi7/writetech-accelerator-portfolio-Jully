# Introduction to the Chimoney API

API - Application Programming Interface

It is a set of rules or protocols that allows different software applications to communicate with one another.  It acts as an intermediary, enabling one application to request and receive data or functionality from another. 

## Chimoney API 
Chimoney is a global payout and disbursement platform and API that enables businesses and individuals to send money across borders quickly and easily, using only an email or phone number for recipients.

Developers can integrate Chimoney's payment services into their own applications and websites through its API. 

This documentation will take you through the following:
- API User requirements
- API base URL
- Authentication process
- Required headers 
- Sample cURL or Postman request

### API User requirements
To get started with the Chimoney API, you'll need:
- A Chimoney sandbox account
- An API key

### API Base URL
The base URL is like the "home address" of the API.Every endpoint you call (like `/wallets` or `/transactions`) will be attached to this base.

All requests are made to: [](https://api.chimoney.io/v0.2/)

### Authentiction process
1. Sign up for a Chimoney sandbox account [here](https://sandbox.chimoney.io/)
2. Click on the `Organizations` tab on the dashboard.
3. Create an `Organization/Team` and give it your preferred name.
4. Finally, click on the `Developers` tab to create an app and use the API keys to access the sandbox endpoints.

⚠️ **Important:** Never share your API key publicly (like in GitHub repos). Treat it as securely as you would a bank PIN.

### Required headers
API headers are a section of your requests that's used to transfer metadata about the request and the desired response.

**Chimoney expects the following:**
| Header           | Value                         | Description                          |
|------------------|-------------------------------|--------------------------------------|
| `Content-Type`   | `application/json`            | Ensures JSON format for requests     |
| `Authorization`  | `Bearer YOUR_API_KEY_HERE`    | API key used to authenticate request |

### Example Request (CURL)
This example sends **airtime** to a phone number.

```bash
curl --request POST \
     --url https://api-v2-sandbox.chimoney.io/v0.2.4/payouts/airtime \
     --header 'X-API-KEY: 8cdd3416726509055ffaa00f0230dc118f5cbafad38a0a6d413ef357a7cade49' \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "airtimes": [
    {
      "countryToSend": "Kenya",
      "phoneNumber": "+254705021210",
      "valueInUSD": "15"
    }
  ]
}
```

If successful, you'll receive a JSON reponse back from the API confirming the airtime was sent

**RESPONSE**
```JSON
{
  "status": "success",
  "message": "Airtime Payout is successfull",
  "data": {
    "payoutLink": "https://sandbox.chimoney.io/pay/?issueID=se2xHe2ZfZeiatbzCxRlAQbhhbB2_16_1756149867581",
    "data": [
      {
        "id": "HXvCrLaUmc1pCt20mjPs",
        "countryToSend": "Kenya",
        "phoneNumber": "+254705021210",
        "valueInUSD": "15",
        "chimoney": 15000,
        "issuer": "se2xHe2ZfZeiatbzCxRlAQbhhbB2",
        "issueID": "se2xHe2ZfZeiatbzCxRlAQbhhbB2_16_1756149867581",
        "status": "redeemed",
        "enabledToRedeem": [
          "airtime"
        ],
        "type": "airtime",
        "initiatedBy": "se2xHe2ZfZeiatbzCxRlAQbhhbB2",
        "integration": {
          "appID": "025koIyf9NNRkXKH45Aq"
        },
        "collectionPaymentIssueID": "",
        "fee": 1,
        "personalizedMessage": "",
        "payout": {
          "amount": "KES 1942.5126",
          "errorMessage": "None",
          "phoneNumber": "+254705021210",
          "requestId": "ATQid_92c451b6ac6a06ac68de96a5874b1e62",
          "status": "Sent"
        },
        "chiRef": "b070ba0b-08b9-4fc5-9658-86f06ddfc207",
        "issueDate": "2025-08-25T19:24:31.480Z",
        "t_id": 466641432080611,
        "turnOffNotification": false
      }
    ],
    "error": "None",
    "payouts": [
      {
        "amount": "KES 1942.5126",
        "errorMessage": "None",
        "phoneNumber": "+254705021210",
        "requestId": "ATQid_92c451b6ac6a06ac68de96a5874b1e62",
        "status": "Sent"
      }
    ]
  }
}
```