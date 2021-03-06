import path from 'path';
import fs from 'fs';
import { buildPath } from '../utils/common.util';
import { payload, errorLog, AppError } from '../utils/response.util';

export default class DirectoryHandler {
  constructor({ configs }) {
    this.homeCloudStorage = configs.HOME_CLOUD_STORAGE;
  }

  async getContentDirectory(accessPath) {
    try {
      const dirPath = buildPath(accessPath, this.homeCloudStorage);
      const dir = await fs.promises.opendir(dirPath.absolutePath);
      const content = { files: [], directories: [] };

      for await (const dirent of dir) {
        if (dirent.isDirectory()) {
          content.directories.push(dirent.name);
        } else {
          content.files.push(dirent.name);
        }
      }
      content.directories.sort();
      content.files.sort();

      return payload({ status: 200, data: { content } });
    } catch (error) {
      console.error(error);
      return errorLog(error);
    }
  }

  async createDirectory(accessPath, folderName) {
    try {
      const dirPath = buildPath(accessPath, this.homeCloudStorage);

      fs.mkdirSync(path.join(dirPath.absolutePath, folderName));

      return payload({ status: 201, data: { message: 'Directory create' } });
    } catch (error) {
      console.error(error);
      return errorLog(error);
    }
  }

  async deleteDirectory(accessPath, fileName) {
    try {
      if (!accessPath && !fileName) {
        AppError(400, 'ERR_DIRECTORY_ROOT', `Can't delete root folder`);
      }

      const dirPath = buildPath(accessPath, this.homeCloudStorage);

      if (fileName) {
        await fs.promises.unlink(path.join(dirPath.absolutePath, fileName));
      } else {
        await fs.promises.rmdir(dirPath.absolutePath);
      }

      const message = fileName
        ? `File ${fileName} removed`
        : `Directory ${dirPath.relativePath} removed`;
      return payload({ status: 200, data: { dirPath, message } });
    } catch (error) {
      console.error(error);
      return errorLog(error);
    }
  }
}
