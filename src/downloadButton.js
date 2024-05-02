import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    window.location.href = './files/CV_RJ_Paraiso.pdf'; // Update the path accordingly
  };

  return (
    <button onClick={handleDownload}>
      Download PDF
    </button>
  );
};

export default DownloadButton;
