import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const linkRegex = /\[(.*?)\]\((.*?)\)/g;

const renderInline = (text: string) => {
  const parts = text.split(linkRegex);
  return (
    <>
      {parts.map((part, i) => {
        if (i % 3 === 1) {
          // This is the link text
          return null;
        }
        if (i % 3 === 2) {
          // This is the link href
          return <a key={i} href={part} target="_blank" rel="noopener noreferrer">{parts[i - 1]}</a>;
        }
        return part;
      })}
    </>
  );
};

interface Section {
  title: string;
  content: (string | { question: string; answer: string })[];
  type: 'list' | 'faq' | 'paragraph';
}

export default function MarkdownRenderer({ content }: { content: string }) {
  const sections: Section[] = [];
  let currentSection: Section | null = null;
  let isFaq = false;

  const lines = content.split('\n');

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentSection) {
        sections.push(currentSection);
      }
      const title = line.substring(3).trim();
      isFaq = title.toLowerCase().includes('faq') || title.toLowerCase().includes('frequently asked questions');
      currentSection = { title, content: [], type: isFaq ? 'faq' : 'list' };
    } else if (currentSection) {
      if (isFaq) {
        if (line.startsWith('* **')) {
          const match = line.match(/\* \*\*(.*?)\*\*(.*)/);
          if (match) {
            currentSection.content.push({ question: match[1].trim(), answer: match[2].trim().replace(/^-/, '').trim() });
          }
        }
      } else if (line.startsWith('* ')) {
        currentSection.type = 'list';
        currentSection.content.push(line.substring(2));
      } else if (line.trim()) {
         if (currentSection.content.length === 0 && currentSection.type !== 'faq') {
            currentSection.type = 'paragraph';
         }
        currentSection.content.push(line.trim());
      }
    } else if (line.trim()) {
       if (currentSection) sections.push(currentSection);
       currentSection = null;
       sections.push({ title: '', content: [line.trim()], type: 'paragraph' });
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  return (
    <div className="prose">
      {sections.map((section, i) => (
        <div key={i} className="mb-8">
          {section.title && <h2>{section.title}</h2>}
          {section.type === 'faq' ? (
            <Accordion type="single" collapsible className="w-full">
              {(section.content as { question: string; answer: string }[]).map((item, j) => (
                <AccordionItem value={`item-${j}`} key={j}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{renderInline(item.answer)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : section.type === 'list' ? (
             <ul>
              {(section.content as string[]).map((item, j) => (
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ul>
          ) : (
            (section.content as string[]).map((p, j) => <p key={j}>{renderInline(p)}</p>)
          )}
        </div>
      ))}
    </div>
  );
}
