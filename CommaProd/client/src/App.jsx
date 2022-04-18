import { useState } from "react";
import "./App.css";
import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import Home from "./Home";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Footer";
import SessionExpiredPopup from "./SessionExpiredPopup";
import * as reactRouterDom from "react-router-dom";

export function getApiDomain() {
  const apiPort = 3001;
  const apiUrl = `http://localhost:${apiPort}`;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websitePort = 3000;
  const websiteUrl = `http://localhost:${websitePort}`;
  return websiteUrl;
}

SuperTokens.init({
  appInfo: {
    appName: "SuperTokens Demo App", // TODO: Your app name
    apiDomain: getApiDomain(), // TODO: Change to your app's API domain
    websiteDomain: getWebsiteDomain(), // TODO: Change to your app's website domain
  },
  recipeList: [
    EmailPassword.init({
      emailVerificationFeature: {
        mode: "REQUIRED",
      },
      getRedirectionURL: async (context) => {
        if (context.action === "SUCCESS") {
          if (context.redirectToPath !== undefined) {
            // we are navigating back to where the user was before they authenticated
            return context.redirectToPath;
          }
          return "/dashboard";
        }
        return undefined;
      },
    }),
    Session.init(),
  ],
});

function App() {
  let [showSessionExpiredPopup, updateShowSessionExpiredPopup] =
    useState(false);

  return (
    <div className="App">
      <Router>
        <div className="fill">
          <Routes>
            {/* This shows the login UI on "/auth" route */}
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}

            <Route
              path="/"
              element={
                /* This protects the "/" route so that it shows 
                                <Home /> only if the user is logged in.
                                Else it redirects the user to "/auth" */
                <EmailPassword.EmailPasswordAuth
                  onSessionExpired={() => {
                    updateShowSessionExpiredPopup(true);
                  }}
                >
                  <Home />
                  {showSessionExpiredPopup && <SessionExpiredPopup />}
                </EmailPassword.EmailPasswordAuth>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
