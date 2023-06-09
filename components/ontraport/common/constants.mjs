const BASE_URL = "https://api.ontraport.com";
const VERSION_PATH = "/1";
const WEBHOOK_ID = "webhookId";

const OBJECT_TYPE_ID = {
  CONTACT: 0,
  TASK: 1,
  USER: 2,
  GROUP: 3,
  LOG_ITEM: 4,
  SEQUENCE: 5,
  RULE: 6,
  MESSAGE: 7,
  SEQUENCE_SUBSCRIBER: 8,
  NOTE: 12,
  BLAST: 13,
  TAG: 14,
  PRODUCT: 16,
  PURCHASE: 17,
  FULFILLMENT_LIST: 19,
  LANDING_PAGE: 20,
  FORM: 22,
  SCHEDULED_BROADCAST: 23,
  POSTCARD_ORDER: 27,
  PURCHASE_HISTORY_LOG: 30,
  PARTNER_PROGRAM: 35,
  PARTNER: 36,
  REFERRAL: 37,
  COMMISSION: 38,
  PARTNER_PROMOTIONAL_ITEM: 40,
  UPSELL_FORM: 42,
  WORDPRESS_MEMBERSHIP: 43,
  OPEN_ORDER: 44,
  CREDIT_CARD: 45,
  TRANSACTION: 46,
  SHIPPED_PACKAGE: 47,
  SHIPPING_FULFILLMENT_RUN: 49,
  ORDER: 52,
  FACEBOOK_APP: 53,
  CUSTOM_DOMAIN: 58,
  ROLE: 61,
  TAX: 63,
  SHIPPING_METHOD: 64,
  OFFER: 65,
  TASK_OUTCOME: 66,
  WORDPRESS_SITE: 67,
  MESSAGE_TEMPLATE: 68,
  LEAD_ROUTER: 69,
  GATEWAY: 70,
  CAMPAIGN: 75,
  LEAD_SOURCE: 76,
  MEDIUM: 77,
  CONTENT: 78,
  TERM: 79,
  TRACKEED_LINK: 80,
  PARTNER_PRODUCT: 87,
  URL_HISTORY: 88,
  TASK_NOTE: 89,
  TASK_HISTORY: 90,
  SUBSCRIBER_RETENTION: 92,
  SUBSCRIPTION_SALE: 93,
  SALES_REPORT: 94,
  PRODUCT_SALES_LOG: 95,
  CUSTOMER_VALUE: 96,
  SHIPPING_COLLECTED: 97,
  TERMS_COLLECTED: 98,
  CUSTOM_OBJECT: 99,
  AUTOMATION_LOG_ITEM: 100,
  IMAP_SETTING: 101,
  CUSTOM_OBJECT_RELATIONSHIP: 102,
  FORM_ONTRAFORMS: 122,
  COUPON: 123,
  COUPON_CODE: 124,
  COUPON_PRODUCT: 125,
  TAG_SUBSCRIBER: 138,
  CAMPAIGN_BUILDER: 140,
  WEBHOOK: 145,
  DELETED_OPEN_ORDER: 146,
  CALENDAR_EVENT: 160,
  CALENDAR_EVENT_GUEST: 161,
  CALENDAR_TEMPLATE: 164,
  CALENDAR_POTENTIAL_GUEST: 174,
  CALENDAR: 175,
  CALENDAR_EVENT_TYPE: 177,
};

export default {
  BASE_URL,
  VERSION_PATH,
  WEBHOOK_ID,
  OBJECT_TYPE_ID,
};
