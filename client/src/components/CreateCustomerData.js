import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { InputWithLabel } from "./ButtonsAndInputs";

function CreateCustomerData({ isAbled, updateFormData }) {
  const [formData, setFormData] = useState({
    得意先コード: "",
    直送コード: "",
    "注文№": "",
    備考: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };

      updateFormData(newData);
      return newData;
    });
  };

  return (
    <div className="grid grid-cols-2 gap-5 align-middle justify-center">
      <InputWithLabel
        cl={"align-middle justify-end flex-row m-0"}
        label={"得意先コード"}
        type={"text"}
        value={formData["得意先コード"]}
        isAbled={isAbled}
        handleChange={handleInputChange}
        name="得意先コード"
      />
      <InputWithLabel
        label={"直送コード"}
        type={"text"}
        value={formData["直送コード"]}
        isAbled={isAbled}
        cl={"align-middle justify-start flex-row m-0"}
        onChange={handleInputChange}
        name="直送コード"
      />
      <InputWithLabel
        label={"注文№"}
        type={"text"}
        value={formData["注文№"]}
        isAbled={isAbled}
        cl={"align-middle justify-end flex-row m-0"}
        onChange={handleInputChange}
        name="注文№"
      />
      <InputWithLabel
        label={"備考"}
        type={"text"}
        value={formData["備考"]}
        isAbled={isAbled}
        cl={"align-middle justify-start flex-row m-0"}
        onChange={handleInputChange}
        name="備考"
      />
      <div>{formData["得意先コード"]}</div>
      <div>{formData["直送コード"]}</div>
      <div>{formData["注文№"]}</div>
      <div>{formData["備考"]}</div>
    </div>
  );
}

CreateCustomerData.propTypes = {
  isAbled: PropTypes.bool.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateCustomerData;
