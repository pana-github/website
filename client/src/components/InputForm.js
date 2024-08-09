/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// InputForm.js
import React from "react";

import { useForm, Controller } from "react-hook-form";
import { Input, Select, SelectItem, Button } from "@nextui-org/react";
import { today } from "@internationalized/date";
import PropTypes from "prop-types";
import { inputLabel } from "../data/inputLabel";
import { tantou } from "../data/tantouData";
import { useParams, useNavigate } from "react-router-dom";
function InputForm({ isAbled, initialData, updateFormData }) {
  const { id } = useParams();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      ...initialData,
      desiredDate: today(),
      remarksDate: today(),
      officeCode: "",
      client: "",
      facility: "",
      callNumber: "",
      fax: "",
      mail: "",
      incharge: new Set(["FE"]),
      dayRange: new Set(["NA"]),
    },
  });
  const navigate = useNavigate();
  const onFormSubmit = (data) => {
    updateFormData(data);
    const combinedFormData = { ...initialData, ...data };
    console.log(combinedFormData);
    navigate("/hinban", { state: { formData: combinedFormData } });
  };
  React.useEffect(() => {
    if (initialData && Object.keys(initialData).length === 0) {
      navigate(`/order/${id}`);
    }
  }, [initialData, navigate]);

  if (initialData && Object.keys(initialData).length === 0) {
    return null; // or a loading indicator
  }

  console.log("InitialData", initialData);
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="text-center text-xl font-bold my-12 mx-10 text-background-500">
        <div className="flex flex-col justify-center items-center mt-10 gap-20">
          <div className="w-full grid grid-cols-2 gap-8 justify-around px-20">
            <Controller
              name="desiredDate"
              control={control}
              rules={{ required: "希望日付は必須です" }}
              render={({ field }) => (
                <Input
                  {...field}
                  isRequired
                  validationBehavior="native"
                  isDisabled={isAbled}
                  radius="sm"
                  type="text"
                  label="希望日付"
                  labelPlacement="outside-left"
                  classNames={{
                    base: "flex-row justify-around w-4/5",
                    label: "mx-10 my-3 w-28",
                    mainWrapper: "w-56",
                  }}
                  errorMessage={errors.desiredDate?.message}
                />
              )}
            />
            <div className="flex flex-row gap-3">
              <Controller
                name="remarksDate"
                control={control}
                rules={{ required: "備考日付は必須です" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    isRequired
                    validationBehavior="native"
                    isDisabled={isAbled}
                    radius="sm"
                    type="text"
                    label="備考日付"
                    labelPlacement="outside-left"
                    classNames={{
                      base: "flex-row justify-around w-4/5",
                      label: "mx-10 my-3 w-28",
                      mainWrapper: "w-56",
                    }}
                    errorMessage={errors.remarksDate?.message}
                  />
                )}
              />
              <Controller
                name="dayRange"
                control={control}
                defaultValue="NA"
                rules={{ required: "日付範囲は必須です" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    aria-label="日付範囲"
                    isDisabled={isAbled}
                    defaultSelectedKeys={["NA"]}
                    radius="sm"
                    classNames={{
                      base: "flex-row justify-around w-1/6",
                      label: "text-xs",
                      mainWrapper: "h-full",
                    }}
                    errorMessage={errors.dayRange?.message}
                  >
                    <SelectItem key="NA">なし</SelectItem>
                    <SelectItem key="AM">AM</SelectItem>
                    <SelectItem key="PM">PM</SelectItem>
                  </Select>
                )}
              />
            </div>
            {inputLabel.map((label) => (
              <Controller
                key={label.name}
                name={label.name}
                control={control}
                rules={{ required: `${label.label}は必須です` }}
                render={({ field }) => (
                  <Input
                    {...field}
                    isRequired
                    validationBehavior="native"
                    isDisabled={isAbled}
                    radius="sm"
                    type={label.type}
                    label={label.label}
                    labelPlacement="outside-left"
                    classNames={{
                      base: "flex-row justify-around w-4/5",
                      label: "mx-10 my-3 w-28",
                      mainWrapper: "w-56",
                    }}
                    errorMessage={errors[label.name]?.message}
                  />
                )}
              />
            ))}
            <Controller
              name="incharge"
              control={control}
              rules={{ required: "担当者は必須です" }}
              render={({ field }) => (
                <Select
                  {...field}
                  isDisabled={isAbled}
                  label="担当者"
                  defaultSelectedKeys={["FE"]}
                  labelPlacement="outside-left"
                  radius="sm"
                  classNames={{
                    base: "flex-row justify-around w-4/5",
                    label: "mx-10 my-3 w-28",
                    mainWrapper: "w-56 h-full",
                  }}
                  errorMessage={errors.incharge?.message}
                >
                  {tantou.map((tantou) => (
                    <SelectItem key={tantou.label} value={tantou.label}>
                      {tantou.label}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
          </div>
          <div className="w-1/2 px-10">
            <Button
              type="submit"
              color="primary"
              variant="shadow"
              className="h-10 w-full text-medium px-5"
            >
              品番ピック
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

InputForm.propTypes = {
  isAbled: PropTypes.bool.isRequired,
  // onSubmit: PropTypes.func.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default InputForm;
