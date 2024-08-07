import React from "react";
import { useParams, useNavigate, Routes, Route } from "react-router-dom";
import { Button } from "@nextui-org/react";

import { useState, useEffect, useMemo } from "react";

import OrderData from "../components/OderData";
import CreateOrderData from "../components/CreateOrderData";
import CreateCustomerData from "../components/CreateCustomerData";
import InputForm from "../components/InputForm";
import Header from "../components/Header";
import { HeaderSecondary } from "../components/Header";

function AddressForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isDetailsRoute = useMemo(
    () => location.pathname.endsWith("/details"),
    [location.pathname]
  );

  //const [currentStep, setCurrentStep] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({});

  const [isAbled, setIsAbled] = useState(true);

  // const nextStep = () => {
  //   setCurrentStep(currentStep + 1);
  // };
  // const prevStep = () => {
  //   setCurrentStep(currentStep - 1);
  // };

  useEffect(() => {
    if (isDetailsRoute) {
      setIsAbled(false);
    }
  }, [isDetailsRoute]);

  const handleIsAbledChange = (newIsAbled) => {
    setIsAbled(newIsAbled);
  };

  const handleSubmit = () => {
    navigate(`/order/${id}/details`);
  };

  return (
    <>
      <div>
        <Header />
        <HeaderSecondary
          id={decodeURIComponent(id)}
          isAbled={isAbled}
          onIsAbledChange={handleIsAbledChange}
          isInDetails={isDetailsRoute}
        />
        <Routes>
          <Route path="details" element={<InputForm isAbled={isAbled} />} />
        </Routes>
        {!isDetailsRoute && (
          <div className="text-center text-xl font-bold  my-12 mx-10 text-background-500 ">
            <div className="my-10">
              <form onSubmit={handleSubmit}>
                {id !== "新規" && id !== "得意先コード" && (
                  <OrderData isAbled={isAbled} id={id} />
                )}

                {id === "新規" && <CreateOrderData isAbled={isAbled} />}

                {id === "得意先コード" && (
                  <CreateCustomerData isAbled={isAbled} />
                )}

                {/* {currentStep < 2 && (*/}
                <div className="my-10">
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    radius="sm"
                    className=" text-lg font-bold mx-auto my-5"
                    // onPress={() => {
                    //   navigate(`../order/${id}/details`, { replace: true });
                    // }}
                  >
                    次へ
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AddressForm;
