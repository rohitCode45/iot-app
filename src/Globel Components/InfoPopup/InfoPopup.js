import React from "react";
import Modal from "react-modal";
import "./InfoPopup.scss";
import { useSelector } from "react-redux";
import { selectLiveData } from "../../Globel Utils/globeldataSlice";

const ModelCustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "80%",
    width: "80%",
  },
  overlay: {
    backgroundColor: "#80808045",
  },
};

function InfoPopup({ isOpen, onClose, infoData, cols }) {
    const fiuData = useSelector(selectLiveData);
    console.log('fiuData',fiuData)
    console.log()

  function afterOpenModal() {}
  return (
    <div className="info-popup">
      <Modal
        isOpen={true}
        onAfterOpen={() => afterOpenModal()}
        onRequestClose={() => onClose()}
        style={ModelCustomStyles}
        contentLabel="Example Modal"
        // ariaHideApp={false}
      >
        <div>
        {
          cols.map((col, i) => {
           return  <div>
              <span>{col.Header}</span>:
              <span>{infoData[col.accessor] ?? ""}</span>
            </div>;
          })}
        </div>
    
      </Modal>
    </div>
  );
}

export default InfoPopup;
