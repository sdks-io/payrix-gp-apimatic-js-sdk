<!-- Generated file — do not edit; regenerated with the SDK. -->

# PinlessDebitConversions — operations

Accessor: `client.pinlessDebitConversions` · Source: `src/resources/pinless-debit-conversions.ts` · 2 operations · Request and error types: namespace `PinlessDebitConversions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPinlessDebitConversions

- **Signature**: `getPinlessDebitConversions(request: PinlessDebitConversions.GetPinlessDebitConversionsRequest, options?: RequestOptions): ApiPromise<PinlessDebitConversionsResponseResult, PinlessDebitConversions.GetPinlessDebitConversionsError>`
- **Wire**: `GET /pinlessDebitConversions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PinlessDebitConversionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `PinlessDebitConversions.GetPinlessDebitConversionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PinlessDebitConversions.GetPinlessDebitConversionsRequest` (7):

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
| `PinlessDebitConversionsResponseResult` | `pinlessDebitConversionsResponseResultSchema` | `src/models/pinless-debit-conversions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getPinlessDebitConversionsId

- **Signature**: `getPinlessDebitConversionsId(request: PinlessDebitConversions.GetPinlessDebitConversionsIdRequest, options?: RequestOptions): ApiPromise<PinlessDebitConversionsResponseResult, PinlessDebitConversions.GetPinlessDebitConversionsIdError>`
- **Wire**: `GET /pinlessDebitConversions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PinlessDebitConversionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `PinlessDebitConversions.GetPinlessDebitConversionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PinlessDebitConversions.GetPinlessDebitConversionsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PinlessDebitConversionsResponseResult` | `pinlessDebitConversionsResponseResultSchema` | `src/models/pinless-debit-conversions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

