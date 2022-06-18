import path from 'path';
import fs from 'fs';
import { buildPath } from '../utils/common.util';
import { payload, errorLog, AppError } from '../utils/response.util';

export default class UploadHandler {
  constructor({ configs }) {
    this.homeCloudStorage = configs.HOME_CLOUD_STORAGE;
  }

  async _buildFile(file, storagePath, isNotPathRoot) {
    const filePath = path.join(storagePath, file.name);

    if (isNotPathRoot) {
      fs.mkdirSync(storagePath, { recursive: true });
    }

    file.mv(filePath, (err) => {
      if (err) {
        AppError(400, 'ERR_FILE_MOVE', JSON.stringify(err));
      }
    });

    return;
  }

  async uploadFiles(path, files) {
    try {
      if (!files) {
        AppError(400, 'ERR_FILES_UPLOADED', 'It is mandatory to upload files');
      }

      const isNotPathRoot = path ? true : false;
      const dirPath = buildPath(path, this.homeCloudStorage);

      if (!Array.isArray(files)) {
        files = [files];
      }

      for (const file of files) {
        await this._buildFile(file, dirPath.absolutePath, isNotPathRoot);
      }

      return payload({
        status: 200,
        data: {
          message: 'Files successfully uploaded',
          rootPath: this.homeCloudStorage,
          relativePath: dirPath.relativePath,
        },
      });
    } catch (error) {
      console.error(error);
      return errorLog(error);
    }
  }
}
