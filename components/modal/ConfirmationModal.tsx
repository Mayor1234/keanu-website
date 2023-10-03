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
          className="fixed top-0 left-0 z-40 bg-neutral-950  w-screen h-screen p-4"
          onClick={handleClose}
        >
          <div
            className="relative max-w-xl mx-auto z-50 bg-white  bg-opacity-100 left-0 top-10 w-72 h-[400px] lg:top-4 lg:h-[500px] lg:w-[400px]
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

// lg:left-1/2 lg:top-1/2
