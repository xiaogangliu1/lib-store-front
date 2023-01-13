import fileService from '@service/modules/file'
import { assignWith } from 'lodash'

const file = {
  namespaced: true,
  state: {

  },
  actions: {
    async getUserFile(context, payload) {
      const response = await fileService.getUserFilesRequest(payload)
      return response
    },
    async getFileProgress(context, payload) {
      const response = await fileService.getFileProgressRequest(payload)
      return response
    },
    async uploadChunk(context, payload) {
      const response = await fileService.uploadChunkRequest(payload)
      return response
    },
    async downloadFile(context, payload) {
      const response = fileService.downloadFileRequest(payload)
    },
    async renameFile(context, payload) {
      const response = fileService.renameFileRequest(payload)
      return response
    },
    async renameFolder(context, payload) {
      const response = fileService.renameFolderRequest(payload)
      return response
    },
    async removeFile(context, payload) {
      const response = fileService.removeFileRequest(payload)
      return response
    },
    async removeFolder(context, payload) {
      const response = fileService.removeFolderRequest(payload)
      return response
    },
    async createFolder(context, payload) {
      const response = fileService.createFolderRequest(payload)
      return response
    }
  }
}

export default file