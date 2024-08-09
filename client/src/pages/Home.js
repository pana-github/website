import React, { useMemo, useCallback } from "react";
import TableElement from "../components/TableElement";
import SearchForm from "../components/SearchForm";
import { headerVal } from "../data/displayHeaders";
import Header from "../components/Header";
function Home() {
  const [findValues, setFindValues] = React.useState({
    phoneNumbers: "",
    remarks: "",
    destinationName: "",
  });

  const handleValueChange = useCallback((newValues) => {
    setFindValues(newValues);
  }, []);

  const memoizedTableElement = useMemo(
    () => (
      <TableElement
        newValues={findValues}
        baseURL="http://10.190.114.40:3001/api"
        headerVal={headerVal}
        baseNavigate="order"
      />
    ),
    [findValues]
  );

  return (
    <>
      <Header />
      <div className="font-['YuGothic'] text-primary-500">
        <div className="text-center m-3 my-5 mx-10">
          <h1 className="text-xl font-bold">住所検索_DB掲載</h1>
          <h2 className="my-1 text-lg">データベース検索</h2>
        </div>
        <div className="mx-10">
          <SearchForm onValueChange={handleValueChange} />
          {memoizedTableElement}
        </div>
      </div>
    </>
  );
}

export default Home;
