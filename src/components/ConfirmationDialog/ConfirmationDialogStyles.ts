import styled from "@emotion/styled";

export const ConfirmationDialogModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

export const ConfirmationDialogModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    button {
        margin: 0 10px;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        background-color: #007bff;
        color: white;
        font-weight: bold;
    }
    
    button:hover {
        background-color: #0056b3;
    }
    
    /* Cancel button */
    button:last-child {
        background-color: #ccc;
    }
    
    button:last-child:hover {
        background-color: #999;
    }
`;