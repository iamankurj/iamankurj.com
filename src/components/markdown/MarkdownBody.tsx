import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { markdownComponents } from "./markdownComponents";

type MarkdownBodyProps = {
  /** Markdown body string (frontmatter already stripped by the content loader). */
  body: string;
};

/**
 * Renders plain Markdown with Once UI primitives.
 * Portable content stays in `body`; swap this adapter for MUI (or another kit) later.
 */
export function MarkdownBody({ body }: MarkdownBodyProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
      {body}
    </ReactMarkdown>
  );
}
