import { createContext, useState } from 'react';

export const FormModalContext = createContext();

export const FormModalProvider = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openCloseModal = () => {
        setShowModal((prev) => !prev);
    }

    const handleShowModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleContentModal = (content) => {
        setContentModal(content);
    }

    return (
        <FormModalContext.Provider value={
            {
                showModal,
                openCloseModal,
                isModalOpen,
                handleShowModal,
                handleCancel,
                handleContentModal,
                contentModal
            }
        }>
            {children}
        </FormModalContext.Provider>
    )
}