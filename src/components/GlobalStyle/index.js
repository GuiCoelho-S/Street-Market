import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
    --width:100vh;
    --header-size: 100px;
    --space-items:20px;
    --bg: whitesmoke;
    --color-icon: #65bc5d;
    --color-title: #318829;
    --grey: #c3c3c3;
    --green: #a7dc82;
    --red: #e65f5f;
}
body {
    width:100%;
    min-height:100vh;
    height:100%;
    box-sizing:border-box;
    padding:0;
    margin:0;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--bg);

    p {
        color: var(--color-title);
    }
}



`;

export const bgPrimary = "#61bd07";
export const bgSecondary = "white";

export const textPrimary = "white";
export const textSecondary = "#61bd07"