'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating SEO-optimized content.
 *
 * - generateSeoContent - A function that generates SEO content.
 * - GenerateSeoContentInput - The input type for the generateSeoContent function.
 * - GenerateSeoContentOutput - The return type for the generateSeoContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoContentInputSchema = z.object({
  platform: z.string().describe('The name of the social media platform.'),
  toolName: z.string().describe('The name of the downloader tool.'),
});
export type GenerateSeoContentInput = z.infer<typeof GenerateSeoContentInputSchema>;

const GenerateSeoContentOutputSchema = z.object({
  seoContent: z.string().describe('The SEO-optimized content for the page.'),
});
export type GenerateSeoContentOutput = z.infer<typeof GenerateSeoContentOutputSchema>;

export async function generateSeoContent(input: GenerateSeoContentInput): Promise<GenerateSeoContentOutput> {
  return generateSeoContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSeoContentPrompt',
  input: {schema: GenerateSeoContentInputSchema},
  output: {schema: GenerateSeoContentOutputSchema},
  prompt: `You are an SEO expert tasked with generating content for a social media downloader tool page.

  Your goal is to create unique, human-readable content that will attract organic traffic and improve AdSense approval chances.

  The tool is a {{platform}} downloader, named {{toolName}}.

  Generate content with the following sections, each under a '##' markdown heading:
  - A short introductory paragraph.
  - "How to use the {{toolName}}". Provide a simple, numbered list.
  - "Key Features". Highlight 3-4 benefits of using the tool. Use a bulleted list.
  - "Legal & DMCA Notice". Provide a standard disclaimer about copyright.
  - "Frequently Asked Questions (FAQ)". Create 4-5 common questions and their answers. Format each as '* **Question:** - Answer'.

  Keep paragraphs short and easy to read.
  Do not make up URLs or code snippets.
  The entire output must be in markdown format.
  `,
});

const generateSeoContentFlow = ai.defineFlow(
  {
    name: 'generateSeoContentFlow',
    inputSchema: GenerateSeoContentInputSchema,
    outputSchema: GenerateSeoContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
