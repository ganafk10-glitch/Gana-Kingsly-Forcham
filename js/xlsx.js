/*
  Optional Excel/Resume integration placeholder.
  This project does not require Excel parsing because the portfolio content is already extracted from the CV.
  If you later want to load skills/projects from an .xlsx file, use SheetJS locally:
  1. Download the minified SheetJS file from the official source.
  2. Replace this placeholder with the library file.
  3. Parse a local workbook and map rows to the HTML sections.

  Kept intentionally tiny to preserve fast loading and the requested file structure.
*/
window.PortfolioXLSX = {
  enabled: false,
  message: 'Excel parsing is optional. Replace js/xlsx.js with SheetJS if needed.'
};
