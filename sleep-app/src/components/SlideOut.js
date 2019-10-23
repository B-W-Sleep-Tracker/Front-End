import React from 'react';
import styled from 'styled-components';
import Header from "./Header";

const Container = styled.div`
  width: 276px;
`;

function SlideOut() {
  return(
    <div>
    <Header />
    <div className="selectors">
      <div className="alarms" img src="">Alarms</div>
      <div className="stats" img src="">Stats</div>
      <div className="Graph" img src="">Graph</div>
      <div className="lullaby" img src="">Lullaby</div>
      <div className="pro" img src="">Pro</div>
    </div>
    </div>
  );
};

export default SlideOut;