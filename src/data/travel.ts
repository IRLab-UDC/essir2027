export interface Option {
  mode: string;
  title: string;
  text: string;
  links?: { label: string; href: string }[];
}

export const toCity: Option[] = [
  {
    mode: 'By plane',
    title: 'A Coruña (LCG) and Santiago (SCQ)',
    text: 'A Coruña airport has direct flights from Madrid and Barcelona and is 8 km from the city centre: Alsa bus 4051 runs about every 30 minutes on weekdays, or 15 to 20 minutes by taxi. Santiago de Compostela airport is about 70 km away: take the bus to Santiago, then a 30 to 45 minute train to A Coruña.',
    links: [
      { label: 'A Coruña airport', href: 'https://www.aena.es/en/a-coruna.html' },
      { label: 'Santiago airport', href: 'https://www.aena.es/en/santiago-rosalia-de-castro.html' },
    ],
  },
  {
    mode: 'By train',
    title: 'A Coruña station',
    text: 'AVE and Avlo high-speed trains from Madrid Chamartín take about 3.5 to 4 hours. Trains also connect with Santiago, Vigo and Ourense.',
    links: [{ label: 'Renfe', href: 'https://www.renfe.com/es/en' }],
  },
];

export const toCampus: Option[] = [
  {
    mode: 'City bus',
    title: 'UDC line',
    text: 'The UDC university line connects the city centre (Praza de Pontevedra) with Campus de Elviña.',
    links: [{ label: 'Tranvías de A Coruña', href: 'https://tranviascoruna.com/' }],
  },
  {
    mode: 'On foot or by taxi',
    title: 'Campus de Elviña',
    text: 'The campus is about 4 km from the city centre: a long walk or a short taxi ride.',
  },
];
