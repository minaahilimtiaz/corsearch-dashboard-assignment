import React from "react";
import {
  BsEnvelopeAt,
  BsGeoAltFill,
  BsGlobe2,
  BsTelephoneFill,
} from "react-icons/bs";

import { Address } from "../../types/User";
import styles from "./styles/UserCard.module.scss";
import HorizontalIconRow from "../HorizontalIconRow/HorizontalIconRow";

interface UserCardProps {
  name: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  email,
  phone,
  website,
  address,
}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <HorizontalIconRow icon={<BsEnvelopeAt />} text={email} />
      <HorizontalIconRow icon={<BsTelephoneFill />} text={phone} />
      <div className={styles.website}>
        <BsGlobe2 className={styles.websiteIcon} />
        <a href={`https://${website}`} rel="external">
          {website}
        </a>
      </div>
      <HorizontalIconRow
        icon={<BsGeoAltFill />}
        text={`${address.street}, ${address.suite}, ${address.city} -${address.zipcode}`}
        iconClass={styles.locationIcon}
      />
    </div>
  );
};

export default UserCard;
