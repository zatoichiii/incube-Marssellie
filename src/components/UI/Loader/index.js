import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.spinner}>
      <TailSpin color="#ffffff" height={80} width={80} />
    </div>
  </div>
);

export default Loader;
