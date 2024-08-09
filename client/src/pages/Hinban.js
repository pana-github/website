import React from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";

import TableElement from "../components/TableElement";
import { hinbanHeaderVal } from "../data/displayHinbanHeaders";
import ModalComponent from "../components/ModalComponent";
import HinbanSearchForm from "../components/HinbanSearchForm";

export default function Hinban() {
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const formData = location.state?.formData;

  const [findValues] = React.useState({});
  const memoizedTableElement = React.useMemo(
    () => (
      <TableElement
        newValues={findValues}
        baseURL="http://10.190.114.176:3001/api/hinban"
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
      <div className="font-['YuGothic'] text-primary-500">
        <div className="text-center m-3 my-5 mx-10">
          <h1 className="text-xl font-bold">品番ピック</h1>
          <h2 className="my-1 text-lg">データベース検索</h2>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="mx-10 col-span-3">
            <HinbanSearchForm />
            {memoizedTableElement}
          </div>
          <div className="mx-10 w-ull">Hi</div>
        </div>
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      />
    </>
  );
}
