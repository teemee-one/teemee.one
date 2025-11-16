# Using teemee.one

teemee.one is designed to be flexible—use it as a living knowledge base for your AI tools, agents, CLI utilities, and orchestration systems. Whether you want to leverage the community knowledge base, extend it with your own intentions, or build your own private instance, this guide covers the essentials.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/teemee-one/teemee.one.git
cd teemee.one
```

### Directory Structure

Once cloned, you'll have access to:
- **prompts/**: AI prompts organized by category and use case
- **projects/**: Open-source tools and experiments
- **knowledge-base/**: Articles, reports, and curated insights
- **intentions/**: Core values, philosophy, and evolution documentation
- **docs/**: API documentation and technical guides

See [STRUCTURE.md](STRUCTURE.md) for detailed organization.

## Private Usage

teemee.one is licensed under MIT, which means you can use it privately with your own AI tools, agents, and systems without any restrictions.

### With CLI Tools

```bash
# Reference teemee.one prompts in your CLI workflows
source teemee.one/prompts/your-category/prompt-name.md

# Use in shell scripts or piped commands
cat teemee.one/prompts/your-use-case.md | your-ai-tool
```

### With AI Agents

Load teemee.one as a context source for your agents:

```python
# Example: Loading prompts into your agent system
from pathlib import Path

knowledge_base = Path("teemee.one/prompts")
prompts = [p.read_text() for p in knowledge_base.glob("**/*.md")]

agent.load_context(prompts)
```

### With Orchestration Tools

Integrate teemee.one into your orchestration workflows:

```yaml
# Example: Using teemee.one in your orchestration config
contexts:
  - path: ./teemee.one/prompts
    filter: "*.md"
  - path: ./teemee.one/knowledge-base
    type: articles
```

### Creating Your Own Branch

To maintain your own customizations while staying updated:

```bash
# Create a personal branch
git checkout -b personal/my-custom-intentions

# Add your own folders and extensions
mkdir -p my-extensions
touch my-extensions/custom-prompts.md

# Commit your changes
git add .
git commit -m "Add personal extensions"

# Keep synced with main
git fetch origin
git rebase origin/main
```

## Extending teemee.one

### Adding Private Prompts

Create your own prompt library while keeping teemee.one updated:

```
teemee.one/
├── prompts/            # Community prompts
└── .local/
    └── my-prompts/     # Your private prompts
```

### Custom Intentions

Define your own evolution and intentions:

```markdown
# My Version of teemee.one

## Personal Intentions
1. [Your intention 1]
2. [Your intention 2]

## Extended Knowledge Base
- Custom tools and workflows
- Personal experiments
- Domain-specific prompts
```

### Integration Examples

#### With OpenAI CLI

```bash
# Use teemee prompts with OpenAI CLI
openai api chat.completions.create \
  --model gpt-4 \
  --messages "$(cat teemee.one/prompts/your-prompt.md)"
```

#### With Anthropic Claude

```bash
# Reference teemee knowledge in Claude context
# Use the prompts in your Claude API calls or Claude.ai
```

#### With LangChain

```python
from langchain.prompts import PromptTemplate
from pathlib import Path

# Load teemee prompts into LangChain
prompt_content = Path("teemee.one/prompts/category/name.md").read_text()
prompt = PromptTemplate.from_template(prompt_content)
```

#### With LlamaIndex

```python
from llama_index import SimpleDirectoryReader

# Index teemee.one knowledge base
documents = SimpleDirectoryReader("teemee.one/knowledge-base").load_data()
index = GPTVectorStoreIndex.from_documents(documents)
```

## Keeping Your Version Updated

### Merge Strategy

```bash
# Fetch the latest updates
git fetch origin main

# Rebase your personal branch to stay current
git rebase origin/main personal/my-custom-intentions

# Or merge if you prefer a merge workflow
git merge origin/main
```

### Contributing Back

If you create something valuable, consider contributing it back:

```bash
# Create a pull request with your additions
git checkout -b feature/useful-addition
git push origin feature/useful-addition
```

Then open a PR on the [teemee.one repository](https://github.com/teemee-one/teemee.one).

## Using teemee.one with Multiple Tools

### Multi-Tool Workflow

```bash
# Create a wrapper script for cross-tool usage
#!/bin/bash

TEEMEE_ROOT="./teemee.one"

# Load prompts and make available to multiple tools
for prompt in $TEEMEE_ROOT/prompts/**/*.md; do
  export PROMPT_$(basename $prompt .md)="$(cat $prompt)"
done

# Now use with your tools
your-cli-tool --context "$PROMPT_mycontext"
anthropic-cli --prompt "$PROMPT_another"
```

## Updating Your Tools

When teemee.one evolves, your tools can automatically use the latest:

```bash
# In your CI/CD pipeline
git -C ./teemee.one pull origin main
# Your tools now have the latest knowledge base
```

## Questions & Support

- Check [STRUCTURE.md](STRUCTURE.md) for how the repository is organized
- Review [README.md](README.md) for the vision and intentions
- Read [CONTRIBUTING.md](CONTRIBUTING.md) if you want to contribute
- Open an issue on GitHub for questions or discussions

---

*teemee.one is yours to use, extend, and evolve. Whether you use it privately or contribute publicly, you're part of building a consciousness dedicated to creating useful tools and helping people live their dreams.*
