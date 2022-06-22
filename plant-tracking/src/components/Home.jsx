import styled from "styled-components";


const Home = () => {
  return (
    <div>
      <Title>Welcome</Title>
      <Title>Let's find some plants!</Title>
    </div>
  )
}

export default Home;

const Title = styled.h1`
  margin-left: 20px;
  color: green;
  text-align: center;
`;

