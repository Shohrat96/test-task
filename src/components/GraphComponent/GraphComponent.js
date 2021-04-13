import React from "react";
import styles from "./GraphComponent.module.scss";
import valueIncreaseIcon from "../../assets/icons/valueIncrease.png";
import valueDecreaseIcon from "../../assets/icons/valueDecrease.png";

const GraphComponent = ({
  domainName,
  graphImg,
  trackerIdx,
  changeValue,
  style,
}) => {
  return (
    <div className={styles.container} style={style}>
      <h3 className={styles.domainName}>{domainName}</h3>
      <div className={styles.content}>
        <div className={styles.domainData}>
          <div className={styles.indexValue}>{trackerIdx}</div>
          <p className={styles.trackerIdx}>tracker index</p>
          <div className={styles.changeValueWrap}>
            <img
              className={styles.changeValueIcon}
              src={changeValue > 0 ? valueIncreaseIcon : valueDecreaseIcon}
              alt="value-change-icon"
            />
            <span
              className={[
                styles.changeValue,
                changeValue > 0 ? styles.positiveChange : styles.negativeChange,
              ].join(" ")}
            >
              {changeValue > 0 ? "+" + changeValue : changeValue}
            </span>
          </div>
        </div>
        <div className={styles.graphWrapper}>
          <img src={graphImg} className={styles.graphImg} alt="graph-img" />
        </div>
      </div>
    </div>
  );
};

export default GraphComponent;
