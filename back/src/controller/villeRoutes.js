const Ville = require("../db/Ville");

function villeRoutes(server) {
  server.get("/test", getHome);
  server.get("/villes", getvilles);
  server.post("/villes", postVille);
  server.del("/villes:villeName", deleteVille);

  function getHome(_, res, next) {
    res.send("test");
    next();
  }

  async function getvilles(_, res, next) {
    // @ts-ignore
    const data = await Ville.search();
    res.send(data);
    next();
  }

  async function postVille(req, res, next) {
    try {
      console.log(req.body);
      const { name, hab, temp, rain } = req.body;
      const ville = await Ville.create({ name, hab, temp, rain });
      res.send(ville.id);
      next();
    } catch (error) {
      next(error);
    }
  }

  async function deleteVille(req, res, next) {
    const name = req.query.name;
    console.log(name);
    const status = await Ville.deleteOne({ name });
    console.log(status);
    next();
  }
}

module.exports = villeRoutes;
