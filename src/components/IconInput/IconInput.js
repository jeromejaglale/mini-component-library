import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const TextInput = styled.input`

	color: ${COLORS.gray700};
	font-weight: 700;

	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}

`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <div>
  			<VisuallyHidden>
  				<label name="ti">Name</label>
  			</VisuallyHidden>
  			<Icon id="at-sign"></Icon>
  			<TextInput id="ti" type="text" placeholder="Search" />
  		</div>
  ;
};

export default IconInput;
