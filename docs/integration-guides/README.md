# Integration Guides

How to use teemee.one with your favorite AI tools and workflows.

## Available Guides

- **[Claude (Anthropic)](./claude.md)** - Using teemee prompts with Claude API and Claude.ai
- **[OpenAI](./openai.md)** - GPT-4, GPT-3.5, and other OpenAI models
- **[LangChain](./langchain.md)** - Building applications with LangChain + teemee prompts
- **[LlamaIndex](./llamaindex.md)** - Creating AI-powered document retrieval systems
- **[CLI Tools](./cli-tools.md)** - Using teemee in command-line workflows

## Quick Start

Choose your tool:

### If you use Claude
```markdown
[Paste the teemee prompt from the library]

Now help me with: [your specific request]
```

### If you use OpenAI API
```python
from openai import OpenAI
from teemee import TeemeeLoader

loader = TeemeeLoader()
prompt = loader.get_prompt("writing/clarify-your-core-values")

client = OpenAI()
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": prompt.content},
        {"role": "user", "content": "Help me clarify what I value"}
    ]
)
```

### If you use Python scripts
```bash
# Clone teemee.one
git clone https://github.com/teemee-one/teemee.one.git

# Install loader
pip install teemee-prompt-loader

# Use in your code
```

---

Start with the guide for your primary tool, then explore others as needed.
