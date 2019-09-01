// @ts-ignore
const MongoDBMemoryServer = require("mongodb-memory-server").default;
const NodeEnvironment = require("jest-environment-node");

class MongoMemoryEnvironment extends NodeEnvironment {
  async setup() {
    console.log("seting up test server");
    await super.setup();
    this._server = new MongoDBMemoryServer();
    this.global.MONGODB_URI = await this._server.getConnectionString();
    console.log(this.global.MONGODB_URI);
  }

  async teardown() {
    this._server.stop();
    await super.teardown();
  }
}

module.exports = MongoMemoryEnvironment;
