<!-- Generated file — do not edit; regenerated with the SDK. -->

# SettlementReporting — operations

Accessor: `client.settlementReporting` · Source: `src/resources/settlement-reporting.ts` · 5 operations · Request and error types: namespace `SettlementReporting`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDepositList

- **Signature**: `getDepositList(request: SettlementReporting.GetDepositListRequest, options?: RequestOptions): ApiPromise<DepositsList, SettlementReporting.GetDepositListError>`
- **Wire**: `GET /settlement/deposits`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DepositsList`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `SettlementReporting.GetDepositListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Accounts"` [502] `UnknownPlatformError502Accounts` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementReporting.GetDepositListRequest` (14):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accountName` | `query` | `account_name` | `string` | yes | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `5` |
| `order` | `query` | — | `DataDictionaryV1PaginationOrder` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"TIME_CREATED"` |
| `fromTimeCreated` | `query` | `from_time_created` | `string` (date) | no | — |
| `toTimeCreated` | `query` | `to_time_created` | `string` (date) | no | — |
| `id` | `query` | — | `string` | no | — |
| `status` | `query` | — | `string` | no | — |
| `amount` | `query` | — | `string` | no | — |
| `maskedAccountNumberLast4` | `query` | `masked_account_number_last4` | `string` | no | — |
| `systemMid` | `query` | `system.mid` | `string` | no | — |
| `systemHierarchy` | `query` | `system.hierarchy` | `string` | no | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataDictionaryV1PaginationOrder` | `dataDictionaryV1PaginationOrderSchema` | `src/models/data-dictionary-v1-pagination-order.ts` |
| `DepositsList` | `depositsListSchema` | `src/models/deposits-list.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Accounts` | `unknownPlatformError502AccountsSchema` | `src/models/unknown-platform-error502-accounts.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getDepositSingle

- **Signature**: `getDepositSingle(request: SettlementReporting.GetDepositSingleRequest, options?: RequestOptions): ApiPromise<DepositsSingle, SettlementReporting.GetDepositSingleError>`
- **Wire**: `GET /settlement/deposits/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DepositsSingle`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `SettlementReporting.GetDepositSingleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Accounts"` [502] `UnknownPlatformError502Accounts` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementReporting.GetDepositSingleRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DepositsSingle` | `depositsSingleSchema` | `src/models/deposits-single.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Accounts` | `unknownPlatformError502AccountsSchema` | `src/models/unknown-platform-error502-accounts.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getMonthlyFeeReportList

- **Signature**: `getMonthlyFeeReportList(request: SettlementReporting.GetMonthlyFeeReportListRequest, options?: RequestOptions): ApiPromise<MonthlyFeeReportsList, SettlementReporting.GetMonthlyFeeReportListError>`
- **Wire**: `GET /settlement/reports/monthly-fees`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MonthlyFeeReportsList`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `SettlementReporting.GetMonthlyFeeReportListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Accounts"` [502] `UnknownPlatformError502Accounts` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementReporting.GetMonthlyFeeReportListRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accountName` | `query` | `account_name` | `string` | yes | — |
| `fromTimeCreated` | `query` | `from_time_created` | `string` | no | — |
| `toTimeCreated` | `query` | `to_time_created` | `string` | no | — |
| `systemMid` | `query` | `system.mid` | `string` | no | — |
| `systemHierarchy` | `query` | `system.hierarchy` | `string` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `5` |
| `order` | `query` | — | `Order53` | no | `Order53.Desc` |
| `orderBy` | `query` | `order_by` | `string` | no | `"TIME_CREATED"` |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order53` | `order53Schema` | `src/models/order53.ts` |
| `MonthlyFeeReportsList` | `monthlyFeeReportsListSchema` | `src/models/monthly-fee-reports-list.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Accounts` | `unknownPlatformError502AccountsSchema` | `src/models/unknown-platform-error502-accounts.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getSettledDisputes

