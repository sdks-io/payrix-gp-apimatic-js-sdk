<!-- Generated file — do not edit; regenerated with the SDK. -->

# Consents — operations

Accessor: `client.consents` · Source: `src/resources/consents.ts` · 4 operations · Request and error types: namespace `Consents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelConsent

- **Signature**: `cancelConsent(request: Consents.CancelConsentRequest, options?: RequestOptions): ApiPromise<ConsentsCancelResponse, ApiError>`
- **Wire**: `POST /consents/{id}/cancel`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConsentsCancelResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Consents.CancelConsentRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `body` | `body` | — | `ConsentsCancelRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConsentsCancelRequest` | `consentsCancelRequestSchema` | `src/models/consents-cancel-request.ts` |
| `ConsentsCancelResponse` | `consentsCancelResponseSchema` | `src/models/consents-cancel-response.ts` |

### createConsent

- **Signature**: `createConsent(request?: Consents.CreateConsentRequest, options?: RequestOptions): ApiPromise<CreateResponse, Consents.CreateConsentError>`
- **Wire**: `POST /consents`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Consents.CreateConsentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Consents.CreateConsentRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `body` | `body` | — | `CreateRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateRequest` | `createRequestSchema` | `src/models/create-request.ts` |
| `CreateResponse` | `createResponseSchema` | `src/models/create-response.ts` |

### getConsent

- **Signature**: `getConsent(request: Consents.GetConsentRequest, options?: RequestOptions): ApiPromise<ConsentsResponse1, ApiError>`
- **Wire**: `GET /consents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConsentsResponse1`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Consents.GetConsentRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConsentsResponse1` | `consentsResponse1Schema` | `src/models/consents-response1.ts` |

### getConsentsList

- **Signature**: `getConsentsList(request: Consents.GetConsentsListRequest, options?: RequestOptions): ApiPromise<GetListResponse2, ApiError>`
- **Wire**: `GET /consents`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetListResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Consents.GetConsentsListRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fromTimeCreated` | `query` | `from_time_created` | `string` (date) | no |
| `toTimeCreated` | `query` | `to_time_created` | `string` (date) | no |
| `id` | `query` | — | `string` | no |
| `dba` | `query` | — | `string` | no |
| `tokenFormat` | `query` | `token_format` | `TokenFormatConsentsPaymentMethodDigitalWalletTokenFormat` | no |
| `providerReference` | `query` | `provider_reference` | `string` | no |
| `status` | `query` | — | `StatusConsentsStatus` | no |
| `amount` | `query` | — | `string` | no |
| `taxAmount` | `query` | `tax_amount` | `string` | no |
| `firstAmount` | `query` | `first_amount` | `string` | no |
| `paymentMethodDigitalWalletReference` | `query` | `payment_method.digital_wallet.reference` | `string` | no |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenFormatConsentsPaymentMethodDigitalWalletTokenFormat` | `tokenFormatConsentsPaymentMethodDigitalWalletTokenFormatSchema` | `src/models/token-format-consents-payment-method-digital-wallet-token-format.ts` |
| `StatusConsentsStatus` | `statusConsentsStatusSchema` | `src/models/status-consents-status.ts` |
| `GetListResponse2` | `getListResponse2Schema` | `src/models/get-list-response2.ts` |

