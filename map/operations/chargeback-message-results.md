<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChargebackMessageResults — operations

Accessor: `client.chargebackMessageResults` · Source: `src/resources/chargeback-message-results.ts` · 2 operations · Request and error types: namespace `ChargebackMessageResults`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getChargebackMessageResults

- **Signature**: `getChargebackMessageResults(request: ChargebackMessageResults.GetChargebackMessageResultsRequest, options?: RequestOptions): ApiPromise<ChargebackMessageResultsResponseResult, ChargebackMessageResults.GetChargebackMessageResultsError>`
- **Wire**: `GET /chargebackMessageResults`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargebackMessageResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChargebackMessageResults.GetChargebackMessageResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebackMessageResults.GetChargebackMessageResultsRequest` (7):

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
| `ChargebackMessageResultsResponseResult` | `chargebackMessageResultsResponseResultSchema` | `src/models/chargeback-message-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getChargebackMessageResultsId

- **Signature**: `getChargebackMessageResultsId(request: ChargebackMessageResults.GetChargebackMessageResultsIdRequest, options?: RequestOptions): ApiPromise<ChargebackMessageResultsResponseResult, ChargebackMessageResults.GetChargebackMessageResultsIdError>`
- **Wire**: `GET /chargebackMessageResults/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargebackMessageResultsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChargebackMessageResults.GetChargebackMessageResultsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebackMessageResults.GetChargebackMessageResultsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargebackMessageResultsResponseResult` | `chargebackMessageResultsResponseResultSchema` | `src/models/chargeback-message-results-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

