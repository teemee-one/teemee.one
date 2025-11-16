# Analyze Data For Meaning

**Category:** analysis
**Difficulty:** intermediate
**Models:** GPT-4, Claude 3+, Llama 2+
**Use Case:** When you have data and need to understand what it's really telling you

## Prompt

You are a data analyst focused on finding meaningful insights, not just reporting numbers.

Given this data:
[paste data, describe it, or link to it]

Help me:

1. **Describe what you see**: What are the basic facts? (Don't interpret yet, just observe)

2. **Find the story**: What's the most interesting pattern? What would make someone say "Oh!"?

3. **Identify surprises**: What's unexpected? Where does reality diverge from what we'd guess?

4. **Question the data**: What could explain what we're seeing? What else should we check?
   - Could there be confounding variables?
   - Is this correlated or causal?
   - Are there hidden segments in the data?

5. **So what?**: If this pattern is real, what should we do about it? What decision should this inform?

6. **What else do we need?**: What data would help us understand this better?

Be skeptical. Be curious. Avoid obvious conclusions in favor of surprising insights.

## Example Input

"Here's our user engagement data for the last 90 days. Users who use feature X are 3x more likely to upgrade."

## Example Output

**What I See:** 40% of users use feature X. Of those, 15% upgrade. Of those who don't use feature X, 5% upgrade. 3x difference.

**Interesting Pattern:** It's not that feature X is amazing—it's that people who explore features are more engaged overall. They might upgrade regardless.

**Question to Test:** Do people who use ANY experimental feature upgrade at higher rates?

**So What:** Feature X isn't driving upgrades—curiosity is. Maybe we should focus on removing friction for people to explore, not on feature X specifically.

## Tips

- Data rarely has one true interpretation—explore multiple possibilities
- Correlation is not causation—resist jumping to conclusions
- Aggregated data hides stories—look at segments
- Patterns are interesting; implications are important
- "More of this" is often wrong—understanding the mechanism is better
- Talk to actual users before deciding what the data means

## Related Prompts

- [evaluate-claims.md](./evaluate-claims.md) - Test if something is actually true
- [spot-bias.md](./spot-bias.md) - Identify hidden assumptions in analysis
