import { Container, Typography } from '@mui/material';
import { Suspense } from 'react';

import LocationsTable from '../../components/LocationsTable';
import { getLocations } from '@/client/client';

async function GetLocationsTable() {
  const locations = (await getLocations()).results;

  return <LocationsTable locations={locations} />;
}

export default function LocationsPage() {
  return (
    <>
      <main>
        <Container className="flex flex-col items-center justify-center gap-60 py-40">
          <Typography variant="h2">Locations List</Typography>
          <Suspense fallback={<div>Loading...</div>}>
            <GetLocationsTable />
          </Suspense>
        </Container>
      </main>
    </>
  );
}
