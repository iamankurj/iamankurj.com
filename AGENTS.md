# AGENTS.md

<!-- once-ui-agent-harness:start -->
## Once UI codegen harness

Before generating Once UI code, load the vendored harness (Cursor cannot read `node_modules`):

1. Read `.cursor/once-ui-ai/manifest.json`
2. Load bootstrap: `.cursor/once-ui-ai/rules.compact.md` + `.cursor/once-ui-ai/catalog.json`
3. Match intent via `.cursor/once-ui-ai/tasks/index.json` → fetch task bundle + component slices
4. Validate: `npx once-ui-validate-ai-code path/to/file.tsx`

Source: `@once-ui-system/core@1.8.4` (`node_modules/@once-ui-system/core/ai`). Refresh after upgrading.

Remote fallback: https://docs.once-ui.com/ai/manifest.json
<!-- once-ui-agent-harness:end -->

