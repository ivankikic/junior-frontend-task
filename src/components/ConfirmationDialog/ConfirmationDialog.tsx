import { ConfirmationDialogModal, ConfirmationDialogModalContent } from "./ConfirmationDialogStyles";

interface ConfirmationDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}


export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ open, onClose, onConfirm, message }) => {
    return (
        open && (
            <ConfirmationDialogModal>
                <ConfirmationDialogModalContent>
                    <p>{message}</p>
                    <button onClick={onConfirm}>Confirm</button>
                    <button onClick={onClose}>Cancel</button>
                </ConfirmationDialogModalContent>
            </ConfirmationDialogModal>
        )
    );
};
