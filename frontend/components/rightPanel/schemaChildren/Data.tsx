import React, { Component, MouseEvent } from 'react';
const { ipcRenderer } = window.require('electron');

type ClickEvent = React.MouseEvent<HTMLElement>;

type DataProps = {

}

export const Data = (props: DataProps) => {
  
  
  return (
    <div>
      <h3>Data Panel</h3>
    </div>
  );

}

