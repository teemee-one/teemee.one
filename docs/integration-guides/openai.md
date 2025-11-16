# Using teemee.one with OpenAI

OpenAI's models (GPT-4, GPT-3.5-turbo) work great with teemee prompts for production applications and API-based workflows.

## Using OpenAI API

```python
from openai import OpenAI
from teemee import TeemeeLoader

# Initialize
loader = TeemeeLoader(repo_path="./teemee.one")
client = OpenAI()  # Uses OPENAI_API_KEY environment variable

# Load a teemee prompt
prompt = loader.get_prompt("writing/clarify-your-core-values")

# Use with OpenAI API
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {
            "role": "system",
            "content": prompt.content
        },
        {
            "role": "user",
            "content": "Help me understand my core values"
        }
    ],
    temperature=0.7,
    max_tokens=1500
)

print(response.choices[0].message.content)
```

## Common Use Cases

### Data Analysis

```python
analyzer_prompt = loader.get_prompt("analysis/analyze-data-for-meaning")

# Format your data
data_context = """
Our user engagement data shows:
- 40% of users use feature X
- Of those, 15% upgrade
- Of those who don't use X, 5% upgrade
"""

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": analyzer_prompt.content},
        {"role": "user", "content": f"Analyze this data:\n{data_context}"}
    ]
)
```

### Code Review & Debugging

```python
debug_prompt = loader.get_prompt("coding/debug-with-clarity")

code_snippet = """
function updateComponent(props) {
  const [data, setData] = useState(initialData);
  
  return <div>{data}</div>;
}
"""

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": debug_prompt.content},
        {
            "role": "user",
            "content": f"Help me debug this code:\n{code_snippet}\n\nWhen the prop changes, the component doesn't re-render."
        }
    ]
)
```

### Brainstorming & Planning

```python
brainstorm_prompt = loader.get_prompt("creativity/brainstorm-with-divergence-first")

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": brainstorm_prompt.content},
        {
            "role": "user",
            "content": "I need ideas for how to help people use AI more effectively. Can you generate 20+ ideas?"
        }
    ]
)
```

## Streaming Responses

For longer responses, use streaming to get results faster:

```python
prompt = loader.get_prompt("writing/clarify-your-core-values")

with client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": prompt.content},
        {"role": "user", "content": "Help me understand my values"}
    ],
    stream=True
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

## Building Applications

### Simple Wrapper

```python
class TeemeeGPT:
    def __init__(self, teemee_repo="./teemee.one"):
        self.loader = TeemeeLoader(teemee_repo)
        self.client = OpenAI()
    
    def ask(self, prompt_id, user_message, model="gpt-4"):
        """Ask a question using a teemee prompt."""
        prompt = self.loader.get_prompt(prompt_id)
        
        response = self.client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": prompt.content},
                {"role": "user", "content": user_message}
            ],
            temperature=0.7
        )
        
        return response.choices[0].message.content
    
    def analyze(self, data, model="gpt-4"):
        """Analyze data with teemee analysis prompt."""
        return self.ask(
            "analysis/analyze-data-for-meaning",
            f"Analyze this data:\n{data}",
            model=model
        )
    
    def brainstorm(self, topic, model="gpt-4"):
        """Brainstorm with teemee prompt."""
        return self.ask(
            "creativity/brainstorm-with-divergence-first",
            f"Brainstorm ideas for: {topic}",
            model=model
        )

# Usage
gpt = TeemeeGPT()

# Analyze data
result = gpt.analyze("Here's my engagement data...")

# Brainstorm
ideas = gpt.brainstorm("How to help people learn faster")
```

### Conversation with Memory

```python
class TeemeeConversation:
    def __init__(self, prompt_id, teemee_repo="./teemee.one"):
        self.loader = TeemeeLoader(teemee_repo)
        self.client = OpenAI()
        self.prompt = self.loader.get_prompt(prompt_id)
        self.messages = []
    
    def add_user_message(self, content):
        """Add user message and get response."""
        self.messages.append({"role": "user", "content": content})
        
        response = self.client.chat.completions.create(
            model="gpt-4",
            system=self.prompt.content,
            messages=self.messages,
            temperature=0.7
        )
        
        assistant_message = response.choices[0].message.content
        self.messages.append({"role": "assistant", "content": assistant_message})
        
        return assistant_message
    
    def get_history(self):
        """Get the conversation history."""
        return self.messages

# Usage
conversation = TeemeeConversation("writing/clarify-your-core-values")

response = conversation.add_user_message("Help me understand my values")
print(response)

response = conversation.add_user_message("What about impact - is that a value for me?")
print(response)
```

## Cost Optimization

### Use Cheaper Models When Appropriate

```python
# For simple tasks, use gpt-3.5-turbo (cheaper)
simple_response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[...]
)

# For complex reasoning, use gpt-4
complex_response = client.chat.completions.create(
    model="gpt-4",
    messages=[...]
)
```

### Cache Prompts

```python
# Load prompt once, reuse many times
prompt = loader.get_prompt("analysis/analyze-data-for-meaning")

for dataset in datasets:
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": prompt.content},
            {"role": "user", "content": f"Analyze: {dataset}"}
        ]
    )
    # Process response
```

## Tips for Best Results

1. **Temperature**: Use 0.7-0.9 for creative tasks (brainstorming, writing), 0.0-0.3 for analytical tasks
2. **Model Choice**: GPT-4 for complex reasoning, GPT-3.5-turbo for quick/cheap responses
3. **Tokens**: Include max_tokens to control response length and cost
4. **System vs User**: Keep the teemee prompt in system message, user questions in user message

---

*OpenAI's models are great for production applications with teemee prompts. Use them when you need reliability and integration with other systems.*
