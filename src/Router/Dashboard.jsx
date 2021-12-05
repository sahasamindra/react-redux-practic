import React from "react";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const nav = useNavigate();
  const goBack = () => {
    nav("/");
    // nav(-1);
    // nav("/",{replace:true});
    // {replace:true}
  };

  return (
    <div>
      This is Dashboard <br />
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
