<!-- Generated file — do not edit; regenerated with the SDK. -->

# DisputesApi — operations

Accessor: `client.disputesApi` · Source: `src/resources/disputes-api.ts` · 5 operations · Request and error types: namespace `DisputesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acceptDispute

- **Signature**: `acceptDispute(request: DisputesApi.AcceptDisputeRequest, options?: RequestOptions): ApiPromise<AcceptResponse, DisputesApi.AcceptDisputeError>`
- **Wire**: `POST /disputes/{id}/acceptance`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AcceptResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `DisputesApi.AcceptDisputeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputesApi.AcceptDisputeRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AcceptResponse` | `acceptResponseSchema` | `src/models/accept-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### challengeDispute

- **Signature**: `challengeDispute(request: DisputesApi.ChallengeDisputeRequest, options?: RequestOptions): ApiPromise<DisputesChallengeResponse, DisputesApi.ChallengeDisputeError>`
- **Wire**: `POST /disputes/{id}/challenge`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DisputesChallengeResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `DisputesApi.ChallengeDisputeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputesApi.ChallengeDisputeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `DisputesChallengeRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputesChallengeRequest` | `disputesChallengeRequestSchema` | `src/models/disputes-challenge-request.ts` |
| `DisputesChallengeResponse` | `disputesChallengeResponseSchema` | `src/models/disputes-challenge-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getDisputeDocument

- **Signature**: `getDisputeDocument(request: DisputesApi.GetDisputeDocumentRequest, options?: RequestOptions): ApiPromise<DisputesDocumentsResponse, DisputesApi.GetDisputeDocumentError>`
- **Wire**: `POST /disputes/{id}/documents/{doc_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DisputesDocumentsResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `DisputesApi.GetDisputeDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputesApi.GetDisputeDocumentRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `docId` | `path` | `doc_id` | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputesDocumentsResponse` | `disputesDocumentsResponseSchema` | `src/models/disputes-documents-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getDisputes

- **Signature**: `getDisputes(request?: DisputesApi.GetDisputesRequest, options?: RequestOptions): ApiPromise<DisputesResponse, DisputesApi.GetDisputesError>`
- **Wire**: `GET /disputes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisputesResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `DisputesApi.GetDisputesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputesApi.GetDisputesRequest` (16):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `5` |
| `order` | `query` | — | `DataDictionaryV1PaginationOrder` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"FROM_STAGE_TIME_CREATED"` |
| `arn` | `query` | — | `string` | no | — |
| `brand` | `query` | — | `BrandAuthenticationsPaymentMethodCardBrand` | no | — |
| `status` | `query` | — | `StatusDisputesStatus` | no | — |
| `stage` | `query` | — | `StageDisputesStage` | no | — |
| `fromStageTimeCreated` | `query` | `from_stage_time_created` | `string` (date) | no | — |
| `toStageTimeCreated` | `query` | `to_stage_time_created` | `string` (date) | no | — |
| `systemMid` | `query` | `system.mid` | `string` | no | — |
| `systemHierarchy` | `query` | `system.hierarchy` | `string` | no | — |
| `depositId` | `query` | `deposit_id` | `string` | no | — |
| `orderReference` | `query` | `order.reference` | `string` | no | — |
| `acquirerCode` | `query` | `acquirer_code` | `AcquirerCodeDisputesAcquirerCode` | no | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataDictionaryV1PaginationOrder` | `dataDictionaryV1PaginationOrderSchema` | `src/models/data-dictionary-v1-pagination-order.ts` |
| `BrandAuthenticationsPaymentMethodCardBrand` | `brandAuthenticationsPaymentMethodCardBrandSchema` | `src/models/brand-authentications-payment-method-card-brand.ts` |
| `StatusDisputesStatus` | `statusDisputesStatusSchema` | `src/models/status-disputes-status.ts` |
| `StageDisputesStage` | `stageDisputesStageSchema` | `src/models/stage-disputes-stage.ts` |
| `AcquirerCodeDisputesAcquirerCode` | `acquirerCodeDisputesAcquirerCodeSchema` | `src/models/acquirer-code-disputes-acquirer-code.ts` |
| `DisputesResponse` | `disputesResponseSchema` | `src/models/disputes-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getSingleDispute

- **Signature**: `getSingleDispute(request: DisputesApi.GetSingleDisputeRequest, options?: RequestOptions): ApiPromise<DisputesResponse1, DisputesApi.GetSingleDisputeError>`
- **Wire**: `GET /disputes/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisputesResponse1`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `DisputesApi.GetSingleDisputeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DisputesApi.GetSingleDisputeRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputesResponse1` | `disputesResponse1Schema` | `src/models/disputes-response1.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

