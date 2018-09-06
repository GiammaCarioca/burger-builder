import React, { Fragment } from 'react';
import { Content } from './styles';

const Layout = ({ children }) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Content>{children}</Content>
  </Fragment>
);

export default Layout;
