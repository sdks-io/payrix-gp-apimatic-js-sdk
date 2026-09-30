<!-- Generated file — do not edit; regenerated with the SDK. -->

# FundOrigins — operations

Accessor: `client.fundOrigins` · Source: `src/resources/fund-origins.ts` · 2 operations · Request and error types: namespace `FundOrigins`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFundOrigins

- **Signature**: `getFundOrigins(request: FundOrigins.GetFundOriginsRequest, options?: RequestOptions): ApiPromise<FundOriginsResponseResult, FundOrigins.GetFundOriginsError>`
- **Wire**: `GET /fundOrigins`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FundOriginsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `FundOrigins.GetFundOriginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundOrigins.GetFundOriginsRequest` (7):

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
| `FundOriginsResponseResult` | `fundOriginsResponseResultSchema` | `src/models/fund-origins-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getFundOriginsId

- **Signature**: `getFundOriginsId(request: FundOrigins.GetFundOriginsIdRequest, options?: RequestOptions): ApiPromise<FundOriginsResponseResult, FundOrigins.GetFundOriginsIdError>`
- **Wire**: `GET /fundOrigins/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FundOriginsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `FundOrigins.GetFundOriginsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundOrigins.GetFundOriginsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundOriginsResponseResult` | `fundOriginsResponseResultSchema` | `src/models/fund-origins-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

