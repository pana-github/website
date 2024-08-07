import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddressForm from "./pages/Order";

import Hinban from "./pages/Hinban";
import Error404 from "./errorPages/error404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="order/:id/*" element={<AddressForm />} />
      <Route path="/hinban" element={<Hinban />} />
      <Route path="*" element={<Error404 />} />

      {/* <Route path="order/details" element={<InputForm />} /> */}
    </Routes>
  );
}

export default App;
