import React from 'react';
import { Button } from 'semantic-ui-react';

function SleepRating() {
  return (
    <div>
      <div className="top-content">
        <h1>Sleep Duration</h1>
        {/* TODO: Components for sleep duration time */}
      </div>
      <div className="bottom-content">
        <h2>How was your sleep?</h2>
        <div className="buttons">
          <Button type="submit">
            <img src=""></img>
          </Button>
          <Button type="submit">
            <img src=""></img>
          </Button>
          <Button type="submit">
            <img src=""></img>
          </Button>
          <Button type="submit">
            <img src=""></img>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SleepRating;
