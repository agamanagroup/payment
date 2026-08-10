// ============================================================
//  EDIT YOUR PAYMENT DETAILS HERE
//  This is the single source of truth for the whole page.
// ============================================================

// List of bank accounts shown in the left card, top to bottom.
// Add or remove entries here and the page updates automatically.
export const ACCOUNTS = [
  {
    label: "Account 1",
    bankName: "HDFC BANK",
    logo: "/hdfc-logo.png", // image in /public
    accountName: "AGAMANA DEVELOPERS",
    accountType: "Current",
    accountNumber: "50200105735813",
    ifsc: "HDFC0004876",
  },
  {
    label: "Account 2",
    bankName: "KARNATAKA BANK",
    logo: "/karnataka-logo.png", // add this image to /public (falls back to text if missing)
    accountName: "AGAMANA DEVELOPERS",
    accountType: "Current",
    accountNumber: "0712202600001601",
    ifsc: "KARB0000712",
  },
];

export const CONTACT = {
  whatsapp: "917090644644", // digits only, with country code
  whatsappDisplay: "+91 7090644644",
  phone: "+917090644644",
  phoneDisplay: "+91 7090644644",
  email: "operations@agamana.com",
};

// Company logo (top-left of the page).
export const LOGO_SRC = "/logo.png";

// QR path: official UPI QR image (right card — unchanged).
export const QR_SRC = "/upi-qr.jpeg";

// Plain-text block used for "Copy Payment Details" and "Share on WhatsApp".
// Includes every account; UPI ID is deliberately excluded (QR only).
export function buildPaymentText() {
  const blocks = ACCOUNTS.map(
    (a) =>
      `${a.bankName}
Account Name: ${a.accountName}
Account Type: ${a.accountType}
Account Number: ${a.accountNumber}
IFSC Code: ${a.ifsc}`
  );
  return `AGAMANA DEVELOPERS

${blocks.join("\n\n")}`;
}
