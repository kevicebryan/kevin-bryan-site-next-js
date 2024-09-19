"use client";

import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import ProjectCard from "../../components/ProjectCard";
import { POLAROID_ITEMS } from "../../common/projects";
import ProjectsHeader from "../../components/ProjectsHeader";
import SearchBar from "../../components/Searchbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Projects = () => {
  const [projects, setProjects] = useState(POLAROID_ITEMS);
  const router = useRouter();
  const searchQuery = router.query.search || "";

  useEffect(() => {
    setProjects(
      POLAROID_ITEMS.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <Layout>
      <Wrapper>
        <ProjectsHeader />
        <SearchBar />
        <ProjectListWrapper>
          {projects.length > 0 ? (
            <ProjectList>
              {projects
                .sort((a, b) => b.id - a.id)
                .map(
                  (project) =>
                    project && <ProjectCard key={project.id} {...project} />
                )}
            </ProjectList>
          ) : (
            <NoProjectFound>
              <h2>Oops, nothing seems to be showing up here...</h2>
              <p>try searching for another project</p>
            </NoProjectFound>
          )}
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

  @media screen and (max-width: 768px) {
    gap: 24px;
  }
`;

const ProjectListWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectList = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
`;

export const NoProjectFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 12px;
  padding: 48px 24px;

  & > h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  & > p {
    margin: 0;
    opacity: 0.8;
    font-size: 1rem;
  }
`;
