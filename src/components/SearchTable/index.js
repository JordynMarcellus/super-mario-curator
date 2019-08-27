import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "grommet";

export const SearchTable = memo(({ cells, headers }) => (
  <Table size="full">
    <TableHeader>
      <TableRow>
        {/* Since we won't sort/filter based on these, we can get away with indices as key */}
        {headers.map((headerCell, index) => (
          <TableCell key={index} scope="col">
            {headerCell}
          </TableCell>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>{cells}</TableBody>
  </Table>
));
