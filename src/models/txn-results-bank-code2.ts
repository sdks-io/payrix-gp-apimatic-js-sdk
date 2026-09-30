import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Exact message code as received from the activation integration or from the processor for the
 * resulting transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `ACCEPTED_BUT_NOT_YET_PROCESSED` - **accepted_but_not_yet_processed**
 * - `ACCOUNT_BLOCKED` - **account_blocked**
 * - `ACCOUNT_IS_PURGED` - **account_is_purged**
 * - `ACCOUNT_LOCKED` - **account_locked**
 * - `ACCOUNT_ON_HOLD_OR_NOT_ACTIVE` - **account_on_hold_or_not_active**
 * - `ACCOUNT_NOT_ACTIVATED` - **account_not_activated**
 * - `ACCOUNT_RELOADS_EXCEEDED` - **account_reloads_exceeded**
 * - `ACCOUNT_ROW_LOCKED` - **account_row_locked**
 * - `ACCOUNT_STATUS_IS_VOID_LOCK` - **account_status_is_void_lock**
 * - `ACH_PAYMENT_NOT_ACCEPTED` - **ach_payment_not_accepted**
 * - `ACQUIRER_CHANNEL_UNAVAILABLE` - **acquirer_channel_unavailable**
 * - `ACTIVATION_FAILED` - **activation_failed**
 * - `ADDITIVE_LIMIT_EXCEEDED` - **additive_limit_exceeded**
 * - `ADDRESS_NO_MATCH` - **zip_match_address_mismatch**
 * - `ADDRESS_NOT_VERIFIED` - **zip_match_address_not_verified**
 * - `ALREADY_REDEEMED` - **already_redeemed**
 * - `ALREADY_REVERSED` - **already_reversed**
 * - `AMOUNT_LIMIT_EXCEEDED` - **amount_limit_exceeded**
 * - `AMOUNT_TOO_LARGE` - **amount_too_large**
 * - `APPROVE_WITH_ID` - **approve_with_id**
 * - `APPROVED` - **approved**
 * - `APPROVED_EMV_KEY_LOAD` - **approved_emv_key_load**
 * - `APPROVED_WITH_NO_CASH` - **approved_with_no_cash**
 * - `APPROVED_WITH_OVERDRAFT` - **approved_with_overdraft**
 * - `AUTHORIZATION_ID_NEEDED` - **authorization_id_needed**
 * - `BAD_ACCOUNT` - **bad_account**
 * - `BAD_CHECKSUM` - **bad_checksum**
 * - `BAD_CLOSE` - **bad_close**
 * - `BAD_MAG_STRIPE` - **bad_mag_stripe**
 * - `BAD_POST_DATE` - **bad_post_date**
 * - `BAD_REPAY_DATE` - **bad_repay_date**
 * - `BALANCE_NOT_AVAILABLE` - **balance_not_available**
 * - `BILL_TO_SHIP_TO_MISMATCH` - **bill_to_ship_to_mismatch**
 * - `BIN_BLOCKED` - **bin_blocked**
 * - `BLOCKED_BY_CARDHOLDER` - **blocked_by_cardholder**
 * - `BULK_ACTIVATION_ERROR` - **bulk_activation_error**
 * - `BULK_ACTIVATION_PACKAGE_AMOUNT_ERROR` - **bulk_activation_package_amount_error**
 * - `CALL_ACQUIRER` - **call_acquirer**
 * - `CALL_FOR_AUTHORIZATION` - **call_for_authorization**
 * - `CALL_ISSUER` - **call_issuer**
 * - `CALL_TELECHECK` - **call_telecheck**
 * - `CANNOT_FIND_NETWORK` - **cannot_find_network**
 * - `CARD_ALREADY_ACTIVE` - **card_already_active**
 * - `CARD_ALREADY_CLOSED` - **card_already_closed**
 * - `CARD_NOT_ACTIVE` - **card_not_active**
 * - `CARD_NOT_SUPPORTED` - **card_not_supported**
 * - `CARD_VELOCITY_AMOUNT_EXCEEDED` - **card_velocity_amount_exceeded**
 * - `CARD_VELOCITY_COUNT_EXCEEDED` - **card_velocity_count_exceeded**
 * - `CARD_VELOCITY_EXCEEDED` - **card_velocity_exceeded**
 * - `CASHBACK_GREATER_THAN_TRANSACTION_AMOUNT` - **cashback_greater_than_transaction_amount**
 * - `CASH_LIMIT_EXCEEDED` - **cash_limit_exceeded**
 * - `CENTER_CLOSED` - **center_closed**
 * - `CHECKER/MANAGER_NOT_FOUND` - **checker/manager_not_found**
 * - `CHIP_FAILURE` - **chip_failure**
 * - `CLOSE_UNAVAILABLE` - **close_unavailable**
 * - `CLOSE_NOT_VALID` - **close_not_valid**
 * - `CLOSED_ACCOUNT` - **closed_account**
 * - `COUNT_EXCEEDS_LIMIT` - **count_exceeds_limit**
 * - `COUNTERFEIT_CARD` - **counterfeit_card**
 * - `COUNTER_OFFER_TO_SUPPLY_PERSONAL_GUARANTY` - **counter_offer_to_supply_personal_guaranty**
 * - `CRYPTOGRAM_DECRYPTION_ERROR` - **cryptogram_decryption_error**
 * - `CRYPTO_BOX_IS_OFFLINE` - **crypto_box_is_offline**
 * - `CURRENCY_CONVERSION_COMPLETE` - **currency_conversion_complete**
 * - `CURRENCY_CONVERSION_ERROR` - **currency_conversion_error**
 * - `CURRENCY_NOT_SUPPORTED` - **currency_not_supported**
 * - `CUSTOMER_CANCELLATION` - **customer_cancellation**
 * - `CUSTOMER_OPT_OUT` - **customer_opt_out**
 * - `CUT_TIME_CLOSE_TO_1400` - **cut_time_close_to_1400**
 * - `CVV_DECLINED` - **cvv_declined**
 * - `CVV_FAILED` - **cvv_failed**
 * - `DAILY_LIMIT_EXCEEDED` - **daily_limit_exceeded**
 * - `DATE_OF_BIRTH_ERROR` - **date_of_birth_error**
 * - `DEBIT_GATEWAY_UNAVAILABLE` - **debit_gateway_unavailable**
 * - `DECLINED` - **declined**
 * - `DECLINED_DUE_TO_STAND_IN_RULES` - **declined_due_to_stand_in_rules**
 * - `DECONVERTED_BIN` - **deconverted_bin**
 * - `DO_NOT_HONOR` - **do_not_honor**
 * - `DO_NOT_TRY_AGAIN` - **do_not_try_again**
 * - `DO_NOT_TRY_AGAIN_SUBSEQUENT_MAY_CONTINUE` - **do_not_try_again_subsequent_may_continue**
 * - `DRIVERS_LICENSE_OR_ID_REQUIRED` - **drivers_license_or_id_required**
 * - `DUPLICATE_CAPTURE` - **duplicate_capture**
 * - `DUPLICATE_RETURN` - **duplicate_return**
 * - `DUPLICATE_REVERSAL` - **duplicate_reversal**
 * - `DUPLICATE_TRANSACTION` - **duplicate_transaction**
 * - `EDIT_HONOR` - **edit_honor**
 * - `EMAIL_NO_MATCH` - **email_no_match**
 * - `EMAIL_UNAVAILABLE` - **email_unavailable**
 * - `EMV_KEY_DOWNLOAD_ERROR` - **emv_key_download_error**
 * - `ENTER_LESSER_AMOUNT` - **enter_lesser_amount**
 * - `ERROR_PROCESSING_PIN_BLOCK` - **error_processing_pin_block**
 * - `EXCEEDS_GLOBAL_AMOUNT_FOR_PERIOD_PAY_INSIDE` - **exceeds_global_amount_for_period_pay_inside**
 * - `EXCEEDS_GLOBAL_COUNT_FOR_PERIOD_PAY_INSIDE` - **exceeds_global_count_for_period_pay_inside**
 * - `EXCEEDS_GLOBAL_LIMITS_FOR_PERIOD_PAY_INSIDE` - **exceeds_global_limits_for_period_pay_inside**
 * - `EXCEEDS_LIMIT` - **exceeds_limit**
 * - `EXCEEDS_MERCHANT_AMOUNT_FOR_PERIOD_PAY_INSIDE` -
 *   **exceeds_merchant_amount_for_period_pay_inside**
 * - `EXCEEDS_MERCHANT_COUNT_FOR_PERIOD_PAY_INSIDE` -
 *   **exceeds_merchant_count_for_period_pay_inside**
 * - `EXCEEDS_MERCHANT_LIMITS_FOR_PERIOD_PAY_INSIDE` -
 *   **exceeds_merchant_limits_for_period_pay_inside**
 * - `EXCEEDS_STATE_AMOUNT_FOR_PERIOD_PAY_INSIDE` - **exceeds_state_amount_for_period_pay_inside**
 * - `EXCEEDS_STATE_COUNT_FOR_PERIOD_PAY_INSIDE` - **exceeds_state_count_for_period_pay_inside**
 * - `EXCEEDS_STATE_LIMITS_FOR_PERIOD_PAY_INSIDE` - **exceeds_state_limits_for_period_pay_inside**
 * - `EXCEEDS_TRANSACTION_COUNT_OR_AMOUNT_LIMIT_IN_24_HOURS` -
 *   **exceeds_transaction_count_or_amount_limit_in_24_hours**
 * - `EXCEEDS_TRANSACTION_COUNT_OR_AMOUNT_LIMIT_IN_7_DAYS` -
 *   **exceeds_transaction_count_or_amount_limit_in_7_days**
 * - `EXCEEDS_TRANSACTION_COUNT_OR_AMOUNT_LIMIT_IN_30_DAYS` -
 *   **exceeds_transaction_count_or_amount_limit_in_30_days**
 * - `EXCEEDS_ZIP_CODE_AMOUNT_FOR_PERIOD_PAY_INSIDE` -
 *   **exceeds_zip_code_amount_for_period_pay_inside**
 * - `EXCEEDS_ZIP_CODE_COUNT_FOR_PERIOD_PAY_INSIDE` -
 *   **exceeds_zip_code_count_for_period_pay_inside**
 * - `EXCEEDS_ZIP_CODE_LIMITS_FOR_PERIOD_PAY_INSIDE` -
 *   **exceeds_zip_code_limits_for_period_pay_inside**
 * - `EXPIRED_CARD` - **expired_card**
 * - `EXPIRED_LOCK` - **expired_lock**
 * - `FRAUDULENT` - **fraudulent**
 * - `FILE_TEMPORARILY_UNAVAILABLE` - **file_temporarily_unavailable**
 * - `FILE_UPDATE_ERROR` - **file_update_error**
 * - `FILE_UPDATE_UNAVAILABLE` - **file_update_unavailable**
 * - `FORMAT_ERROR` - **format_error**
 * - `FORWARD_TO_ISSUER` - **forward_to_issuer**
 * - `FUEL_LIMIT_EXCEEDED` - **fuel_limit_exceeded**
 * - `FUEL_ONLY` - **fuel_only**
 * - `FUEL_PRICE_ERROR` - **fuel_price_error**
 * - `FULL_SSN_REQUIRED` - **full_ssn_required**
 * - `FUNCTION_NOT_SUPPORTED` - **function_not_supported**
 * - `FUNDS_ON_HOLD` - **funds_on_hold**
 * - `GENERAL` - **general**
 * - `GENERAL_ERROR` - **general_error**
 * - `GENERIC_DECLINE` - **generic_decline**
 * - `HARD_CAPTURE_PICKUP_CARD` - **hard_capture_pickup_card**
 * - `HARD_NEGATIVE_INFO_ON_FILE` - **hard_negative_info_on_file**
 * - `HIGH_RISK` - **high_risk**
 * - `HOLD_SHIPPING_FOR_24H` - **hold_shipping_for_24h**
 * - `HONOR_WITH_AUTHENTICATION` - **honor_with_authentication**
 * - `ILLEGAL_TRANSACTION` - **illegal_transaction**
 * - `IMPRINT_CARD` - **imprint_card**
 * - `INCORRECT_CVV` - **incorrect_cvv**
 * - `INCORRECT_NUMBER` - **incorrect_number**
 * - `INCORRECT_PIN` - **incorrect_pin**
 * - `INCORRECT_MERCHANT_LOCATION` - **incorrect_merchant_location**
 * - `INCORRECT_TRANSACTION_VERSION` - **incorrect_transaction_version**
 * - `INQUIRY_DECLINED` - **inquiry_declined**
 * - `INSUFFICIENT_DATA` - **insufficient_data**
 * - `INSUFFICIENT_FUNDS` - **insufficient_funds**
 * - `INSUFFICIENT_SECURITY` - **insufficient_security**
 * - `INTERNET_ACCESS_DISABLED` - **internet_access_disabled**
 * - `INVALID_3D_PASSWORD` - **invalid_3d_password**
 * - `INVALID_ACCOUNT` - **invalid_account**
 * - `INVALID_ACCOUNT/DATE` - **invalid_account/date**
 * - `INVALID_ACCOUNT_TYPE` - **invalid_account_type**
 * - `INVALID_ACTIVATE` - **invalid_activate**
 * - `INVALID_AMOUNT` - **invalid_amount**
 * - `INVALID_AUTHORIZATION_CODE` - **invalid_authorization_code**
 * - `INVALID_BATCH_NUMBER/ID` - **invalid_batch_number/id**
 * - `INVALID_CASHBACK` - **invalid_cashback**
 * - `INVALID_CHECKING_ACCOUNT` - **invalid_checking_account**
 * - `INVALID_CHECKING_ACCOUNT_NUMBER` - **invalid_checking_account_number**
 * - `INVALID_CLERK` - **invalid_clerk**
 * - `INVALID_CREDIT_ACCOUNT` - **invalid_credit_account**
 * - `INVALID_CURRENCY` - **invalid_currency**
 * - `INVALID_CVV` - **invalid_cvv**
 * - `INVALID_DATE_OR_TIME` - **invalid_date_or_time**
 * - `INVALID_DRIVER` - **invalid_driver**
 * - `INVALID_EAN_OR_SCV` - **invalid_ean_or_scv**
 * - `INVALID_EFFECTIVE_DATE` - **invalid_effective_date**
 * - `INVALID_EMAIL_ADDRESS` - **invalid_email_address**
 * - `INVALID_ENTRY` - **invalid_entry**
 * - `INVALID_EXPIRY_DATE` - **invalid_expiry_date**
 * - `INVALID_EXPIRY_YEAR` - **invalid_expiry_year**
 * - `INVALID_HOST` - **invalid_host**
 * - `INVALID_LOCATION` - **invalid_location**
 * - `INVALID_MAIDEN_NAME` - **invalid_maiden_name**
 * - `INVALID_MCC` - **invalid_mcc**
 * - `INVALID_MERCHANT` - **invalid_merchant**
 * - `INVALID_MERCHANT_ID` - **invalid_merchant_id**
 * - `INVALID_MERCHANT_ID/SE` - **invalid_merchant_id/se**
 * - `INVALID_MERCHANT_SETUP` - **invalid_merchant_setup**
 * - `INVALID_MICR_DATA` - **invalid_micr_data**
 * - `INVALID_NEW_PASSWORD` - **invalid_new_password**
 * - `INVALID_NOT_PRESENT` - **invalid_not_present**
 * - `INVALID_NUMBER` - **invalid_number**
 * - `INVALID_ODOMETER` - **invalid_odometer**
 * - `INVALID_PASSWORD` - **invalid_password**
 * - `INVALID_PIN` - **invalid_pin**
 * - `INVALID_POS` - **invalid_pos**
 * - `INVALID_PREAPPROVAL_NUMBER` - **invalid_preapproval_number**
 * - `INVALID_PREFIX` - **invalid_prefix**
 * - `INVALID_PRODUCT` - **invalid_product**
 * - `INVALID_PROMPT_ENTRY` - **invalid_prompt_entry**
 * - `INVALID_REQUEST` - **invalid_request**
 * - `INVALID_RESPONSE` - **invalid_response**
 * - `INVALID_RESPONSE_DATE` - **invalid_response_date**
 * - `INVALID_RESTRICTION_CODE` - **invalid_restriction_code**
 * - `INVALID_SAVINGS_ACCOUNT` - **invalid_savings_account**
 * - `INVALID_SECURE_PAYMENT_DATA` - **invalid_secure_payment_data**
 * - `INVALID_SKU` - **invalid_sku**
 * - `INVALID_SSN` - **invalid_ssn**
 * - `INVALID_STATE_CODE` - **invalid_state_code**
 * - `INVALID_STATUS_CHANGE` - **invalid_status_change**
 * - `INVALID_TERMINAL` - **invalid_terminal**
 * - `INVALID_TGN_CIC` - **invalid_tgn_cic**
 * - `INVALID_TIMEZONE` - **invalid_timezone**
 * - `INVALID_TPPID` - **invalid_tppid**
 * - `INVALID_TRACK_DATA` - **invalid_track_data**
 * - `INVALID_TRANSACTION` - **invalid_transaction**
 * - `INVALID_TRANSARMOR_TRANSACTION` - **invalid_transarmor_transaction**
 * - `INVALID_USER` - **invalid_user**
 * - `INVALID_VALUE_IN_THE_FIELD` - **invalid_value_in_the_field**
 * - `INVALID_VEHICLE` - **invalid_vehicle**
 * - `INVALID_VOID_OF_ACTIVATION` - **invalid_void_of_activation**
 * - `INVALID_ZIP_CODE` - **invalid_zip_code**
 * - `ISSUANCE_UNDER_MINIMUM_AMOUNT` - **issuance_under_minimum_amount**
 * - `ISSUER_NOT_AVAILABLE` - **issuer_not_available**
 * - `ISSUER_PROCESSOR_OR_SWITCH_NOT_AVAILABLE` - **issuer_processor_or_switch_not_available**
 * - `ISSUER_SPECIAL_CONDITIONS` - **issuer_special_conditions**
 * - `ISSUER_VELOCITY_AMOUNT_EXCEEDED` - **issuer_velocity_amount_exceeded**
 * - `ISSUER_VELOCITY_COUNT_EXCEEDED` - **issuer_velocity_count_exceeded**
 * - `LATE_REVERSAL` - **late_reversal**
 * - `LAW_VIOLATION` - **law_violation**
 * - `LIMIT_CHECK_FAILED` - **limit_check_failed**
 * - `LOST_CARD` - **lost_card**
 * - `MAIDEN_NAME_UNAVAILABLE` - **maiden_name_unavailable**
 * - `MANUAL_TRIES_EXCEEDED` - **manual_tries_exceeded**
 * - `MATCH` - **match**
 * - `MAX_BALANCE_EXCEEDED` - **max_balance_exceeded**
 * - `MERCHANT_DEPLETED` - **merchant_depleted**
 * - `MERCHANT_HAS_MAIL_PENDING` - **merchant_has_mail_pending**
 * - `MESSAGE_FORMAT_ERROR` - **message_format_error**
 * - `MINUS2_DEBIT` - **minus2_debit**
 * - `MISSING_CONDITIONAL_DATA` - **missing_conditional_data**
 * - `MISSING_CUSTOMER_SERVICE_PHONE` - **missing_customer_service_phone**
 * - `MISSING_FROM_ACCOUNT` - **missing_from_account**
 * - `MISSING_TO_ACCOUNT` - **missing_to_account**
 * - `MULTI_CURRENCY_DCC_FAIL` - **multi_currency_dcc_fail**
 * - `MULTI_CURRENCY_INVERT_FAIL` - **multi_currency_invert_fail**
 * - `MULTIPLE_ACCOUNTS_FOR_TYPE` - **multiple_accounts_for_type**
 * - `NAME_EMAIL_NO_MATCH` - **name_email_no_match**
 * - `NAME_EMAIL_UNAVAILABLE` - **name_email_unavailable**
 * - `NAME_NO_MATCH` - **name_no_match**
 * - `NAME_PHONE_NO_MATCH` - **name_phone_no_match**
 * - `NAME_PHONE_UNAVAILABLE` - **name_phone_unavailable**
 * - `NAME_UNAVAILABLE` - **name_unavailable**
 * - `NEGATIVE_FILE_EXCEPTION` - **negative_file_exception**
 * - `NEW_ACCOUNT_INFORMATION_AVAILABLE` - **new_account_information_available**
 * - `NEW_CARD_ISSUED` - **new_card_issued**
 * - `NEW_PASSWORD_REQUIRED` - **new_password_required**
 * - `NO_ACCOUNT_LINK` - **no_account_link**
 * - `NO_ACTION_TAKEN` - **no_action_taken**
 * - `NO_CARD_RECORD` - **no_card_record**
 * - `NO_CHAIN_ID` - **no_chain_id**
 * - `NO_CHECKING_ACCOUNT` - **no_checking_account**
 * - `NO_MATCH` - **mismatch**
 * - `NO_MESSAGES_PENDING` - **no_messages_pending**
 * - `NO_OPEN_BATCH` - **no_open_batch**
 * - `NO_PHONE_SERVICE` - **no_phone_service**
 * - `NO_PREVIOUS_TRANSACTION` - **no_previous_transaction**
 * - `NO_REASON_TO_DECLINE` - **no_reason_to_decline**
 * - `NO_SAVINGS_ACCOUNT` - **no_savings_account**
 * - `NO_SUCH_ISSUER` - **no_such_issuer**
 * - `NO_TO_ACCOUNT` - **no_to_account**
 * - `NO_TRANSACTIONS_AVAILABLE` - **no_transactions_available**
 * - `NO_TRANSACTION_SECURITY_RECORD` - **no_transaction_security_record**
 * - `NOT_ACCEPTED` - ** not_accepted**
 * - `NOT_ACTIVE` - **not_active**
 * - `NOT_LOST_OR_STOLEN` - **not_lost_or_stolen**
 * - `NOT_ON_FILE` - **not_on_file**
 * - `NOT_PERMITTED` - **not_permitted**
 * - `NOT_PERFORMED` - **not_performed**
 * - `NOT_PROCESSED` - **not_processed**
 * - `NOT_SUPPORTED` - **not_supported**
 * - `NSF` - **nsf**
 * - `ONE_TIME_STOP_PAYMENT` - **one_time_stop_payment**
 * - `ORIGINAL_AUTHORIZATION_MISMATCH` - **original_authorization_mismatch**
 * - `ORIGINAL_AUTHORIZATION_NOT_FOUND` - **original_authorization_not_found**
 * - `ORIGINAL_REPEATED` - **original_repeated**
 * - `ORIGINAL_TRANSACTION_NOT_APPROVED` - **original_transaction_not_approved**
 * - `OVER_CHAIN_DAILY_VELOCITY_AMOUNT` - **over_chain_daily_velocity_amount**
 * - `OVER_CHAIN_DAILY_VELOCITY_COUNT` - **over_chain_daily_velocity_count**
 * - `OVER_CHAIN_DAILY_VELOCITY_LIMITS` - **over_chain_daily_velocity_limits**
 * - `OVER_CHAIN_PRODUCT_VELOCITY_AMOUNT` - **over_chain_product_velocity_amount**
 * - `OVER_CHAIN_PRODUCT_VELOCITY_COUNT` - **over_chain_product_velocity_count**
 * - `OVER_CHAIN_PRODUCT_VELOCITY_LIMITS` - **over_chain_product_velocity_limits**
 * - `OVER_MAX_BALANCE` - **over_max_balance**
 * - `OVER_MERCHANDISE_LIMIT` - **over_merchandise_limit**
 * - `OVER_MERCHANT_DAILY_VELOCITY_AMOUNT` - **over_merchant_daily_velocity_amount**
 * - `OVER_MERCHANT_DAILY_VELOCITY_COUNT` - **over_merchant_daily_velocity_count**
 * - `OVER_MERCHANT_DAILY_VELOCITY_LIMITS` - **over_merchant_daily_velocity_limits**
 * - `OVER_MERCHANT_PRODUCT_VELOCITY_AMOUNT` - **over_merchant_product_velocity_amount**
 * - `OVER_MERCHANT_PRODUCT_VELOCITY_COUNT` - **over_merchant_product_velocity_count**
 * - `OVER_MERCHANT_PRODUCT_VELOCITY_LIMITS` - **over_merchant_product_velocity_limits**
 * - `OVER_MONTHLY_LIMIT` - **over_monthly_limit**
 * - `OVER_NON_FUEL_LIMIT` - **over_non_fuel_limit**
 * - `PAN_TRANS_ERROR` - **pan_trans_error**
 * - `PARTIAL_AUTH_NOT_ALLOWED` - **partial_auth_not_allowed**
 * - `PARTIAL_REVERSAL` - **partial_reversal**
 * - `PARTIALLY_APPROVED` - **partially_approved**
 * - `PASSWORD_RETRIES_EXCEEDED` - **password_retries_exceeded**
 * - `PAY_AT_PUMP_NOT_ALLOWED` - **pay_at_pump_not_allowed**
 * - `PHONE_EMAIL_NO_MATCH` - **phone_email_no_match**
 * - `PHONE_EMAIL_UNAVAILABLE` - **phone_email_unavailable**
 * - `PHONE_NO_MATCH` - **phone_no_match**
 * - `PHONE_UNAVAILABLE` - **phone_unavailable**
 * - `PICKUP_CARD` - **pickup_card**
 * - `PIN_ALREADY_EXISTS` - **pin_already_exists**
 * - `PIN_KEY_ERROR` - **pin_key_error**
 * - `PIN_KEY_SYNCHRONIZATION_ERROR` - **pin_key_sychronization_error**
 * - `PIN_TRY_EXCEEDED` - **pin_try_exceeded**
 * - `PLEASE_RETRY` - **please_retry**
 * - `PROCESS_AS_DEBIT` - **process_as_debit**
 * - `PROCESSING_ERROR` - **processing_error**
 * - `PRODUCT_CODE_RESTRICTED` - **product_code_restricted**
 * - `PROMO_LOCATION_RESTRICTED` - **promo_location_restricted**
 * - `QUANTITY_EXCEEDED` - **quantity_exceeded**
 * - `REAUTHORIZATION_TIMEFRAME_EXPIRED` - **reauthorization_timeframe_expired**
 * - `RECHARGE_AMOUNT_EXCEEDED` - **recharge_amount_exceeded**
 * - `RECHARGE_COUNT_EXCEEDED` - **recharge_count_exceeded**
 * - `REENTER_TRANSACTION` - **reenter_transaction**
 * - `REFERRAL` - **referral**
 * - `REJECT_MESSAGE` - **reject_message**
 * - `REJECTED_LOST/STOLEN_CHECKS` - **rejected_lost/stolen_checks**
 * - `REPAIR_LIMIT_EXCEEDED` - **repair_limit_exceeded**
 * - `REQUEST_IN_PROGRESS` - **request_in_progress**
 * - `RESPONSE_RECEIVED_LATE` - **response_received_late**
 * - `RESTRICTED_CARD` - **restricted_card**
 * - `RESUBMISSION_VIOLATES_NETWORK_FREQUENCY` - **resubmission_violates_network_frequency**
 * - `RETAIN_CARD` - **retain_card**
 * - `REVERSAL` - **reversal**
 * - `REVERSAL_NO_MATCH` - **reversal_no_match**
 * - `REVERSAL_UNSUCCESSFUL` - **reversal_unsuccessful**
 * - `REVOCATION_OF_ALL_AUTHORIZATIONS` - **revocation_of_all_authorizations**
 * - `REVOCATION_OF_AUTHORIZATION` - **revocation_of_authorization**
 * - `SECURE_CODE_NOT_ENABLED` - **secure_code_not_enabled**
 * - `SECURITY_ERROR` - **security_error**
 * - `SECURITY_ERROR_TRY_AGAIN` - **security_error_try_again**
 * - `SECURITY_VIOLATION` - **security_violation**
 * - `SEE_ATTENDANT` - **see_attendant**
 * - `SEE_EXHIBIT_FOR_ERROR` - **see_exhibit_for_error**
 * - `SERVICE_NOT_ALLOWED` - **service_not_allowed**
 * - `SIGNATURE_REQUIRED` - **signature_required**
 * - `SKIP_TRACE_INFO` - **skip_trace_info**
 * - `SOFT_DESCRIPTOR_NOT_ENABLED` - **soft_descriptor_not_enabled**
 * - `SSN_NOT_AVAILABLE` - **ssn_not_available**
 * - `STOLEN_CARD` - **stolen_card**
 * - `STOP_PAYMENT_ORDER` - **stop_payment_order**
 * - `STOP_RECURRING_PAYMENT_REQUESTS` - **stop_recurring_payment_requests**
 * - `STORE_LOCATION_ZERO_NOT_ALLOWED` - **store_location_zero_not_allowed**
 * - `SUBSYSTEM_UNAVAILABLE` - **subsystem_unavailable**
 * - `SURCHARGE_LIMIT_EXCEEDED` - **surcharge_limit_exceeded**
 * - `SYSTEM_ERROR` - **system_error**
 * - `TARGET_CARD_AND_TRANSACTION_COUNT_MISMATCH` - **target_card_and_transaction_count_mismatch**
 * - `TRANSACTION_NUMBER_MISMATCH` - **transaction_number_mismatch**
 * - `TESTMODE_DECLINE` - **testmode_decline**
 * - `TICKET_LIMIT_EXCEEDED` - **ticket_limit_exceeded**
 * - `TIMEOUT` - **timeout**
 * - `TIMEOUT_REVERSAL_NOT_SUPPORTED` - **timeout_reversal_not_supported**
 * - `TOO_MANY_TRANSACTIONS_REQUESTED` - **too_many_transactions_requested**
 * - `TOTALS_UNAVAILABLE` - **totals_unavailable**
 * - `TRANSACTION_COUNT_OR_WITHDRAWAL_LIMIT_EXCEEDED` -
 *   **transaction_count_or_withdrawal_limit_exceeded**
 * - `TRANSACTION_DESTINATION_NOT_FOUND_FOR_ROUTING` -
 *   **transaction_destination_not_found_for_routing**
 * - `TRANSACTION_HISTORY_UNAVAILABLE` - **transaction_history_unavailable**
 * - `TRANSACTION_NOT_ALLOWED` - **transaction_not_allowed**
 * - `TRANSACTION_NOT_PERMITTED` - **transaction_not_permitted**
 * - `TRANSACTION_NOT_SUPPORTED` - **transaction_not_supported**
 * - `TRANSACTION_TOTAL_LIMIT_PER_PRODUCT_CLASS_EXCEEDED` -
 *   **transaction_total_limit_per_product_class_exceeded**
 * - `TRANSARMOR_INVALID_TOKEN_OR_ACCOUNT_NUMBER` - **transarmor_invalid_token_or_account_number**
 * - `TRANSARMOR_KEY_ERROR` - **transarmor_key_error**
 * - `TRANSARMOR_SERVICE_UNAVAILABLE` - **transarmor_service_unavailable**
 * - `TRY_AGAIN_LATER` - **try_again_later**
 * - `UNABLE_TO_LOCATE_PREVIOUS_MESSAGE` - **unable_to_locate_previous_message**
 * - `UNABLE_TO_LOCATE_RECORD` - **unable_to_locate_record**
 * - `UNABLE_TO_PROCESS` - **unable_to_process**
 * - `UNABLE_TO_VERIFY_PIN` - **unable_to_verify_pin**
 * - `UNAUTHORIZED` - **unauthorized**
 * - `UNAVAILABLE` - **unavailable**
 * - `UNDEFINED_CARD` - **undefined_card**
 * - `UNDERAGE_CUSTOMER` - **underage_customer**
 * - `UNKNOWN_VELOCITY_ERROR_PAY_INSIDE` - **unknown_velocity_error_pay_inside**
 * - `UNSUCCESSFUL` - **unsuccessful**
 * - `UNSUPPORTED_MESSAGE` - **unsupported_message**
 * - `VALIDATION_ERROR` - **validation_error**
 * - `VELOCITY_ERROR_PAY_INSIDE` - **velocity_error_pay_inside**
 * - `VERIFICATION_TRANSACTION` - **verification_transaction**
 * - `VIOLATION_OF_BUSINESS_ARRANGEMENT` - **violation_of_business_arrangement**
 * - `VISA_OCT/MASTERCARD_MONEYSEND_TRANSACTIONS_BLOCKED` -
 *   **visa_oct/mastercard_moneysend_transactions_blocked**
 * - `VOID_CAPTURED_ITEM` - **void_captured_item**
 * - `VOYAGER_ID_PROBLEM` - **voyager_id_problem**
 * - `Y_OR_N_REQUIRED` - **y_or_n_required**
 * - `WAIT_2_PM_EASTERN` - **wait_2_pm_eastern**
 * - `WITHDRAWAL_COUNT_LIMIT_EXCEEDED` - **withdrawal_count_limit_exceeded**
 * - `WITHDRAWAL_LIMIT_EXCEEDED` - **withdrawal_limit_exceeded**
 * - `ZIP_ADDRESS_NOT_VERIFIED` - **zip_and_address_not_verified**
 * - `ZIP_NO_MATCH` - **address_match_zip_mismatch**
 * - `ZIP_NOT_VERIFIED` - **zip_not_verified**
 * - `3DS_AUTHENTICATION_SUCCESSFUL` - **3ds_authentication_successful**
 * - `3DS_AUTHENTICATION_INVALID` - **3ds_authentication_invalid**
 * - `3DS_AUTHENTICATION_FAILED` - **3ds_authentication_failed**
 * - `3DS_AUTHENTICATION_NOT_VALIDATED` - **3ds_authentication_not_validated**
 * - `3DS_AUTHENTICATION_SUCCESSFUL_WITHOUT_LIABILITY_SHIFT` -
 *   **3ds_authentication_successful_without_liability_shift**
 *
 * </details>
 */
