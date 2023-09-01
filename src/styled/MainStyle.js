import styled from 'styled-components'
import { h2, inner, mainColor } from './CommonStyle'

export const SectionContainer = styled.div`
    .inner{
        ${inner}
    }
    h2{
        ${h2}
    }
`

export const BookListTable = styled.table`
    width: 100%;
    tbody {
        tr {
            box-sizing: border-box;

            th {
                border-bottom: 2px solid #000;
                padding: 10px 0;
                font-size: 18px;
                font-weight: 600;
                box-sizing: border-box;
            }

            td {
                border-bottom: 1px solid #000;
                padding: 5px 0;
                height: 50px;
                font-size: 16px;
                line-height: 50px;
                box-sizing: border-box;

                button {
                    width: 46px;
                    height: 30px;
                    border: none;
                    background-color: transparent;
                    font-size: 24px;
                    vertical-align: middle;
                    cursor: pointer;

                    &:hover {
                        color: ${mainColor};
                    }
                }
            }
        }
    }
`