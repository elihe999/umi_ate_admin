import { Layout, Menu } from "antd";
import Link from "umi/link";
import styles from "./index.css";
import React, { Component } from "react";
import { Icon, Badge, Dropdown } from "antd";
import { connect } from "dva";


export default function(props) {
  if (props.location.pathname === '/404') {
    return <li>{ props.children }</li>
  }
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      {props.children}
    </div>
  );
}
