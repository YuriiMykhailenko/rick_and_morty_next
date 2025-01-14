import { Suspense } from 'react';
import { Typography, Container } from '@mui/material';

import List from '../../components/List';
import LoadingList from '../../components/LoadingList';
import { getCharacters } from '@/client/client';

async function GetList({ page }: { page: number }) {
  const response = await getCharacters(String(page));

  return (
    <List
      characters={response.results}
      page={page}
      pagesNumber={response.info.pages}
    />
  );
}

export default async function CaractersPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page = '1' } = await searchParams;

  return (
    <main>
      <Container className="flex flex-col items-center justify-center gap-60 py-40">
        <Typography variant="h3">Characters Page</Typography>

        <Suspense fallback={<LoadingList />}>
          <GetList page={Number(page)} />
        </Suspense>
      </Container>
    </main>
  );
}
