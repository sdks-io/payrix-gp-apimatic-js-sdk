<!-- Generated file — do not edit; regenerated with the SDK. -->

# TokenResults — operations

Accessor: `client.tokenResults` · Source: `src/resources/token-results.ts` · 2 operations · Request and error types: namespace `TokenResults`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTokenResults

- **Signature**: `getTokenResults(request: TokenResults.GetTokenResultsRequest, options?: RequestOptions): ApiPromise<TokenResultsResponseResult, TokenResults.GetTokenResultsError>`
- **Wire**: `GET /tokenResults`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TokenResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TokenResults.GetTokenResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TokenResults.GetTokenResultsRequest` (7):

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
| `TokenResultsResponseResult` | `tokenResultsResponseResultSchema` | `src/models/token-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getTokenResultsId

- **Signature**: `getTokenResultsId(request: TokenResults.GetTokenResultsIdRequest, options?: RequestOptions): ApiPromise<TokenResultsResponseResult, TokenResults.GetTokenResultsIdError>`
- **Wire**: `GET /tokenResults/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TokenResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TokenResults.GetTokenResultsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TokenResults.GetTokenResultsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenResultsResponseResult` | `tokenResultsResponseResultSchema` | `src/models/token-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

