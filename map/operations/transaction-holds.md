<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransactionHolds — operations

Accessor: `client.transactionHolds` · Source: `src/resources/transaction-holds.ts` · 4 operations · Request and error types: namespace `TransactionHolds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getHolds

- **Signature**: `getHolds(request: TransactionHolds.GetHoldsRequest, options?: RequestOptions): ApiPromise<HoldsResponseResult, TransactionHolds.GetHoldsError>`
- **Wire**: `GET /holds`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HoldsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionHolds.GetHoldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionHolds.GetHoldsRequest` (7):

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
| `HoldsResponseResult` | `holdsResponseResultSchema` | `src/models/holds-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getHoldsId

- **Signature**: `getHoldsId(request: TransactionHolds.GetHoldsIdRequest, options?: RequestOptions): ApiPromise<HoldsResponseResult, TransactionHolds.GetHoldsIdError>`
- **Wire**: `GET /holds/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HoldsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionHolds.GetHoldsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionHolds.GetHoldsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HoldsResponseResult` | `holdsResponseResultSchema` | `src/models/holds-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postHolds

- **Signature**: `postHolds(request: TransactionHolds.PostHoldsRequest, options?: RequestOptions): ApiPromise<HoldsResponseResult, TransactionHolds.PostHoldsError>`
- **Wire**: `POST /holds`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `HoldsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionHolds.PostHoldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionHolds.PostHoldsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `HoldsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HoldsPostRequest` | `holdsPostRequestSchema` | `src/models/holds-post-request.ts` |
| `HoldsResponseResult` | `holdsResponseResultSchema` | `src/models/holds-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putHoldsId

- **Signature**: `putHoldsId(request: TransactionHolds.PutHoldsIdRequest, options?: RequestOptions): ApiPromise<HoldsResponseResult, TransactionHolds.PutHoldsIdError>`
- **Wire**: `PUT /holds/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `HoldsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionHolds.PutHoldsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionHolds.PutHoldsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `HoldsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HoldsPutRequest` | `holdsPutRequestSchema` | `src/models/holds-put-request.ts` |
| `HoldsResponseResult` | `holdsResponseResultSchema` | `src/models/holds-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

