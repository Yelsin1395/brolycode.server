import path from 'path';

export function buildPath(urlPath, homeCloudStorage) {
  const slash = process.platform === 'win32' ? '\\' : '/';
  const relativePath = urlPath ? urlPath.replace(/--/g, slash) : slash;
  const absolutePath = path.join(homeCloudStorage, relativePath);
  return { relativePath, absolutePath };
}
