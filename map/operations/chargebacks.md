<!-- Generated file — do not edit; regenerated with the SDK. -->

# Chargebacks — operations

Accessor: `client.chargebacks` · Source: `src/resources/chargebacks.ts` · 2 operations · Request and error types: namespace `Chargebacks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getChargebacks

- **Signature**: `getChargebacks(request: Chargebacks.GetChargebacksRequest, options?: RequestOptions): ApiPromise<ChargebacksResponseResult, Chargebacks.GetChargebacksError>`
- **Wire**: `GET /chargebacks`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargebacksResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Chargebacks.GetChargebacksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Chargebacks.GetChargebacksRequest` (7):

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
| `ChargebacksResponseResult` | `chargebacksResponseResultSchema` | `src/models/chargebacks-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getChargebacksId

- **Signature**: `getChargebacksId(request: Chargebacks.GetChargebacksIdRequest, options?: RequestOptions): ApiPromise<ChargebacksResponseResult, Chargebacks.GetChargebacksIdError>`
- **Wire**: `GET /chargebacks/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargebacksResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Chargebacks.GetChargebacksIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Chargebacks.GetChargebacksIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargebacksResponseResult` | `chargebacksResponseResultSchema` | `src/models/chargebacks-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

