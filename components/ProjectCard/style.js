import styled from "styled-components";

export const Container = styled.div`
  cursor: url("/static/assets/cursor/pointer.svg"), pointer;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 2px;
  transition: ease-in 0.25s;

  &:active {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
  }

  &:hover {
    transform: translateY(-1%);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 2px;
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  background-color: #0029ff;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-out 0.1ss;

  &:hover {
    outline: 1px dashed white;
  }

  & > p {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: white;
    margin: 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: white;
  width: 260px;

  & > h5 {
    font-size: 16px;
    font-weight: 600;
    max-width: 95%;
    margin: 0;
    margin-top: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal; /* Allow line breaks */
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Set the number of lines (e.g., 2 lines max) */
    -webkit-box-orient: vertical;
  }

  & > p {
    font-size: 14px;
    font-weight: 400;
    color: white;
    max-width: 95%;
    margin: 0;
    opacity: 0.5;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .name {
    transition: ease-out 0.1s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 320px;
  height: 180px;
  border-radius: 12px;
  background-color: #0029ff;

  transition: ease-in 0.25s;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    transition: ease-in 0.25s;

    &:hover {
      border-radius: 4px;
    }
  }

  &:hover {
    border-radius: 4px;
  }
`;
