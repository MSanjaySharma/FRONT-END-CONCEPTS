import React, { useState } from "react";

const CountContext = React.createContext([{}, () => {}]);

const CountProvider = (props) => {
  const [state, setState] = useState({ count: 0 });
  return (
    <CountContext.Provider value={[state, setState]}>
      {props.children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
