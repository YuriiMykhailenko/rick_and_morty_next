import { Grid2 } from '@mui/material';
import PersonCard from './PersonCard';

export default function LoadingList() {
  const temp = Array(20).fill(0);

  return (
    <Grid2
      container
      rowSpacing={40}
      columnSpacing={20}
      sx={{
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      {
        //eslint-disable-next-line @typescript-eslint/no-unused-vars
        temp.map((_) => (
          <PersonCard isLoading={true} key={Math.random()} />
        ))
      }
    </Grid2>
  );
}
