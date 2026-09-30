<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentUpdateGroups — operations

Accessor: `client.paymentUpdateGroups` · Source: `src/resources/payment-update-groups.ts` · 2 operations · Request and error types: namespace `PaymentUpdateGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPaymentUpdateGroups

- **Signature**: `getPaymentUpdateGroups(request: PaymentUpdateGroups.GetPaymentUpdateGroupsRequest, options?: RequestOptions): ApiPromise<PaymentUpdateGroupsResponseResult, PaymentUpdateGroups.GetPaymentUpdateGroupsError>`
- **Wire**: `GET /paymentUpdateGroups`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentUpdateGroupsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `PaymentUpdateGroups.GetPaymentUpdateGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentUpdateGroups.GetPaymentUpdateGroupsRequest` (7):

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
| `PaymentUpdateGroupsResponseResult` | `paymentUpdateGroupsResponseResultSchema` | `src/models/payment-update-groups-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getPaymentUpdateGroupsId

- **Signature**: `getPaymentUpdateGroupsId(request: PaymentUpdateGroups.GetPaymentUpdateGroupsIdRequest, options?: RequestOptions): ApiPromise<PaymentUpdateGroupsResponseResult, PaymentUpdateGroups.GetPaymentUpdateGroupsIdError>`
- **Wire**: `GET /paymentUpdateGroups/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentUpdateGroupsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `PaymentUpdateGroups.GetPaymentUpdateGroupsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentUpdateGroups.GetPaymentUpdateGroupsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentUpdateGroupsResponseResult` | `paymentUpdateGroupsResponseResultSchema` | `src/models/payment-update-groups-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

