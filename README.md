# Next.js Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features

1. **File Upload**
   - Implement drag-and-drop functionality for PDF files
   - Provide a manual file upload option
   - Display file size limit (e.g., "Limit 25 MB per file")
   - Store uploaded files using browser local storage

2. **Local Storage Implementation**
   - Save uploaded files and their metadata locally
   - Ensure persistence of data across page reloads
   - Implement efficient retrieval of stored files and data

3. **Coursework Details Form**
   - Create dropdowns for "Coursework Type" and "Subject"
   - Add a text input for essay title
   - Store form data locally with the associated file

4. **Evaluation Display**
   - Use dummy data for everything
   - Show overall score with a circular progress indicator
   - Display breakdown of scores by criteria (A, B, C)
   - Include evaluation date
   - Store and retrieve evaluation results locally

5. **Coursework List**
   - Display previously uploaded coursework from local storage
   - Show title, subject, word count, and other relevant details for each item

6. **Explore Coursework Section**
   - Implement a tabbed interface for different coursework categories
   - Create a grid layout for coursework examples

## Bonus Features

1. **Animations**
   - Smooth transitions between states
   - Micro-interactions for enhanced user feedback

2. **Advanced Local Storage Features**
   - Option to clear local storage or individual files

## FontAwesome Icons

This project uses FontAwesome icons, and customization includes changing their color on hover, as the images provided in Figma could not be adjusted directly.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
