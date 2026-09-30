<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChargebackMessages — operations

Accessor: `client.chargebackMessages` · Source: `src/resources/chargeback-messages.ts` · 3 operations · Request and error types: namespace `ChargebackMessages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getChargebackMessages

- **Signature**: `getChargebackMessages(request: ChargebackMessages.GetChargebackMessagesRequest, options?: RequestOptions): ApiPromise<ChargebackMessagesResponseResult, ChargebackMessages.GetChargebackMessagesError>`
- **Wire**: `GET /chargebackMessages`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargebackMessagesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChargebackMessages.GetChargebackMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebackMessages.GetChargebackMessagesRequest` (7):

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
| `ChargebackMessagesResponseResult` | `chargebackMessagesResponseResultSchema` | `src/models/chargeback-messages-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getChargebackMessagesId

- **Signature**: `getChargebackMessagesId(request: ChargebackMessages.GetChargebackMessagesIdRequest, options?: RequestOptions): ApiPromise<ChargebackMessagesResponseResult, ChargebackMessages.GetChargebackMessagesIdError>`
- **Wire**: `GET /chargebackMessages/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargebackMessagesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChargebackMessages.GetChargebackMessagesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebackMessages.GetChargebackMessagesIdRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `search` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargebackMessagesResponseResult` | `chargebackMessagesResponseResultSchema` | `src/models/chargeback-messages-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postChargebackMessages

- **Signature**: `postChargebackMessages(request: ChargebackMessages.PostChargebackMessagesRequest, options?: RequestOptions): ApiPromise<ChargebackMessagesResponseResult, ChargebackMessages.PostChargebackMessagesError>`
- **Wire**: `POST /chargebackMessages`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChargebackMessagesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChargebackMessages.PostChargebackMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebackMessages.PostChargebackMessagesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `ChargebackMessagePostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargebackMessagePostRequest` | `chargebackMessagePostRequestSchema` | `src/models/chargeback-message-post-request.ts` |
| `ChargebackMessagesResponseResult` | `chargebackMessagesResponseResultSchema` | `src/models/chargeback-messages-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

