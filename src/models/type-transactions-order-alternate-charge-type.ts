import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The breakdown of charges specific to a particular market, region, or transaction type. */
export const TypeTransactionsOrderAlternateChargeType = {
  GoodsAndServicesTax: "GOODS_AND_SERVICES_TAX",
  RoomTax: "ROOM_TAX",
  AirportTax: "AIRPORT_TAX",
  Food: "FOOD",
  Beverage: "BEVERAGE",
  FoodOrBeverage: "FOOD_OR_BEVERAGE",
  Bar: "BAR",
  Lodging: "LODGING",
  RestaurantOrRoomService: "RESTAURANT_OR_ROOM_SERVICE",
  CateringCharges: "CATERING_CHARGES",
  BarOrMiniBar: "BAR_OR_MINI_BAR",
  Phone: "PHONE",
  InternetService: "INTERNET_SERVICE",
  MoviesOrPayPerView: "MOVIES_OR_PAY_PER_VIEW",
  LaundryOrDryCleaning: "LAUNDRY_OR_DRY_CLEANING",
  BarberOrBeautySalon: "BARBER_OR_BEAUTY_SALON",
  HealthAndFitness: "HEALTH_AND_FITNESS",
  GiftShop: "GIFT_SHOP",
  ProShop: "PRO_SHOP",
  Parking: "PARKING",
  PetFees: "PET_FEES",
  Tours: "TOURS",
  EquipmentRental: "EQUIPMENT_RENTAL",
  BusinessCenter: "BUSINESS_CENTER",
  ConventionFees: "CONVENTION_FEES",
  MeetingOrConferenceCharges: "MEETING_OR_CONFERENCE_CHARGES",
  NoShowCharge: "NO_SHOW_CHARGE",
  ExpressServiceCharge: "EXPRESS_SERVICE_CHARGE",
  ChargesAddedAfterCheckOutOrDeparture: "CHARGES_ADDED_AFTER_CHECK_OUT_OR_DEPARTURE",
  MiscChargesOrFees: "MISC_CHARGES_OR_FEES",
  MiscellaneousTax: "MISCELLANEOUS_TAX",
  RewardProgramTransaction: "REWARD_PROGRAM_TRANSACTION",
  Surcharge: "SURCHARGE",
  FreightOrShippingOrHandling: "FREIGHT_OR_SHIPPING_OR_HANDLING",
  SalesTax: "SALES_TAX",
  ValueAddedTax: "VALUE_ADDED_TAX",
  TipGratuity: "TIP_GRATUITY",
  AutoRentalAdjustment: "AUTO_RENTAL_ADJUSTMENT",
} as const;
export type TypeTransactionsOrderAlternateChargeType =
  | (typeof TypeTransactionsOrderAlternateChargeType)[keyof typeof TypeTransactionsOrderAlternateChargeType]
  | (string & {});

export const typeTransactionsOrderAlternateChargeTypeSchema: EnumSchema<TypeTransactionsOrderAlternateChargeType> =
  s.enumOf<TypeTransactionsOrderAlternateChargeType>(TypeTransactionsOrderAlternateChargeType);
