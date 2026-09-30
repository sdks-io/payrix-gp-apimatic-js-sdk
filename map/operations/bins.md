<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bins — operations

Accessor: `client.bins` · Source: `src/resources/bins.ts` · 2 operations · Request and error types: namespace `Bins`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBins

- **Signature**: `getBins(request: Bins.GetBinsRequest, options?: RequestOptions): ApiPromise<BinsResponseResult, Bins.GetBinsError>`
- **Wire**: `GET /bins`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Bins.GetBinsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bins.GetBinsRequest` (7):

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
| `BinsResponseResult` | `binsResponseResultSchema` | `src/models/bins-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getBinsId

- **Signature**: `getBinsId(request: Bins.GetBinsIdRequest, options?: RequestOptions): ApiPromise<BinsResponseResult, Bins.GetBinsIdError>`
- **Wire**: `GET /bins/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Bins.GetBinsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bins.GetBinsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BinsResponseResult` | `binsResponseResultSchema` | `src/models/bins-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

