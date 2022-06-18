import syncDirectory from 'sync-directory';
import { buildPath } from '../utils/common.util';
import { payload, errorLog, AppError } from '../utils/response.util';

export default class SyncHandler {
  constructor({ configs }) {
    this.homeCloudStorage = configs.HOME_CLOUD_STORAGE;
    this.cloneCloudStorage = configs.CLONE_CLOUD_STORAGE;
  }

  async syncDirectory(accessPath) {
    try {
      const dirPath = buildPath(accessPath, this.homeCloudStorage);
      const dirPathClone = buildPath(accessPath, this.cloneCloudStorage);

      await syncDirectory.sync(dirPath.absolutePath, dirPathClone.absolutePath, {
        exclude: ['node_modules'],
        nodeep: false,
      });

      return payload({ status: 200, data: { message: 'Sync finished' } });
    } catch (error) {
      console.error(error);
      return errorLog(error);
    }
  }
}
