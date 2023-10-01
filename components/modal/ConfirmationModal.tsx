import ReactPortal from './ReactPortal';
import React, { useEffect } from 'react';

interface ConfirmationModalProps {
  children: React.ReactNode;
  //typeof React.Children |
  isOpen: boolean;
  handleClose: () => void;
}

const ConfirmationModal = ({
  children,
  isOpen,
  handleClose,
}: ConfirmationModalProps) => {
  // Close the model if the esc is enter
  useEffect(() => {
    const CLoseOnEsckey = (e: KeyboardEvent) => {
      e.key === 'Escape' ? handleClose() : null;
    };
    document.body.addEventListener('keydown', CLoseOnEsckey);
    return (): void => {
      document.body.removeEventListener('keydown', CLoseOnEsckey);
    };
  }, [handleClose]);

  // Disable scroll if the modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div
          className="fixed top-0 left-0 z-40 w-screen  h-screen p-4"
          onClick={handleClose}
        >
          <div
            className="relative max-w-xl mx-auto z-50 bg-[#f2f2f2] bg-opacity-100 left-1/2 top-1/2 h-96 w-96
          translate-y-32 min-w-fit rounded-lg p-5 box-border overflow-hidden md:inset-0 max-h-full inset-x-32 inset-y-32"
          >
            {children}
          </div>
        </div>
      </>
    </ReactPortal>
  );
};

export default ConfirmationModal;
