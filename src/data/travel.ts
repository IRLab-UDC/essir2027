export interface Option {
  mode: string;
  title: string;
  text: string;
  links?: { label: string; href: string }[];
}

export interface Airport {
  code: string;
  name: string;
  /** Distance and best ground connection to A Coruña. */
  distance: string;
  transfer: string;
  /** Direct international routes. A trailing * marks seasonal (summer) routes. */
  international: string[];
  domestic: string[];
  /** New routes announced by airlines but not flying yet. */
  announced?: string[];
  note?: string;
  href: string;
}

/**
 * Year-round routes are those on each airport's Aena destinations page
 * (checked November 2026). Routes marked * are summer-only and were flown
 * in summer 2026; airlines confirm summer 2027 during the spring, so check
 * them again before the school. `announced` lists new routes that airlines
 * have announced but that had not started when checked: move them up once
 * they appear on the Aena page.
 */
export const airports: Airport[] = [
  {
    code: 'SCQ',
    name: 'Santiago de Compostela',
    distance: '70 km · about 1 h',
    transfer: 'Bus to Santiago railway station (about 20 minutes), then a 30 to 35 minute train to A Coruña. A taxi takes about 45 minutes.',
    international: [
      'New York Newark*', 'London Gatwick', 'London Stansted', 'Paris Orly', 'Geneva', 'Basel',
      'Amsterdam*', 'Frankfurt*', 'Zurich*', 'Brussels Charleroi*', 'Dublin*', 'Cork*', 'Marrakesh*',
    ],
    domestic: ['Madrid', 'Barcelona', 'Bilbao', 'Valencia', 'Seville', 'Málaga', 'Palma', 'Canary Islands', 'Alicante*', 'Ibiza*'],
    announced: [
      'Brussels', 'Munich', 'Prague', 'Venice', 'Milan Malpensa', 'Rome Fiumicino', 'Warsaw Modlin',
      'Copenhagen', 'Granada', 'Zaragoza',
    ],
    note: 'The best-connected airport in Galicia. United flies non-stop from New York Newark in summer, the first scheduled link between Galicia and the United States, and Frankfurt, Amsterdam, Zurich and Paris give one-stop connections from almost anywhere.',
    href: 'https://www.aena.es/es/santiago-rosalia-de-castro/aerolineas-y-destinos/destinos-aeropuerto.html',
  },
  {
    code: 'LCG',
    name: 'A Coruña',
    distance: '8 km · 15 min',
    transfer: 'Alsa bus 4051 to the city centre about every 30 minutes on weekdays, or 15 to 20 minutes by taxi.',
    international: ['Geneva', 'Milan Malpensa'],
    domestic: ['Madrid', 'Barcelona', 'Bilbao', 'Seville', 'Valencia', 'Málaga', 'Gran Canaria', 'Tenerife'],
    announced: ['Alicante'],
    href: 'https://www.aena.es/en/a-coruna/airlines-and-destinations/airport-destinations.html',
  },
  {
    code: 'VGO',
    name: 'Vigo',
    distance: '160 km · about 2 h',
    transfer: 'Vitrasa bus line A to Vigo-Urzáiz station (about 25 minutes), then about 1.5 hours by train to A Coruña.',
    international: [],
    domestic: ['Madrid', 'Barcelona', 'Gran Canaria', 'Tenerife', 'Palma*'],
    note: 'Domestic flights only, mostly useful as a connection through Madrid or Barcelona.',
    href: 'https://www.aena.es/en/vigo/airlines-and-destinations/airport-destinations.html',
  },
];

export const toCity: Option[] = [
  {
    mode: 'By train',
    title: 'A Coruña station',
    text: 'High-speed AVE and Avlo trains from Madrid Chamartín take about 3.5 to 4 hours. Within Galicia, trains along the Atlantic Axis line link A Coruña with Santiago in 30 to 35 minutes and with Vigo-Urzáiz in about 1.5 hours, several times an hour at peak times.',
    links: [{ label: 'Renfe', href: 'https://www.renfe.com/es/en' }],
  },
  {
    mode: 'Through Porto',
    title: 'Porto airport (OPO)',
    text: 'Porto has many more direct flights across Europe and to North America. It is about 300 km from A Coruña: direct coaches run from the airport to Vigo and Santiago, where you can take the train.',
    links: [{ label: 'Porto airport', href: 'https://www.portoairport.pt/en' }],
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
