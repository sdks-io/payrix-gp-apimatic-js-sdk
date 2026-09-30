<!-- Generated file — do not edit; regenerated with the SDK. -->

# Disbursements — operations

Accessor: `client.disbursements` · Source: `src/resources/disbursements.ts` · 2 operations · Request and error types: namespace `Disbursements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDisbursements

- **Signature**: `getDisbursements(request: Disbursements.GetDisbursementsRequest, options?: RequestOptions): ApiPromise<DisbursementsResponseResult, Disbursements.GetDisbursementsError>`
- **Wire**: `GET /disbursements`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisbursementsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Disbursements.GetDisbursementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Disbursements.GetDisbursementsRequest` (7):

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
| `DisbursementsResponseResult` | `disbursementsResponseResultSchema` | `src/models/disbursements-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getDisbursementsId

- **Signature**: `getDisbursementsId(request: Disbursements.GetDisbursementsIdRequest, options?: RequestOptions): ApiPromise<DisbursementsResponseResult, Disbursements.GetDisbursementsIdError>`
- **Wire**: `GET /disbursements/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisbursementsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Disbursements.GetDisbursementsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Disbursements.GetDisbursementsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisbursementsResponseResult` | `disbursementsResponseResultSchema` | `src/models/disbursements-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

