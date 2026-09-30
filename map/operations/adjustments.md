<!-- Generated file — do not edit; regenerated with the SDK. -->

# Adjustments — operations

Accessor: `client.adjustments` · Source: `src/resources/adjustments.ts` · 2 operations · Request and error types: namespace `Adjustments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAdjustments

- **Signature**: `getAdjustments(request: Adjustments.GetAdjustmentsRequest, options?: RequestOptions): ApiPromise<AdjustmentsResponseResult, Adjustments.GetAdjustmentsError>`
- **Wire**: `GET /adjustments`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdjustmentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Adjustments.GetAdjustmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Adjustments.GetAdjustmentsRequest` (7):

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
| `AdjustmentsResponseResult` | `adjustmentsResponseResultSchema` | `src/models/adjustments-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAdjustmentsId

- **Signature**: `getAdjustmentsId(request: Adjustments.GetAdjustmentsIdRequest, options?: RequestOptions): ApiPromise<AdjustmentsResponseResult, Adjustments.GetAdjustmentsIdError>`
- **Wire**: `GET /adjustments/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdjustmentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Adjustments.GetAdjustmentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Adjustments.GetAdjustmentsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdjustmentsResponseResult` | `adjustmentsResponseResultSchema` | `src/models/adjustments-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

