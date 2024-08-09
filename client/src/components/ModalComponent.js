import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { ButtonAction } from "./ButtonsAndInputs";
import { BsArrowReturnRight } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
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
              No data was enetered previously please return to home
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
