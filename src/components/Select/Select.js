import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';


const Wrapper = styled.select`
	background-color: ${COLORS.transparentGray35};
	padding: 12px 52px 12px 16px;
	font-size: 16px;

	border-radius: 8px;
	border-style: solid;
	border-color: ${COLORS.transparentGray35};
	appearance: none;
max-width: min-content;
color: ${COLORS.gray700};
	// text-overflow: '';
	// display: inline;
	// text-indent: 5px;

&:hover {
	border-color: ${COLORS.primary};
}
`;

const SelectIcon = styled(Icon)`
position: absolute;
top: 0px;
right: 18px;
`;

const IconWrapper = styled.div`
position: relative;
display: inline;
text-overflow: hidden;

`;


const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
  	<IconWrapper>
    	<SelectIcon id='chevron-down' size='24'/>
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
    </IconWrapper>
  );
};

export default Select;
