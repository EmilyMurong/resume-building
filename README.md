# Resume-Building

**Resume-Building** is a bilingual smart resume builder designed for students, coursework projects, and internship applications.  
It supports Chinese / English UI switching, TXT / DOCX / PDF resume import, smart form filling, live A4 preview, multiple resume templates, custom sections, local draft saving, and PDF export.

## Project Overview

This project helps users create a structured resume through a web-based editor. Users can either fill in resume information manually or import an existing resume file. The system extracts the text content and fills the resume form automatically. Users can then choose a template, preview the resume in real time, and export it as a PDF.

The project is built as a front-end web application using HTML, CSS, and JavaScript.

## Features

- Bilingual interface: Chinese / English
- Manual resume editing
- TXT resume import
- DOCX resume import
- PDF resume import
- Smart form filling
- Live A4 resume preview
- Classic / Modern / Minimal resume templates
- Custom section adding
- Photo upload
- Local draft saving with LocalStorage
- Clear form with custom confirmation modal
- Example data filling
- PDF export
- Toast messages and custom modals
- File format validation and user-friendly error messages

## Tech Stack

- HTML
- CSS
- JavaScript
- LocalStorage
- Mammoth.js for DOCX text extraction
- PDF.js for PDF text extraction
- Browser print / PDF export

## Key Highlights

- Built a complete resume builder workflow from file import to PDF export.
- Implemented bilingual UI switching without modifying user-entered resume content.
- Supported multiple resume file formats, including TXT, DOCX, and text-based PDF files.
- Designed real-time preview and multiple resume templates.
- Added local draft saving to improve usability.
- Used custom modals and toast notifications instead of browser-native alerts.
- Added custom resume sections to make the resume structure more flexible.

## How to Run

1. Download or clone this project.
2. Open the project folder in VS Code.
3. Install the Live Server extension if needed.
4. Right-click `index.html` and select **Open with Live Server**.
5. The project will open in your browser.

Alternatively, you can open `index.html` directly in a browser, but Live Server is recommended.

## Folder Structure

```text
Resume-Building/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── logo.png
├── README.md
```

Optional folders:

```text
screenshots/
test-files/
```

## Usage Flow

1. Open the website.
2. Choose Chinese or English interface.
3. Fill in resume information manually, or import a TXT / DOCX / PDF file.
4. Click **Smart Fill** to extract and fill resume information.
5. Review the smart recognition result carefully.
6. Choose a resume template.
7. Add extra sections if needed.
8. Save draft or export the resume as PDF.

## Known Limitations

- PDF import only supports text-based PDF files.
- Scanned PDF files or image-based PDF files may not be recognized correctly.
- Smart recognition results may contain errors, so users should review and edit the resume before exporting or submitting it.
- The language switch only translates fixed UI text and resume section headings. It does not automatically translate user-entered resume content.

## Future Improvements

- Add AI-powered resume polishing.
- Add automatic Chinese-English resume content translation.
- Add more resume templates.
- Add account login and cloud saving.
- Add drag-and-drop section reordering.
- Improve PDF parsing accuracy.
- Add mobile-optimized editing experience.

## Resume Description

**Resume-Building – Bilingual Smart Resume Builder**  
Developed a bilingual resume builder using HTML, CSS, and JavaScript. Implemented TXT/DOCX/PDF resume import, smart form filling, live A4 preview, multiple resume templates, custom sections, local draft saving, and PDF export.

## 中文项目描述

**Resume-Building 双语智能简历生成器**  
使用 HTML、CSS 和 JavaScript 开发在线简历生成器，支持中英文界面切换、TXT/DOCX/PDF 导入、智能填充、实时预览、多模板切换、自定义模块、本地草稿保存和 PDF 导出。
