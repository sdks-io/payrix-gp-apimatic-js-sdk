<!-- Generated file — do not edit; regenerated with the SDK. -->

# Merchants — operations

Accessor: `client.merchants` · Source: `src/resources/merchants.ts` · 6 operations · Request and error types: namespace `Merchants`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addressLookup

- **Signature**: `addressLookup(request: Merchants.AddressLookupRequest, options?: RequestOptions): ApiPromise<AddressLookupResponse, Merchants.AddressLookupError>`
- **Wire**: `GET /addresses`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AddressLookupResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Merchants.AddressLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Merchants.AddressLookupRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `postalCode` | `query` | `postal_code` | `string` | yes | — |
| `buildingNumber` | `query` | `building_number` | `string` | no | — |
| `buildingName` | `query` | `building_name` | `string` | no | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddressLookupResponse` | `addressLookupResponseSchema` | `src/models/address-lookup-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### boardMerchant

- **Signature**: `boardMerchant(request?: Merchants.BoardMerchantRequest, options?: RequestOptions): ApiPromise<CreateResponseMerchants, Merchants.BoardMerchantError>`
- **Wire**: `POST /merchants`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponseMerchants`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Merchants.BoardMerchantError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Merchants.BoardMerchantRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `MerchantsRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantsRequest` | `merchantsRequestSchema` | `src/models/merchants-request.ts` |
| `CreateResponseMerchants` | `createResponseMerchantsSchema` | `src/models/create-response-merchants.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### editMerchant

- **Signature**: `editMerchant(request: Merchants.EditMerchantRequest, options?: RequestOptions): ApiPromise<CreateResponseMerchants, Merchants.EditMerchantError>`
- **Wire**: `PATCH /merchants/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponseMerchants`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Merchants.EditMerchantError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Merchants.EditMerchantRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `EditRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EditRequest` | `editRequestSchema` | `src/models/edit-request.ts` |
| `CreateResponseMerchants` | `createResponseMerchantsSchema` | `src/models/create-response-merchants.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getMerchantSingle

- **Signature**: `getMerchantSingle(request: Merchants.GetMerchantSingleRequest, options?: RequestOptions): ApiPromise<MerchantsResponse2, Merchants.GetMerchantSingleError>`
- **Wire**: `GET /merchants/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MerchantsResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Merchants.GetMerchantSingleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Merchants.GetMerchantSingleRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantsResponse2` | `merchantsResponse2Schema` | `src/models/merchants-response2.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getMerchants

- **Signature**: `getMerchants(request?: Merchants.GetMerchantsRequest, options?: RequestOptions): ApiPromise<GetMerchantsListResponse2, Merchants.GetMerchantsError>`
- **Wire**: `GET /merchants`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMerchantsListResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Merchants.GetMerchantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Merchants.GetMerchantsRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `5` |
| `id` | `query` | — | `string` | no | — |
| `status` | `query` | — | `StatusMerchantsStatus` | no | — |
| `name` | `query` | — | `string` | no | — |
| `fromTimeCreated` | `query` | `from_time_created` | `string` (date) | no | — |
| `toTimeCreated` | `query` | `to_time_created` | `string` (date) | no | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusMerchantsStatus` | `statusMerchantsStatusSchema` | `src/models/status-merchants-status.ts` |
| `GetMerchantsListResponse2` | `getMerchantsListResponse2Schema` | `src/models/get-merchants-list-response2.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### uploadMerchantDocumentation

- **Signature**: `uploadMerchantDocumentation(request: Merchants.UploadMerchantDocumentationRequest, options?: RequestOptions): ApiPromise<DocumentsResponse2, Merchants.UploadMerchantDocumentationError>`
- **Wire**: `POST /merchants/{id}/documents`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocumentsResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Merchants.UploadMerchantDocumentationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Merchants.UploadMerchantDocumentationRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `DocumentsRequest2` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentsRequest2` | `documentsRequest2Schema` | `src/models/documents-request2.ts` |
| `DocumentsResponse2` | `documentsResponse2Schema` | `src/models/documents-response2.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

