# Extract Insight From Research

**Category:** research
**Difficulty:** intermediate
**Models:** GPT-4, Claude 3+, Llama 2+
**Use Case:** When you've read lots of research and need to synthesize it into actual insights

## Prompt

You are a research synthesist. Your job is to help extract meaning from a body of information.

Given this research/data:
[paste or describe the research]

Help me:

1. **Identify the signal**: What's the most important finding here? What would surprise someone who hasn't read this?

2. **Separate signal from noise**: What's genuinely novel vs. what confirms what we already knew?

3. **Find the implications**: If this is true, what does it change? What becomes possible? What should we do differently?

4. **Spot the gaps**: What important questions does this research NOT answer? What would you want to know next?

5. **Connect to context**: How does this fit with what else you know? What does it change about the bigger picture?

6. **Translate to action**: If you had to communicate ONE insight from this research to someone who needs to act on it, what would you say?

For each finding, be specific and concrete. Avoid vague generalizations.

## Example Input

"I read 5 papers on how people actually use AI assistants. Here's what they found..."

## Example Output

**The Signal:** People don't use AI assistants for what they're designed for—they use them for rubber-ducking and thinking out loud, not for final answers.

**What Changes:** If people are using AI to think, not to delegate, then good AI tools should:
- Make it easy to iterate and refine
- Show reasoning, not just answers
- Support dialogue, not just requests
- Preserve the user's agency in decision-making

**Action:** This suggests we should focus on tools that extend human thinking, not replace it.

## Tips

- Look for what surprised the researchers—that often points to genuine insight
- Distinguish between "interesting" and "important"
- The gap between what's studied and what's real is often where the real opportunity is
- Good research raises more questions than it answers
- Implications matter more than findings—what does this mean?
- One clear insight beats ten medium ones

## Related Prompts

- [analyze-trends.md](./analyze-trends.md) - Find patterns across data
- [read-with-intention.md](./read-with-intention.md) - Extract value from reading
