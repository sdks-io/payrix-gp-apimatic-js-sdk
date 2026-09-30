<!-- Generated file — do not edit; regenerated with the SDK. -->

# FraudSightResults — operations

Accessor: `client.fraudSightResults` · Source: `src/resources/fraud-sight-results.ts` · 2 operations · Request and error types: namespace `FraudSightResults`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFraudSightResults

- **Signature**: `getFraudSightResults(request: FraudSightResults.GetFraudSightResultsRequest, options?: RequestOptions): ApiPromise<FraudSightResultsResponseResult, FraudSightResults.GetFraudSightResultsError>`
- **Wire**: `GET /valueAddedServices/fraudSightResults`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FraudSightResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `FraudSightResults.GetFraudSightResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FraudSightResults.GetFraudSightResultsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page[number]` | `number` | no |
| `pageLimit` | `query` | `page[limit]` | `number` | no |
| `embed` | `query` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `search` | `header` | — | `string` | no |
| `totals` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FraudSightResultsResponseResult` | `fraudSightResultsResponseResultSchema` | `src/models/fraud-sight-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getFraudSightResultsId

- **Signature**: `getFraudSightResultsId(request: FraudSightResults.GetFraudSightResultsIdRequest, options?: RequestOptions): ApiPromise<FraudSightResultsResponseResult, FraudSightResults.GetFraudSightResultsIdError>`
- **Wire**: `GET /valueAddedServices/fraudSightResults/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FraudSightResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `FraudSightResults.GetFraudSightResultsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FraudSightResults.GetFraudSightResultsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FraudSightResultsResponseResult` | `fraudSightResultsResponseResultSchema` | `src/models/fraud-sight-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

