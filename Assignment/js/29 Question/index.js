// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.
function getFileExtension(filename) {
    let index = filename.lastIndexOf(".");
    if (index == -1) {
      return "This file has no extension.";
    } else {
      return filename.substring(index + 1);
    }
  }