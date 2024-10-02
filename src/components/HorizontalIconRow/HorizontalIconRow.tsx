import React from "react";
import styles from "./styles/HorizontalIconRow.module.scss";

interface HorizontalIconRowProps {
  icon: React.ReactNode;
  text: string;
  containerClass?: string;
  iconClass?: string;
  textClass?: string;
}

const IconWithInfo: React.FC<HorizontalIconRowProps> = ({
  icon,
  text,
  containerClass = "",
  iconClass = "",
  textClass = "",
}) => {
  return (
    <div className={`${styles.horizontalContainer} ${containerClass}`}>
      <p className={iconClass}> {icon}</p>
      <p className={textClass}> {text}</p>
    </div>
  );
};

export default IconWithInfo;
