'use server';
// import { ChangeEvent, useCallback, useEffect, useState } from 'react';
// import { usePathname, useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

import { getCharacters } from '../client/client';
// import PersonCard from './PersonCard';
// import PagePagination from './Pagination';
// import { Respond } from '@/types/respond';

// import { Grid2, Container } from '@mui/material';
import List from '../components/List';
import { Container } from '@mui/material';

async function GetList() {
  const response = await getCharacters('1');

  // return <List characters={response.results} />;
  return <List characters={response.results} page={1} pagesNumber={response.info.pages} />;
}
export default function CharactersList() {
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const router = useRouter();

  // const currentPageNumber = Number(searchParams.get('page')) || 1;

  // const [response, setResponse] = useState<Respond | null>(null);

  // const handleChangePage = useCallback(
  //   (event: ChangeEvent<unknown>, value: number) => {
  //     const params = new URLSearchParams(searchParams.toString());
  //     params.set('page', String(value));

  //     router.push(`${pathname}?${params.toString()}`);
  //   },
  //   [searchParams, pathname, router],
  // );

  // useEffect(() => {
  //   getCharacters(String(currentPageNumber)).then((res) => {
  //     setResponse(res);
  //   });
  // }, [currentPageNumber]);

  return (
    <Container className="flex flex-col items-center justify-center gap-40 py-40">
      <Suspense fallback={<div>Loading...</div>}>{<GetList />}</Suspense>
    </Container>
  );
  // <Container className="flex flex-col items-center justify-center gap-40 py-40">
  //   <Suspense fallback={<div>Loading...</div>}>{getList()}</Suspense>;
  // </Container>;
}
