export interface Speaker {
  id: string;
  name: string;
  affiliation: string;
  country: string;
  bio: string;
  talkTitle: string;
  photo?: string;
}

export const speakers: Speaker[] = [];
