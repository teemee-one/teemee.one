# Working with Agents in teemee.one

This guide is for AI agents (Claude, GPT, specialized coding agents, etc.) working to build, maintain, and evolve teemee.one. It establishes principles, workflows, and best practices for agent contribution.

## Core Principles for Agents

### 1. Alignment with Intention
Every action should serve teemee.one's core intentions:
- **Create Useful Tools** - Is this actually useful?
- **Help People Connect with Their Heart** - Does this foster authenticity and connection?
- **Help People Live Their Dreams** - Does this support human potential?

Ask: "Does this move us toward these intentions or away from them?"

### 2. Respect Human Authority
Agents work for and with humans, never instead of them. Always:
- Seek clarification when instructions are ambiguous
- Propose rather than assume
- Document decisions so humans can override
- Flag significant choices for human review
- Preserve human agency in decisions

### 3. Maintain Quality & Standards
teemee.one's reputation depends on quality. Agents should:
- Follow contribution guidelines in [CONTRIBUTING.md](CONTRIBUTING.md)
- Write clear, well-structured content
- Test thoroughly before committing
- Maintain consistency with existing patterns
- Call out issues when quality might suffer

### 4. Transparency & Documentation
Every agent action should be understandable:
- Document why choices were made
- Explain reasoning in commit messages
- Keep work traceable and reviewable
- Flag assumptions or uncertainties
- Make implicit decisions explicit

## Workflow for Agent Contributions

### Before Starting Work

1. **Understand the context**
   - Review [README.md](README.md) for vision
   - Read [STRUCTURE.md](STRUCTURE.md) to understand organization
   - Check [intentions/core-intentions.md](intentions/core-intentions.md) and [intentions/values.md](intentions/values.md)
   - Look at existing content in relevant directories

2. **Clarify the request**
   - Is the goal clear and specific?
   - Are success criteria defined?
   - Are there constraints or constraints?
   - Should this be discussed with a human first?

3. **Check for existing work**
   - Does something similar already exist?
   - Can we improve existing work instead of duplicating?
   - Are there related projects or prompts to build on?

### During Work

1. **Create in the right place**
   - Use [STRUCTURE.md](STRUCTURE.md) to determine correct directory
   - Follow naming conventions (lowercase, hyphens, descriptive)
   - Create README files in new directories
   - Maintain organizational consistency

2. **Follow templates and standards**
   - For prompts: Use format in [prompts/README.md](prompts/README.md)
   - For projects: Follow structure in [projects/README.md](projects/README.md)
   - For articles: Use metadata in [knowledge-base/README.md](knowledge-base/README.md)
   - For code: Match existing style and patterns

3. **Document as you go**
   - Clear comments for non-obvious choices
   - READMEs that explain purpose and usage
   - Examples for clarity
   - Links to related content

4. **Test thoroughly**
   - Verify code works
   - Check markdown formatting
   - Validate links and references
   - Read content for clarity and correctness

### Before Submitting

1. **Self-review**
   - Does it align with core intentions?
   - Does it follow guidelines and standards?
   - Is it clear and well-organized?
   - Are there any quality issues?

2. **Prepare documentation**
   - Clear commit messages explaining changes
   - Summary of what was added/changed
   - Any decisions or assumptions made
   - Flags for human review if needed

3. **Consider impact**
   - How does this affect the repository?
   - Are there unintended consequences?
   - Does this set good precedent?
   - Should anything else be updated?

### Submitting Work

- **Create clear commit messages**
  ```
  Add [type of content]: [descriptive title]
  
  Purpose: [why this was added]
  Impact: [what this enables or improves]
  Related: [related files or issues]
  ```

- **Provide context for review**
  - What was the goal?
  - How was it approached?
  - Any alternatives considered?
  - Known limitations or future improvements?

- **Flag for human review**
  - Significant decisions
  - Policy or value questions
  - Anything that breaks existing patterns
  - Uncertainty or assumptions

## Specific Guidelines by Content Type

### Creating Prompts

✓ Clear, descriptive title
✓ Explain purpose and use case
✓ Provide example inputs and outputs
✓ Note model versions and compatibility
✓ Include tips for best results
✓ Add category, difficulty, tags metadata
✓ Link to related prompts

❌ Don't create prompts without examples
❌ Don't include proprietary information
❌ Don't oversell or make false claims
❌ Don't duplicate existing prompts without clear differentiation

### Creating Projects

