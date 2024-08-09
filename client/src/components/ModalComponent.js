import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { ButtonAction } from "./ButtonsAndInputs";
import { BsArrowReturnRight } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

function ModalComponent({ isOpen, onOpenChange }) {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <Modal
      isDismissable={false}
      isKeyboardDismissDisabled={false}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      hideCloseButton
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">Alert</ModalHeader>
            <ModalBody>
              <div className="flex flex-col items-center justify-center">
                <div className="relative  w-32 h-32">
                  <div className="absolute bottom-0 left-0 w-32 h-28 rounded-full bg-primary-900"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 overflow-hidden w-32 h-32 rounded-b-full">
                    <div className="absolute bottom-[-0.3rem] left-1/2 transform -translate-x-1/2 w-24 h-32 border-4 border-primary-900 bg-white rounded-lg">
                      <div className="relative mt-6">
                        <div className="absolute top-0 mx-5 w-12 h-4">
                          <div className="absolute bottom-0.5 left-1.5 w-2.5 h-[1rem] rounded-full bg-primary-900 animate-side-eye"></div>
                          <div className="absolute bottom-0.5 right-1.5 w-2.5 h-[1rem] rounded-full bg-primary-900 animate-side-eye"></div>
                        </div>
                        <div className="absolute top-4 left-4 w-4 h-1 bg-secondary rounded-full animate-cheek"></div>
                        <div className="absolute top-4 right-4 w-4 h-1 bg-secondary rounded-full animate-cheek"></div>
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-primary-900 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 text-primary-900 text-xl font-light">
                  {" "}
                  No data was enetered previously please return to home
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonAction
                innerText="Home"
                handleFunction={navigateHome}
                color={"primary"}
                icon={<BsArrowReturnRight />}
              />
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
