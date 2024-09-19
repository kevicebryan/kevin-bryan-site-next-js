import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styled from "styled-components";

const SearchBar = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router.query.search || "");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      const value = searchValue.replaceAll(" ", "+");
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, search: value },
        },
        undefined,
        { shallow: true }
      );
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = searchValue.replaceAll(" ", "+");
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, search: value },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
      />
      <Button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin: 12px 0;
  z-index: 5;
`;

const Input = styled.input`
  border-radius: 12px 0 0 12px;
  background: #101010;
  border: 1px solid #1b1b1b;
  padding: 12px 24px; /* Adjust padding for even spacing */
  font-size: 1rem;
  color: white;
  font-family: monospace;

  width: 40%;
  transition: ease-in-out 0.2s;

  &:focus {
    outline: none;
    border: 1px solid #f5f5f5;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

const Button = styled.button`
  border-radius: 0 12px 12px 0;
  background: #1b1b1b;
  border: 1px solid #1b1b1b;
  padding: 13.5px 24px; /* Same padding as input */
  font-size: 1rem;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: url("/static/assets/cursor/pointer.svg"), pointer;

  svg {
    fill: #f5f5f574;
    width: 1rem;
    height: 1rem;
    transition: ease-in-out 0.2s;
  }

  &:hover {
    svg {
      fill: #f5f5f5;
      transform: scale(1.2);
    }
  }
`;

export default SearchBar;
