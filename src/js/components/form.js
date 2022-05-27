const fileInput = document?.querySelector("#file");
const fileLabel = document?.querySelector(".form-file_btn");

if (fileInput) {
  fileInput.addEventListener("change", function (e) {
    let fileName = this.files[0].name;
    if (fileName.length > 14) fileName = fileName.substring(0, 14) + "...";
    fileLabel.innerHTML = fileName;
  });
}
