export default class FakeRedis {
  constructor() {
    this.db = {};
  }

  async GET(key) {
    await timeout(Math.random() * 1);
    return this.db[key];
  }

  async SET(key, value) {
    await timeout(Math.random() * 1);
    this.db[key] = value;
    return 0;
  }
}

const timeout = (time) => {
  return new Promise(fullfill => {
    setTimeout(fullfill, time)
  });
}
