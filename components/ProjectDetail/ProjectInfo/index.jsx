import React from "react";
import { InfoContainer } from "./style";
import { Title } from "./style";
import { ContentWrapper } from "./style";
import { SubHeader } from "./style";
import { DateWrapper } from "./style";
import { ActionWrapper } from "./style";

const ProjectInfo = ({ title, role, year, description, techStacks, url }) => {
  const formatTechStacks = () => {
    if (techStacks) {
      if (techStacks.length > 1) {
        return `${techStacks.slice(0, -1).join(", ")}, and ${
          techStacks[techStacks.length - 1]
        }`;
      }
      return techStacks[0];
    }

    return "care by Kevin Bryan";
  };

  return (
    <InfoContainer>
      <Title>{title}</Title>
      <DateWrapper>
        <p>
          <span>role: </span>
          {role} <span>year: </span>
          {year}
        </p>
      </DateWrapper>
      <ContentWrapper>
        <SubHeader>Description</SubHeader>
        <p>{description}</p>
      </ContentWrapper>
      <ContentWrapper>
        <SubHeader>Tech Stack</SubHeader>
        <p>made using {formatTechStacks()}</p>
      </ContentWrapper>
      <ActionWrapper>
        <a href={`${url}`} target="_blank" rel="noreferrer">
          PROJECT LINK!
        </a>
      </ActionWrapper>
    </InfoContainer>
  );
};

export default ProjectInfo;
