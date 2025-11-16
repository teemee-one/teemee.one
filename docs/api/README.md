# API Documentation

Technical documentation for working with teemee.one programmatically.

## Available Documentation

### Core Libraries

- **[teemee-prompt-loader](../../projects/teemee-prompt-loader/)** - Python library for loading and using teemee prompts
  - Load prompts from the repository
  - Search and filter
  - Integrate with AI APIs
  - Track usage

### Integration Guides

See [integration-guides/](./integration-guides/) for detailed integration instructions:

- **Claude** - Using with Anthropic's Claude API and Claude.ai
- **OpenAI** - GPT-4, GPT-3.5, and other OpenAI models
- **LangChain** - Building LLM applications
- **LlamaIndex** - Document retrieval and RAG systems
- **CLI Tools** - Command-line integration

## Quick Reference

### Load a Prompt (Python)

```python
from teemee import TeemeeLoader

loader = TeemeeLoader(repo_path="./teemee.one")
prompt = loader.get_prompt("writing/clarify-your-core-values")
print(prompt.content)
```

### Use with Claude

```python
import anthropic

client = anthropic.Anthropic()
message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    system=prompt.content,
    messages=[{"role": "user", "content": "Your question"}]
)
```

### Use with OpenAI

```python
from openai import OpenAI

client = OpenAI()
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": prompt.content},
        {"role": "user", "content": "Your question"}
    ]
)
```

## Prompt Format

All teemee.one prompts follow this structure:

```markdown
# Prompt Title

**Category:** [category]
**Difficulty:** [beginner/intermediate/advanced]
**Models:** [GPT-4, Claude 3, etc.]
**Use Case:** [When and why to use this]

## Prompt

[The actual prompt text]

## Example Input

[Sample input]

## Example Output

[Expected output]

## Tips

[Specific tips for best results]

## Related Prompts

[Links to related prompts]
```

This structure makes prompts:
- Easy to understand
- Compatible with different systems
- Consistent across the library
- Self-documenting

## Repository Structure

```
teemee.one/
├── prompts/              # AI prompts library
├── projects/             # Open-source tools
├── knowledge-base/       # Articles and documentation
├── intentions/           # Philosophy and values
├── docs/                 # Technical docs
│   ├── api/             # This directory
│   └── integration-guides/
└── [configuration files]
```

## Common Tasks

### Find a Prompt by Category

```python
writing_prompts = loader.by_category("writing")
for prompt in writing_prompts:
    print(f"- {prompt.path}")
```

### Search Prompts

```python
results = loader.search("brainstorm")
for result in results:
    print(f"- {result.path}")
```

### Use with Custom Variables

```python
prompt = loader.get_prompt("analysis/analyze-data-for-meaning")
filled = prompt.fill(data="[your data here]", context="user behavior")
```

### Track Usage

```python
loader.log_usage(
    prompt_id="writing/clarify-your-core-values",
    model="gpt-4",
    success=True,
    notes="Helped clarify personal values"
)
```

## Building Applications

### Simple CLI Tool

```python
#!/usr/bin/env python3
import sys
from teemee import TeemeeLoader

loader = TeemeeLoader()
prompt_id = sys.argv[1] if len(sys.argv) > 1 else "writing/clarify-your-core-values"

try:
    prompt = loader.get_prompt(prompt_id)
    print(prompt.content)
except FileNotFoundError:
    print(f"Prompt not found: {prompt_id}")
    print("\nAvailable prompts:")
    for category in ["writing", "coding", "creativity", "research", "analysis"]:
        prompts = loader.by_category(category)
        for p in prompts:
            print(f"  - {p.path}")
```

### Web Application

```python
from flask import Flask, jsonify
from teemee import TeemeeLoader

app = Flask(__name__)
loader = TeemeeLoader()

@app.route('/api/prompts/<category>')
def get_prompts(category):
    prompts = loader.by_category(category)
    return jsonify([{
        "id": p.path,
        "title": p.metadata.get("title", ""),
        "metadata": p.metadata
    } for p in prompts])

@app.route('/api/prompts/<path:prompt_id>')
def get_prompt(prompt_id):
    try:
        prompt = loader.get_prompt(prompt_id)
        return jsonify({
            "id": prompt.path,
            "content": prompt.content,
            "metadata": prompt.metadata
        })
    except FileNotFoundError:
        return {"error": "Not found"}, 404
```

## Best Practices

1. **Cache prompts** - Load once, use many times
2. **Handle errors** - Prompt might not exist
3. **Use metadata** - Filter by difficulty, model compatibility
4. **Log usage** - Understand what works
5. **Respect rate limits** - When using APIs
6. **Provide feedback** - Contribute improvements

## Support & Community

- **Questions?** Open an issue on GitHub
- **Have ideas?** Check [CONTRIBUTING.md](../../CONTRIBUTING.md)
- **Want to contribute?** See [AGENTS.md](../../AGENTS.md) for guidelines
- **Join the community** - Discussions, feedback, collaboration

---

*These APIs are designed to be simple and intuitive. If something isn't clear, that's a bug—please let us know.*
