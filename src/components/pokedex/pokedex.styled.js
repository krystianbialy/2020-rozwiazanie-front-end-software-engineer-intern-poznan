import styled from 'styled-components';

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const ButtonPrevious = styled.button`
  height: 40px;
  width: 100px;
  font-size: 17px;
  cursor: pointer;
`;

export const ButtonNext = styled(ButtonPrevious)`
  && {
    margin-left: 20px;
  }
`;

export const Container = styled.div`
  background: #000;
  padding: 20px 0 30px 0;
`;

export const Pokemons = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  display: grid;

  @media (min-width: 530px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1060px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Pokemon = styled.div`
  width: 245px;
  background: #fff;
  margin: 20px auto 0 auto;
  padding: 15px 25px;
`;

export const Image = styled.img``;

export const Id = styled.p`
  margin-top: 10px;
`;

export const Name = styled.p`
  margin-top: 5px;
`;

export const Type = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const TypeText = styled.p`
  margin-left: 5px;
`;

export const Height = styled.p`
  margin-top: 5px;
`;

export const Weight = styled.p`
  margin-top: 5px;
`;
