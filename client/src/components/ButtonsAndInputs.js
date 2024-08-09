import { Button, Input } from "@nextui-org/react";
import { BsFillPlusCircleFill, BsDashCircleFill } from "react-icons/bs";
import React, { useState } from "react";
import PropTypes from "prop-types";

export const ButtonProgressiveForm = ({ innerText, handleFunction }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [iconTag, setIconTag] = useState(<BsDashCircleFill />);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIconTag(isOpen ? <BsFillPlusCircleFill /> : <BsDashCircleFill />);
  };

  return (
    <>
      <Button
        color="primary"
        variant="shadow"
        className="justify-between h-10 my-5 w-full text-sm font-bold text-left"
        endContent={iconTag}
        onClick={(e) => {
          handleFunction(e);
          handleClick(e);
        }}
      >
        {innerText}
      </Button>
    </>
  );
};

ButtonProgressiveForm.propTypes = {
  innerText: PropTypes.string.isRequired,
  handleFunction: PropTypes.func.isRequired,
};

export const ButtonAction = ({
  innerText,
  handleFunction,
  icon,
  color,
  type,
  size,
}) => {
  return (
    <Button
      type={type ? type : "button"}
      color={color}
      variant="shadow"
      className="h-10 w-full text-medium px-5 "
      startContent={icon}
      onPress={handleFunction}
      size={size}
    >
      {innerText}
    </Button>
  );
};

ButtonAction.propTypes = {
  innerText: PropTypes.string.isRequired,
  handleFunction: PropTypes.func.isRequired,
  icon: PropTypes.element,
  color: PropTypes.string,
  type: PropTypes.string,
};

export const ButtonBasic = ({ color, innerText, handleFunction }) => {
  return (
    <Button
      type="button"
      color={color}
      variant="ghost"
      className="h-8 w-32 text-medium px-5"
      onPress={handleFunction}
    >
      {innerText}
    </Button>
  );
};

ButtonBasic.propTypes = {
  color: PropTypes.string,
  innerText: PropTypes.string.isRequired,
  handleFunction: PropTypes.func.isRequired,
};

export const InputWithLabel = ({
  label,
  name,
  isAbled,
  cl,
  handleChange,
  value,
}) => {
  const isInvalid = React.useMemo(() => {
    if (value === undefined || value === null || value === "") return false;
    return !String(value).match(
      /^[\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\u4E00-\u6800\u6802-\u6851\u6853-\u9ad8\u9ada-\u9FFF\u3041-\u3096\u30A1-\u30FA（）．＿＋－―ーゞ々／・＆！'：\u3000]+$/
    );
  }, [value]);

  return (
    <Input
      isRequired
      name={name}
      validationBehavior="native"
      isDisabled={isAbled ? true : false}
      radius="sm"
      type="text"
      label={label}
      labelPlacement="outside"
      classNames={{
        base: `${cl}`,
        label: "p-0 mb-5 ",
        mainWrapper: `w-1/2 m-2 `,
      }}
      isInvalid={isInvalid}
      value={value}
      onChange={handleChange}
      errorMessage="有効な値を入力してください。"
    ></Input>
  );
};

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  defaultVal: PropTypes.string,
  isAbled: PropTypes.bool,
  cl: PropTypes.string,
};

export const InputWithSideLabel = ({
  isAbled,
  label,
  type,
  defaultVal,
  name,
  value,
  handleInputChange,
}) => {
  <Input
    isDisabled={isAbled ? true : false}
    labelPlacement={"outside-left"}
    radius="sm"
    key={name}
    type={type}
    label={label}
    name={name}
    classNames={{ label: "mx-10 my-5 w-28", input: "w-56" }}
    defaultValue={defaultVal}
    value={value}
    onChange={handleInputChange}
  />;
};
