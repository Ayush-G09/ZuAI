import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

pdfjsLib.GlobalWorkerOptions.workerSrc="https://unpkg.com/pdfjs-dist@4.5.136/legacy/build/pdf.worker.min.mjs"

export async function countWordsInPDF(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map((item) => item.str).join(" ");
  }

  const wordCount = text.split(/\s+/).length;
  return wordCount;
}

export async function extractFirstPageTextFromPDF(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  const page = await pdf.getPage(1);
  const textContent = await page.getTextContent();

  const pageText = textContent.items.map((item) => item.str).join(" ");

  return pageText.trim();
}

export async function getAllPagesAsImages(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  const numPages = pdf.numPages;
  const images = [];

  for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };
    await page.render(renderContext).promise;

    const image = canvas.toDataURL("image/png");
    images.push(image);
  }

  return images;
}

export function truncateString(str, length) {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
}

export function getFormattedDate() {
  const today = new Date();

  const day = today.getDate();
  const monthIndex = today.getMonth();
  const year = today.getFullYear();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${day < 10 ? "0" + day : day} ${months[monthIndex]} ${year}`;
}