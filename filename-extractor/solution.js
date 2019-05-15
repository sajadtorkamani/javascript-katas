class FileNameExtractor {
  /**
   * @param str {string}
   */
  static extractFileName(str) {
    return str.replace(/^\d+_|\.\w+$/g, '');
  }
}

export default FileNameExtractor;