export interface Sight {
  name: string;
  text: string;
  image?: string;
  href?: string;
}

/** Places to see in A Coruña. Images live in public/images/. */
export const sights: Sight[] = [
  {
    name: 'Torre de Hércules',
    text: 'The only Roman lighthouse in the world still in use, built in the first century AD and a UNESCO World Heritage Site. Climb it for the view, then walk through the sculpture park around it.',
    image: '/images/torre-hercules.webp',
    href: 'https://www.torredeherculesacoruna.com/en/',
  },
  {
    name: 'The seafront promenade',
    text: 'More than 12 km of promenade around the peninsula, from the port past the Torre de Hércules and back into town. Best walked, or cycled, at sunset.',
    image: '/images/paseo-maritimo.webp',
  },
  {
    name: 'Riazor and Orzán',
    text: 'Two city beaches side by side, a few minutes’ walk from the centre. The Atlantic is cool even in July, and Orzán is the local surf spot.',
    image: '/images/riazor.webp',
  },
  {
    name: 'Avenida da Mariña and María Pita',
    text: 'The white glazed galleries along the harbour gave A Coruña its name of city of glass. Right behind them is the Praza de María Pita and the city hall.',
    image: '/images/avenida-marina.webp',
  },
  {
    name: 'Castelo de San Antón',
    text: 'A 16th-century fortress on a rock at the mouth of the harbour, now the city’s archaeology and history museum.',
    image: '/images/castillo-san-anton.webp',
  },
  {
    name: 'Science museums',
    text: 'The city has four of them: MUNCYT, the national science museum, with a Boeing 747 inside; the Aquarium Finisterrae on the seafront; the Domus, a museum of the human body by Arata Isozaki; and the Casa das Ciencias planetarium.',
    image: '/images/muncyt.webp',
    href: 'https://www.muncyt.es/',
  },
  {
    name: 'The old town',
    text: 'Narrow stone streets, Romanesque churches such as Santa María do Campo, and the Xardín de San Carlos, a small garden on the old walls with the tomb of General John Moore.',
  },
  {
    name: 'Monte de San Pedro',
    text: 'A park on the hill west of the city with old coastal guns and the widest view of the bay. A glass panoramic lift climbs up from the promenade.',
  },
  {
    name: 'Food',
    text: 'Seafood, octopus and tapas in the streets around Rúa da Estrela and Rúa da Franxa, and the fish stalls of the Praza de Lugo market in the morning.',
    href: 'https://www.coruna.gal/tourism/en/what-to-do-in-a-coruna/cuisine',
  },
];
