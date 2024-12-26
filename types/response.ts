import { Character } from './character';
import { Location } from './location';

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharactersResponse {
  info: Info;
  results: Character[];
}

export interface LocationsResponse {
  info: Info;
  results: Location[];
}
