// 'use client';

import { Character } from '@/types/character';
import { Box, Card, Grid2 } from '@mui/material';
import Image from 'next/image';
import TextAtribute from './TextAtribute';
import Skeleton from '@mui/material/Skeleton';

const IMG_SIZE = 220;

interface Props {
  person?: Character;
  isLoading?: boolean;
}

export default async function PersonCard({ person, isLoading = false }: Props) {
  return (
    <Grid2>
      <Card>
        {isLoading ? (
          <Skeleton height={IMG_SIZE} width={IMG_SIZE} />
        ) : (
          <Image
            src={person!.image}
            alt={person!.name}
            // placeholder='blur'
            width={IMG_SIZE}
            height={IMG_SIZE}
            priority
          />
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 8,
            maxWidth: IMG_SIZE,
            gap: 4,
          }}
        >
          {isLoading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            <>
              <TextAtribute title={person!.name} atributeName="Name">
                {person!.name}
              </TextAtribute>
              <TextAtribute title={person!.status} atributeName="Status">
                {person!.status}
              </TextAtribute>
              <TextAtribute title={person!.gender} atributeName="Gender">
                {person!.gender}
              </TextAtribute>
              <TextAtribute title={person!.origin.name} atributeName="Origin">
                {person!.origin.name}
              </TextAtribute>
            </>
          )}
        </Box>
      </Card>
    </Grid2>
  );
}
