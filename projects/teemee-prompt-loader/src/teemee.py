"""
teemee Prompt Loader - Load and use teemee.one prompts in your workflows
"""

import os
import json
from pathlib import Path
from typing import List, Dict, Optional


class Prompt:
    """A teemee.one prompt with metadata and content."""
    
    def __init__(self, path: str, content: str, metadata: Dict):
        self.path = path
        self.content = content
        self.metadata = metadata
    
    def fill(self, **variables) -> str:
        """Fill template variables in the prompt."""
        result = self.content
        for key, value in variables.items():
            result = result.replace(f"[{key}]", str(value))
        return result
    
    def __str__(self):
        return f"Prompt: {self.path}\n{self.content[:200]}..."


class TeemeeLoader:
    """Load and manage teemee.one prompts."""
    
    def __init__(self, repo_path: str = "./teemee.one"):
        self.repo_path = Path(repo_path)
        self.prompts_path = self.repo_path / "prompts"
        self.usage_log = []
    
    def get_prompt(self, prompt_id: str) -> Optional[Prompt]:
        """Load a specific prompt by ID (e.g., 'writing/clarify-your-core-values')."""
        prompt_file = self.prompts_path / f"{prompt_id}.md"
        
        if not prompt_file.exists():
            raise FileNotFoundError(f"Prompt not found: {prompt_id}")
        
        content = prompt_file.read_text()
        metadata = self._extract_metadata(content)
        
        return Prompt(prompt_id, content, metadata)
    
    def search(self, keyword: str) -> List[Prompt]:
        """Search for prompts by keyword."""
        results = []
        
        for prompt_file in self.prompts_path.rglob("*.md"):
            if prompt_file.name == "README.md":
                continue
            
            content = prompt_file.read_text()
            if keyword.lower() in content.lower():
                prompt_id = self._get_prompt_id(prompt_file)
                metadata = self._extract_metadata(content)
                results.append(Prompt(prompt_id, content, metadata))
        
        return results
    
    def by_category(self, category: str) -> List[Prompt]:
        """Get all prompts in a category."""
        category_path = self.prompts_path / category
        results = []
        
        if not category_path.exists():
            return results
        
        for prompt_file in category_path.glob("*.md"):
            if prompt_file.name == "README.md":
                continue
            
            content = prompt_file.read_text()
            prompt_id = self._get_prompt_id(prompt_file)
            metadata = self._extract_metadata(content)
            results.append(Prompt(prompt_id, content, metadata))
        
        return results
    
    def by_difficulty(self, difficulty: str) -> List[Prompt]:
        """Get all prompts of a specific difficulty level."""
        results = []
        
        for prompt_file in self.prompts_path.rglob("*.md"):
            if prompt_file.name == "README.md":
                continue
            
            content = prompt_file.read_text()
            metadata = self._extract_metadata(content)
            
            if metadata.get("difficulty", "").lower() == difficulty.lower():
                prompt_id = self._get_prompt_id(prompt_file)
                results.append(Prompt(prompt_id, content, metadata))
        
        return results
    
    def log_usage(self, prompt_id: str, model: str, success: bool, notes: str = ""):
        """Log when a prompt is used."""
        import datetime
        
        self.usage_log.append({
            "timestamp": datetime.datetime.now().isoformat(),
            "prompt_id": prompt_id,
            "model": model,
            "success": success,
            "notes": notes
        })
    
    def get_usage_history(self) -> List[Dict]:
        """Get the usage log."""
        return self.usage_log
    
    # Private helpers
    
    def _extract_metadata(self, content: str) -> Dict:
        """Extract metadata from prompt frontmatter."""
        metadata = {}
        lines = content.split('\n')
        
        for line in lines[:20]:  # Check first 20 lines
            if ':' in line and not line.startswith('#'):
                key, value = line.split(':', 1)
                metadata[key.strip().lower()] = value.strip()
        
        return metadata
    
    def _get_prompt_id(self, file_path: Path) -> str:
        """Convert file path to prompt ID."""
        relative = file_path.relative_to(self.prompts_path)
        return str(relative).replace('\\', '/').replace('.md', '')


if __name__ == "__main__":
    # Example usage
    loader = TeemeeLoader()
    
    # Load a prompt
    try:
        prompt = loader.get_prompt("writing/clarify-your-core-values")
        print(f"Loaded: {prompt.path}")
        print(f"Metadata: {prompt.metadata}")
    except FileNotFoundError as e:
        print(f"Error: {e}")
    
    # Search for prompts
    results = loader.search("brainstorm")
    print(f"\nFound {len(results)} prompts matching 'brainstorm'")
    
    # List by category
    writing_prompts = loader.by_category("writing")
    print(f"\nFound {len(writing_prompts)} writing prompts")
