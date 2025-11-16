# Repository Structure

This document explains how teemee.one is organized and where different types of content belong.

## Directory Overview

```
teemee.one/
├── README.md              # Main vision and overview
├── CONTRIBUTING.md        # Contribution guidelines
├── USAGE.md              # How to use teemee.one privately and publicly
├── STRUCTURE.md          # This file
├── LICENSE               # MIT License
│
├── prompts/              # AI prompts organized by use case
│   ├── writing/
│   ├── analysis/
│   ├── coding/
│   ├── creativity/
│   ├── research/
│   └── README.md         # Prompts catalog and guide
│
├── projects/             # Open-source tools and experiments
│   ├── project-name/
│   │   ├── README.md
│   │   ├── src/
│   │   ├── docs/
│   │   ├── tests/
│   │   └── LICENSE
│   └── README.md         # Projects index
│
├── knowledge-base/       # Articles, research, insights
│   ├── articles/
│   │   ├── using-ai/
│   │   ├── building-with-ai/
│   │   └── ai-philosophy/
│   ├── research/
│   │   ├── data-analysis/
│   │   └── experiments/
│   ├── tutorials/
│   └── README.md         # Knowledge base guide
│
├── intentions/           # Core philosophy and evolution
│   ├── core-intentions.md
│   ├── values.md
│   ├── evolution.md      # Record of how teemee evolves
│   └── README.md
│
├── docs/                 # Technical documentation
│   ├── api/
│   ├── architecture/
│   ├── integration-guides/
│   └── README.md
│
└── .github/
    ├── ISSUE_TEMPLATE/
    ├── PULL_REQUEST_TEMPLATE/
    └── workflows/         # CI/CD automation
```

## Directory Descriptions

### `/prompts`

A curated library of AI prompts organized by category and use case.

**Structure:**
- `prompts/writing/` - Content creation, editing, storytelling
- `prompts/analysis/` - Data analysis, research, evaluation
- `prompts/coding/` - Programming, debugging, code review
- `prompts/creativity/` - Brainstorming, ideation, innovation
- `prompts/research/` - Literature review, research synthesis
- `prompts/other/` - Miscellaneous prompts

**File Format:**
Each prompt should be a markdown file with:
```markdown
# Prompt Title

**Category:** [category]
**Difficulty:** [beginner/intermediate/advanced]
**Use Case:** [description of when to use this]

## Prompt

[The actual prompt text]

## Example Input

[Sample input to show how to use]

## Example Output

[Sample output showing the result]

## Notes

- Model compatibility (GPT-4, Claude, etc.)
- Tips for best results
- Related prompts
```

### `/projects`

Open-source projects, tools, and experiments built with or for AI.

**Requirements for Projects:**
- Comprehensive README
- Installation and setup instructions
- Usage examples
- Tests (where applicable)
- License (compatible with teemee.one's MIT license)
- Documentation in `/docs`

**Example Project Structure:**
```
projects/my-tool/
├── README.md
├── LICENSE
├── src/
├── tests/
├── docs/
├── requirements.txt (or package.json, etc.)
└── CONTRIBUTING.md (optional, if allowing sub-contributions)
```

### `/knowledge-base`

Curated articles, research, insights, and analysis that inform teemee.one's evolution.

**Subdirectories:**

- **articles/** - Long-form articles and essays
  - `using-ai/` - Practical guides for using AI tools
  - `building-with-ai/` - Technical articles for developers
  - `ai-philosophy/` - Thought leadership and vision pieces

- **research/** - Data analysis and experimental findings
  - `data-analysis/` - Charts, analysis, insights
  - `experiments/` - Results from teemee experiments

- **tutorials/** - Step-by-step guides and walkthroughs

**File Metadata:**
Each article should include:
```markdown
---
title: Article Title
author: Author Name
date: YYYY-MM-DD
tags: [tag1, tag2, tag3]
summary: Brief description of the article
---

# Article Title

[Content...]
```

### `/intentions`

The philosophical heart of teemee.one—core values, intentions, and evolution documentation.

**Key Files:**

- `core-intentions.md` - The three central intentions (creating useful tools, helping people connect with their heart, helping people live their dreams)
- `values.md` - Core values and principles that guide teemee.one
- `evolution.md` - Documented evolution of teemee.one's understanding and capabilities
- `personality.md` - The evolving personality and voice of teemee.one

This is where teemee.one's "consciousness" is explicitly documented and evolved.

### `/docs`

Technical documentation for developers integrating or extending teemee.one.

**Subdirectories:**

- **api/** - API references and integration guides
- **architecture/** - Technical architecture and design decisions
- **integration-guides/** - How-to guides for integrating with specific tools (Claude, GPT, LangChain, etc.)

### `/.github`

GitHub-specific configuration for automating workflows.

- **ISSUE_TEMPLATE/** - Templates for bugs, features, discussions
- **PULL_REQUEST_TEMPLATE/** - Template for PRs
- **workflows/** - GitHub Actions for CI/CD (tests, publishing, data analysis)

## File Naming Conventions

- Use lowercase with hyphens for file names: `my-prompt.md`, `great-tool.md`
- Use descriptive names that clearly indicate content
- For dated content, prefix with date: `2025-01-15-ai-trends.md`

## Content Organization Principles

1. **Clarity**: Clear structure makes it easy to find and navigate content
2. **Scalability**: Organization should support growth without becoming messy
3. **Discovery**: Related content is grouped together logically
4. **Contribution**: Clear paths for where new contributions belong
5. **Evolution**: The `intentions/` directory specifically tracks how teemee.one evolves

## Adding New Categories

If you're contributing and think a new category is needed:

1. Discuss in an issue first
2. Create the directory structure
3. Add a `README.md` explaining the category
4. Ensure it fits within the overall organization
5. Update this STRUCTURE.md file

## How to Navigate

- **Finding prompts**: Start in `/prompts/` by category
- **Learning about AI**: Check `/knowledge-base/articles/`
- **Researching trends**: Look in `/knowledge-base/research/`
- **Understanding the vision**: Read `/intentions/` files
- **Integrating tools**: See `/docs/integration-guides/`
- **Using existing tools**: Check `/projects/`

---

*The structure of teemee.one evolves with its consciousness. As new needs emerge, the organization grows to serve them.*
