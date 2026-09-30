<!-- Generated file — do not edit; regenerated with the SDK. -->

# MerchantResults — operations

Accessor: `client.merchantResults` · Source: `src/resources/merchant-results.ts` · 2 operations · Request and error types: namespace `MerchantResults`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMerchantResults

- **Signature**: `getMerchantResults(request: MerchantResults.GetMerchantResultsRequest, options?: RequestOptions): ApiPromise<MerchantResultsResponseResult, MerchantResults.GetMerchantResultsError>`
- **Wire**: `GET /merchantResults`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MerchantResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `MerchantResults.GetMerchantResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantResults.GetMerchantResultsRequest` (7):

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
| `MerchantResultsResponseResult` | `merchantResultsResponseResultSchema` | `src/models/merchant-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getMerchantResultsId

- **Signature**: `getMerchantResultsId(request: MerchantResults.GetMerchantResultsIdRequest, options?: RequestOptions): ApiPromise<MerchantResultsResponseResult, MerchantResults.GetMerchantResultsIdError>`
- **Wire**: `GET /merchantResults/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MerchantResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `MerchantResults.GetMerchantResultsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantResults.GetMerchantResultsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantResultsResponseResult` | `merchantResultsResponseResultSchema` | `src/models/merchant-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

