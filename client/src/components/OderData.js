import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRowData } from "../hooks/useRowData";
import { useNavigate } from "react-router-dom";
import { ButtonProgressiveForm, InputWithLabel } from "./ButtonsAndInputs";

function OrderData({ id, isAbled, updateFormData }) {
  const { rowData } = useRowData(id);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  React.useEffect(() => {
    if (rowData) {
      setFormData(rowData);
      updateFormData(rowData);
    }
  }, [rowData]);

  React.useEffect(() => {
    if (rowData === undefined) {
      navigate("/404");
    }
  }, [rowData, navigate]);

  OrderData.propTypes = {
    id: PropTypes.string.isRequired,
    isAbled: PropTypes.bool.isRequired,
    updateFormData: PropTypes.func.isRequired,
  };

  const [isVisible, setIsVisible] = useState({
    OrderInformation: true,
    DeliveryAddress: true,
    Subject: true,
  });

  const handleVisibilityChange = (name, e) => {
    try {
      e.target.classList.toggle("bg-secondary");

      const visibility = isVisible[name];
      setIsVisible({
        ...isVisible,
        [name]: !isVisible[name],
      });

      console.log(`Changed visibility ${visibility} for ${name} `);
    } catch (error) {
      console.error("Error toggling visibility:", error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      updateFormData(newData);
      return newData;
    });
  };

  console.log("Form Data in OrderData:", formData);
  return (
    <>
      <ButtonProgressiveForm
        innerText={"注文情報"}
        handleFunction={(e) => handleVisibilityChange("OrderInformation", e)}
      />
      {isVisible.OrderInformation && rowData && (
        <>
          <div className="mb-3 mx-5 grid grid-cols-2 gap-3 text-lg">
            <InputWithLabel
              onChange={handleInputChange}
              value={formData["注文ＮＯ"] || ""}
              label={"注文ＮＯ"}
              type={"text"}
              defaultVal={rowData.注文ＮＯ}
              isAbled={isAbled}
            />
          </div>
        </>
      )}

      <ButtonProgressiveForm
        innerText={"配送先"}
        handleFunction={(e) => handleVisibilityChange("DeliveryAddress", e)}
      />
      {isVisible.DeliveryAddress && rowData && (
        <>
          <div className="mb-3 mx-5 grid grid-cols-2 gap-3">
            <InputWithLabel
              onChange={handleInputChange}
              value={formData["住所コード"] || ""}
              label={"住所コード"}
              type={"text"}
              defaultVal={rowData.住所コード}
              isAbled={isAbled}
            />

            <InputWithLabel
              onChange={handleInputChange}
              value={formData["直送先名"] || ""}
              label={"直送先名"}
              type={"text"}
              defaultVal={rowData.直送先名}
              isAbled={isAbled}
            />

            <InputWithLabel
              onChange={handleInputChange}
              value={formData["配送先住所１"] || ""}
              label={"配送先住所１"}
              type={"text"}
              defaultVal={rowData.配送先住所１}
              isAbled={isAbled}
            />
            <InputWithLabel
              onChange={handleInputChange}
              value={formData["配送先住所２"] || ""}
              label={"配送先住所２"}
              type={"text"}
              defaultVal={rowData.配送先住所２}
              isAbled={isAbled}
            />

            <InputWithLabel
              onChange={handleInputChange}
              value={formData["郵便番号７桁"] || ""}
              label={"郵便番号７桁"}
              type={"text"}
              defaultVal={rowData.郵便番号７桁}
              isAbled={isAbled}
            />
            <InputWithLabel
              onChange={handleInputChange}
              value={formData["電話番号"] || ""}
              label={"電話番号"}
              type={"text"}
              defaultVal={rowData.電話番号}
              isAbled={isAbled}
            />
          </div>
        </>
      )}
      <ButtonProgressiveForm
        innerText={"件名"}
        handleFunction={(e) => handleVisibilityChange("Subject", e)}
      />
      {isVisible.Subject && rowData && (
        <>
          <div className="mb-3 mx-5 grid grid-cols-2 gap-3">
            <InputWithLabel
              onChange={handleInputChange}
              value={formData["件名ＮＯ"] || ""}
              label={"件名ＮＯ"}
              type={"text"}
              defaultVal={rowData.件名ＮＯ}
              isAbled={isAbled}
            />
            <InputWithLabel
              onChange={handleInputChange}
              value={formData["件名備考１"] || ""}
              label={"件名備考１"}
              type={"text"}
              defaultVal={rowData.件名備考１}
              isAbled={isAbled}
            />
          </div>
        </>
      )}
    </>
  );
}

export default OrderData;
