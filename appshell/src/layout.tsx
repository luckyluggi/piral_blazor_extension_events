import * as React from 'react';
import { Link } from 'react-router-dom';
import { ComponentsState, ErrorComponentsState, Menu, Notifications, SwitchErrorInfo, MenuItemProps } from 'piral';
import { ExtensionSlot } from "piral";

export const layout: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  Layout: ({ children }) => (
    <div className="layout" style="display: flex; flex-direction: column; align-items: stretch;">
      <header>
        <ExtensionSlot name="Layout.Topbar" />
      </header>
      <main style="flex-grow: 1;">{children}</main>
    </div> 
  ),
};
