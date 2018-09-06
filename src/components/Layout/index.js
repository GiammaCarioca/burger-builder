import React, { Fragment } from 'react';
import { Content } from './styles';

const layout = ({ children }) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Content>{children}</Content>
  </Fragment>
);

export default layout;
