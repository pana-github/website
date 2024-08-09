import React from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import { useDisclosure } from "@nextui-org/react";
import TableElement from "../components/TableElement";
import { hinbanHeaderVal } from "../data/displayHinbanHeaders";
import ModalComponent from "../components/ModalComponent";
import { set } from "react-hook-form";

export default function Hinban() {
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const formData = location.state?.formData;

  const [findValues] = React.useState({});
  const memoizedTableElement = React.useMemo(
    () => (
      <TableElement
        newValues={findValues}
        baseURL="http://10.190.114.40:3001/api/hinban"
        headerVal={hinbanHeaderVal}
        baseNavigate="hinban"
      />
    ),
    [findValues]
  );

  React.useEffect(() => {
    if (formData === undefined) {
      setIsModalOpen(true);
    }
  }, [formData]);

  return (
    <>
      <Header />
      <div className="mx-10">{memoizedTableElement}</div>
      <ModalComponent
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      />
      ;
    </>
  );
}
