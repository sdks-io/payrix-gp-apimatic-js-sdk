<!-- Generated file — do not edit; regenerated with the SDK. -->

# MerchantPlatformStatuses — operations

Accessor: `client.merchantPlatformStatuses` · Source: `src/resources/merchant-platform-statuses.ts` · 2 operations · Request and error types: namespace `MerchantPlatformStatuses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMerchantPlatformStatuses

- **Signature**: `getMerchantPlatformStatuses(request: MerchantPlatformStatuses.GetMerchantPlatformStatusesRequest, options?: RequestOptions): ApiPromise<MerchantPlatformStatusesResponseResult, MerchantPlatformStatuses.GetMerchantPlatformStatusesError>`
- **Wire**: `GET /merchantPlatformStatuses`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MerchantPlatformStatusesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `MerchantPlatformStatuses.GetMerchantPlatformStatusesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantPlatformStatuses.GetMerchantPlatformStatusesRequest` (7):

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
| `MerchantPlatformStatusesResponseResult` | `merchantPlatformStatusesResponseResultSchema` | `src/models/merchant-platform-statuses-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getMerchantPlatformStatusesId

- **Signature**: `getMerchantPlatformStatusesId(request: MerchantPlatformStatuses.GetMerchantPlatformStatusesIdRequest, options?: RequestOptions): ApiPromise<MerchantPlatformStatusesResponseResult, MerchantPlatformStatuses.GetMerchantPlatformStatusesIdError>`
- **Wire**: `GET /merchantPlatformStatuses/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MerchantPlatformStatusesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `MerchantPlatformStatuses.GetMerchantPlatformStatusesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantPlatformStatuses.GetMerchantPlatformStatusesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantPlatformStatusesResponseResult` | `merchantPlatformStatusesResponseResultSchema` | `src/models/merchant-platform-statuses-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

