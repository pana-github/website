/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { InputWithLabel } from "./ButtonsAndInputs";
import PropTypes from "prop-types";

function CreateOrderData({ isAbled, updateFormData }) {
  const [formData, setFormData] = useState({
    注文ＮＯ: "",
    件名備考１: "",
    直送先名: "",
    配送先住所１: "",
    配送先住所２: "",
    電話番号: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    updateFormData(formData);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 align-middle justify-center">
        <InputWithLabel
          label={"注文ＮＯ"}
          isAbled={isAbled}
          cl={"align-middle justify-end flex-row m-0"}
          value={formData["注文ＮＯ"]}
          handleChange={handleInputChange}
          name={"注文ＮＯ"}
        />
        <InputWithLabel
          label={"件名備考１"}
          isAbled={isAbled}
          cl={"align-middle justify-start flex-row m-0"}
          value={formData["件名備考１"]}
          handleChange={handleInputChange}
          name={"件名備考１"}
        />
        <InputWithLabel
          label={"直送先名"}
          isAbled={isAbled}
          cl={"align-middle justify-end flex-row m-0"}
          value={formData["直送先名"]}
          handleChange={handleInputChange}
          name={"直送先名"}
        />
        <InputWithLabel
          label={"配送先住所１"}
          isAbled={isAbled}
          cl={"align-middle justify-start flex-row m-0"}
          value={formData["配送先住所１"]}
          handleChange={handleInputChange}
          name={"配送先住所１"}
        />
        <InputWithLabel
          label={"配送先住所２"}
          isAbled={isAbled}
          cl={"align-middle justify-end flex-row m-0"}
          value={formData["配送先住所２"]}
          handleChange={handleInputChange}
          name={"配送先住所２"}
        />
        <InputWithLabel
          label={"電話番号"}
          isAbled={isAbled}
          cl={"align-middle justify-start flex-row m-0"}
          value={formData["電話番号"]}
          handleChange={handleInputChange}
          name={"電話番号"}
        />
      </div>
    </div>
  );
}

CreateOrderData.propTypes = {
  isAbled: PropTypes.bool.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateOrderData;