- **Signature**: `getSettledDisputes(request: SettlementReporting.GetSettledDisputesRequest, options?: RequestOptions): ApiPromise<SettlementDisputesResponse, SettlementReporting.GetSettledDisputesError>`
- **Wire**: `GET /settlement/disputes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SettlementDisputesResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `SettlementReporting.GetSettledDisputesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Accounts"` [502] `UnknownPlatformError502Accounts` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementReporting.GetSettledDisputesRequest` (24):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accountName` | `query` | `account_name` | `string` | yes | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `5` |
| `order` | `query` | — | `DataDictionaryV1PaginationOrder` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"FROM_STAGE_TIME_CREATED"` |
| `arn` | `query` | — | `string` | no | — |
| `brand` | `query` | — | `BrandAuthenticationsPaymentMethodCardBrand` | no | — |
| `status` | `query` | — | `StatusSettlementDisputesStatus` | no | — |
| `stage` | `query` | — | `StageSettlementDisputesStage` | no | — |
| `fromStageTimeCreated` | `query` | `from_stage_time_created` | `string` (date) | no | — |
| `toStageTimeCreated` | `query` | `to_stage_time_created` | `string` (date) | no | — |
| `systemMid` | `query` | `system.mid` | `string` | no | — |
| `systemHierarchy` | `query` | `system.hierarchy` | `string` | no | — |
| `orderReference` | `query` | `order.reference` | `string` | no | — |
| `fromDepositTimeCreated` | `query` | `from_deposit_time_created` | `string` (date) | no | — |
| `toDepositTimeCreated` | `query` | `to_deposit_time_created` | `string` (date) | no | — |
| `id` | `query` | — | `string` | no | — |
| `depositId` | `query` | `deposit.id` | `string` | no | — |
| `brandReference` | `query` | `brand_reference` | `string` | no | — |
| `authcode` | `query` | — | `string` | no | — |
| `reference` | `query` | — | `string` | no | — |
| `numberFirst6` | `query` | `number_first6` | `string` | no | — |
| `numberLast4` | `query` | `number_last4` | `string` | no | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataDictionaryV1PaginationOrder` | `dataDictionaryV1PaginationOrderSchema` | `src/models/data-dictionary-v1-pagination-order.ts` |
| `BrandAuthenticationsPaymentMethodCardBrand` | `brandAuthenticationsPaymentMethodCardBrandSchema` | `src/models/brand-authentications-payment-method-card-brand.ts` |
| `StatusSettlementDisputesStatus` | `statusSettlementDisputesStatusSchema` | `src/models/status-settlement-disputes-status.ts` |
| `StageSettlementDisputesStage` | `stageSettlementDisputesStageSchema` | `src/models/stage-settlement-disputes-stage.ts` |
| `SettlementDisputesResponse` | `settlementDisputesResponseSchema` | `src/models/settlement-disputes-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Accounts` | `unknownPlatformError502AccountsSchema` | `src/models/unknown-platform-error502-accounts.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getSettledTransactions

- **Signature**: `getSettledTransactions(request: SettlementReporting.GetSettledTransactionsRequest, options?: RequestOptions): ApiPromise<SettlementTransactionsResponse, SettlementReporting.GetSettledTransactionsError>`
- **Wire**: `GET /settlement/transactions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SettlementTransactionsResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `SettlementReporting.GetSettledTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Accounts"` [502] `UnknownPlatformError502Accounts` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SettlementReporting.GetSettledTransactionsRequest` (71):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accountName` | `query` | `account_name` | `string` | yes | — |
| `type` | `query` | — | `TypeSettlementTransactionsType` | no | `TypeSettlementTransactionsType.Sale` |
| `amount` | `query` | — | `string` | no | — |
| `numberFirst6` | `query` | `number_first6` | `string` | no | — |
| `numberLast4` | `query` | `number_last4` | `string` | no | — |
| `brand` | `query` | — | `BrandAuthenticationsPaymentMethodCardBrand` | no | — |
| `brandReference` | `query` | `brand_reference` | `string` | no | — |
| `authcode` | `query` | — | `string` | no | — |
| `reference` | `query` | — | `string` | no | — |
| `status` | `query` | — | `StatusSettlementTransactionsStatus` | no | — |
| `fromTimeCreated` | `query` | `from_time_created` | `string` (date) | no | — |
| `toTimeCreated` | `query` | `to_time_created` | `string` (date) | no | — |
| `orderReference` | `query` | `order.reference` | `string` | no | — |
| `accountId` | `query` | `account_id` | `string` | no | — |
| `depositStatus` | `query` | `deposit_status` | `DepositStatusSettlementTransactionsDepositStatus` | no | — |
| `arn` | `query` | — | `string` | no | — |
| `depositId` | `query` | `deposit_id` | `string` | no | — |
| `fromDepositTimeCreated` | `query` | `from_deposit_time_created` | `string` (date) | no | — |
| `toDepositTimeCreated` | `query` | `to_deposit_time_created` | `string` (date) | no | — |
| `fromBatchTimeCreated` | `query` | `from_batch_time_created` | `string` (date) | no | — |
| `toBatchTimeCreated` | `query` | `to_batch_time_created` | `string` (date) | no | — |
| `fromTimeCreatedReference` | `query` | `from_time_created_reference` | `string` (date) | no | — |
| `toTimeCreatedReference` | `query` | `to_time_created_reference` | `string` (date) | no | — |
| `systemMid` | `query` | `system.mid` | `string` | no | — |
| `systemTid` | `query` | `system.tid` | `string` | no | — |
| `systemHierarchy` | `query` | `system.hierarchy` | `string` | no | — |
| `systemDba` | `query` | `system.dba` | `string` | no | — |
| `feesChargeType` | `query` | `fees.charge_type` | `string` | no | — |
| `feesTotalAmountDecimal` | `query` | `fees.total_amount_decimal` | `string` | no | — |
| `feesInterchangeProgram` | `query` | `fees.interchange.program` | `string` | no | — |
| `feesInterchangePerItemFlatAmountDecimal` | `query` | `fees.interchange.per_item_flat_amount_decimal` | `string` | no | — |
| `feesInterchangePerItemCalculatedAmountDecimal` | `query` | `fees.interchange.per_item_calculated_amount_decimal` | `string` | no | — |
| `feesInterchangePercentage` | `query` | `fees.interchange.percentage` | `string` | no | — |
| `feesInterchangePercentageAmountDecimal` | `query` | `fees.interchange.percentage_amount_decimal` | `string` | no | — |
| `feesInterchangeTotalRate` | `query` | `fees.interchange.total_rate` | `string` | no | — |
| `feesInterchangeTotalAmountDecimal` | `query` | `fees.interchange.total_amount_decimal` | `string` | no | — |
| `feesDiscountRate1Percentage` | `query` | `fees.discount.rate_1_percentage` | `string` | no | — |
| `feesDiscountRate2Percentage` | `query` | `fees.discount.rate_2_percentage` | `string` | no | — |
| `feesDiscountTotalAmountDecimal` | `query` | `fees.discount.total_amount_decimal` | `string` | no | — |
| `feesExchangeRate` | `query` | `fees.exchange_rate` | `string` | no | — |
| `feesAssessmentTotalAmountDecimal` | `query` | `fees.assessment_total_amount_decimal` | `string` | no | — |
| `feesAssessment1Description` | `query` | `fees.assessment_1.description` | `string` | no | — |
| `feesAssessment2Description` | `query` | `fees.assessment_2.description` | `string` | no | — |
| `feesAssessment3Description` | `query` | `fees.assessment_3.description` | `string` | no | — |
| `feesAssessment4Description` | `query` | `fees.assessment_4.description` | `string` | no | — |
| `feesAssessment5Description` | `query` | `fees.assessment_5.description` | `string` | no | — |
| `feesAssessment1Percentage` | `query` | `fees.assessment_1.percentage` | `string` | no | — |
| `feesAssessment2Percentage` | `query` | `fees.assessment_2.percentage` | `string` | no | — |
| `feesAssessment3Percentage` | `query` | `fees.assessment_3.percentage` | `string` | no | — |
| `feesAssessment4Percentage` | `query` | `fees.assessment_4.percentage` | `string` | no | — |
| `feesAssessment5Percentage` | `query` | `fees.assessment_5.percentage` | `string` | no | — |
| `feesAssessment1AmountDecimal` | `query` | `fees.assessment_1.amount_decimal` | `string` | no | — |
| `feesAssessment2AmountDecimal` | `query` | `fees.assessment_2.amount_decimal` | `string` | no | — |
| `feesAssessment3AmountDecimal` | `query` | `fees.assessment_3.amount_decimal` | `string` | no | — |
| `feesAssessment4AmountDecimal` | `query` | `fees.assessment_4.amount_decimal` | `string` | no | — |
| `feesAssessment5AmountDecimal` | `query` | `fees.assessment_5.amount_decimal` | `string` | no | — |
| `feesMarkUpDccPercentage` | `query` | `fees.mark_up.dcc_percentage` | `string` | no | — |
| `feesMarkUpMulticurrencyPercentage` | `query` | `fees.mark_up.multicurrency_percentage` | `string` | no | — |
| `feesFixedAmountDecimal` | `query` | `fees.fixed_amount_decimal` | `string` | no | — |
| `feesTaxAmountDecimal` | `query` | `fees.tax_amount_decimal` | `string` | no | — |
| `settlementCode` | `query` | `settlement_code` | `string` | no | — |
| `settlementTransactionReference` | `query` | `settlement_transaction_reference` | `string` | no | — |
| `merchantId` | `query` | `merchant_id` | `string` | no | — |
| `merchantName` | `query` | `merchant_name` | `string` | no | — |
| `merchantAmount` | `query` | `merchant_amount` | `string` | no | — |
| `chargeTypeRegion` | `query` | `charge_type_region` | `string` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `5` |
| `order` | `query` | — | `Order53` | no | `Order53.Desc` |
| `orderBy` | `query` | `order_by` | `string` | no | `"TIME_CREATED"` |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TypeSettlementTransactionsType` | `typeSettlementTransactionsTypeSchema` | `src/models/type-settlement-transactions-type.ts` |
| `BrandAuthenticationsPaymentMethodCardBrand` | `brandAuthenticationsPaymentMethodCardBrandSchema` | `src/models/brand-authentications-payment-method-card-brand.ts` |
| `StatusSettlementTransactionsStatus` | `statusSettlementTransactionsStatusSchema` | `src/models/status-settlement-transactions-status.ts` |
| `DepositStatusSettlementTransactionsDepositStatus` | `depositStatusSettlementTransactionsDepositStatusSchema` | `src/models/deposit-status-settlement-transactions-deposit-status.ts` |
| `Order53` | `order53Schema` | `src/models/order53.ts` |
| `SettlementTransactionsResponse` | `settlementTransactionsResponseSchema` | `src/models/settlement-transactions-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Accounts` | `unknownPlatformError502AccountsSchema` | `src/models/unknown-platform-error502-accounts.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

