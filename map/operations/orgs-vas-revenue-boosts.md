<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrgsVasRevenueBoosts — operations

Accessor: `client.orgsVasRevenueBoosts` · Source: `src/resources/orgs-vas-revenue-boosts.ts` · 2 operations · Request and error types: namespace `OrgsVasRevenueBoosts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getOrgsVasRevenueBoosts

- **Signature**: `getOrgsVasRevenueBoosts(request: OrgsVasRevenueBoosts.GetOrgsVasRevenueBoostsRequest, options?: RequestOptions): ApiPromise<OrgsVasRevenueBoostsResponseResult, OrgsVasRevenueBoosts.GetOrgsVasRevenueBoostsError>`
- **Wire**: `GET /orgsVASRevenueBoosts`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrgsVasRevenueBoostsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OrgsVasRevenueBoosts.GetOrgsVasRevenueBoostsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrgsVasRevenueBoosts.GetOrgsVasRevenueBoostsRequest` (7):

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
| `OrgsVasRevenueBoostsResponseResult` | `orgsVasRevenueBoostsResponseResultSchema` | `src/models/orgs-vas-revenue-boosts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getOrgsVasRevenueBoostsId

- **Signature**: `getOrgsVasRevenueBoostsId(request: OrgsVasRevenueBoosts.GetOrgsVasRevenueBoostsIdRequest, options?: RequestOptions): ApiPromise<OrgsVasRevenueBoostsResponseResult, OrgsVasRevenueBoosts.GetOrgsVasRevenueBoostsIdError>`
- **Wire**: `GET /orgsVASRevenueBoosts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrgsVasRevenueBoostsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OrgsVasRevenueBoosts.GetOrgsVasRevenueBoostsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrgsVasRevenueBoosts.GetOrgsVasRevenueBoostsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgsVasRevenueBoostsResponseResult` | `orgsVasRevenueBoostsResponseResultSchema` | `src/models/orgs-vas-revenue-boosts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

