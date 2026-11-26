import { book, getBookDetailsDotNotation, formatBookStatus } from "./bookModule.js";

console.log("=== Book Record Factory Output ===\n");

// 1. Test accessing properties using dot notation
console.log("Dot Notation Access:");
console.log("  Title :", book.title);
console.log("  Author:", book.author);
console.log("  Year  :", book.year);

const details = getBookDetailsDotNotation(book);
console.log("  Extracted Details:", details);
console.log();

// 2. Test object method using this and template literals
console.log("Book Label Method:");
console.log(" ", book.getBookLabel());
console.log();

// 3. Test helper function with status strings
console.log("Formatted Book Statuses:");
console.log(" ", formatBookStatus(book, "Available"));
console.log(" ", formatBookStatus(book, "Checked Out"));