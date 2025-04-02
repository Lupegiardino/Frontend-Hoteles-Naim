import { useContext, useState } from "react";
import { FormModalContext } from "../context";
import { Modal as ModalAntd } from "antd";

export const Modal = ({ children }) => {

    const { isModalOpen, handleCancel, contentModal } = useContext(FormModalContext);

    return (
        <ModalAntd open={isModalOpen} onCancel={handleCancel} footer={null} centered mask width={768}>
            {children ? children : contentModal}
        </ModalAntd>
    )
}
