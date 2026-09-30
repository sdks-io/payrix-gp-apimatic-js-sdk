<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConfirmationCodes — operations

Accessor: `client.confirmationCodes` · Source: `src/resources/confirmation-codes.ts` · 4 operations · Request and error types: namespace `ConfirmationCodes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteConfirmCodesId

- **Signature**: `deleteConfirmCodesId(request: ConfirmationCodes.DeleteConfirmCodesIdRequest, options?: RequestOptions): ApiPromise<ConfirmCodesResponseResult, ConfirmationCodes.DeleteConfirmCodesIdError>`
- **Wire**: `DELETE /confirmCodes/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConfirmCodesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ConfirmationCodes.DeleteConfirmCodesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConfirmationCodes.DeleteConfirmCodesIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmCodesResponseResult` | `confirmCodesResponseResultSchema` | `src/models/confirm-codes-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getConfirmCodes

- **Signature**: `getConfirmCodes(request: ConfirmationCodes.GetConfirmCodesRequest, options?: RequestOptions): ApiPromise<ConfirmCodesResponseResult, ConfirmationCodes.GetConfirmCodesError>`
- **Wire**: `GET /confirmCodes`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConfirmCodesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ConfirmationCodes.GetConfirmCodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConfirmationCodes.GetConfirmCodesRequest` (7):

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
| `ConfirmCodesResponseResult` | `confirmCodesResponseResultSchema` | `src/models/confirm-codes-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getConfirmCodesId

- **Signature**: `getConfirmCodesId(request: ConfirmationCodes.GetConfirmCodesIdRequest, options?: RequestOptions): ApiPromise<ConfirmCodesResponseResult, ConfirmationCodes.GetConfirmCodesIdError>`
- **Wire**: `GET /confirmCodes/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConfirmCodesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ConfirmationCodes.GetConfirmCodesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConfirmationCodes.GetConfirmCodesIdRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `search` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmCodesResponseResult` | `confirmCodesResponseResultSchema` | `src/models/confirm-codes-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postConfirmCodes

- **Signature**: `postConfirmCodes(request: ConfirmationCodes.PostConfirmCodesRequest, options?: RequestOptions): ApiPromise<ConfirmCodesResponseResult, ConfirmationCodes.PostConfirmCodesError>`
- **Wire**: `POST /confirmCodes`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConfirmCodesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ConfirmationCodes.PostConfirmCodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConfirmationCodes.PostConfirmCodesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `ConfirmCodesPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmCodesPostRequest` | `confirmCodesPostRequestSchema` | `src/models/confirm-codes-post-request.ts` |
| `ConfirmCodesResponseResult` | `confirmCodesResponseResultSchema` | `src/models/confirm-codes-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

