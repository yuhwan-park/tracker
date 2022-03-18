import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const Head = styled.div`
  font-size: 72px;
  color: ${(props) => props.color};
`;
const Wrapper = styled.div`
  a {
    display: flex;
  }
`;

function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to={"/"}>
          <Head color="white">My</Head>
          <Head color="blue">Bit</Head>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Header;
