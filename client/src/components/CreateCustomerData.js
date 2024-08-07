import React from "react";
import { InputWithLabel } from "../components/ButtonsAndInputs";

import PropTypes from "prop-types";

export default function CreateCustomerData({ isAbled }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 align-middle justify-center">
        <InputWithLabel
          cl={"align-middle justify-end flex-row m-0"}
          label={"得意先コード"}
          type={"text"}
          defaultVal={""}
          isAbled={isAbled}
        />
        <InputWithLabel
          label={"直送コード"}
          type={"text"}
          defaultVal={""}
          isAbled={isAbled}
          cl={"align-middle justify-start flex-row m-0"}
        />
        <InputWithLabel
          label={"注文№"}
          type={"text"}
          defaultVal={""}
          isAbled={isAbled}
          cl={"align-middle justify-end flex-row m-0"}
        />
        <InputWithLabel
          label={"備考"}
          type={"text"}
          defaultVal={""}
          isAbled={isAbled}
          cl={"align-middle justify-start flex-row m-0"}
        />
      </div>
    </div>
  );
}

CreateCustomerData.propTypes = {
  isAbled: PropTypes.bool.isRequired,
};
