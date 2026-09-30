<!-- Generated file — do not edit; regenerated with the SDK. -->

# OmniTokens — operations

Accessor: `client.omniTokens` · Source: `src/resources/omni-tokens.ts` · 2 operations · Request and error types: namespace `OmniTokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getOmniTokens

- **Signature**: `getOmniTokens(request: OmniTokens.GetOmniTokensRequest, options?: RequestOptions): ApiPromise<OmniTokensResponseResult, OmniTokens.GetOmniTokensError>`
- **Wire**: `GET /omniTokens`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OmniTokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OmniTokens.GetOmniTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OmniTokens.GetOmniTokensRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page[number]` | `number` | no |
| `pageLimit` | `query` | `page[limit]` | `number` | no |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `search` | `header` | — | `string` | no |
| `totals` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OmniTokensResponseResult` | `omniTokensResponseResultSchema` | `src/models/omni-tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getOmniTokensId

- **Signature**: `getOmniTokensId(request: OmniTokens.GetOmniTokensIdRequest, options?: RequestOptions): ApiPromise<OmniTokensResponseResult, OmniTokens.GetOmniTokensIdError>`
- **Wire**: `GET /omniTokens/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OmniTokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OmniTokens.GetOmniTokensIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OmniTokens.GetOmniTokensIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `embed` | `query` | `string` | no |
| `token` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OmniTokensResponseResult` | `omniTokensResponseResultSchema` | `src/models/omni-tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

