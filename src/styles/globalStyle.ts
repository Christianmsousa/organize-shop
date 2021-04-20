import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
:root {
    --main-color: #F3F8FF;
    --pane-padding: 5px 42px;
    --logo-color: #678AC0;
    --primary-color: #2D5491;
    --secundary-color:  #767272;
    --input-text-color: #666360;
    --input-backgound: #E5E5E5;

}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
}
body {
    font-family: "AvenirRoman", monospace;
    font-size: 15px;
    background-color: var(--main-color);
    overflow-y:hidden;
    overflow-x:hidden;
}

h1, h2, h3, h4, h5, h6, string {
    font-weight: 500;
}
button {
    cursor: pointer;
}
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px var(--input-backgound) inset;
}

input:-webkit-autofill {
    -webkit-text-fill-color: var(--secondary-color) !important;
}
`;

export default Global;
