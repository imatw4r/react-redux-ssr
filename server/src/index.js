import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/routes";
import proxy from "express-http-proxy";

const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);

app.use(express.static("public")); // treat public dir as static to the outside world

function execLoadData(matchedRoute, store) {
  const { route } = matchedRoute;
  if (route.loadData) {
    return route.loadData(store);
  }
  return null;
}

app.get("*", (req, resp) => {
  const store = createStore(req);

  const routes = matchRoutes(Routes, req.path);
  Promise.all(routes.map(route => execLoadData(route, store))).then(() =>
    resp.send(renderer(req, store))
  );
});

app.listen(3000, () => {
  console.log("Listenisng on port 3000");
});
