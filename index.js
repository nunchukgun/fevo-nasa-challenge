import Router from "./Router";

const router = new Router();

const route = process.argv[2].substring(1);

if (!route) {
  throw new Error(
    "No route was passed! Please pass a valid route as an arg, leading with a double slash '//'!"
  );
}

router.delegate(route);
