import styled, {keyframes} from "styled-components";
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
	overflow-x:hidden;
`;

export const Content = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
overflow-x:hidden;
`;

export const Informations = styled.section`
display:flex;
justify-content:center;
margin:160px 0 0 100px;
flex-direction:column;
width:100%;
height:100%;

@media (min-width: 1180px) {
margin-top:-40px;
}

@media (max-width: 1180px) {
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:0;

button{
  margin:1.25rem 2rem 0 0;
}
}

h1{
max-width: 20rem;
margin-bottom:2rem;
font-family: Poppins;
font-style: normal;
font-size: 60px;
line-height: 80px;
text-align: center;
color: var(--logo-color);
}

h2{
margin:1.25rem 0 0 1rem;
font-weight:700;
max-width:30rem;
font-family: 'Patrick Hand', cursive;
font-size: 2.5rem;
line-height: 3rem;
color: var(--primary-color);

@media (max-width: 1180px) {
max-width:20rem;
font-size:2rem;
}
}

h3{
margin:1.25rem 0 0 1rem;
max-width:20rem;
font-family: Roboto Slab;
font-size: 1.56rem;
color: var(--secundary-color);
}
`;

export const ButtonDashboard = styled.div`
.signIn_btn{
width:8.75rem;
height:2.5rem;
margin:2rem 0.93rem 0 0.93rem;
background-color:#0F4DAD;
border-radius:0.37rem;
border:0.12rem solid #0F4DAD;
color:#fff;
font-family: Poppins;
font-weight:700;
transition: 200ms all;

:hover{
  transition: 300ms all;
	background: ${shade(0.2, '#0F4DAD')};
  transform: scale(1.1);
}
}

.signUp_btn{
width:8.75rem;
height:2.5rem;
border:0.12rem solid #2D5491;
background-color:#2D5491;
border-radius:0.37rem;
color:#fff;
font-family: Poppins;
font-weight:700;
transition: 200ms all;

:hover{
  transition: 300ms all;
	background: ${shade(0.2, '#2D5491')};
  transform: scale(1.1);
}
}
`;

export const StaticImageHome = styled.div`
margin-top:12rem;
animation: ${animationLoading} 6s ease-in-out infinite;

@media (max-width: 1180px) {
  display:none;
}

@media (min-width: 1180px) {
margin-top:-40px;
}
`;

export const PolygonOneImageHome = styled.div`
position:relative;
max-width:10rem;
right:3rem;
top:-10rem;

@media (max-width: 1180px) {
  display:flex;
}
`;

export const PolygonTwoImageHome = styled.div`
display:flex;
justify-content:center;
align-items:center;
position:absolute;
right:-3rem;
top:1rem;

@media (max-width: 1180px) {
  display:flex;
}
`;


