import { COMPANY_INFO } from "@/data/company";
import { Product } from "@/data/products";

export function getGeneralWhatsAppUrl(customMessage?: string): string {
  const text =
    customMessage ||
    `Namaskar Harikrupa Musical Works! 🙏\n\nI am contacting you through your website. I would like to inquire about your handcrafted musical instruments and wholesale bulk pricing for our requirements.\n\nPlease share details and catalog. Thank you!`;
  return `https://wa.me/${COMPANY_INFO.primaryWhatsApp}?text=${encodeURIComponent(
    text
  )}`;
}

export function getProductWhatsAppUrl(
  product: Product,
  variantName?: string,
  quantity: number = 1
): string {
  const text = `Namaskar Harikrupa Musical! 🙏

I would like to inquire about:
*Product:* ${product.name} (${product.marathiName})
*Category:* ${product.categoryLabel}
*Variant / Size:* ${variantName || "Standard / Please recommend"}
*Quantity:* ${quantity} piece(s)

Could you please share the current price, availability, and pan-India shipping details to my location?

Website link: https://harikrupa-musical.vercel.app/catalogue/${product.slug}`;

  return `https://wa.me/${COMPANY_INFO.primaryWhatsApp}?text=${encodeURIComponent(
    text
  )}`;
}

export interface MandalQuoteItem {
  name: string;
  quantity: number;
  note?: string;
}

export function getMandalQuoteWhatsAppUrl(params: {
  mandalName: string;
  contactPerson: string;
  city: string;
  eventDate?: string;
  items: MandalQuoteItem[];
}): string {
  const itemsList = params.items
    .filter((it) => it.quantity > 0)
    .map(
      (it, idx) =>
        `${idx + 1}. *${it.name}* — ${it.quantity} units ${
          it.note ? `(${it.note})` : ""
        }`
    )
    .join("\n");

  const text = `🚩 *BULK MANDAL / PATHAK QUOTATION REQUEST* 🚩
*Harikrupa Musical Works — Miraj*

*Mandal / Pathak Name:* ${params.mandalName || "Not specified"}
*Contact Person:* ${params.contactPerson || "Organizer"}
*City / Destination:* ${params.city || "Maharashtra"}
${params.eventDate ? `*Required Before:* ${params.eventDate}\n` : ""}
*Required Instruments & Supplies:*
${itemsList || "1. Custom Mandal Instrument Fleet"}

Please provide a formal bulk quotation with Mandal package discount and safe road transport estimate. Thank you!`;

  return `https://wa.me/${COMPANY_INFO.primaryWhatsApp}?text=${encodeURIComponent(
    text
  )}`;
}
