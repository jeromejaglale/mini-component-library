/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--border-radius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--border-radius": 4 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--padding": 4 + "px",
    "--border-radius": 8 + "px",
  }
};

const ProgressBarWrapper = styled.div`
	background-color: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	border-radius: var(--border-radius);
	overflow: hidden;
	height: var(--height);
	padding: var(--padding);

`;

const ProgressBarInnerWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBarInner = styled.div`
	background-color: ${COLORS.primary};
	width: var(--progress);
	height: 17px;
`;

const ProgressBar = ({ value, size }) => {
	const styles = SIZES[size];


  return <ProgressBarWrapper role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="{value}" style={styles}>
  			<ProgressBarInnerWrapper>
          <ProgressBarInner style={{ '--progress': value + '%' }}/>
        </ProgressBarInnerWrapper>
  </ProgressBarWrapper>;
};

export default ProgressBar;
