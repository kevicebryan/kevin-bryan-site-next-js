import React from "react";
import { BoardContainer, ImageContainer1, ImageContainer2 } from "./style";
import Image from "next/image";

const ProjectBoard = ({ img1, img2 }) => {
  return (
    <BoardContainer>
      <ImageContainer1>
        <Image src={img1} alt="project-img-1" width={500} height={500} />
      </ImageContainer1>
      <ImageContainer2>
        <Image src={img2} alt="project-img-2" width={500} height={500} />
      </ImageContainer2>
    </BoardContainer>
  );
};

export default ProjectBoard;
