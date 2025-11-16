# teemee Prompt Loader

A simple, practical tool for loading and using teemee.one prompts in your workflows.

## What It Does

teemee-prompt-loader makes it easy to:
- Load teemee.one prompts into your Python scripts
- Search and filter prompts by category and metadata
- Use prompts directly with your AI APIs (OpenAI, Anthropic, etc.)
- Build prompt templates with variables
- Track which prompts you use and how they perform

## Why It Matters

teemee.one has value only if it's actually useful in your workflow. This tool removes friction:
- No need to manually copy-paste prompts
- Organize and version your prompt usage
- Test variations and track what works
- Share proven prompts with your team

## Installation

```bash
pip install teemee-prompt-loader
```

Or from source:

```bash
git clone https://github.com/teemee-one/teemee-prompt-loader.git
cd teemee-prompt-loader
pip install -e .
```

## Quick Start

```python
from teemee import TeemeeLoader

# Initialize with teemee.one repo
loader = TeemeeLoader(repo_path="./teemee.one")

# Load a specific prompt
prompt = loader.get_prompt("writing/clarify-your-core-values")

# Use with OpenAI
from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": prompt.content},
        {"role": "user", "content": "Help me understand my values"}
    ]
)
```

## Features

### Load Prompts
```python
# By exact path
prompt = loader.get_prompt("coding/debug-with-clarity")

# Search by keyword
prompts = loader.search("brainstorm")

# Filter by category
prompts = loader.by_category("writing")

# With metadata
prompts = loader.by_difficulty("intermediate")
```

### Create Templates
```python
# Prompts can have variables
template = loader.get_prompt("analysis/analyze-data-for-meaning")
filled = template.fill(data=my_data, context="user behavior")
```

### Track Usage
```python
# Log when you use a prompt
loader.log_usage(
    prompt_id="analysis/analyze-data-for-meaning",
    model="gpt-4",
    success=True,
    notes="Found unexpected user behavior pattern"
)

# Review your history
history = loader.get_usage_history()
```

## Use Cases

### In Scripts
```python
# Use teemee prompts in your data analysis workflow
from teemee import TeemeeLoader

loader = TeemeeLoader()
prompt = loader.get_prompt("analysis/analyze-data-for-meaning")

# Now use this prompt to analyze your data
```

### In Notebooks
```python
# Jupyter notebooks with teemee prompts
from teemee import TeemeeLoader
from IPython.display import Markdown

loader = TeemeeLoader()
prompt = loader.get_prompt("creativity/brainstorm-with-divergence-first")
display(Markdown(prompt.content))
```

### In Teams
```python
# Share proven prompts with your team
team_loader = TeemeeLoader(repo_path="./shared-teemee")

# Everyone can access the same prompts, versions, and results
best_prompts = team_loader.top_prompts(limit=10)
```

## Documentation

See `/docs` for:
- [API Reference](./docs/api.md)
- [Integration Guides](./docs/integrations.md)
- [Examples](./docs/examples.md)

## Contributing

This is a small tool designed to solve a real problem: making teemee.one prompts actually useful in workflows.

Found a bug? Have an idea? Open an issue or submit a pull request.

## License

MIT License - Use freely, modify as needed, share if helpful.

---

*This tool exists to make teemee.one useful. The real value is in the prompts and the intentions behind them.*
