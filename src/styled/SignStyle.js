import styled from 'styled-components'
import { mainColor, subColor } from './CommonStyle'

export const LogoutContainer = styled.div`
    .logoutWrap {
        position: relative;
        display: block;
        margin: auto;
        width: 410px;
    }
    input[type="text"],
    input[type="password"],
    input[type="id"] {
        width: 400px;
        height: 40px;
    }
`

export const LogoutBtnWrap = styled.div`
    position: absolute;
    right: 0;

    button {
        width: 70px;
        height: 32px;
        background-color: ${subColor};
        border: none;
        cursor: pointer;

        &:hover {
            background-color: ${mainColor};
            color: white;
        }

        &:nth-last-child(2) {
            margin-right: 5px;
        }
    }
`