export const TxnResultsBankCode2 = {
  AcceptedButNotYetProcessed: "accepted_but_not_yet_processed",
  AccountBlocked: "account_blocked",
  AccountIsPurged: "account_is_purged",
  AccountLocked: "account_locked",
  AccountOnHoldOrNotActive: "account_on_hold_or_not_active",
  AccountNotActivated: "account_not_activated",
  AccountReloadsExceeded: "account_reloads_exceeded",
  AccountRowLocked: "account_row_locked",
  AccountStatusIsVoidLock: "account_status_is_void_lock",
  AchPaymentNotAccepted: "ach_payment_not_accepted",
  AcquirerChannelUnavailable: "acquirer_channel_unavailable",
  ActivationFailed: "activation_failed",
  AdditiveLimitExceeded: "additive_limit_exceeded",
  ZipMatchAddressMismatch: "zip_match_address_mismatch",
  ZipMatchAddressNotVerified: "zip_match_address_not_verified",
  AlreadyRedeemed: "already_redeemed",
  AlreadyReversed: "already_reversed",
  AmountLimitExceeded: "amount_limit_exceeded",
  AmountTooLarge: "amount_too_large",
  ApproveWithId: "approve_with_id",
  Approved: "approved",
  ApprovedEmvKeyLoad: "approved_emv_key_load",
  ApprovedWithNoCash: "approved_with_no_cash",
  ApprovedWithOverdraft: "approved_with_overdraft",
  AuthorizationIdNeeded: "authorization_id_needed",
  BadAccount: "bad_account",
  BadChecksum: "bad_checksum",
  BadClose: "bad_close",
  BadMagStripe: "bad_mag_stripe",
  BadPostDate: "bad_post_date",
  BadRepayDate: "bad_repay_date",
  BalanceNotAvailable: "balance_not_available",
  BillToShipToMismatch: "bill_to_ship_to_mismatch",
  BinBlocked: "bin_blocked",
  BlockedByCardholder: "blocked_by_cardholder",
  BulkActivationError: "bulk_activation_error",
  BulkActivationPackageAmountError: "bulk_activation_package_amount_error",
  CallAcquirer: "call_acquirer",
  CallForAuthorization: "call_for_authorization",
  CallIssuer: "call_issuer",
  CallTelecheck: "call_telecheck",
  CannotFindNetwork: "cannot_find_network",
  CardAlreadyActive: "card_already_active",
  CardAlreadyClosed: "card_already_closed",
  CardNotActive: "card_not_active",
  CardNotSupported: "card_not_supported",
  CardVelocityAmountExceeded: "card_velocity_amount_exceeded",
  CardVelocityCountExceeded: "card_velocity_count_exceeded",
  CardVelocityExceeded: "card_velocity_exceeded",
  CashbackGreaterThanTransactionAmount: "cashback_greater_than_transaction_amount",
  CashLimitExceeded: "cash_limit_exceeded",
  CenterClosed: "center_closed",
  CheckerManagerNotFound: "checker/manager_not_found",
  ChipFailure: "chip_failure",
  CloseUnavailable: "close_unavailable",
  CloseNotValid: "close_not_valid",
  ClosedAccount: "closed_account",
  CountExceedsLimit: "count_exceeds_limit",
  CounterfeitCard: "counterfeit_card",
  CounterOfferToSupplyPersonalGuaranty: "counter_offer_to_supply_personal_guaranty",
  CryptogramDecryptionError: "cryptogram_decryption_error",
  CryptoBoxIsOffline: "crypto_box_is_offline",
  CurrencyConversionComplete: "currency_conversion_complete",
  CurrencyConversionError: "currency_conversion_error",
  CurrencyNotSupported: "currency_not_supported",
  CustomerCancellation: "customer_cancellation",
  CustomerOptOut: "customer_opt_out",
  CutTimeCloseTo1400: "cut_time_close_to_1400",
  CvvDeclined: "cvv_declined",
  CvvFailed: "cvv_failed",
  DailyLimitExceeded: "daily_limit_exceeded",
  DateOfBirthError: "date_of_birth_error",
  DebitGatewayUnavailable: "debit_gateway_unavailable",
  Declined: "declined",
  DeclinedDueToStandInRules: "declined_due_to_stand_in_rules",
  DeconvertedBin: "deconverted_bin",
  DoNotHonor: "do_not_honor",
  DoNotTryAgain: "do_not_try_again",
  DoNotTryAgainSubsequentMayContinue: "do_not_try_again_subsequent_may_continue",
  DriversLicenseOrIdRequired: "drivers_license_or_id_required",
  DuplicateCapture: "duplicate_capture",
  DuplicateReturn: "duplicate_return",
  DuplicateReversal: "duplicate_reversal",
  DuplicateTransaction: "duplicate_transaction",
  EditHonor: "edit_honor",
  EmailNoMatch: "email_no_match",
  EmailUnavailable: "email_unavailable",
  EmvKeyDownloadError: "emv_key_download_error",
  EnterLesserAmount: "enter_lesser_amount",
  ErrorProcessingPinBlock: "error_processing_pin_block",
  ExceedsGlobalAmountForPeriodPayInside: "exceeds_global_amount_for_period_pay_inside",
  ExceedsGlobalCountForPeriodPayInside: "exceeds_global_count_for_period_pay_inside",
  ExceedsGlobalLimitsForPeriodPayInside: "exceeds_global_limits_for_period_pay_inside",
  ExceedsLimit: "exceeds_limit",
  ExceedsMerchantAmountForPeriodPayInside: "exceeds_merchant_amount_for_period_pay_inside",
  ExceedsMerchantCountForPeriodPayInside: "exceeds_merchant_count_for_period_pay_inside",
  ExceedsMerchantLimitsForPeriodPayInside: "exceeds_merchant_limits_for_period_pay_inside",
  ExceedsStateAmountForPeriodPayInside: "exceeds_state_amount_for_period_pay_inside",
  ExceedsStateCountForPeriodPayInside: "exceeds_state_count_for_period_pay_inside",
  ExceedsStateLimitsForPeriodPayInside: "exceeds_state_limits_for_period_pay_inside",
  ExceedsTransactionCountOrAmountLimitIn24Hours: "exceeds_transaction_count_or_amount_limit_in_24_hours",
  ExceedsTransactionCountOrAmountLimitIn7Days: "exceeds_transaction_count_or_amount_limit_in_7_days",
  ExceedsTransactionCountOrAmountLimitIn30Days: "exceeds_transaction_count_or_amount_limit_in_30_days",
  ExceedsZipCodeAmountForPeriodPayInside: "exceeds_zip_code_amount_for_period_pay_inside",
  ExceedsZipCodeCountForPeriodPayInside: "exceeds_zip_code_count_for_period_pay_inside",
  ExceedsZipCodeLimitsForPeriodPayInside: "exceeds_zip_code_limits_for_period_pay_inside",
  ExpiredCard: "expired_card",
  ExpiredLock: "expired_lock",
  Fraudulent: "fraudulent",
  FileTemporarilyUnavailable: "file_temporarily_unavailable",
  FileUpdateError: "file_update_error",
  FileUpdateUnavailable: "file_update_unavailable",
  FormatError: "format_error",
  ForwardToIssuer: "forward_to_issuer",
  FuelLimitExceeded: "fuel_limit_exceeded",
  FuelOnly: "fuel_only",
  FuelPriceError: "fuel_price_error",
  FullSsnRequired: "full_ssn_required",
  FunctionNotSupported: "function_not_supported",
  FundsOnHold: "funds_on_hold",
  General: "general",
  GeneralError: "general_error",
  GenericDecline: "generic_decline",
  HardCapturePickupCard: "hard_capture_pickup_card",
  HardNegativeInfoOnFile: "hard_negative_info_on_file",
  HighRisk: "high_risk",
  HoldShippingFor24H: "hold_shipping_for_24h",
  HonorWithAuthentication: "honor_with_authentication",
  IllegalTransaction: "illegal_transaction",
  ImprintCard: "imprint_card",
  IncorrectCvv: "incorrect_cvv",
  IncorrectNumber: "incorrect_number",
  IncorrectPin: "incorrect_pin",
  IncorrectMerchantLocation: "incorrect_merchant_location",
  IncorrectTransactionVersion: "incorrect_transaction_version",
  InquiryDeclined: "inquiry_declined",
  InsufficientData: "insufficient_data",
  InsufficientFunds: "insufficient_funds",
  InsufficientSecurity: "insufficient_security",
  InternetAccessDisabled: "internet_access_disabled",
  Invalid3DPassword: "invalid_3d_password",
  InvalidAccount: "invalid_account",
  InvalidAccountDate: "invalid_account/date",
  InvalidAccountType: "invalid_account_type",
  InvalidActivate: "invalid_activate",
  InvalidAmount: "invalid_amount",
  InvalidAuthorizationCode: "invalid_authorization_code",
  InvalidBatchNumberId: "invalid_batch_number/id",
  InvalidCashback: "invalid_cashback",
  InvalidCheckingAccount: "invalid_checking_account",
  InvalidCheckingAccountNumber: "invalid_checking_account_number",
  InvalidCreditAccount: "invalid_credit_account",
  InvalidClerk: "invalid_clerk",
  InvalidCurrency: "invalid_currency",
  InvalidCvv: "invalid_cvv",
  InvalidDateOrTime: "invalid_date_or_time",
  InvalidDriver: "invalid_driver",
  InvalidEanOrScv: "invalid_ean_or_scv",
  InvalidEffectiveDate: "invalid_effective_date",
  InvalidEmailAddress: "invalid_email_address",
  InvalidEntry: "invalid_entry",
  InvalidExpiryDate: "invalid_expiry_date",
  InvalidExpiryYear: "invalid_expiry_year",
  InvalidHost: "invalid_host",
  InvalidLocation: "invalid_location",
  InvalidMaidenName: "invalid_maiden_name",
  InvalidMcc: "invalid_mcc",
  InvalidMerchant: "invalid_merchant",
  InvalidMerchantId: "invalid_merchant_id",
  InvalidMerchantIdSe: "invalid_merchant_id/se",
  InvalidMerchantSetup: "invalid_merchant_setup",
  InvalidMicrData: "invalid_micr_data",
  InvalidNewPassword: "invalid_new_password",
  InvalidNotPresent: "invalid_not_present",
  InvalidNumber: "invalid_number",
  InvalidOdometer: "invalid_odometer",
  InvalidPassword: "invalid_password",
  InvalidPin: "invalid_pin",
  InvalidPos: "invalid_pos",
  InvalidPreapprovalNumber: "invalid_preapproval_number",
  InvalidPrefix: "invalid_prefix",
  InvalidProduct: "invalid_product",
  InvalidPromptEntry: "invalid_prompt_entry",
  InvalidRequest: "invalid_request",
  InvalidResponse: "invalid_response",
  InvalidResponseDate: "invalid_response_date",
  InvalidRestrictionCode: "invalid_restriction_code",
  InvalidSavingsAccount: "invalid_savings_account",
  InvalidSecurePaymentData: "invalid_secure_payment_data",
  InvalidSku: "invalid_sku",
  InvalidSsn: "invalid_ssn",
  InvalidStateCode: "invalid_state_code",
  InvalidStatusChange: "invalid_status_change",
  InvalidTerminal: "invalid_terminal",
  InvalidTgnCic: "invalid_tgn_cic",
  InvalidTimezone: "invalid_timezone",
  InvalidTppid: "invalid_tppid",
  InvalidTrackData: "invalid_track_data",
  InvalidTransaction: "invalid_transaction",
  InvalidTransarmorTransaction: "invalid_transarmor_transaction",
  InvalidUser: "invalid_user",
  InvalidValueInTheField: "invalid_value_in_the_field",
  InvalidVehicle: "invalid_vehicle",
  InvalidVoidOfActivation: "invalid_void_of_activation",
  InvalidZipCode: "invalid_zip_code",
  IssuanceUnderMinimumAmount: "issuance_under_minimum_amount",
  IssuerNotAvailable: "issuer_not_available",
  IssuerProcessorOrSwitchNotAvailable: "issuer_processor_or_switch_not_available",
  IssuerSpecialConditions: "issuer_special_conditions",
  IssuerVelocityAmountExceeded: "issuer_velocity_amount_exceeded",
  IssuerVelocityCountExceeded: "issuer_velocity_count_exceeded",
  LateReversal: "late_reversal",
  LawViolation: "law_violation",
  LimitCheckFailed: "limit_check_failed",
  LostCard: "lost_card",
  MaidenNameUnavailable: "maiden_name_unavailable",
  ManualTriesExceeded: "manual_tries_exceeded",
  Match: "match",
  MaxBalanceExceeded: "max_balance_exceeded",
  MerchantDepleted: "merchant_depleted",
  MerchantHasMailPending: "merchant_has_mail_pending",
  MessageFormatError: "message_format_error",
  Minus2Debit: "minus2_debit",
  MissingConditionalData: "missing_conditional_data",
  MissingCustomerServicePhone: "missing_customer_service_phone",
  MissingFromAccount: "missing_from_account",
  MissingToAccount: "missing_to_account",
  MultiCurrencyDccFail: "multi_currency_dcc_fail",
  MultiCurrencyInvertFail: "multi_currency_invert_fail",
  MultipleAccountsForType: "multiple_accounts_for_type",
  NameEmailNoMatch: "name_email_no_match",
  NameEmailUnavailable: "name_email_unavailable",
  NameNoMatch: "name_no_match",
  NamePhoneNoMatch: "name_phone_no_match",
  NamePhoneUnavailable: "name_phone_unavailable",
  NameUnavailable: "name_unavailable",
  NegativeFileException: "negative_file_exception",
  NewAccountInformationAvailable: "new_account_information_available",
  NewCardIssued: "new_card_issued",
  NewPasswordRequired: "new_password_required",
  NoAccountLink: "no_account_link",
  NoActionTaken: "no_action_taken",
  NoCardRecord: "no_card_record",
  NoChainId: "no_chain_id",
  NoCheckingAccount: "no_checking_account",
  Mismatch: "mismatch",
  NoMessagesPending: "no_messages_pending",
  NoOpenBatch: "no_open_batch",
  NoPhoneService: "no_phone_service",
  NoPreviousTransaction: "no_previous_transaction",
  NoReasonToDecline: "no_reason_to_decline",
  NoSavingsAccount: "no_savings_account",
  NoSuchIssuer: "no_such_issuer",
  NoToAccount: "no_to_account",
  NoTransactionsAvailable: "no_transactions_available",
  NoTransactionSecurityRecord: "no_transaction_security_record",
  NotAccepted: "not_accepted",
  NotActive: "not_active",
  NotLostOrStolen: "not_lost_or_stolen",
  NotOnFile: "not_on_file",
  NotPermitted: "not_permitted",
  NotPerformed: "not_performed",
  NotProcessed: "not_processed",
  NotSupported: "not_supported",
  Nsf: "nsf",
  OneTimeStopPayment: "one_time_stop_payment",
  OriginalAuthorizationMismatch: "original_authorization_mismatch",
  OriginalAuthorizationNotFound: "original_authorization_not_found",
  OriginalRepeated: "original_repeated",
  OriginalTransactionNotApproved: "original_transaction_not_approved",
  OverChainDailyVelocityAmount: "over_chain_daily_velocity_amount",
  OverChainDailyVelocityCount: "over_chain_daily_velocity_count",
  OverChainDailyVelocityLimits: "over_chain_daily_velocity_limits",
  OverChainProductVelocityAmount: "over_chain_product_velocity_amount",
  OverChainProductVelocityCount: "over_chain_product_velocity_count",
  OverChainProductVelocityLimits: "over_chain_product_velocity_limits",
  OverMaxBalance: "over_max_balance",
  OverMerchandiseLimit: "over_merchandise_limit",
  OverMerchantDailyVelocityAmount: "over_merchant_daily_velocity_amount",
  OverMerchantDailyVelocityCount: "over_merchant_daily_velocity_count",
  OverMerchantDailyVelocityLimits: "over_merchant_daily_velocity_limits",
  OverMerchantProductVelocityAmount: "over_merchant_product_velocity_amount",
  OverMerchantProductVelocityCount: "over_merchant_product_velocity_count",
  OverMerchantProductVelocityLimits: "over_merchant_product_velocity_limits",
  OverMonthlyLimit: "over_monthly_limit",
  OverNonFuelLimit: "over_non_fuel_limit",
  PanTransError: "pan_trans_error",
  PartialAuthNotAllowed: "partial_auth_not_allowed",
  PartialReversal: "partial_reversal",
  PartiallyApproved: "partially_approved",
  PasswordRetriesExceeded: "password_retries_exceeded",
  PayAtPumpNotAllowed: "pay_at_pump_not_allowed",
  PhoneEmailNoMatch: "phone_email_no_match",
  PhoneEmailUnavailable: "phone_email_unavailable",
  PhoneNoMatch: "phone_no_match",
  PhoneUnavailable: "phone_unavailable",
  PickupCard: "pickup_card",
  PinAlreadyExists: "pin_already_exists",
  PinKeyError: "pin_key_error",
  PinKeySychronizationError: "pin_key_sychronization_error",
  PinTryExceeded: "pin_try_exceeded",
  PleaseRetry: "please_retry",
  ProcessAsDebit: "process_as_debit",
  ProcessingError: "processing_error",
  ProductCodeRestricted: "product_code_restricted",
  PromoLocationRestricted: "promo_location_restricted",
  QuantityExceeded: "quantity_exceeded",
  ReauthorizationTimeframeExpired: "reauthorization_timeframe_expired",
  RechargeAmountExceeded: "recharge_amount_exceeded",
  RechargeCountExceeded: "recharge_count_exceeded",
  ReenterTransaction: "reenter_transaction",
  Referral: "referral",
  RejectMessage: "reject_message",
  RejectedLostStolenChecks: "rejected_lost/stolen_checks",
  RepairLimitExceeded: "repair_limit_exceeded",
  RequestInProgress: "request_in_progress",
  ResponseReceivedLate: "response_received_late",
  RestrictedCard: "restricted_card",
  ResubmissionViolatesNetworkFrequency: "resubmission_violates_network_frequency",
  RetainCard: "retain_card",
  Reversal: "reversal",
  ReversalNoMatch: "reversal_no_match",
  ReversalUnsuccessful: "reversal_unsuccessful",
  RevocationOfAllAuthorizations: "revocation_of_all_authorizations",
  RevocationOfAuthorization: "revocation_of_authorization",
  SecureCodeNotEnabled: "secure_code_not_enabled",
  SecurityError: "security_error",
  SecurityErrorTryAgain: "security_error_try_again",
  SecurityViolation: "security_violation",
  SeeAttendant: "see_attendant",
  SeeExhibitForError: "see_exhibit_for_error",
  ServiceNotAllowed: "service_not_allowed",
  SignatureRequired: "signature_required",
  SkipTraceInfo: "skip_trace_info",
  SoftDescriptorNotEnabled: "soft_descriptor_not_enabled",
  SsnNotAvailable: "ssn_not_available",
  StolenCard: "stolen_card",
  StopPaymentOrder: "stop_payment_order",
  StopRecurringPaymentRequests: "stop_recurring_payment_requests",
  StoreLocationZeroNotAllowed: "store_location_zero_not_allowed",
  SubsystemUnavailable: "subsystem_unavailable",
  SurchargeLimitExceeded: "surcharge_limit_exceeded",
  SystemError: "system_error",
  TargetCardAndTransactionCountMismatch: "target_card_and_transaction_count_mismatch",
  TransactionNumberMismatch: "transaction_number_mismatch",
  TestmodeDecline: "testmode_decline",
  TicketLimitExceeded: "ticket_limit_exceeded",
  Timeout: "timeout",
  TimeoutReversalNotSupported: "timeout_reversal_not_supported",
  TooManyTransactionsRequested: "too_many_transactions_requested",
  TotalsUnavailable: "totals_unavailable",
  TransactionCountOrWithdrawalLimitExceeded: "transaction_count_or_withdrawal_limit_exceeded",
  TransactionDestinationNotFoundForRouting: "transaction_destination_not_found_for_routing",
  TransactionHistoryUnavailable: "transaction_history_unavailable",
  TransactionNotAllowed: "transaction_not_allowed",
  TransactionNotPermitted: "transaction_not_permitted",
  TransactionNotSupported: "transaction_not_supported",
  TransactionTotalLimitPerProductClassExceeded: "transaction_total_limit_per_product_class_exceeded",
  TransarmorInvalidTokenOrAccountNumber: "transarmor_invalid_token_or_account_number",
  TransarmorKeyError: "transarmor_key_error",
  TransarmorServiceUnavailable: "transarmor_service_unavailable",
  TryAgainLater: "try_again_later",
  UnableToLocatePreviousMessage: "unable_to_locate_previous_message",
  UnableToLocateRecord: "unable_to_locate_record",
  UnableToProcess: "unable_to_process",
  UnableToVerifyPin: "unable_to_verify_pin",
  Unauthorized: "unauthorized",
  Unavailable: "unavailable",
  UndefinedCard: "undefined_card",
  UnderageCustomer: "underage_customer",
  UnknownVelocityErrorPayInside: "unknown_velocity_error_pay_inside",
  Unsuccessful: "unsuccessful",
  UnsupportedMessage: "unsupported_message",
  ValidationError: "validation_error",
  VelocityErrorPayInside: "velocity_error_pay_inside",
  VerificationTransaction: "verification_transaction",
  ViolationOfBusinessArrangement: "violation_of_business_arrangement",
  VisaOctMastercardMoneysendTransactionsBlocked: "visa_oct/mastercard_moneysend_transactions_blocked",
  VoidCapturedItem: "void_captured_item",
  VoyagerIdProblem: "voyager_id_problem",
  YOrNRequired: "y_or_n_required",
  Wait2PmEastern: "wait_2_pm_eastern",
  WithdrawalCountLimitExceeded: "withdrawal_count_limit_exceeded",
  WithdrawalLimitExceeded: "withdrawal_limit_exceeded",
  ZipAddressNotVerified: "zip_address_not_verified",
  ZipAndAddressNotVerified: "zip_and_address_not_verified",
  ZipNoMatch: "zip_no_match",
  AddressMatchZipMismatch: "address_match_zip_mismatch",
  ZipNotVerified: "zip_not_verified",
  _3DsAuthenticationSuccessful: "3ds_authentication_successful",
  _3DsAuthenticationInvalid: "3ds_authentication_invalid",
  _3DsAuthenticationFailed: "3ds_authentication_failed",
  _3DsAuthenticationNotValidated: "3ds_authentication_not_validated",
  _3DsAuthenticationSuccessfulWithoutLiabilityShift: "3ds_authentication_successful_without_liability_shift",
} as const;
export type TxnResultsBankCode2 =
  | (typeof TxnResultsBankCode2)[keyof typeof TxnResultsBankCode2]
  | (string & {});

export const txnResultsBankCode2Schema: EnumSchema<TxnResultsBankCode2> =
  s.enumOf<TxnResultsBankCode2>(TxnResultsBankCode2);
