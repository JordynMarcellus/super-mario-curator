import React, { memo } from "react";
import {
  Grommet,
  grommet,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "grommet";

export const SearchTable = memo(({ courses }) => (
  <Grommet theme={grommet}>
    <Table>
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
  </Grommet>
));