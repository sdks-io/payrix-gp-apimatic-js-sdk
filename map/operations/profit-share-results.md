<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProfitShareResults — operations

Accessor: `client.profitShareResults` · Source: `src/resources/profit-share-results.ts` · 2 operations · Request and error types: namespace `ProfitShareResults`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getProfitShareResults

- **Signature**: `getProfitShareResults(request: ProfitShareResults.GetProfitShareResultsRequest, options?: RequestOptions): ApiPromise<ProfitShareResultsResponseResult, ProfitShareResults.GetProfitShareResultsError>`
- **Wire**: `GET /profitShareResults`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProfitShareResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ProfitShareResults.GetProfitShareResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProfitShareResults.GetProfitShareResultsRequest` (7):

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
| `ProfitShareResultsResponseResult` | `profitShareResultsResponseResultSchema` | `src/models/profit-share-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getProfitShareResultsId

- **Signature**: `getProfitShareResultsId(request: ProfitShareResults.GetProfitShareResultsIdRequest, options?: RequestOptions): ApiPromise<ProfitShareResultsResponseResult, ProfitShareResults.GetProfitShareResultsIdError>`
- **Wire**: `GET /profitShareResults/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProfitShareResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ProfitShareResults.GetProfitShareResultsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProfitShareResults.GetProfitShareResultsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfitShareResultsResponseResult` | `profitShareResultsResponseResultSchema` | `src/models/profit-share-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

