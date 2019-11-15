import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

// import { Container } from './styles';

export default function Line({ label, placeholder }) {
  return <TextField label={label} placeholder={placeholder} />;
}

Line.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
