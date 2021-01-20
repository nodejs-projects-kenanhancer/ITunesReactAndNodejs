import React from 'react';
import {SpinnerStyle} from './styles';

export const Spinner = ({show}) => (show ? <SpinnerStyle/> : null)