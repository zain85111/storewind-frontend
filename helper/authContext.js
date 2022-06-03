import { createContext } from "react";

const authContext = createContext({
  authenticated: JSON.stringify({currentUser: null, role: null}),
  setAuthenticated: (auth) => {}
});

export default authContext;