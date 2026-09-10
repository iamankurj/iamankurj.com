import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { stripHtmlComments } from "@/lib/content/stripHtmlComments";

import { markdownComponents } from "./markdownComponents";

type MarkdownBodyProps = {
  /** Markdown body string (frontmatter already stripped by the content loader). */
  body: string;
};

/**
 * Renders plain Markdown with Once UI primitives.
 * Portable content stays in `body`; swap this adapter for MUI (or another kit) later.
 * HTML comments (`<!-- ... -->`) are author-only and are not rendered.
 */
export function MarkdownBody({ body }: MarkdownBodyProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
      {stripHtmlComments(body)}
    </ReactMarkdown>
  );
}
