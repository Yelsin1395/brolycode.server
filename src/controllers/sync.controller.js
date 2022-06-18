let _syncHandler = null;

export default class SyncController {
  constructor({ syncHandler }) {
    _syncHandler = syncHandler;
  }

  async syncDirectory(req, res) {
    const { path } = req.params;
    const data = await _syncHandler.syncDirectory(path);
    return res.status(data.status).send(data);
  }
}
