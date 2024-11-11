"use client";

import Head from "next/head";
import styled from "styled-components";
import PoopMart from "../../components/PoopMart";

const PoopMartAuthPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>POOP MART | Authentication</title>
        <link
          rel="shortcut icon"
          href="https://play-lh.googleusercontent.com/9yFvidySWXYEKlGozg7gDs2Ld8HMtlFQMIQz1pjKSw0Dl_0rPhwuRQ2NCSscfv_RDQL3=w240-h480-rw"
          type="image/x-icon"
        />
      </Head>
      <PoopMart />
    </Wrapper>
  );
};

export default PoopMartAuthPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