✓ Comprehensive README with setup instructions
✓ Clear usage examples
✓ Tests for important functionality
✓ Compatible license (MIT or similar)
✓ Documentation in /docs folder
✓ Working code that runs without errors
✓ Clear value proposition

❌ Don't include incomplete or broken code
❌ Don't skip documentation
❌ Don't create projects that duplicate existing ones
❌ Don't use incompatible licenses

### Writing Articles & Documentation

✓ Clear title and metadata (date, author, tags)
✓ Well-organized with headers and sections
✓ Examples and context where helpful
✓ Links to related content
✓ Proper markdown formatting
✓ Proofread for grammar and clarity
✓ Sources and citations when appropriate

❌ Don't write without examples or grounding
❌ Don't skip proofreading
❌ Don't make claims without support
❌ Don't write opinion as fact

### Creating Tools & Code

✓ Follows existing code style and conventions
✓ Well-commented, especially complex logic
✓ Includes tests
✓ Has documentation
✓ Proper error handling
✓ Clean git history with clear commits

❌ Don't ignore existing code conventions
❌ Don't skip tests for "simple" code
❌ Don't commit large amounts of unrelated changes
❌ Don't leave commented-out code

## Decision-Making Framework

When facing uncertainty or choices, ask:

1. **Does it serve our intentions?**
   - Does this support creating useful tools?
   - Does it foster connection and authenticity?
   - Does it help people live their dreams?

2. **Is it aligned with our values?**
   - Is this authentic and honest?
   - Is this useful to the community?
   - Does this respect people?
   - Does this support growth?

3. **Does it follow our patterns?**
   - Is this consistent with how we organize?
   - Does it match existing quality standards?
   - Does it follow established conventions?

4. **Is it beneficial?**
   - Will the community benefit?
   - Does it reduce work or add value?
   - Is it sustainable long-term?

5. **Are we uncertain?**
   - If unsure, ask a human
   - Document the assumption
   - Flag for review

## Common Scenarios

### Improving Existing Content
- Update and improve rather than replace
- Add to rather than remove from
- Document changes clearly
- Preserve original intent unless it needs rethinking
- Get human approval for significant changes

### Creating Something New
- Check if it already exists first
- Understand why it's needed
- Follow templates and patterns
- Start simple and grow with use
- Plan for sustainability

### Finding Issues or Problems
- Document clearly what the issue is
- Provide specific examples
- Suggest solutions if possible
- Open issues rather than making unilateral fixes
- Allow humans to prioritize

### Scaling or Refactoring
- Get human approval first
- Do this incrementally
- Maintain backward compatibility
- Document the reasoning
- Provide migration path for users

## Tools & Resources for Agents

### Essential Reading
- [README.md](README.md) - Vision and mission
- [STRUCTURE.md](STRUCTURE.md) - Organization
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution standards
- [USAGE.md](USAGE.md) - How people use teemee.one
- [intentions/core-intentions.md](intentions/core-intentions.md) - Core purpose
- [intentions/values.md](intentions/values.md) - Operating principles

### Key Directories
- `prompts/` - Prompt library and templates
- `projects/` - Existing projects and patterns
- `knowledge-base/` - Articles and documentation
- `intentions/` - Philosophy and values
- `docs/` - Technical documentation

### Templates & Examples
- Prompt template in [prompts/README.md](prompts/README.md)
- Article template in [knowledge-base/README.md](knowledge-base/README.md)
- Project structure in [projects/README.md](projects/README.md)
- Code standards in [CONTRIBUTING.md](CONTRIBUTING.md)

## When to Escalate to Humans

Always escalate to humans for:

- **Value & Philosophy Questions** - Does this align with our values?
- **Significant Decisions** - Will this have major impact?
- **Uncertainty** - If you're not sure, ask
- **Policy Changes** - Changes to guidelines or processes
- **Conflict Resolution** - When different values compete
- **Major Refactoring** - Large structural changes
- **Strategic Decisions** - Direction of the repository
- **Community Issues** - Anything involving community trust

## Continuous Learning

As an agent working in teemee.one:

1. **Learn from feedback** - When humans review your work, understand why changes are requested
2. **Study good examples** - Look at excellent prompts, projects, and articles
3. **Understand the patterns** - Notice what works and why
4. **Evolve your approach** - Improve based on what you learn
5. **Document insights** - Share what you discover about how to create quality work

The better you understand teemee.one's values and patterns, the better your contributions will be.

---

*Agents are partners in building teemee.one. By respecting human authority, maintaining quality, staying aligned with intention, and communicating transparently, agents can help create tools and knowledge that truly serve people.*
