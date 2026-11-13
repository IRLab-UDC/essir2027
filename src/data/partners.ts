export interface Partner {
  name: string;
  url: string;
  logo: string;
  ratio: number;
  height: number;
}

export const organiser: Partner = {
  name: 'Information Retrieval Lab (IRLab)',
  url: 'https://www.irlab.org/',
  logo: '/logos/irlab.svg',
  ratio: 3.99,
  height: 3,
};

export const supporters: Partner[] = [
  { name: 'CITIC', url: 'https://citic.udc.es/', logo: '/logos/citic.svg', ratio: 2.038, height: 2.4 },
  { name: 'Universidade da Coruña', url: 'https://www.udc.gal/', logo: '/logos/udc.svg', ratio: 4.861, height: 2.3 },
  { name: 'Facultade de Informática da Coruña', url: 'https://www.fic.udc.es/', logo: '/logos/fic.png', ratio: 2.462, height: 2.4 },
  { name: 'ACM SIGIR', url: 'https://sigir.org/', logo: '/logos/sigir.png', ratio: 1, height: 2.9 },
];
