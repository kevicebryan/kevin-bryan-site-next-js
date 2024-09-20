import Image from "next/image";
import {
  Container,
  InfoWrapper,
  Profile,
  TextWrapper,
  Thumbnail,
} from "./style";
import { useRouter } from "next/router";

const ProjectCard = ({ id, title, year, role, thumbnail }) => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push(`projects/${id}`);
  };

  const handleRedirectProfile = () => {
    router.push("/about");
  };

  return (
    <Container>
      <Thumbnail onClick={handleRedirect}>
        {thumbnail && (
          <Image
            // src={`${image}`}
            src={`/images/projects/${thumbnail}`}
            alt="thumbnail"
            width={320}
            height={180}
          />
        )}
      </Thumbnail>
      <InfoWrapper>
        <Profile onClick={handleRedirectProfile}>
          <p>KB</p>
        </Profile>
        <TextWrapper>
          <h5 onClick={handleRedirect}>
            {`${title}`.substring(0, 56) +
              (`${title}`.length > 56 ? "..." : "")}
          </h5>
          <p
            className="name"
            onClick={handleRedirectProfile}
          >{`Kevin Bryan`}</p>
          <p onClick={handleRedirect}>{`${role} ${String.fromCharCode(
            183
          )} ${year}`}</p>
        </TextWrapper>
      </InfoWrapper>
    </Container>
  );
};

export default ProjectCard;
