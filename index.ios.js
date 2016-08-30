/**
 * changed by hainuo 16/6/11
 * @flow
 */
import './ReactotronConfig';//makesure this is writen in the first line;
import React, { Component } from 'react';
import {  AppRegistry } from 'react-native';


import PGW from './src/root';

AppRegistry.registerComponent('pgw', () => PGW);
