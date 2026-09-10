/**
 * Remove HTML comments (`<!-- ... -->`) from markdown.
 * Fenced code blocks are left intact so examples of comments still render.
 */
export function stripHtmlComments(body: string): string {
  const fences: string[] = [];
  const withoutFences = body.replace(/```[\s\S]*?```/g, (match) => {
    const index = fences.length;
    fences.push(match);
    return `\0FENCE${index}\0`;
  });

  const stripped = withoutFences.replace(/<!--[\s\S]*?-->/g, "");

  return stripped.replace(/\0FENCE(\d+)\0/g, (_match, index) => {
    return fences[Number(index)] ?? "";
  });
}
