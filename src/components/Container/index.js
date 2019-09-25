import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  padding: 30px;
  margin: 80px auto;
  transition: all 0.2s ease-out;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  &:hover {
    transform: scale(1.01);
  }
`;

export default Container;
