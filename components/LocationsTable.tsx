import { Location } from '@/types/location';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';
import TextAtribute from './TextAtribute';

export default function LocationsTable({
  locations,
}: {
  locations: Location[];
}) {
  return (
    <TableContainer sx={{ border: '1px solid #777777', borderRadius: 2 }}>
      <Table sx={{ tableLayout: 'auto' }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Dimension</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {locations.map((location) => (
            <TableRow key={location.id}>
              <TableCell sx={{ maxWidth: '150px' }}>
                <TextAtribute title={location.name}>
                  {location.name}
                </TextAtribute>
              </TableCell>
              <TableCell sx={{ maxWidth: '100px' }}>
                <TextAtribute title={location.type}>
                  {location.type}
                </TextAtribute>
              </TableCell>
              <TableCell sx={{ maxWidth: '100px' }}>
                <TextAtribute title={location.dimension}>
                  {location.dimension}
                </TextAtribute>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </TableContainer>
  );
}
