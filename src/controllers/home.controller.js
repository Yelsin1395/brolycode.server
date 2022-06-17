let _homeHandler = null;

export default class HomeController {
  constructor({ homeHandler }) {
    _homeHandler = homeHandler;
  }

  index(req, res) {
    const data = _homeHandler.index();
    return res.status(data.status).send(data);
  }
}
