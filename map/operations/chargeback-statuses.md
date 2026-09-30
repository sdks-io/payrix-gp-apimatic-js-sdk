<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChargebackStatuses — operations

Accessor: `client.chargebackStatuses` · Source: `src/resources/chargeback-statuses.ts` · 2 operations · Request and error types: namespace `ChargebackStatuses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getChargebackStatuses

- **Signature**: `getChargebackStatuses(request: ChargebackStatuses.GetChargebackStatusesRequest, options?: RequestOptions): ApiPromise<ChargebackStatusesResponseResult, ChargebackStatuses.GetChargebackStatusesError>`
- **Wire**: `GET /chargebackStatuses`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargebackStatusesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChargebackStatuses.GetChargebackStatusesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebackStatuses.GetChargebackStatusesRequest` (7):

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
| `ChargebackStatusesResponseResult` | `chargebackStatusesResponseResultSchema` | `src/models/chargeback-statuses-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getChargebackStatusesId

- **Signature**: `getChargebackStatusesId(request: ChargebackStatuses.GetChargebackStatusesIdRequest, options?: RequestOptions): ApiPromise<ChargebackStatusesResponseResult, ChargebackStatuses.GetChargebackStatusesIdError>`
- **Wire**: `GET /chargebackStatuses/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargebackStatusesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChargebackStatuses.GetChargebackStatusesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebackStatuses.GetChargebackStatusesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargebackStatusesResponseResult` | `chargebackStatusesResponseResultSchema` | `src/models/chargeback-statuses-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

