const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
let supertokens = require("supertokens-node");
let Session = require("supertokens-node/recipe/session");
let {
  verifySession,
} = require("supertokens-node/recipe/session/framework/express");
let {
  middleware,
  errorHandler,
} = require("supertokens-node/framework/express");
let EmailPassword = require("supertokens-node/recipe/emailpassword");

const apiPort = process.env.REACT_APP_API_PORT || 3001;
const apiDomain =
  process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
const websiteDomain =
  process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;

supertokens.init({
  framework: "express",
  supertokens: {
    // TODO: This is a core hosted for demo purposes. You can use this, but make sure to change it to your core instance URI eventually.
    connectionURI:
      "postgresql://doadmin:AVNS_elqGfhkwnu5jQs5@db-postgresql-sgp1-73443-do-user-8511373-0.b.db.ondigitalocean.com:25060/defaultdb",
    apiKey: "<REQUIRED FOR MANAGED SERVICE, ELSE YOU CAN REMOVE THIS FIELD>",
  },
  appInfo: {
    appName: "SuperTokens Demo App", // TODO: Your app name
    apiDomain, // TODO: Change to your app's API domain
    websiteDomain, // TODO: Change to your app's website domain
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

// async function getUserInfo(email) {
//   let usersInfo = await EmailPassword.getUserByEmail(email);
// }

const app = express();

app.use(
  cors({
    origin: websiteDomain, // TODO: Change to your app's website domain
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(middleware());

// custom API that requires session verification
app.get("/sessioninfo", verifySession(), async (req, res) => {
  let session = req.session;
  res.send({
    sessionHandle: session.getHandle(),
    userId: session.getUserId(),
    accessTokenPayload: session.getAccessTokenPayload(),
  });
});

app.get("/get-user-info", verifySession(), async (req, res) => {
  let userId = req.session.getUserId();
  // You can learn more about the `User` object over here https://github.com/supertokens/core-driver-interface/wiki
  let userInfo = await EmailPassword.getUserById(userId);
  // ...
});

app.use(errorHandler());

app.use((err, req, res, next) => {
  res.status(500).send("Internal error: " + err.message);
});

app.listen(apiPort, () =>
  console.log(`API Server listening on port ${apiPort}`)
);
