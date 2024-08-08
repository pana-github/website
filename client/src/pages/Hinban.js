import React from "react";
import Header from "../components/Header";

import TableElement from "../components/TableElement";
import { hinbanHeaderVal } from "../data/displayHinbanHeaders";
export default function Hinban() {
  const [findValues, setFindValues] = React.useState({
    phoneNumbers: "",
    remarks: "",
    destinationName: "",
  });

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

  return (
    <>
      <Header />
      <div className="mx-10">{memoizedTableElement}</div>
    </>
  );
}
