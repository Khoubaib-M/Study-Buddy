import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    console.log("isAuthenticated: " + isAuthenticated);
    if (isAuthenticated == false) {
      //loginWithRedirect();
    }
  }, []);

  return <div className="bg-blue-600">hello</div>;
}

export default App;
