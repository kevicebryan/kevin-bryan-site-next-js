"use client";

import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import ProjectCard from "../../components/ProjectCard";
import { POLAROID_ITEMS } from "../../common/projects";
import ProjectsHeader from "../../components/ProjectsHeader";

const Projects = () => {
  return (
    <Layout>
      <ProjectsHeader />
      {/* TODO: SEARCH BAR */}
      {/* TODO: LIST OF PROJECTS*/}
      <ProjectListWrapper>
        <ProjectList>
          {POLAROID_ITEMS.sort((a, b) => b.id - a.id).map(
            (project) =>
              project && <ProjectCard key={project.id} {...project} />
          )}
        </ProjectList>
      </ProjectListWrapper>
    </Layout>
  );
};

export default Projects;

const ProjectListWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
`;

const ProjectList = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: auto;
`;
