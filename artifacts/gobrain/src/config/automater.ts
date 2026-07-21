export const AUTOMATER_BASE = "https://automater.pl/rest/order-viewer/buy";

export const AUTOMATER_PRODUCTS = {
  itsEtap1: `${AUTOMATER_BASE}/918448`,
  itsEtap2: `${AUTOMATER_BASE}/918222`,
  itsSchool: `${AUTOMATER_BASE}/979412`,
  terapeuta: `${AUTOMATER_BASE}/979413`,
  kartaMowy: `${AUTOMATER_BASE}/1073862`,
  programyEdukacyjne: `${AUTOMATER_BASE}/776316`,
} as const;

export type AutomaterProductKey = keyof typeof AUTOMATER_PRODUCTS;
