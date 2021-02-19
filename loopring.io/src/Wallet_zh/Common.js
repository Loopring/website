import styled from 'styled-components';

import './FeatureSection.scss';

const CenterAlignContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightAlignContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LeftAlignContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export default CenterAlignContainer;
export {CenterAlignContainer, RightAlignContainer, LeftAlignContainer};
