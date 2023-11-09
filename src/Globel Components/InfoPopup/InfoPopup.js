import React from "react";
import Modal from "react-modal";
import "./InfoPopup.scss";
import { useSelector } from "react-redux";
import { selectLiveData, selectLiveFdsData } from "../../Globel Utils/globeldataSlice";
import { infoCloseIcon } from "../../Globel Utils/Icons";
import { fdsPageInfo } from "../../Components/LiveTelemetryFds/fdsConstants";

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

const InfoSection = ({ header, infoObj }) => {
  console.log("secInfo in com", header, infoObj);
  return (
    <div className="sectionContainer">
      <div className="sectionHeader">{header}</div>
      <div className="sectionKeyVal">
        {Object.entries(infoObj).map(([key, val], i) => {
          return (
            <div key={key + i} className="row">
              <span className="key">{key}</span>
              <span className="sep">:</span>
              <span className="val">{val ?? "-"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function isRelatedRelay(relayName, gearName) {
  if (relayName.startsWith(gearName)) {
    const remainingPart = relayName.slice(gearName.length);
    if (!/\d/.test(remainingPart)) {
      return true;
    }
  }

  return false;
}
const getMappingObject = (gearType, fiuData, fdsData, gearName) => {
  let map = {};
  if ((gearType === "SI_POINT" || gearType === "SI_SIGNAL")) {
    const RELAYS = fiuData["RLY_STATUS"] ?? []
    Object.entries(RELAYS).forEach(([relayName, relayPacket]) => {
      console.log(gearName, relayName, relayPacket)
      if (isRelatedRelay(relayName, gearName)) {
        map[relayName] = relayPacket.rlyStatus ?? ''
      }
    })
  }
  if (gearType === 'SI_TRKSEC') {
    const FDS_TRACK = fdsData?.["FDS_TRKSEC"]?.[gearName] ?? []
    const FDS_COLS = fdsPageInfo["/FDS_TRKSEC"].columns
    let hasSomeValues = false
    FDS_COLS.forEach((col) => {
      map[col.Header] = FDS_TRACK[col.accessor]
    })

    // map = FDS_TRACKS[gearName] ?? {}
  }
  return Object.values(map).find((val) => val) ? map : {}
};

function InfoPopup({ isOpen, onClose, infoData, cols, gearType, gearNameKey }) {
  const fiuData = useSelector(selectLiveData);
  const fdsData = useSelector(selectLiveFdsData);
  const sections = cols.filter((col) => col.columns);
  const normalKeyValue = cols.filter((col) => !col.columns);
  const MappingObject = getMappingObject(gearType, fiuData, fdsData, infoData?.[gearNameKey] ?? '');
  console.log('MappingObject in info', MappingObject)
  const ModelCustomStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: 'fit-content',
      maxHeight: '90%',
      overflow: "auto",
      width: normalKeyValue.length < 5 ? "40%" : "60%",
    },
    overlay: {
      backgroundColor: "#80808045",
    },
  };
  function afterOpenModal() { }
  return (
    <Modal
      isOpen={true}
      onAfterOpen={() => afterOpenModal()}
      onRequestClose={() => onClose()}
      style={ModelCustomStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className="info-popup">
        <div className="infoHeader">
          <h2>{`INFO : ${infoData?.[gearNameKey]}`}</h2>
          <div onClick={() => onClose()} className="closeIcon">
            {infoCloseIcon}
          </div>
        </div>
        <div
          className={`keyValMap ${normalKeyValue.length < 4 ? "lowColCount" : ""
            }`}
        >
          {normalKeyValue.map((col, i) => {
            return (
              <div key={col.accessor + i} className="row">
                <span className="key">{col.Header}</span>
                <span className="sep">:</span>
                <span className="val">{infoData[col.accessor] ?? "-"}</span>
              </div>
            );
          })}
        </div>

        {sections.map((sec, i) => {
          const infoObj = {};
          sec.columns.forEach((se) => {
            infoObj[se.Header] = infoData[se.accessor];
          });
          console.log("infoObj", infoObj);
          return (
            <>
              <InfoSection
                key={sec.Header + i}
                header={sec.Header}
                infoObj={infoObj}
              />
            </>

          );
        })}
        {Object.keys(MappingObject).length > 0 && <InfoSection
          // key={sec.Header + i}
          header={(gearType === "SI_POINT" || gearType === "SI_SIGNAL") ? 'Related Relays' : 'Related FDS Track Section'}
          infoObj={MappingObject}
        />}

      </div>
    </Modal>
  );
}

export default InfoPopup;
