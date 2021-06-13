import React from "react";
import { useHistory } from "react-router-dom";
// import { withRouter } from "react-router";

import { BaseButton } from "../../components/base/BaseButton";

export default function Home() {
  const history = useHistory();

  function navToPassengers() {
    history.push("/passengers");
  }
  return (
    <div className="home">
      <BaseButton onClick={navToPassengers}> Passengers </BaseButton>
    </div>
  );
}

// export default withRouter(Home);
