let _uploadHandler = null;

export default class UploadController {
  constructor({ uploadHandler }) {
    _uploadHandler = uploadHandler;
  }

  async uploadFiles(req, res) {
    const { path } = req.params;
    const { files } = req.files;
    const data = await _uploadHandler.uploadFiles(path, files);
    return res.status(data.status).send(data);
  }
}
