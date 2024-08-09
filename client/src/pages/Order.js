import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Routes, Route } from "react-router-dom";
import { Button } from "@nextui-org/react";

import OrderData from "../components/OderData";
import CreateOrderData from "../components/CreateOrderData";
import CreateCustomerData from "../components/CreateCustomerData";
import InputForm from "../components/InputForm";

import Header, { HeaderSecondary } from "../components/Header";

function AddressForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isDetailsRoute = useMemo(
    () => location.pathname.endsWith("/details"),
    [location.pathname]
  );

  const [initialFormData, setInitialFormData] = useState({});
  const [detailsFormData, setDetailsFormData] = useState({});
  const [isAbled, setIsAbled] = useState(true);

  useEffect(() => {
    if (isDetailsRoute) {
      setIsAbled(false);
    }
  }, [isDetailsRoute]);

  const handleIsAbledChange = (newIsAbled) => {
    setIsAbled(newIsAbled);
  };

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${id}/details`);
  };

  const updateInitialFormData = (newData) => {
    setInitialFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const updateDetailsFormData = (newData) => {
    setDetailsFormData((prevData) => ({ ...prevData, ...newData }));
  };

  // const handleFinalSubmit = () => {
  //   const combinedFormData = { ...initialFormData, ...detailsFormData };
  //   console.log(combinedFormData);
  //   navigate("/hinban", { state: { formData: combinedFormData } });
  // };

  return (
    <>
      <Header />
      <HeaderSecondary
        id={decodeURIComponent(id)}
        isAbled={isAbled}
        onIsAbledChange={handleIsAbledChange}
        isInDetails={isDetailsRoute}
      />
      {!isDetailsRoute && (
        <div className="text-center text-xl font-bold my-12 mx-10 text-background-500">
          <div className="my-10">
            <form onSubmit={handleInitialSubmit}>
              {id !== "新規" && id !== "得意先コード" && (
                <OrderData
                  isAbled={isAbled}
                  id={id}
                  updateFormData={updateInitialFormData}
                />
              )}
              {id === "新規" && (
                <CreateOrderData
                  isAbled={isAbled}
                  updateFormData={updateInitialFormData}
                />
              )}
              {id === "得意先コード" && (
                <CreateCustomerData
                  isAbled={isAbled}
                  updateFormData={updateInitialFormData}
                />
              )}
              <div className="my-10">
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  radius="sm"
                  className="text-lg font-bold mx-auto my-5"
                >
                  次へ
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isDetailsRoute && (
        <Routes>
          <Route
            path="details"
            element={
              <InputForm
                isAbled={isAbled}
                updateFormData={updateDetailsFormData}
                initialData={initialFormData}
              />
            }
          />
        </Routes>
      )}
    </>
  );
}

export default AddressForm;
