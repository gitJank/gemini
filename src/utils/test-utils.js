/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render as tlRender, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../App/App.theme';

export const fillInput = (element, value) =>
  fireEvent.change(element.children[1].children[0], { target: { value } });

export const render = component =>
  tlRender(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
