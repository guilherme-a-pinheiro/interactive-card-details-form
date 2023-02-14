import React from 'react';

import Component from '../Content';

import img from '../../images/bg-main-desktop.png';

import './styles.css';

export default function Main() {
  return (
    <>
      <main>
        <img src={img} alt="main-img-desktop" />
        <Component />
      </main>
    </>
  )
}