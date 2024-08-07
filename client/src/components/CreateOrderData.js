import { InputWithLabel } from "./ButtonsAndInputs";

import PropTypes from "prop-types";

import React from "react";

export default function CreateOrderData({ isAbled }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 align-middle justify-center">
        <InputWithLabel
          label={"注文ＮＯ"}
          isAbled={isAbled}
          cl={"align-middle justify-end flex-row m-0"}
          // value={""}
          // onChange={}
        />
        <InputWithLabel
          label={"件名備考１"}
          isAbled={isAbled}
          cl={"align-middle justify-start flex-row m-0"}
          // value={""}
          // onChange={}
        />
        <InputWithLabel
          label={"直送先名"}
          isAbled={isAbled}
          cl={"align-middle justify-end flex-row m-0"}
          // value={""}
          // onChange={}
        />
        <InputWithLabel
          label={"配送先住所１"}
          isAbled={isAbled}
          cl={"align-middle justify-start flex-row m-0"}
          // value={""}
          // onChange={}
        />
        <InputWithLabel
          label={"配送先住所２"}
          isAbled={isAbled}
          cl={"align-middle justify-end flex-row m-0"}
          // value={""}
          // onChange={}
        />
        <InputWithLabel
          label={"電話番号"}
          isAbled={isAbled}
          cl={"align-middle justify-start flex-row m-0"}
          // value={""}
          // onChange={}
        />
      </div>
    </div>
  );
}

CreateOrderData.propTypes = {
  isAbled: PropTypes.bool.isRequired,
};
