import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const animationLoading = keyframes`
  	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
`;

export const Container = styled.div`
  overflow-x: hidden;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-x: hidden;
`;

export const Informations = styled.section`
  display: flex;
  /* justify-content: center; */
  /* margin: 160px 0 0 100px; */
  padding-top: 3rem;
  margin: 2rem;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 1180px) {
    margin-top: -40px;
    justify-items: center;
    align-items: center;
    /* justify-content: center; */
  }

  @media (max-width: 1180px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;

    button {
      margin: 1.25rem 2rem 0 0;
    }
  }

  h1 {
    max-width: 20rem;
    font-family: Poppins;
    font-style: normal;
    font-size: 60px;
    line-height: 80px;
    color: var(--logo-color);

    margin-bottom: 0.3rem;
  }

  h2 {
    /* margin: 1.25rem 0 0 1rem; */
    margin-bottom: 1rem;
    font-weight: normal;
    font-family: 'Patrick Hand', cursive;
    font-size: 2.2rem;
    line-height: 3rem;
    color: var(--primary-color);

    @media (max-width: 1180px) {
      max-width: 20rem;
      font-size: 2rem;
    }
  }
`;

export const StaticImageHome = styled.div`
  padding-top: 2rem;
  margin-left: 3rem;
  animation: ${animationLoading} 6s ease-in-out infinite;

  @media (max-width: 1180px) {
    display: none;
  }

  @media (min-width: 1180px) {
    margin-top: -40px;
  }
`;

export const PolygonOneImageHome = styled.div`
  position: relative;
  max-width: 10rem;
  right: 4rem;
  top: -39rem;

  @media (max-width: 1180px) {
    display: flex;
  }
`;

export const PolygonTwoImageHome = styled.div`
  position: absolute;
  display: flex;
  max-width: 10rem;
  right: -3rem;
  top: 13.5rem;
  @media (max-width: 1180px) {
    display: flex;
  }
`;
