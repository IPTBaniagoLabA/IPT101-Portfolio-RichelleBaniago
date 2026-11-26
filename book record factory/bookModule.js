export const book = {
  title: "Chasing the Sun",
  author: " Jonah Mae Panen Pacala ",
  year: 2008,
  getBookLabel() {
    return `${this.title} by ${this.author} (${this.year})`;
  }
};

export function getBookDetailsDotNotation(bookObj) {
  return {
    title: bookObj.title,
    author: bookObj.author,
    year: bookObj.year
  };
}


export function formatBookStatus(bookObj, status) {
  return `[Status: ${status}] ${bookObj.getBookLabel()}`;
}