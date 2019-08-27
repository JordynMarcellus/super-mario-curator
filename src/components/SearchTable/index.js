import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "grommet";

export const SearchTable = memo(({ courses, headers }) => (
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
    <TableBody>
      {courses.map(({ courseName, makerId, courseId }) => (
        <TableRow key={courseId}>
          <TableCell>
            <Link to={`/courses/${courseId}`}>{courseName}</Link>
          </TableCell>
          <TableCell>{courseId}</TableCell>
          <TableCell>{makerId}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
));
