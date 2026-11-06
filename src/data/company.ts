export interface ContactLine {
  label: string;
  number: string;
  cleanNumber: string;
  isWhatsApp: boolean;
  purpose: string;
}

export const COMPANY_INFO = {
  name: "Harikrupa Musical Works",
  marathiName: "हरिकृपा म्युझिकल वर्क्स",
  founder: "Mahesh Kaka & Family",
  establishedYear: 1994,
  yearsOfLegacy: "30+",
  tagline: "Master Craftsmen of Authentic Miraj Percussion & Classical Instruments",
  shortDesc:
    "Handcrafted Puneri Dhol, high-tension Tashas, Sambal, authentic treated leather plates, and accessories made by 30-year veteran artisans in Miraj. Trusted by 500+ Dhol-Tasha Pathaks and wholesalers across India.",
  address: {
    street: "Vakhar Bhag, Near Hotel Sayaji Garden",
    city: "Miraj",
    district: "Sangli",
    state: "Maharashtra",
    pincode: "416410",
    country: "India",
    fullAddress: "Vakhar Bhag, Near Hotel Sayaji Garden, Miraj, Maharashtra 416410",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15277.587822960627!2d74.6366914!3d16.8286958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1230000000001%3A0x0!2sMiraj%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsLink: "https://maps.google.com/?q=Vakhar+Bhag+Near+Hotel+Sayaji+Garden+Miraj+Maharashtra",
  },
  contacts: [
    {
      label: "Primary Orders & WhatsApp",
      number: "+91 99226 30366",
      cleanNumber: "919922630366",
      isWhatsApp: true,
      purpose: "Bulk quotes, order status, and instant pricing",
    },
    {
      label: "Workshop & Technical Enquiries",
      number: "+91 96071 49456",
      cleanNumber: "919607149456",
      isWhatsApp: true,
      purpose: "Custom instrument specs, leather tuning, pathak queries",
    },
    {
      label: "Dispatch & Logistics Line",
      number: "+91 91588 77045",
      cleanNumber: "919158877045",
      isWhatsApp: false,
      purpose: "Pan-India transport, tracking, and walk-in guidance",
    },
  ] as ContactLine[],
  primaryWhatsApp: "919922630366",
  instagramUrl:
    "https://www.instagram.com/harikrupa_musical_works?exln=dmw1M2VwbDN3bG55",
  instagramHandle: "@harikrupa_musical_works",
  workingHours: "Monday – Saturday: 9:00 AM – 9:00 PM | Sunday: 10:00 AM – 6:00 PM",
  specialties: [
    "Puneri Dhol Handcrafted with Cured Leather",
    "High-Pitch Concert & Mandal Tasha",
    "Traditional Gondhali Sambal Pair",
    "Miraj Sheesham Tabla Sets",
    "Unbreakable Tasha Hardware & Ropes",
    "Pan-India Shockproof Wooden Box Shipping",
  ],
  trustStats: [
    { value: "30+", label: "Years of Heritage", note: "Crafting in Miraj since 1994" },
    { value: "500+", label: "Dhol Tasha Pathaks", note: "Equipped across Maharashtra & India" },
    { value: "100%", label: "Genuine Treated Leather", note: "Traditional curing for deep bass" },
    { value: "Pan-India", label: "Insured Transport", note: "Safe doorstep delivery guarantee" },
  ],
};
