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
  // UPI ID is NOT displayed, copied, or shared as text — QR only.
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

// HDFC Bank logo shown inside the Bank Details card.
export const HDFC_LOGO_SRC = "/hdfc-logo.png";

// QR path: official UPI QR image.
export const QR_SRC = "/upi-qr.jpeg";

// Plain-text block used for "Copy Payment Details" and "Share on WhatsApp".
// UPI ID is deliberately excluded — UPI payment is via the QR code only.
export function buildPaymentText() {
  return `AGAMANA DEVELOPERS

Bank: ${PAYMENT.bankName}
Account Name: ${PAYMENT.accountName}
Account Type: ${PAYMENT.accountType}
Account Number: ${PAYMENT.accountNumber}
IFSC Code: ${PAYMENT.ifsc}`;
}
