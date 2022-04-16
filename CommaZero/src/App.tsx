import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import SuperTokens from 'supertokens-auth-react/lib/build/superTokens';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import Session from 'supertokens-auth-react/recipe/session';

SuperTokens.init({
  appInfo: {
      // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
      appName: "CommaZero",
      apiDomain: "http://localhost:5555",
      websiteDomain: "http://localhost:3000",
      apiBasePath: "/auth",
      websiteBasePath: "/auth",
  },
  recipeList: [
      EmailPassword.init(),
      Session.init()
  ]
});

const App:React.FC = () => {


  return (
    <div>      
      Comma Zero
    </div>
  )
}

export default App
