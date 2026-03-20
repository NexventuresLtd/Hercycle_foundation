// WhatsApp contact number (Rwanda)
export const WHATSAPP_NUMBER = '250788207666';

export const getWhatsAppDonationLink = (amount: number | string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello HerCycle Foundation, I would like to donate $${amount} to support your mission of empowering girls in Rwanda through menstrual health education. Please let me know the next steps.`
  )}`;

export const getWhatsAppPartnerLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello HerCycle Foundation, I am interested in partnering with your organization. I would like to discuss collaboration opportunities.`
  )}`;

export const getWhatsAppVolunteerLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello HerCycle Foundation, I am interested in volunteering with your team. Please share more information about available opportunities.`
  )}`;

export const getWhatsAppContactLink = (name: string, subject: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello HerCycle Foundation, my name is ${name}. Subject: ${subject}.`
  )}`;

// Office location
export const OFFICE_NAME    = 'Norrsken House Kigali';
export const OFFICE_ADDRESS = 'KN 3 Road, Kigali, Rwanda';
export const NORRSKEN_MAP_URL =
  'https://maps.google.com/maps?q=Norrsken+House+Kigali+Rwanda&z=16&output=embed';
