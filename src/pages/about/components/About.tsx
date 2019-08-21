
import React, {Component} from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import styles from './About.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page about</h1>
    </div>
  );
}
