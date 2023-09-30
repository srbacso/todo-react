import { IDisabled } from './IDisabled';
import { SelectChangeEvent } from '@mui/material';
import PropTypes from 'prop-types';
import { TaskSelectField } from '../_taskSelectField';

export interface ISelectItems {
  value: string;
  label: string;
}

export interface ISelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (event: SelectChangeEvent) => void;
  items?: ISelectItems[];
}

TaskSelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
