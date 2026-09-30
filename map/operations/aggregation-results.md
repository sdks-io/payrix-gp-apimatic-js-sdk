<!-- Generated file — do not edit; regenerated with the SDK. -->

# AggregationResults — operations

Accessor: `client.aggregationResults` · Source: `src/resources/aggregation-results.ts` · 3 operations · Request and error types: namespace `AggregationResults`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteAggregationResultsId

- **Signature**: `deleteAggregationResultsId(request: AggregationResults.DeleteAggregationResultsIdRequest, options?: RequestOptions): ApiPromise<AggregationResultsResponseResult, AggregationResults.DeleteAggregationResultsIdError>`
- **Wire**: `DELETE /aggregationResults/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AggregationResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AggregationResults.DeleteAggregationResultsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AggregationResults.DeleteAggregationResultsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregationResultsResponseResult` | `aggregationResultsResponseResultSchema` | `src/models/aggregation-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAggregationResults

- **Signature**: `getAggregationResults(request: AggregationResults.GetAggregationResultsRequest, options?: RequestOptions): ApiPromise<AggregationResultsResponseResult, AggregationResults.GetAggregationResultsError>`
- **Wire**: `GET /aggregationResults`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AggregationResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AggregationResults.GetAggregationResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AggregationResults.GetAggregationResultsRequest` (7):

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
| `AggregationResultsResponseResult` | `aggregationResultsResponseResultSchema` | `src/models/aggregation-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAggregationResultsId

- **Signature**: `getAggregationResultsId(request: AggregationResults.GetAggregationResultsIdRequest, options?: RequestOptions): ApiPromise<AggregationResultsResponseResult, AggregationResults.GetAggregationResultsIdError>`
- **Wire**: `GET /aggregationResults/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AggregationResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AggregationResults.GetAggregationResultsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AggregationResults.GetAggregationResultsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregationResultsResponseResult` | `aggregationResultsResponseResultSchema` | `src/models/aggregation-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

