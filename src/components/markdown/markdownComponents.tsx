import {
  CodeBlock,
  HeadingLink,
  InlineCode,
  Line,
  List,
  ListItem,
  Media,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import type { Components } from "react-markdown";
import {
  Children,
  isValidElement,
  type ReactNode,
} from "react";

import { classifyMarkdownHref, slugifyHeadingText } from "./markdownLink";

function childrenToText(children: ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }
      if (isValidElement<{ children?: ReactNode }>(child)) {
        return childrenToText(child.props.children);
      }
      return "";
    })
    .join("");
}

function MarkdownLink({
  href,
  children,
}: {
  href?: string;
  children?: ReactNode;
}) {
  const kind = classifyMarkdownHref(href);

  // Defense in depth: loader also rejects these; never render navigable dangerous hrefs.
  if (kind === "blocked") {
    return <Text as="span">{children}</Text>;
  }

  if (kind === "external") {
    return (
      <SmartLink href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </SmartLink>
    );
  }

  return <SmartLink href={href}>{children}</SmartLink>;
}

function MarkdownImage({
  src,
  alt,
}: {
  src?: string;
  alt?: string;
}) {
  if (!src) {
    return null;
  }

  return (
    <Media
      marginTop="8"
      marginBottom="16"
      enlarge
      radius="m"
      border="neutral-alpha-medium"
      sizes="(max-width: 960px) 100vw, 960px"
      alt={alt ?? ""}
      src={src}
    />
  );
}

function createHeading(as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
  return function MarkdownHeading({ children }: { children?: ReactNode }) {
    const id = slugifyHeadingText(childrenToText(children));
    return (
      <HeadingLink marginTop="24" marginBottom="12" as={as} id={id}>
        {children}
      </HeadingLink>
    );
  };
}

function MarkdownParagraph({ children }: { children?: ReactNode }) {
  return (
    <Text
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

function MarkdownPre({ children }: { children?: ReactNode }) {
  const codeElement = Children.toArray(children).find((child) =>
    isValidElement<{ className?: string; children?: ReactNode }>(child),
  );

  if (
    !isValidElement<{ className?: string; children?: ReactNode }>(codeElement)
  ) {
    return <CodeBlock codes={[{ code: childrenToText(children), language: "text", label: "Text" }]} />;
  }

  const className = codeElement.props.className ?? "";
  const language = className.replace("language-", "") || "text";
  const code = childrenToText(codeElement.props.children);
  const label = language.charAt(0).toUpperCase() + language.slice(1);

  return (
    <CodeBlock
      marginTop="8"
      marginBottom="16"
      copyButton
      codes={[
        {
          code,
          language,
          label,
        },
      ]}
    />
  );
}

function MarkdownTable({ children }: { children?: ReactNode }) {
  // GFM tables are HTML structure; Once UI `Table` needs row/header data props, so keep semantic table.
  return (
    <Row as="div" fillWidth overflowX="auto" marginTop="8" marginBottom="16">
      <table>{children}</table>
    </Row>
  );
}

function MarkdownTh({ children }: { children?: ReactNode }) {
  return (
    <th>
      <Text variant="label-default-s" onBackground="neutral-strong" padding="8">
        {children}
      </Text>
    </th>
  );
}

function MarkdownTd({ children }: { children?: ReactNode }) {
  return (
    <td>
      <Text variant="body-default-s" onBackground="neutral-medium" padding="8">
        {children}
      </Text>
    </td>
  );
}

/**
 * Tag → Once UI map for project / future fitness & finance markdown bodies.
 * Keep this file UI-kit specific; do not put collection/fs logic here.
 */
export const markdownComponents: Components = {
  p: MarkdownParagraph,
  h1: createHeading("h1"),
  h2: createHeading("h2"),
  h3: createHeading("h3"),
  h4: createHeading("h4"),
  h5: createHeading("h5"),
  h6: createHeading("h6"),
  a: MarkdownLink,
  img: MarkdownImage,
  code: ({ children }) => <InlineCode>{children}</InlineCode>,
  pre: MarkdownPre,
  ul: ({ children }) => <List as="ul">{children}</List>,
  ol: ({ children }) => <List as="ol">{children}</List>,
  li: ({ children }) => (
    <ListItem marginTop="4" marginBottom="8">
      {children}
    </ListItem>
  ),
  hr: () => (
    <Row fillWidth horizontal="center" marginY="16">
      <Line maxWidth="40" />
    </Row>
  ),
  table: MarkdownTable,
  th: MarkdownTh,
  td: MarkdownTd,
};
