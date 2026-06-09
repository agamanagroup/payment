// ============================================================
//  EDIT YOUR PAYMENT DETAILS HERE
//  This is the single source of truth for the whole page.
// ============================================================

export const PAYMENT = {
  bankName: "HDFC BANK",
  accountName: "AGAMANA DEVELOPERS",
  accountType: "Current",
  accountNumber: "50200105735813",
  ifsc: "HDFC0004876",
  // UPI ID is intentionally NOT displayed on the page (QR only).
  // It is still embedded in the copy/share text below for convenience.
  upiId: "agamana@hdfcbank",
};

export const CONTACT = {
  whatsapp: "917090644644", // digits only, with country code
  whatsappDisplay: "+91 7090644644",
  phone: "+917090644644",
  phoneDisplay: "+91 7090644644",
  email: "operations@agamana.com",
};

// Logo path: drop your file at /public/logo.png (or .svg) and update if needed.
export const LOGO_SRC = "/logo.png";

// QR path: official UPI QR image.
export const QR_SRC = "/upi-qr.jpeg";

// Plain-text block used for "Copy Payment Details" and WhatsApp share.
export function buildPaymentText() {
  return `AGAMANA DEVELOPERS

Bank: ${PAYMENT.bankName}
Account Name: ${PAYMENT.accountName}
Account Type: ${PAYMENT.accountType}
Account Number: ${PAYMENT.accountNumber}
IFSC Code: ${PAYMENT.ifsc}
UPI ID: ${PAYMENT.upiId}`;
}
