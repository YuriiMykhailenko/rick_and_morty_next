import { Typography } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  atributeName?: string;
  children: ReactNode;
  title: string;
}

export default function TextAtribute({ atributeName, children, title }: Props) {
  return (
    <Typography title={title} className="truncate font-thin text-gray-400">
      {atributeName}{' '}
      <strong className="font-medium text-white">{children}</strong>
    </Typography>
  );
}
