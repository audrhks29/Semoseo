import styled from 'styled-components'
import { inner, mainColor } from './CommonStyle'

export const HeaderContainer = styled.div`
    width: 100%;
    background-color: ${mainColor};
    color: white;
    text-align: center;
    font-size: 40px;
    height: 120px;
    line-height: 120px;
    .inner{
        ${inner}
    }
`