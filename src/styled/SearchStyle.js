import styled from 'styled-components'
import { mainColor, subColor } from './CommonStyle'

export const SearchContainer = styled.div`
    form{
        display:flex; 
        padding:15px 0;
    }
    
    input[type="text"]{
        height: 30px;
        width: 230px;
        margin-left:auto;
    }
    button {
        width: 70px;
        height: 30px;
        background-color: ${subColor};
        cursor: pointer;
        vertical-align:middle;
        &:hover {
            background-color: ${mainColor};
            color: white;
        }

        &:nth-last-child(2) {
            margin-right: 5px;
        }
    }
`