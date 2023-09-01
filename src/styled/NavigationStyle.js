import styled from 'styled-components'
import { h2, inner, mainColor, subColor } from './CommonStyle'

export const NavContainer = styled.ul`
    width: 100%;
    background-color: ${subColor};
    .inner{
        ${inner}
        display: flex;
        li {
            text-align: center;
            width: 200px;
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            &.on {
                color: white;
                border-bottom: 3px solid black;
                box-sizing: border-box;
                background-color: ${mainColor};
            }
            &:hover {
                background-color: ${mainColor};
                color: white;
            }
        }
        span {
            display: block;
            margin-left: auto;
            line-height: 40px;
            em {
                font-weight: 600;
            }
        }
    }
`