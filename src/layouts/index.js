import { Layout, Menu, Icon, Badge, Dropdown } from 'antd';
import Link from 'umi/link';
import React, { Component } from 'react';

import { connect } from 'dva';
import styles from './index.css';


export default function (props) {
  if (props.location.pathname === '/404') {
    return <li>{ props.children }</li>
  }
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
}
