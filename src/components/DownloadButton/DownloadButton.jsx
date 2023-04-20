import React from "react";
import "./DownloadButton.scss";

const DownloadButton = () => {
  return (
    <a href="../CarlosAugustoPradoCV.pdf" download>
      <button className="btn-downloadCV">Download CV</button>
    </a>
  );
};

export default DownloadButton;
