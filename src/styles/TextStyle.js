import styled from "styled-components";

export const Display = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 80px;
  letter-spacing: -0.04em;

  @media only screen and (max-width: 480px) {
    font-size: 3.75rem;
    line-height: 72px;
  }
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 56px;
  letter-spacing: -0.04em;

  @media only screen and (max-width: 480px) {
    font-size: 2.125rem;
    line-height: 40px;
  }
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 2.4375rem;
  line-height: 47px;
  letter-spacing: -0.04em;

  @media only screen and (max-width: 480px) {
    font-size: 2.0625rem;
    line-height: 40px;
    letter-spacing: -0.02em;
  }
`;

export const H3 = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 2.0625rem;
  line-height: 40px;
  letter-spacing: -0.02em;

  @media only screen and (max-width: 480px) {
    font-size: 1.75rem;
    line-height: 34px;
  }
`;

export const BodyIntro = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 24px;
`;

export const BodyMain = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
`;

export const MediumText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 21px;
`;

export const Caption = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 14px;
`;

export const Footer = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 12px;
  letter-spacing: 0.02em;
`;