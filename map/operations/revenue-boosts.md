<!-- Generated file — do not edit; regenerated with the SDK. -->

# RevenueBoosts — operations

Accessor: `client.revenueBoosts` · Source: `src/resources/revenue-boosts.ts` · 2 operations · Request and error types: namespace `RevenueBoosts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getRevenueBoosts

- **Signature**: `getRevenueBoosts(request: RevenueBoosts.GetRevenueBoostsRequest, options?: RequestOptions): ApiPromise<RevenueBoostsResponseResult, RevenueBoosts.GetRevenueBoostsError>`
- **Wire**: `GET /revenueBoosts`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RevenueBoostsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `RevenueBoosts.GetRevenueBoostsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RevenueBoosts.GetRevenueBoostsRequest` (6):

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
| `RevenueBoostsResponseResult` | `revenueBoostsResponseResultSchema` | `src/models/revenue-boosts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getRevenueBoostsId

- **Signature**: `getRevenueBoostsId(request: RevenueBoosts.GetRevenueBoostsIdRequest, options?: RequestOptions): ApiPromise<RevenueBoostsResponseResult, RevenueBoosts.GetRevenueBoostsIdError>`
- **Wire**: `GET /revenueBoosts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RevenueBoostsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `RevenueBoosts.GetRevenueBoostsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RevenueBoosts.GetRevenueBoostsIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `embed` | `query` | `string` | no |
| `token` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevenueBoostsResponseResult` | `revenueBoostsResponseResultSchema` | `src/models/revenue-boosts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

