import styled from 'styled-components'
import { subColor } from './CommonStyle'

export const PaginationContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    p {
        cursor: pointer;
        padding: 0 10px;
        &.pagingOn {
            background: ${subColor};
        }
    }
`