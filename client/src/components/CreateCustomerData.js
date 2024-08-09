import React, { useState } from "react";
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
      return newData;
    });
    updateFormData(formData);
    console.log(formData);
  };

  return (
    <div className="grid grid-cols-2 gap-5 align-middle justify-center">
      <InputWithLabel
        cl={"align-middle justify-end flex-row m-0"}
        label={"得意先コード"}
        type={"text"}
        isAbled={isAbled}
        name={"得意先コード"}
        value={formData["得意先コード"]}
        handleChange={handleInputChange}
      />
      <InputWithLabel
        label={"直送コード"}
        type={"text"}
        isAbled={isAbled}
        cl={"align-middle justify-start flex-row m-0"}
        name={"直送コード"}
        value={formData["直送コード"]}
        handleChange={handleInputChange}
      />

      <InputWithLabel
        label={"注文№"}
        type={"text"}
        isAbled={isAbled}
        cl={"align-middle justify-end flex-row m-0"}
        name={"注文№"}
        value={formData["注文№"]}
        handleChange={handleInputChange}
      />
      <InputWithLabel
        label={"備考"}
        type={"text"}
        isAbled={isAbled}
        cl={"align-middle justify-start flex-row m-0"}
        name={"備考"}
        value={formData["備考"]}
        handleChange={handleInputChange}
      />
    </div>
  );
}

CreateCustomerData.propTypes = {
  isAbled: PropTypes.bool.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateCustomerData;
