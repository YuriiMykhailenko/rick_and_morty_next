import { CharactersResponse, LocationsResponse } from '../types/response';

const BASE_URL = 'https://rickandmortyapi.com/api/';

const CHARACTERS = 'character';
const LOCATIONS = 'location';
// const EPISODES = 'episode';

function fetchData<T>(searchParams: string = '', url: string): Promise<T> {
  return fetch(`${BASE_URL}${url}?page=${searchParams}`).then((res) => {
    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  });
}

export async function getCharacters(
  searchParams: string = '',
): Promise<CharactersResponse> {
  const respond = await fetchData<CharactersResponse>(
    searchParams,
    CHARACTERS,
  ).then((res) => res);

  return respond;
}

export async function getAllCharacters(
  searchParams: string = '',
): Promise<CharactersResponse> {
  const respond = await fetchData<CharactersResponse>(
    searchParams,
    CHARACTERS,
  ).then((res) => res);

  return respond;
}

export async function getLocations(
  searchParams: string = '',
): Promise<LocationsResponse> {
  const respond = await fetchData<LocationsResponse>(
    searchParams,
    LOCATIONS,
  ).then((res) => res);

  return respond;
}
