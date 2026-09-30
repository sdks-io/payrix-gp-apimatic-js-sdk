<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaxFormRequests — operations

Accessor: `client.taxFormRequests` · Source: `src/resources/tax-form-requests.ts` · 3 operations · Request and error types: namespace `TaxFormRequests`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTaxFormRequests

- **Signature**: `getTaxFormRequests(request: TaxFormRequests.GetTaxFormRequestsRequest, options?: RequestOptions): ApiPromise<TaxFormRequestsResponseResult, TaxFormRequests.GetTaxFormRequestsError>`
- **Wire**: `GET /taxFormRequests`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaxFormRequestsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TaxFormRequests.GetTaxFormRequestsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TaxFormRequests.GetTaxFormRequestsRequest` (7):

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
| `TaxFormRequestsResponseResult` | `taxFormRequestsResponseResultSchema` | `src/models/tax-form-requests-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTaxFormRequestsId

- **Signature**: `getTaxFormRequestsId(request: TaxFormRequests.GetTaxFormRequestsIdRequest, options?: RequestOptions): ApiPromise<TaxFormRequestsResponseResult, TaxFormRequests.GetTaxFormRequestsIdError>`
- **Wire**: `GET /taxFormRequests/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaxFormRequestsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TaxFormRequests.GetTaxFormRequestsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TaxFormRequests.GetTaxFormRequestsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaxFormRequestsResponseResult` | `taxFormRequestsResponseResultSchema` | `src/models/tax-form-requests-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postTaxFormRequests

- **Signature**: `postTaxFormRequests(request: TaxFormRequests.PostTaxFormRequestsRequest, options?: RequestOptions): ApiPromise<TaxFormRequestsResponseResult, TaxFormRequests.PostTaxFormRequestsError>`
- **Wire**: `POST /taxFormRequests`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaxFormRequestsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TaxFormRequests.PostTaxFormRequestsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TaxFormRequests.PostTaxFormRequestsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `TaxFormRequestsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaxFormRequestsPostRequest` | `taxFormRequestsPostRequestSchema` | `src/models/tax-form-requests-post-request.ts` |
| `TaxFormRequestsResponseResult` | `taxFormRequestsResponseResultSchema` | `src/models/tax-form-requests-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

