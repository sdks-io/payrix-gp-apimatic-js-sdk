<!-- Generated file — do not edit; regenerated with the SDK. -->

# BatchesSettlements — operations

Accessor: `client.batchesSettlements` · Source: `src/resources/batches-settlements.ts` · 4 operations · Request and error types: namespace `BatchesSettlements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBatches

- **Signature**: `getBatches(request: BatchesSettlements.GetBatchesRequest, options?: RequestOptions): ApiPromise<BatchesResponseResult, BatchesSettlements.GetBatchesError>`
- **Wire**: `GET /batches`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BatchesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `BatchesSettlements.GetBatchesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BatchesSettlements.GetBatchesRequest` (7):

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
| `BatchesResponseResult` | `batchesResponseResultSchema` | `src/models/batches-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getBatchesId

- **Signature**: `getBatchesId(request: BatchesSettlements.GetBatchesIdRequest, options?: RequestOptions): ApiPromise<BatchesResponseResult, BatchesSettlements.GetBatchesIdError>`
- **Wire**: `GET /batches/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BatchesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `BatchesSettlements.GetBatchesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BatchesSettlements.GetBatchesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchesResponseResult` | `batchesResponseResultSchema` | `src/models/batches-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postBatches

- **Signature**: `postBatches(request: BatchesSettlements.PostBatchesRequest, options?: RequestOptions): ApiPromise<BatchesResponseResult, BatchesSettlements.PostBatchesError>`
- **Wire**: `POST /batches`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `BatchesSettlements.PostBatchesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BatchesSettlements.PostBatchesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `BatchesPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchesPostRequest` | `batchesPostRequestSchema` | `src/models/batches-post-request.ts` |
| `BatchesResponseResult` | `batchesResponseResultSchema` | `src/models/batches-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putBatchesId

- **Signature**: `putBatchesId(request: BatchesSettlements.PutBatchesIdRequest, options?: RequestOptions): ApiPromise<BatchesResponseResult, BatchesSettlements.PutBatchesIdError>`
- **Wire**: `PUT /batches/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `BatchesSettlements.PutBatchesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BatchesSettlements.PutBatchesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `BatchesPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchesPutRequest` | `batchesPutRequestSchema` | `src/models/batches-put-request.ts` |
| `BatchesResponseResult` | `batchesResponseResultSchema` | `src/models/batches-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

