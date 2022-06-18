
# Broly-code-server

`broly-code-server` is a file and folder manager system in the cloud, giving the possibility of synchronizing with all devices.

## Development Setup

First, clone the repo and cd into the project:
```bash
git clone https://github.com/Yelsin1395/brolycode.server.git
cd brolycode.server
```
Then, perform the installation of the server dependencies:
```bash
npm i
```
When installed, create the designated root folder in windows, linux or some cloud service.
```bash
mkdir container-cloud-root
```
You can also use the same command to create the folder with which your files will be synchronized.

In the root folder of the project, create an .env file and add these environment variables and adjust their values ​​according to your requirements:

```bash
APPLICATION_NAME="Broly Code Server"
PORT="3000"
HOME_CLOUD_STORAGE="C:\Users\yelga\Desktop\container-cloud-directory"
CLONE_CLOUD_STORAGE="C:\Users\yelga\Desktop\container-cloud-clone-directory"
```
Bring up the server with these commands:
```bash
npm start:dev
```
Ready you can now use this cloud service.

## Author
- [Jesús Yelsin Broly](https://github.com/Yelsin1395)
## Tech Stack

**Server:** Node, Express

