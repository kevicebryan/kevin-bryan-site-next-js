"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout/Layout";
import { POLAROID_ITEMS } from "../../../common/projects";
import { PageContainer } from "./style";
import ProjectBoard from "../../../components/ProjectDetail/ProjectBoard";
import ProjectInfo from "../../../components/ProjectDetail/ProjectInfo";

const ProjectDetail = () => {
  const router = useRouter();
  const projectId = router.query.projectId;

  const [project, setProject] = useState({});

  useEffect(() => {
    if (projectId) {
      const currProject = POLAROID_ITEMS.find(
        (project) => project.id === Number(projectId)
      );
      if (currProject) {
        setProject(currProject);
      }
    }
  }, [projectId]);

  return (
    <Layout>
      {project && (
        <PageContainer>
          <ProjectBoard img1={project.img1} img2={project.img2} />
          <ProjectInfo
            title={project.title}
            description={project.description}
            role={project.role}
            year={project.year}
            techStacks={project.techStacks}
            url={project.url}
          ></ProjectInfo>
        </PageContainer>
      )}
    </Layout>
  );
};

export default ProjectDetail;
