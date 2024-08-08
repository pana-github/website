import React from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";

import TableElement from "../components/TableElement";
import { hinbanHeaderVal } from "../data/displayHinbanHeaders";

export default function Hinban() {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const [findValues] = React.useState({});

  console.log(formData);
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
