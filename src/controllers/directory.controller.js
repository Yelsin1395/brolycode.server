let _directoryHandler = null;

export default class DirectoryController {
  constructor({ directoryHandler }) {
    _directoryHandler = directoryHandler;
  }

  async getContentDirectory(req, res) {
    const { path } = req.params;
    const data = await _directoryHandler.getContentDirectory(path);
    return res.status(data.status).send(data);
  }

  async createDirectory(req, res) {
    const { path } = req.params;
    const { folderName } = req.body;
    const data = await _directoryHandler.createDirectory(path, folderName);
    return res.status(data.status).send(data);
  }
}
