import React, { useState } from "react";
import { Button, Modal } from "antd";


const DescModal = ({ description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="descModal">
      <button onClick={showModal} className="btn">
        Read more
      </button>
      <Modal
        title={description?.projectName}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="modal"
        wrapClassName="modal__style"
      >
        <p>{description?.briefDescription}</p>
        <h4>🔥 Key Features:</h4>
        <ul>
          {description?.keyFeatures.map((item , index)=> (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h4>🛠️ Technologies Used:</h4>
        <ul>
        {description?.technologies.map((item , index)=> (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>
          {description?.challenge}
        </p>
      </Modal>
    </div>
  );
};

export default DescModal;
