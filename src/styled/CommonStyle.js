import styled from 'styled-components'

export const mainColor = "#2E2E2E;"
export const subColor = "#B18904";
export const h2 = {
    fontSize: "30px",
    textAlign: "center",
    paddingTop: "60px",
    paddingBottom: "30px",
    fontWeight: "600"
}
export const inner = {
    width: "1400px",
    margin: "auto"
}

export const WrapContainer = styled.div`
    width: 100%;
`
export const CommonFormContainer = styled.div`
    form {
        position: relative;
        display: block;
        margin: auto;
        width: 410px;
        div {
            margin-bottom: 10px;

            label {
                margin-right: 20px;
            }
        }
    }
    input[type="text"],
    input[type="password"],
    input[type="id"] {
        width: 400px;
        height: 40px;
    }
`
export const BtnWrap = styled.div`
    position: absolute;
    right: 0;
    button {
        width: 60px;
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
