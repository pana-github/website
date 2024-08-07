import React from "react";
import { Input } from "@nextui-org/react";
import { RiSearch2Line } from "react-icons/ri";
import { BsEraser } from "react-icons/bs";
import { ButtonAction } from "./ButtonsAndInputs";
import { useLocalStorage } from "@uidotdev/usehooks";
import PropTypes from "prop-types";

function SearchForm({ onValueChange }) {
  const variants = ["underlined"];
  const [inputData, setInputData] = useLocalStorage("inputData", {
    phoneNumber: "",
    remarks: "",
    destinationName: "",
  });

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const clearInputs = () => {
    setInputData({
      phoneNumber: "",
      remarks: "",
      destinationName: "",
    });
  };

  const searchInputs = (e) => {
    e.preventDefault();
    onValueChange(inputData);
  };

  return (
    <form className="grid grid-cols-3 gap-3 my-8 " onSubmit={searchInputs}>
      {variants.map((variant) => (
        <div
          key={variant}
          className="col-span-2 grid grid-cols-3 mb-6 md:mb-0 gap-10 mr-10 items-center justify-center"
        >
          <Input
            type="number"
            variant={variant}
            label="電話番号"
            color="primary"
            name="phoneNumber"
            value={inputData.phoneNumber}
            onChange={handleInputChange}
          />

          <Input
            type="text"
            variant={variant}
            label="備考"
            color="primary"
            name="remarks"
            value={inputData.remarks}
            onChange={handleInputChange}
          />

          <Input
            type="text"
            variant={variant}
            label="直送先名"
            color="primary"
            name="destinationName"
            value={inputData.destinationName}
            onChange={handleInputChange}
          />
        </div>
      ))}

      <div className="grid grid-cols-2 mb-6 md:mb-0 gap-10 justify-cenetr items-center">
        <ButtonAction
          innerText={"検索"}
          handleFunction={searchInputs}
          icon={<RiSearch2Line />}
          color={"primary"}
        />

        <ButtonAction
          innerText={"クリア"}
          handleFunction={() => {
            clearInputs();
            onValueChange({
              phoneNumber: null,
              remarks: null,
              destinationName: null,
            });
          }}
          icon={<BsEraser />}
          color={"secondary"}
        />
      </div>
    </form>
  );
}

SearchForm.propTypes = {
  onValueChange: PropTypes.func.isRequired,
};

export default SearchForm;
