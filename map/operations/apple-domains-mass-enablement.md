<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppleDomainsMassEnablement — operations

Accessor: `client.appleDomainsMassEnablement` · Source: `src/resources/apple-domains-mass-enablement.ts` · 4 operations · Request and error types: namespace `AppleDomainsMassEnablement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postApplePayForCsv

- **Signature**: `postApplePayForCsv(request: AppleDomainsMassEnablement.PostApplePayForCsvRequest, options?: RequestOptions): ApiPromise<AppleDomainsMassEnablementCsvResponseResult, AppleDomainsMassEnablement.PostApplePayForCsvError>`
- **Wire**: `POST /entities/{id}/enableApplePayForCsv`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AppleDomainsMassEnablementCsvResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AppleDomainsMassEnablement.PostApplePayForCsvError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppleDomainsMassEnablement.PostApplePayForCsvRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AppleDomainsMassEnablementCsvResponseResult` | `appleDomainsMassEnablementCsvResponseResultSchema` | `src/models/apple-domains-mass-enablement-csv-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postApplePayForMerchantList

- **Signature**: `postApplePayForMerchantList(request: AppleDomainsMassEnablement.PostApplePayForMerchantListRequest, options?: RequestOptions): ApiPromise<AppleDomainsMassEnablementForMerchantList, AppleDomainsMassEnablement.PostApplePayForMerchantListError>`
- **Wire**: `POST /entities/{id}/enableApplePayForMerchantList`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AppleDomainsMassEnablementForMerchantList`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AppleDomainsMassEnablement.PostApplePayForMerchantListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppleDomainsMassEnablement.PostApplePayForMerchantListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `requestToken` | `header` | `request-token` | `string` | no |
| `token` | `header` | — | `string` | no |
| `body` | `body` | — | `ApplePayForMerchantListPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplePayForMerchantListPostRequest` | `applePayForMerchantListPostRequestSchema` | `src/models/apple-pay-for-merchant-list-post-request.ts` |
| `AppleDomainsMassEnablementForMerchantList` | `appleDomainsMassEnablementForMerchantListSchema` | `src/models/apple-domains-mass-enablement-for-merchant-list.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postApplePayForMerchantListDisable

- **Signature**: `postApplePayForMerchantListDisable(request: AppleDomainsMassEnablement.PostApplePayForMerchantListDisableRequest, options?: RequestOptions): ApiPromise<AppleDomainsMassEnablementForMerchantList, AppleDomainsMassEnablement.PostApplePayForMerchantListDisableError>`
- **Wire**: `POST /entities/{id}/disableApplePayForMerchantList`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AppleDomainsMassEnablementForMerchantList`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AppleDomainsMassEnablement.PostApplePayForMerchantListDisableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppleDomainsMassEnablement.PostApplePayForMerchantListDisableRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `requestToken` | `header` | `request-token` | `string` | no |
| `token` | `header` | — | `string` | no |
| `body` | `body` | — | `ApplePayForMerchantListPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplePayForMerchantListPostRequest` | `applePayForMerchantListPostRequestSchema` | `src/models/apple-pay-for-merchant-list-post-request.ts` |
| `AppleDomainsMassEnablementForMerchantList` | `appleDomainsMassEnablementForMerchantListSchema` | `src/models/apple-domains-mass-enablement-for-merchant-list.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postUpdateApplePayDomain

- **Signature**: `postUpdateApplePayDomain(request: AppleDomainsMassEnablement.PostUpdateApplePayDomainRequest, options?: RequestOptions): ApiPromise<UpdateApplePayDomainResponseResult, AppleDomainsMassEnablement.PostUpdateApplePayDomainError>`
- **Wire**: `POST /merchants/{id}/updateApplePayDomain`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateApplePayDomainResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AppleDomainsMassEnablement.PostUpdateApplePayDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppleDomainsMassEnablement.PostUpdateApplePayDomainRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `requestToken` | `header` | `request-token` | `string` | no |
| `token` | `header` | — | `string` | no |
| `body` | `body` | — | `UpdateApplePayDomainPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateApplePayDomainPostRequest` | `updateApplePayDomainPostRequestSchema` | `src/models/update-apple-pay-domain-post-request.ts` |
| `UpdateApplePayDomainResponseResult` | `updateApplePayDomainResponseResultSchema` | `src/models/update-apple-pay-domain-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

