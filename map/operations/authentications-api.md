<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthenticationsApi — operations

Accessor: `client.authenticationsApi` · Source: `src/resources/authentications-api.ts` · 5 operations · Request and error types: namespace `AuthenticationsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### check3DsAvailability

- **Signature**: `check3DsAvailability(request: AuthenticationsApi.Check3DsAvailabilityRequest, options?: RequestOptions): ApiPromise<CreateResponseAuthentications, AuthenticationsApi.Check3DsAvailabilityError>`
- **Wire**: `POST /authentications`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponseAuthentications`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `AuthenticationsApi.Check3DsAvailabilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationsApi.Check3DsAvailabilityRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `CreateRequestAuthentications` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateRequestAuthentications` | `createRequestAuthenticationsSchema` | `src/models/create-request-authentications.ts` |
| `CreateResponseAuthentications` | `createResponseAuthenticationsSchema` | `src/models/create-response-authentications.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### get3DsResult

- **Signature**: `get3DsResult(request: AuthenticationsApi.Get3DsResultRequest, options?: RequestOptions): ApiPromise<ResultResponse, AuthenticationsApi.Get3DsResultError>`
- **Wire**: `GET /authentications/{id}/result`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResultResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `AuthenticationsApi.Get3DsResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationsApi.Get3DsResultRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResultResponse` | `resultResponseSchema` | `src/models/result-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getListOfAuthentications

- **Signature**: `getListOfAuthentications(request?: AuthenticationsApi.GetListOfAuthenticationsRequest, options?: RequestOptions): ApiPromise<ListResponse, AuthenticationsApi.GetListOfAuthenticationsError>`
- **Wire**: `GET /authentications`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `AuthenticationsApi.GetListOfAuthenticationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"error501"` [501] no body · `"error502"` [502] no body · `"error504"` [504] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationsApi.GetListOfAuthenticationsRequest` (18):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `toTimeCreated` | `query` | `to_time_created` | `string` (date) | no | — |
| `fromTimeCreated` | `query` | `from_time_created` | `string` (date) | no | — |
| `id` | `query` | — | `string` | no | — |
| `amount` | `query` | — | `string` | no | — |
| `country` | `query` | — | `CountryAuthenticationsCountry` | no | — |
| `currency` | `query` | — | `CurrencyAuthenticationsCurrency` | no | — |
| `source` | `query` | — | `SourceAuthenticationsSource` | no | — |
| `threeDsDsTransRef` | `query` | `three_ds.ds_trans_ref` | `string` | no | — |
| `threeDsServerTransRef` | `query` | `three_ds.server_trans_ref` | `string` | no | — |
| `threeDsLiabilityShift` | `query` | `three_ds.liability_shift` | `LiabilityShiftAuthenticationsThreeDsLiabilityShift` | no | — |
| `threeDsAuthenticationValue` | `query` | `three_ds.authentication_value` | `string` | no | — |
| `threeDsEci` | `query` | `three_ds.eci` | `string` | no | — |
| `threeDsMessageVersion` | `query` | `three_ds.message_version` | `string` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `5` |
| `order` | `query` | — | `Order53` | no | `Order53.Desc` |
| `orderBy` | `query` | `order_by` | `string` | no | `"TIME_CREATED"` |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountryAuthenticationsCountry` | `countryAuthenticationsCountrySchema` | `src/models/country-authentications-country.ts` |
| `CurrencyAuthenticationsCurrency` | `currencyAuthenticationsCurrencySchema` | `src/models/currency-authentications-currency.ts` |
| `SourceAuthenticationsSource` | `sourceAuthenticationsSourceSchema` | `src/models/source-authentications-source.ts` |
| `LiabilityShiftAuthenticationsThreeDsLiabilityShift` | `liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema` | `src/models/liability-shift-authentications-three-ds-liability-shift.ts` |
| `Order53` | `order53Schema` | `src/models/order53.ts` |
| `ListResponse` | `listResponseSchema` | `src/models/list-response.ts` |

### getSingleAuthentication

- **Signature**: `getSingleAuthentication(request: AuthenticationsApi.GetSingleAuthenticationRequest, options?: RequestOptions): ApiPromise<SingleResponse, AuthenticationsApi.GetSingleAuthenticationError>`
- **Wire**: `GET /authentications/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SingleResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `AuthenticationsApi.GetSingleAuthenticationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"error501"` [501] no body · `"error502"` [502] no body · `"error504"` [504] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationsApi.GetSingleAuthenticationRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SingleResponse` | `singleResponseSchema` | `src/models/single-response.ts` |

### initiate3Ds

- **Signature**: `initiate3Ds(request: AuthenticationsApi.Initiate3DsRequest, options?: RequestOptions): ApiPromise<InitiateResponse, AuthenticationsApi.Initiate3DsError>`
- **Wire**: `POST /authentications/{id}/initiate`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InitiateResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `AuthenticationsApi.Initiate3DsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthenticationsApi.Initiate3DsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `InitiateRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `InitiateRequest` | `initiateRequestSchema` | `src/models/initiate-request.ts` |
| `InitiateResponse` | `initiateResponseSchema` | `src/models/initiate-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

