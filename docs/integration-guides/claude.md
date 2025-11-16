# Using teemee.one with Claude

Claude (by Anthropic) is excellent for working with teemee.one prompts because of its strong reasoning and ability to engage in nuanced conversation.

## In Claude.ai (Web Interface)

The easiest way to use teemee prompts with Claude:

1. **Open [Claude.ai](https://claude.ai)**
2. **Copy a teemee prompt** from the `/prompts` directory
3. **Paste it in the message** as your system context
4. **Ask your question** in the same message or a follow-up

Example:

```
[Paste the full "clarify-your-core-values" prompt here]

Now help me understand my core values by asking me the questions in this prompt.
```

Claude will read the prompt and use it as guidance for the conversation.

## Using Claude API

If you're building an application with Claude:

```python
import anthropic
from teemee import TeemeeLoader

loader = TeemeeLoader(repo_path="./teemee.one")
prompt = loader.get_prompt("writing/clarify-your-core-values")

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    system=prompt.content,  # Use teemee prompt as system message
    messages=[
        {"role": "user", "content": "Help me clarify my values"}
    ]
)

print(message.content[0].text)
```

## Best Practices with Claude

### 1. Use as System Guidance

Claude works best when the prompt defines the *approach* rather than the *answer*:

✓ **Good:** "You are a thoughtful coach helping someone clarify their values. Ask questions that reveal their priorities..."

❌ **Bad:** "Generate 5 values for this person: [traits]"

### 2. Iterate in Conversation

Claude supports extended conversations. Start with a teemee prompt, then:

```python
messages = [
    {"role": "user", "content": "Help me understand my values"},
    {"role": "assistant", "content": "[Claude's response]"},
    {"role": "user", "content": "That's helpful. Now how do I live these values more?"},
    # Continue iterating...
]
```

### 3. Combine Multiple Prompts

Layer different teemee prompts for complex tasks:

```python
# First: clarify values
value_prompt = loader.get_prompt("writing/clarify-your-core-values")

# Then: brainstorm how to live them
action_prompt = loader.get_prompt("creativity/brainstorm-with-divergence-first")

# Combine in conversation
```

## Common Use Cases

### Personal Reflection

```
[Use: "clarify-your-core-values" prompt]

I'm feeling uncertain about my career direction. Can you help me understand what I'm really looking for?
```

### Decision Making

```
[Use: "brainstorm-with-divergence-first" prompt]

I need to decide between two job offers. Can you help me explore options?
```

### Understanding Data

```
[Use: "analyze-data-for-meaning" prompt]

Here's data from my user research:
[paste data]

What's the signal here?
```

### Learning & Problem Solving

```
[Use: "debug-with-clarity" prompt]

My code isn't working as expected. Help me think through what's happening.
[paste code]
```

## Tips for Best Results

1. **Be specific** - The better your context, the better Claude's response
2. **Ask follow-ups** - Refine the conversation, don't just take the first answer
3. **Reference the prompt** - Say "based on the prompt you just read" to reinforce guidance
4. **Iterate** - Use Claude's response to go deeper
5. **Combine prompts** - Layer different approaches for complex problems

## Extending Claude Conversations

Claude can remember context across a conversation. This is powerful:

```
User: [Paste brainstorming prompt]
       Now help me brainstorm 20 ideas for how to help people use AI better.

Claude: [Generates 20 ideas]

User: Now let's evaluate these. Which ones do you think have the most potential?

Claude: [Evaluates ideas]

User: Let's develop the top 3. What would each look like?

Claude: [Develops each concept]

User: Which one should I build first?

Claude: [Analysis with reasoning]
```

The conversation stays coherent and builds on itself.

## Building Applications

For Python applications using Claude API:

```python
from teemee import TeemeeLoader
import anthropic

class TeemeeCoach:
    def __init__(self, teemee_repo="./teemee.one"):
        self.loader = TeemeeLoader(teemee_repo)
        self.client = anthropic.Anthropic()
        self.messages = []
    
    def start_session(self, prompt_id, user_message):
        """Start a guided session with a teemee prompt."""
        prompt = self.loader.get_prompt(prompt_id)
        
        self.messages = [
            {"role": "user", "content": user_message}
        ]
        
        response = self.client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=2048,
            system=prompt.content,
            messages=self.messages
        )
        
        assistant_message = response.content[0].text
        self.messages.append({"role": "assistant", "content": assistant_message})
        
        return assistant_message
    
    def continue_conversation(self, user_message):
        """Continue the guided conversation."""
        self.messages.append({"role": "user", "content": user_message})
        
        # Get the original prompt for continuity
        # (In a real app, you'd store this)
        response = self.client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=2048,
            messages=self.messages
        )
        
        assistant_message = response.content[0].text
        self.messages.append({"role": "assistant", "content": assistant_message})
        
        return assistant_message

# Usage
coach = TeemeeCoach()

# Start clarifying values
response = coach.start_session(
    "writing/clarify-your-core-values",
    "I need help understanding what I really value"
)
print(response)

# Continue the conversation
response = coach.continue_conversation("Yes, that resonates. What else am I missing?")
print(response)
```

---

*Claude is great for thoughtful, iterative work with teemee prompts. Use it for exploration, decision-making, and learning.*
