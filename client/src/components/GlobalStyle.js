import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
html{
    @media (max-width: 1300px){
        font-size: 75%;
    }

}
body{
    background: black;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}
button2{
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem 1rem;
    border: 3px solid #23d997;
    background: transparent;
    color: orangered;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}
button3{
    font-weight: bold;
    font-size: 1rem;
    top: 20px;
    left: 100px;
    cursor: pointer;
    padding: 1rem 1rem;
    border: 3px solid #23d997;
    background: transparent;
    color: orangered;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}
button4{
    font-weight: bolder;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 2rem 2rem;
    border: 12px solid orangered;
    background: transparent;
    color: green;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: orangered;
        color: white;
    }
}
button5{
    font-weight: bolder;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 2rem 1rem;
    border: 12px solid green;
    background: transparent;
    color: orangered;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: green;
        color: white;
    }
}
    h2{
        font-weight: lighter;
        font-size: 3rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
