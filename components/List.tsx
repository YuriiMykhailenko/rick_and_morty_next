import { Grid2 } from '@mui/material';
import PersonCard from './PersonCard';
import { Character } from '@/types/character';
import PagePagination from './PagePagination';

export default function List({
  characters,
  pagesNumber,
  page,
}: {
  characters: Character[];
  pagesNumber: number;
  page: number;
}) {
  return (
    <>
      <Grid2
        container
        rowSpacing={40}
        columnSpacing={20}
        sx={{
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        {characters.map((person) => (
          <PersonCard person={person} key={person.id} />
        ))}
      </Grid2>

      <PagePagination page={page} numberOfPages={pagesNumber} />
    </>
  );
}
