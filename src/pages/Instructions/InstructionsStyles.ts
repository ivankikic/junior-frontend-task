import styled from "@emotion/styled";

export const InstructionsContainer = styled.div`
    width: 50%;
    margin: 50px auto;
`;

export const InstructionsContent = styled.div`
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    ul {
        list-style-type: none;
        li {
            text-indent: -5px;
            &:before {
                content: "-";
                margin-right: 10px;
            }
        }
    }
    a {
        color: #000;
    }
`;