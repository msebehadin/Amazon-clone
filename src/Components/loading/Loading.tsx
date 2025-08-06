import React from "react";
import { ClipLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)", // semi-transparent background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999
      }}
    >
      <ClipLoader color="#ffffff" size={90} />
    </div>
  );
};

export default Loading;
