import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #fff;
`;

export const Subtitle = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
`;

export const Policy = styled.div`
  width: 100%;

  margin: 0 auto;

  font-size: 15px;
  font-weight: lighter;

  display: flex;
  flex-direction: column;
  justify-items: space-between;

  div {
    font-size: 13px;
    font-weight: bold;
    margin-top: 15px;

    span {
      color: #2da165;
    }
  }
`;
