import React, { memo } from "react";
import { Layout } from "../../components/Layout";
import { CoursesContainer } from "../CoursesContainer";

export const HomeContainer = memo(props => (
  <Layout>
    <CoursesContainer />
  </Layout>
));
