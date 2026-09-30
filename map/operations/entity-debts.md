<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntityDebts — operations

Accessor: `client.entityDebts` · Source: `src/resources/entity-debts.ts` · 2 operations · Request and error types: namespace `EntityDebts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEntityDebts

- **Signature**: `getEntityDebts(request: EntityDebts.GetEntityDebtsRequest, options?: RequestOptions): ApiPromise<EntityDebtsResponseResult, EntityDebts.GetEntityDebtsError>`
- **Wire**: `GET /entityDebts`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityDebtsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntityDebts.GetEntityDebtsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntityDebts.GetEntityDebtsRequest` (7):

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
| `EntityDebtsResponseResult` | `entityDebtsResponseResultSchema` | `src/models/entity-debts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getEntityDebtsId

- **Signature**: `getEntityDebtsId(request: EntityDebts.GetEntityDebtsIdRequest, options?: RequestOptions): ApiPromise<EntityDebtsResponseResult, EntityDebts.GetEntityDebtsIdError>`
- **Wire**: `GET /entityDebts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityDebtsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntityDebts.GetEntityDebtsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntityDebts.GetEntityDebtsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityDebtsResponseResult` | `entityDebtsResponseResultSchema` | `src/models/entity-debts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

