# API Reference

## TeemeeLoader

The main class for working with teemee.one prompts.

### Initialization

```python
loader = TeemeeLoader(repo_path="./teemee.one")
```

**Parameters:**
- `repo_path` (str): Path to teemee.one repository. Defaults to `./teemee.one`.

### Methods

#### `get_prompt(prompt_id: str) -> Prompt`

Load a specific prompt.

```python
prompt = loader.get_prompt("writing/clarify-your-core-values")
```

**Returns:** `Prompt` object with content and metadata
**Raises:** `FileNotFoundError` if prompt doesn't exist

#### `search(keyword: str) -> List[Prompt]`

Search for prompts matching a keyword.

```python
prompts = loader.search("brainstorm")
```

#### `by_category(category: str) -> List[Prompt]`

Get all prompts in a category.

```python
writing_prompts = loader.by_category("writing")
coding_prompts = loader.by_category("coding")
```

#### `by_difficulty(difficulty: str) -> List[Prompt]`

Get all prompts of a specific difficulty.

```python
beginner = loader.by_difficulty("beginner")
advanced = loader.by_difficulty("advanced")
```

#### `log_usage(prompt_id: str, model: str, success: bool, notes: str = "")`

Log when a prompt is used.

```python
loader.log_usage(
    prompt_id="analysis/analyze-data-for-meaning",
    model="gpt-4",
    success=True,
    notes="Found unexpected pattern in user data"
)
```

#### `get_usage_history() -> List[Dict]`

Get the usage log.

```python
history = loader.get_usage_history()
```

## Prompt

Represents a single teemee.one prompt.

### Properties

- `path` (str): The prompt ID (e.g., "writing/clarify-your-core-values")
- `content` (str): The full prompt text
- `metadata` (Dict): Extracted metadata (category, difficulty, models, etc.)

### Methods

#### `fill(**variables) -> str`

Fill template variables in the prompt.

```python
filled = prompt.fill(topic="my business idea")
```

---

*This is a minimal implementation designed to demonstrate how teemee.one can be integrated into workflows. Extend it for your needs.*
