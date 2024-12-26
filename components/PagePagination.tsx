'use client';

import Pagination from '@mui/material/Pagination';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useCallback } from 'react';

interface Props {
  page: number;
  numberOfPages: number;
}

export default function PagePagination({ numberOfPages, page }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // const currentPageNumber = Number(searchParams.get('page')) || 1;

  const handleChangePage = useCallback(
    (event: ChangeEvent<unknown>, value: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', String(value));

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router],
  );

  return (
    <Pagination
      count={numberOfPages}
      page={page}
      variant="outlined"
      shape="rounded"
      siblingCount={1}
      onChange={handleChangePage}
    />
  );
}
