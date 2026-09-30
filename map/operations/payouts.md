<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payouts — operations

Accessor: `client.payouts` · Source: `src/resources/payouts.ts` · 5 operations · Request and error types: namespace `Payouts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deletePayoutsId

- **Signature**: `deletePayoutsId(request: Payouts.DeletePayoutsIdRequest, options?: RequestOptions): ApiPromise<PayoutsResponseResult, Payouts.DeletePayoutsIdError>`
- **Wire**: `DELETE /payouts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PayoutsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Payouts.DeletePayoutsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payouts.DeletePayoutsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutsResponseResult` | `payoutsResponseResultSchema` | `src/models/payouts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getPayouts

- **Signature**: `getPayouts(request: Payouts.GetPayoutsRequest, options?: RequestOptions): ApiPromise<PayoutsResponseResult, Payouts.GetPayoutsError>`
- **Wire**: `GET /payouts`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayoutsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Payouts.GetPayoutsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payouts.GetPayoutsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page[number]` | `number` | no |
| `pageLimit` | `query` | `page[limit]` | `number` | no |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `search` | `header` | — | `string` | no |
| `totals` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutsResponseResult` | `payoutsResponseResultSchema` | `src/models/payouts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getPayoutsId

- **Signature**: `getPayoutsId(request: Payouts.GetPayoutsIdRequest, options?: RequestOptions): ApiPromise<PayoutsResponseResult, Payouts.GetPayoutsIdError>`
- **Wire**: `GET /payouts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayoutsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Payouts.GetPayoutsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payouts.GetPayoutsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutsResponseResult` | `payoutsResponseResultSchema` | `src/models/payouts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postPayouts

- **Signature**: `postPayouts(request: Payouts.PostPayoutsRequest, options?: RequestOptions): ApiPromise<PayoutsResponseResult, Payouts.PostPayoutsError>`
- **Wire**: `POST /payouts`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PayoutsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Payouts.PostPayoutsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payouts.PostPayoutsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `PayoutPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutPostRequest` | `payoutPostRequestSchema` | `src/models/payout-post-request.ts` |
| `PayoutsResponseResult` | `payoutsResponseResultSchema` | `src/models/payouts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putPayoutsId

- **Signature**: `putPayoutsId(request: Payouts.PutPayoutsIdRequest, options?: RequestOptions): ApiPromise<PayoutsResponseResult, Payouts.PutPayoutsIdError>`
- **Wire**: `PUT /payouts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PayoutsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Payouts.PutPayoutsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payouts.PutPayoutsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `PayoutPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutPutRequest` | `payoutPutRequestSchema` | `src/models/payout-put-request.ts` |
| `PayoutsResponseResult` | `payoutsResponseResultSchema` | `src/models/payouts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

