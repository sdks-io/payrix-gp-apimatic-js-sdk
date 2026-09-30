<!-- Generated file — do not edit; regenerated with the SDK. -->

# Merchants — operations

Accessor: `client.merchants` · Source: `src/resources/merchants.ts` · 3 operations · Request and error types: namespace `Merchants`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMerchants

- **Signature**: `getMerchants(request: Merchants.GetMerchantsRequest, options?: RequestOptions): ApiPromise<MerchantsResponseResult, Merchants.GetMerchantsError>`
- **Wire**: `GET /merchants`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MerchantsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Merchants.GetMerchantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Merchants.GetMerchantsRequest` (7):

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
| `MerchantsResponseResult` | `merchantsResponseResultSchema` | `src/models/merchants-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getMerchantsId

- **Signature**: `getMerchantsId(request: Merchants.GetMerchantsIdRequest, options?: RequestOptions): ApiPromise<MerchantsResponseResult, Merchants.GetMerchantsIdError>`
- **Wire**: `GET /merchants/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MerchantsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Merchants.GetMerchantsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Merchants.GetMerchantsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantsResponseResult` | `merchantsResponseResultSchema` | `src/models/merchants-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putMerchantsId

- **Signature**: `putMerchantsId(request: Merchants.PutMerchantsIdRequest, options?: RequestOptions): ApiPromise<MerchantsResponseResult, Merchants.PutMerchantsIdError>`
- **Wire**: `PUT /merchants/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MerchantsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Merchants.PutMerchantsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Merchants.PutMerchantsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `MerchantsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantsPutRequest` | `merchantsPutRequestSchema` | `src/models/merchants-put-request.ts` |
| `MerchantsResponseResult` | `merchantsResponseResultSchema` | `src/models/merchants-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

