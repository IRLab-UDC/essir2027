export interface Slot {
  time: string;
  title: string;
  speaker?: string;
  type: 'keynote' | 'lecture' | 'workshop' | 'break' | 'social';
}

export interface Day {
  label: string;
  date: string;
  slots: Slot[];
}

export const programme: Day[] = [];
