<!-- Generated file — do not edit; regenerated with the SDK. -->

# Aggregations — operations

Accessor: `client.aggregations` · Source: `src/resources/aggregations.ts` · 5 operations · Request and error types: namespace `Aggregations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteAggregationsId

- **Signature**: `deleteAggregationsId(request: Aggregations.DeleteAggregationsIdRequest, options?: RequestOptions): ApiPromise<AggregationsResponseResult, Aggregations.DeleteAggregationsIdError>`
- **Wire**: `DELETE /aggregations/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AggregationsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Aggregations.DeleteAggregationsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Aggregations.DeleteAggregationsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `searchFilter` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregationsResponseResult` | `aggregationsResponseResultSchema` | `src/models/aggregations-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAggregations

- **Signature**: `getAggregations(request: Aggregations.GetAggregationsRequest, options?: RequestOptions): ApiPromise<AggregationsResponseResult, Aggregations.GetAggregationsError>`
- **Wire**: `GET /aggregations`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AggregationsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Aggregations.GetAggregationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Aggregations.GetAggregationsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page[number]` | `number` | no |
| `pageLimit` | `query` | `page[limit]` | `number` | no |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `searchFilter` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregationsResponseResult` | `aggregationsResponseResultSchema` | `src/models/aggregations-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAggregationsId

- **Signature**: `getAggregationsId(request: Aggregations.GetAggregationsIdRequest, options?: RequestOptions): ApiPromise<AggregationsResponseResult, Aggregations.GetAggregationsIdError>`
- **Wire**: `GET /aggregations/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AggregationsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Aggregations.GetAggregationsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Aggregations.GetAggregationsIdRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `searchFilter` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregationsResponseResult` | `aggregationsResponseResultSchema` | `src/models/aggregations-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postAggregations

- **Signature**: `postAggregations(request: Aggregations.PostAggregationsRequest, options?: RequestOptions): ApiPromise<AggregationsResponseResult, Aggregations.PostAggregationsError>`
- **Wire**: `POST /aggregations`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AggregationsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Aggregations.PostAggregationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Aggregations.PostAggregationsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `AggregationsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregationsPostRequest` | `aggregationsPostRequestSchema` | `src/models/aggregations-post-request.ts` |
| `AggregationsResponseResult` | `aggregationsResponseResultSchema` | `src/models/aggregations-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putAggregationsId

- **Signature**: `putAggregationsId(request: Aggregations.PutAggregationsIdRequest, options?: RequestOptions): ApiPromise<AggregationsResponseResult, Aggregations.PutAggregationsIdError>`
- **Wire**: `PUT /aggregations/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AggregationsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Aggregations.PutAggregationsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Aggregations.PutAggregationsIdRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `searchFilter` | `header` | — | `string` | no |
| `body` | `body` | — | `AggregationsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregationsPutRequest` | `aggregationsPutRequestSchema` | `src/models/aggregations-put-request.ts` |
| `AggregationsResponseResult` | `aggregationsResponseResultSchema` | `src/models/aggregations-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

