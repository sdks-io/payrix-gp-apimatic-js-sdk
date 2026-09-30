<!-- Generated file — do not edit; regenerated with the SDK. -->

# DisbursementResults — operations

Accessor: `client.disbursementResults` · Source: `src/resources/disbursement-results.ts` · 2 operations · Request and error types: namespace `DisbursementResults`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDisbursementResults

- **Signature**: `getDisbursementResults(request: DisbursementResults.GetDisbursementResultsRequest, options?: RequestOptions): ApiPromise<DisbursementResultsResponseResult, DisbursementResults.GetDisbursementResultsError>`
- **Wire**: `GET /disbursementResults`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisbursementResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `DisbursementResults.GetDisbursementResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisbursementResults.GetDisbursementResultsRequest` (7):

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
| `DisbursementResultsResponseResult` | `disbursementResultsResponseResultSchema` | `src/models/disbursement-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getDisbursementResultsId

- **Signature**: `getDisbursementResultsId(request: DisbursementResults.GetDisbursementResultsIdRequest, options?: RequestOptions): ApiPromise<DisbursementResultsResponseResult, DisbursementResults.GetDisbursementResultsIdError>`
- **Wire**: `GET /disbursementResults/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisbursementResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `DisbursementResults.GetDisbursementResultsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisbursementResults.GetDisbursementResultsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisbursementResultsResponseResult` | `disbursementResultsResponseResultSchema` | `src/models/disbursement-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

