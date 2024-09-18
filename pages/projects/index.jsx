"use client";

import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import ProjectCard from "../../components/ProjectCard";
import { POLAROID_ITEMS } from "../../common/projects";
import ProjectsHeader from "../../components/ProjectsHeader";

const Projects = () => {
  return (
    <Layout>
      <Wrapper>
        <ProjectsHeader />
        {/* TODO: SEARCH BAR */}
        {/* TODO: LIST OF PROJECTS based on search query*/}
        <ProjectListWrapper>
          <ProjectList>
            {POLAROID_ITEMS.sort((a, b) => b.id - a.id).map(
              (project) =>
                project && <ProjectCard key={project.id} {...project} />
            )}
          </ProjectList>
        </ProjectListWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Projects;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 75vh;
`;

const ProjectListWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectList = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  margin: 0 auto;
`;
