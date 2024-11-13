import React, { useState } from "react";

const Other = () => {
    const [data,setData] =useState("");
  return (
    <>
        <input type="text" value={data} onChange={setData((e) => (e.target.value+'test'))} />
    </>
  );
};

export default Other;
