import http from "../http-common";

class UploadFilesService {
  upload(files, onUploadProgress) {
    let formData = new FormData();

    for (let index=0; index<files.length; index++) {
      formData.append("image"+index, files[index]);
    }
    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();