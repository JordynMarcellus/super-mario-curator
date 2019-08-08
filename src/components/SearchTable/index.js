import React, { memo } from "react";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "grommet";

export const SearchTable = memo(({ courses }) => (
  <Table size="full">
    <TableHeader>
      <TableRow>
        <TableCell scope="col">Course name</TableCell>
        <TableCell scope="col">CourseId</TableCell>
        <TableCell scope="col">MakerId</TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {courses.map(({ courseName, makerId, courseId }) => (
        <TableRow key={courseId}>
          <TableCell>{courseName}</TableCell>
          <TableCell>{courseId}</TableCell>
          <TableCell>{makerId}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
));
