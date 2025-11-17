# CRM & Database Strategy for teemee.one

Complete guide to managing relationships, tracking interactions, and collaborating with humans, AI agents, and community contributors through a private Supabase database.

---

## 🎯 Core Principles

1. **Single Source of Truth** - All interactions, leads, customers, and collaborators tracked in one place
2. **Privacy First** - Data owned by teemee.one, GDPR/privacy compliant, encrypted sensitive fields
3. **Flexible Relationships** - Humans, AI agents, contributors all tracked with different attributes
4. **History & Context** - Every interaction logged for continuity and learning
5. **Actionable Intelligence** - Data structures support business decisions and personalization
6. **Minimal but Complete** - Track what matters, avoid bloat

---

## 📊 Part 1: Database Architecture Overview

### Supabase Setup (15 minutes)

```bash
# Create free Supabase project
# 1. Go to supabase.com
# 2. Sign up / Create new project
# 3. Get connection string and API key
# 4. Store in .env.local (NEVER commit)

SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=eyJxxxx (anon key for client-side)
SUPABASE_SERVICE_ROLE_KEY=xxxxx (for server-side, KEEP SECRET)
```

### Core Tables Overview

```
teemee_crm
├── users                          # Everyone: humans, AI agents, contributors
├── interaction_history            # Every message, action, conversation
├── lead_scoring                   # Engagement metrics for marketing
├── user_preferences               # How they want to be contacted
├── contributed_tools              # Tools/resources they've created
├── requests_and_opportunities     # What they need / can offer
├── collaboration_history          # Shared work together
└── feedback_and_insights          # Their thoughts on prompts, products
```

---

## 📋 Part 2: Core Tables & Schemas

### Table 1: `users`
Unified user table for humans, AI agents, contributors, customers, and prospects.

```sql
CREATE TABLE users (
  -- Identifiers
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  
  -- Profile
  name TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  website TEXT,
  location TEXT,
  timezone TEXT,
  
  -- User Type (core classification)
  user_type TEXT NOT NULL CHECK (user_type IN (
    'human_individual',
    'human_team',
    'ai_agent',
    'contributor',
    'customer'
  )),
  
  -- Lead / Customer classification
  status TEXT NOT NULL DEFAULT 'prospect' CHECK (status IN (
    'prospect',
    'lead',
    'engaged',
    'customer',
    'alumni',
    'inactive'
  )),
  
  -- Lead Profile (from LEAD-STRATEGY.md)
  lead_profile TEXT CHECK (lead_profile IN (
    'curious_creator',
    'efficiency_seeking_manager',
    'intentional_entrepreneur',
    'growth_focused_individual',
    'technical_power_user',
    'unknown'
  )),
  
  -- AI Maturity Level
  ai_maturity TEXT CHECK (ai_maturity IN (
    'skeptical_new',
    'dabbler',
    'practitioner',
    'power_user'
  )),
  
  -- Preferences
  preferred_contact_method TEXT CHECK (preferred_contact_method IN (
    'email',
    'twitter',
    'discord',
    'github',
    'direct_message'
  )),
  
  communication_style TEXT CHECK (communication_style IN (
    'direct',
    'conversational',
    'detailed',
    'minimal'
  )),
  
  email_frequency TEXT CHECK (email_frequency IN (
    'daily',
    'weekly',
    'biweekly',
    'monthly',
    'no_email'
  )),
  
  -- Source tracking
  source TEXT, -- where they came from (github, twitter, newsletter, etc)
  source_metadata JSONB, -- extra data about source
  
  -- Engagement
  last_interaction_date TIMESTAMP,
  total_interactions INT DEFAULT 0,
  unsubscribed BOOLEAN DEFAULT false,
  unsubscribe_date TIMESTAMP,
  unsubscribe_reason TEXT,
  
  -- AI Agent specific fields
  is_ai_agent BOOLEAN DEFAULT false,
  agent_type TEXT, -- e.g., "claude_copilot", "gpt_assistant", "specialized_agent"
  agent_model TEXT, -- e.g., "claude-3-sonnet"
  agent_context TEXT, -- special instructions for this agent
  last_agent_run TIMESTAMP,
  
  -- Contributor specific fields
  github_username TEXT,
  github_profile_url TEXT,
  contributions_count INT DEFAULT 0,
  last_contribution_date TIMESTAMP,
  
  -- Customer specific fields
  stripe_customer_id TEXT,
  lifetime_value DECIMAL(10, 2) DEFAULT 0,
  active_subscription BOOLEAN DEFAULT false,
  subscription_tier TEXT, -- 'free', 'pro', 'team', 'enterprise'
  
  -- Trust & Relationship
  trust_score INT DEFAULT 50, -- 0-100, calculated from interactions
  relationship_notes TEXT, -- internal notes about person/relationship
  next_action TEXT,
  next_action_date DATE,
  
  -- Privacy & Legal
  gdpr_consent BOOLEAN DEFAULT false,
  marketing_consent BOOLEAN DEFAULT false,
  data_sharing_consent BOOLEAN DEFAULT false,
  consent_date TIMESTAMP,
  consent_version TEXT,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Metadata
  tags JSONB DEFAULT '[]', -- array of tags for segmentation
  custom_fields JSONB DEFAULT '{}' -- flexible custom data
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_user_type ON users(user_type);
CREATE INDEX idx_users_status ON users(status);
CREATE INDEX idx_users_lead_profile ON users(lead_profile);
CREATE INDEX idx_users_last_interaction ON users(last_interaction_date);
CREATE INDEX idx_users_source ON users(source);
```

**Key Features:**
- Single table for all user types (human, AI, contributor, customer)
- Conditional fields: some only used for AI agents, some for customers
- Lead profile integration from LEAD-STRATEGY.md
- Privacy consent tracking for GDPR compliance
- Trust score for relationship evaluation
- Flexible `tags` and `custom_fields` for extensibility

---

### Table 2: `interaction_history`
Complete record of every message, conversation, action, and touchpoint.

```sql
CREATE TABLE interaction_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Interaction Type
  interaction_type TEXT NOT NULL CHECK (interaction_type IN (
    'email_sent',
    'email_opened',
    'email_clicked',
    'email_replied',
    'prompt_downloaded',
    'prompt_used',
    'prompt_feedback',
    'article_read',
    'workshop_attended',
    'community_post',
    'github_star',
    'github_clone',
    'github_contribution',
    'twitter_mention',
    'direct_message',
    'survey_response',
    'support_ticket',
    'purchase',
    'cancellation',
    'feedback_submission',
    'meeting_scheduled',
    'meeting_attended',
    'tool_contributed',
    'ai_agent_ran',
    'api_call',
    'other'
  )),
  
  -- Content
  subject TEXT, -- what was the interaction about
  message_preview TEXT, -- first 200 chars
  full_content TEXT, -- full message/content (encrypted if sensitive)
  
  -- Metadata
  channel TEXT, -- email, twitter, discord, github, direct, etc
  campaign_id TEXT, -- which email campaign (if email)
  email_template TEXT, -- which template was used
  
  -- Engagement Metrics (if applicable)
  opens INT DEFAULT 0,
  clicks INT DEFAULT 0,
  time_spent_seconds INT,
  completion_rate DECIMAL(5, 2), -- % completed (workshop, course, etc)
  engagement_score INT, -- 0-100 calculated score
  sentiment TEXT CHECK (sentiment IN ('positive', 'neutral', 'negative')),
  
  -- Related Items
  prompt_id TEXT, -- if interaction involves a prompt
  article_id TEXT,
  workshop_id TEXT,
  product_id TEXT,
  
  -- Response/Outcome
  response_from_user BOOLEAN DEFAULT false,
  response_sentiment TEXT,
  response_content TEXT,
  response_date TIMESTAMP,
  
  -- Value Exchange
  value_delivered TEXT, -- what we gave them (lead magnet, article, etc)
  value_offered_by_user TEXT, -- what they offered (contribution, feedback, etc)
  
  -- AI Agent specific
  agent_id UUID REFERENCES users(id), -- which AI agent created/facilitated this
  ai_model_used TEXT, -- which model generated response
  prompt_tokens INT,
  completion_tokens INT,
  
  -- Internal tracking
  created_by UUID REFERENCES users(id), -- who logged this interaction
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Notes
  internal_notes TEXT, -- what we learned, action items
  followup_needed BOOLEAN DEFAULT false,
  followup_by_date DATE
);

-- Indexes
CREATE INDEX idx_interaction_user_id ON interaction_history(user_id);
CREATE INDEX idx_interaction_type ON interaction_history(interaction_type);
CREATE INDEX idx_interaction_created_at ON interaction_history(created_at DESC);
CREATE INDEX idx_interaction_channel ON interaction_history(channel);
CREATE INDEX idx_interaction_followup ON interaction_history(followup_needed, followup_by_date);
```

**Key Features:**
- Complete audit trail of all interactions
- Engagement metrics for each interaction
- Tracks both what we send and what they send back
- Sentiment analysis tracking
- Links to related content (prompts, articles, products)
- AI agent provenance (which agent/model created the interaction)
- Internal notes for team context

---

### Table 3: `lead_scoring`
Real-time engagement scoring for marketing automation.

```sql
CREATE TABLE lead_scoring (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  
  -- Behavioral Scoring
  email_opens_last_30_days INT DEFAULT 0,
  email_opens_weight INT DEFAULT 1,
  
  email_clicks_last_30_days INT DEFAULT 0,
  email_clicks_weight INT DEFAULT 3,
  
  email_replies_last_30_days INT DEFAULT 0,
  email_replies_weight INT DEFAULT 5,
  
  prompts_downloaded_total INT DEFAULT 0,
  prompts_downloaded_weight INT DEFAULT 2,
  
  prompts_used_reported INT DEFAULT 0,
  prompts_used_weight INT DEFAULT 4,
  
  articles_read_total INT DEFAULT 0,
  articles_read_weight INT DEFAULT 1,
  
  workshop_attended BOOLEAN DEFAULT false,
  workshop_weight INT DEFAULT 10,
  
  community_posts INT DEFAULT 0,
  community_weight INT DEFAULT 2,
  
  days_since_signup INT,
  days_weight INT DEFAULT 1, -- penalizes very new leads
  
  -- Explicit Actions
  downloaded_lead_magnet BOOLEAN DEFAULT false,
  lead_magnet_weight INT DEFAULT 3,
  
  filled_survey BOOLEAN DEFAULT false,
  survey_weight INT DEFAULT 2,
  
  replied_to_email BOOLEAN DEFAULT false,
  reply_weight INT DEFAULT 5,
  
  -- Calculated Score
  total_score INT DEFAULT 0, -- sum of all weighted signals
  score_updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Heat Level
  heat_level TEXT CHECK (heat_level IN (
    'cold',    -- <20
    'warm',    -- 20-50
    'hot',     -- 50-80
    'very_hot' -- 80+
  )),
  
  -- Recommendations
  recommended_next_action TEXT, -- what to send next
  recommended_offer TEXT, -- which product/workshop
  recommended_timing TEXT, -- when to reach out
  
  -- Decay (for older engagement)
  last_calculated TIMESTAMP DEFAULT NOW(),
  recalculate_threshold_reached BOOLEAN DEFAULT false
);

-- Function to auto-calculate lead score
CREATE OR REPLACE FUNCTION calculate_lead_score(user_id_param UUID)
RETURNS INT AS $$
DECLARE
  score INT := 0;
BEGIN
  -- Calculate from interaction_history
  SELECT COALESCE(SUM(
    CASE WHEN interaction_type = 'email_opened' THEN 1
         WHEN interaction_type = 'email_clicked' THEN 3
         WHEN interaction_type = 'email_replied' THEN 5
         WHEN interaction_type = 'prompt_used' THEN 4
         WHEN interaction_type = 'article_read' THEN 1
         WHEN interaction_type = 'workshop_attended' THEN 10
         WHEN interaction_type = 'community_post' THEN 2
         ELSE 0
    END
  ), 0) INTO score
  FROM interaction_history
  WHERE user_id = user_id_param
  AND created_at > NOW() - INTERVAL '30 days';
  
  RETURN score;
END;
$$ LANGUAGE plpgsql;

-- Indexes
CREATE INDEX idx_lead_scoring_user_id ON lead_scoring(user_id);
CREATE INDEX idx_lead_scoring_heat_level ON lead_scoring(heat_level);
CREATE INDEX idx_lead_scoring_total_score ON lead_scoring(total_score DESC);
```

**Key Features:**
- Real-time lead scoring based on interactions
- Weighted scoring (replies more valuable than opens)
- Heat level classification (cold/warm/hot/very hot)
- Automatic scoring decay over time
- Recommendations for next action based on score
- Used by email automation to decide what to send when

---

### Table 4: `user_preferences`
How each person wants to be engaged (respect their communication style).

```sql
CREATE TABLE user_preferences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  
  -- Email Preferences
  email_enabled BOOLEAN DEFAULT true,
  email_frequency TEXT DEFAULT 'weekly',
  
  -- Content Preferences
  interested_in_topics JSONB DEFAULT '[]', -- array of topics
  -- topics: [prompts, articles, workshops, community, ai_philosophy, 
  --           technical, business, personal_growth, creativity]
  
  not_interested_in JSONB DEFAULT '[]',
  
  -- Communication Style
  prefers_short_form BOOLEAN DEFAULT false,
  prefers_stories BOOLEAN DEFAULT true,
  prefers_data BOOLEAN DEFAULT false,
  prefers_actionable BOOLEAN DEFAULT true,
  
  -- Contact Method Preferences
  preferred_channel TEXT DEFAULT 'email',
  secondary_channels JSONB DEFAULT '[]', -- [twitter, discord, etc]
  do_not_contact JSONB DEFAULT '[]', -- channels to never use
  
  -- Timing Preferences
  best_time_to_contact TEXT, -- "morning", "afternoon", "evening"
  best_days_to_contact JSONB DEFAULT '["monday","tuesday","wednesday","thursday","friday"]',
  timezone TEXT,
  
  -- Privacy Preferences
  share_profile_publicly BOOLEAN DEFAULT false,
  allow_mentioning_in_case_studies BOOLEAN DEFAULT false,
  allow_feedback_sharing BOOLEAN DEFAULT false,
  
  -- Notification Preferences
  notify_on_new_prompts BOOLEAN DEFAULT true,
  notify_on_new_articles BOOLEAN DEFAULT true,
  notify_on_community_activity BOOLEAN DEFAULT false,
  notify_on_workshop_launch BOOLEAN DEFAULT true,
  
  -- Advanced Preferences
  custom_preferences JSONB DEFAULT '{}',
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_preferences_user_id ON user_preferences(user_id);
```

**Key Features:**
- Comprehensive communication preferences
- Respect user's time and channel preferences
- Content interest tracking
- Privacy controls for case studies and mentions
- Used to filter and personalize all communications

---

### Table 5: `contributed_tools`
Track tools, resources, or content contributed by users/AI agents.

```sql
CREATE TABLE contributed_tools (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contributor_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Tool Information
  name TEXT NOT NULL,
  description TEXT,
  tool_type TEXT NOT NULL CHECK (tool_type IN (
    'prompt',
    'tool',
    'article',
    'tutorial',
    'template',
    'script',
    'code_snippet',
    'guide',
    'case_study',
    'video',
    'resource'
  )),
  
  -- Content
  content TEXT, -- the actual tool/resource
  github_url TEXT,
  live_url TEXT,
  
  -- Quality & Engagement
  quality_score INT, -- 0-100 based on community feedback
  download_count INT DEFAULT 0,
  usage_count INT DEFAULT 0,
  rating DECIMAL(3, 2), -- 0.0-5.0 stars
  feedback_count INT DEFAULT 0,
  
  -- Attribution & Rights
  license TEXT, -- MIT, CC-BY, etc
  requires_attribution BOOLEAN DEFAULT true,
  commercial_use_allowed BOOLEAN DEFAULT false,
  
  -- Status
  status TEXT CHECK (status IN (
    'draft',
    'submitted',
    'approved',
    'featured',
    'archived'
  )),
  
  -- Associated Content
  tags JSONB,
  related_prompts JSONB, -- IDs of related prompts
  related_articles JSONB,
  
  -- Monetization (if applicable)
  revenue_share DECIMAL(5, 2), -- % they get if sold
  total_earned DECIMAL(10, 2) DEFAULT 0,
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  approved_by UUID REFERENCES users(id),
  approval_date TIMESTAMP
);

CREATE INDEX idx_contributed_contributor_id ON contributed_tools(contributor_id);
CREATE INDEX idx_contributed_status ON contributed_tools(status);
CREATE INDEX idx_contributed_quality_score ON contributed_tools(quality_score DESC);
```

**Key Features:**
- Tracks all contributions (tools, prompts, articles, code)
- Quality scoring and community ratings
- License and attribution tracking
- Download/usage analytics
- Revenue sharing capability
- Used to incentivize and recognize contributors

---

### Table 6: `requests_and_opportunities`
What people need and what they can offer (two-way value exchange).

```sql
CREATE TABLE requests_and_opportunities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Request or Offer
  request_type TEXT NOT NULL CHECK (request_type IN (
    'request_help',
    'offer_help',
    'seek_partner',
    'seek_tool',
    'seek_feedback',
    'seek_knowledge',
    'can_provide_tool',
    'can_provide_expertise',
    'can_provide_resources',
    'can_provide_connections',
    'seeking_investment',
    'offering_investment'
  )),
  
  -- Details
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT, -- 'technical', 'business', 'creative', 'community', 'other'
  
  -- Priority & Urgency
  priority TEXT CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  urgency_date DATE,
  
  -- Value Exchange
  value_they_seek TEXT, -- what would help them
  value_they_offer TEXT, -- what they can give
  estimated_effort TEXT, -- 'small', 'medium', 'large'
  
  -- Status & Progress
  status TEXT CHECK (status IN (
    'open',
    'in_progress',
    'completed',
    'blocked',
    'archived'
  )),
  
  -- Matching & Outcomes
  matched_users JSONB DEFAULT '[]', -- array of user IDs who could help
  matched_with_user_id UUID REFERENCES users(id),
  collaboration_notes TEXT,
  
  -- Metadata
  tags JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Examples of usage:
-- User A: "I need someone to help me build a Supabase integration" (offer_help needed)
-- User B: "I can help with Supabase architecture" (can_provide_expertise)
-- AI Agent: "I can generate code for common patterns" (can_provide_tool)
-- System: Matches A + B + Agent in collaboration

CREATE INDEX idx_requests_user_id ON requests_and_opportunities(user_id);
CREATE INDEX idx_requests_status ON requests_and_opportunities(status);
CREATE INDEX idx_requests_type ON requests_and_opportunities(request_type);
```

**Key Features:**
- Tracks two-way value exchange
- Matching algorithm substrate (find who can help)
- Collaboration tracking
- Integrates humans, AI agents, contributors
- Used for community building and opportunity identification

---

### Table 7: `collaboration_history`
Record of partnerships, joint projects, and mutual work.

```sql
CREATE TABLE collaboration_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Parties involved (support 2+ participants)
  initiator_id UUID NOT NULL REFERENCES users(id),
  collaborator_ids JSONB NOT NULL, -- array of user IDs
  
  -- Collaboration Details
  collaboration_type TEXT CHECK (collaboration_type IN (
    'joint_tool_creation',
    'content_partnership',
    'research_collaboration',
    'mentorship',
    'peer_feedback',
    'joint_workshop',
    'community_initiative',
    'other'
  )),
  
  title TEXT NOT NULL,
  description TEXT,
  
  -- Scope & Timeline
  start_date DATE NOT NULL,
  end_date DATE,
  status TEXT CHECK (status IN ('planned', 'active', 'completed', 'paused')),
  
  -- Outcomes
  outcome_description TEXT,
  deliverables JSONB, -- array of what was created
  success_metrics JSONB, -- how we measured success
  
  -- Value & Impact
  value_created TEXT, -- description of value
  value_for_each_party JSONB, -- dict of user_id -> value received
  
  -- Learnings
  lessons_learned JSONB, -- array of insights
  would_collaborate_again JSONB, -- dict of user_id -> boolean
  
  -- Metadata
  tags JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);

CREATE INDEX idx_collaboration_initiator ON collaboration_history(initiator_id);
CREATE INDEX idx_collaboration_status ON collaboration_history(status);
```

**Key Features:**
- Records all joint efforts
- Multi-party collaboration support
- Value exchange tracking
- Learning capture
- Used for relationship intelligence and identifying good partners

---

### Table 8: `feedback_and_insights`
Structured capture of user feedback, suggestions, and learnings.

```sql
CREATE TABLE feedback_and_insights (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE, -- can be null for anonymous
  
  -- Feedback Type
  feedback_type TEXT NOT NULL CHECK (feedback_type IN (
    'product_suggestion',
    'prompt_feedback',
    'article_feedback',
    'bug_report',
    'feature_request',
    'workshop_feedback',
    'general_comment',
    'case_study',
    'testimonial',
    'insight_sharing'
  )),
  
  -- Content
  subject TEXT NOT NULL,
  feedback_text TEXT NOT NULL,
  rating INT, -- 1-5 if applicable
  
  -- Specificity
  related_prompt_id TEXT,
  related_article_id TEXT,
  related_product TEXT,
  
  -- Context
  feedback_context TEXT, -- where/when did they give this
  use_case_description TEXT,
  
  -- Sentiment Analysis
  sentiment TEXT CHECK (sentiment IN ('positive', 'neutral', 'negative')),
  emotion_detected JSONB, -- ['excited', 'frustrated', 'impressed', etc]
  
  -- Action Items
  actionable BOOLEAN DEFAULT false,
  suggested_action TEXT,
  priority_for_team TEXT CHECK (priority_for_team IN ('low', 'medium', 'high')),
  assigned_to UUID REFERENCES users(id), -- which team member to handle
  
  -- Status
  status TEXT DEFAULT 'new' CHECK (status IN (
    'new',
    'reviewed',
    'in_progress',
    'implemented',
    'declined',
    'archived'
  )),
  
  -- Permissions
  can_share_publicly BOOLEAN DEFAULT false,
  can_use_as_testimonial BOOLEAN DEFAULT false,
  can_use_in_case_study BOOLEAN DEFAULT false,
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  reviewed_at TIMESTAMP,
  reviewed_by UUID REFERENCES users(id),
  
  tags JSONB
);

CREATE INDEX idx_feedback_user_id ON feedback_and_insights(user_id);
CREATE INDEX idx_feedback_type ON feedback_and_insights(feedback_type);
CREATE INDEX idx_feedback_status ON feedback_and_insights(status);
CREATE INDEX idx_feedback_actionable ON feedback_and_insights(actionable, priority_for_team);
```

**Key Features:**
- Captures all feedback in structured format
- Sentiment analysis and emotion detection
- Actionable items with assignment
- Permissions for public use (testimonials, case studies)
- Used for product improvement and content creation

---

## 📊 Part 3: Interaction History Data Models

### What Gets Logged (by frequency)

#### **High-Frequency Events** (Log all)
- Email sent/opened/clicked/replied
- Prompt downloaded/used
- Article read
- API calls
- Community posts

#### **Medium-Frequency Events** (Log sample or summary)
- Page views
- Button clicks
- Session duration
- Search queries

#### **Low-Frequency Events** (Log all)
- Workshop registration/attendance
- Purchase/subscription
- Contribution submitted
- Support ticket opened
- Meeting attended

### Data Retention Policy

```
INTERACTION TYPE                | RETENTION | AGGREGATION POINT
Email interactions              | 3 years   | 1 year
Page views & engagement         | 1 year    | 90 days
Purchase & financial            | 7 years   | automatic
Support tickets                 | 3 years   | never
API calls (technical)           | 90 days   | 7 days
User feedback                   | forever   | forever
Collaboration records           | forever   | forever
```

### Privacy Handling for Sensitive Interactions

```sql
-- Create encrypted field for sensitive content
ALTER TABLE interaction_history 
ADD COLUMN full_content_encrypted TEXT;

-- Function to encrypt/decrypt sensitive content
CREATE OR REPLACE FUNCTION encrypt_interaction(content TEXT, key TEXT)
RETURNS TEXT AS $$
BEGIN
  -- Use pgcrypto extension
  -- Only admins have decryption key
  RETURN pgp_sym_encrypt(content, key);
END;
$$ LANGUAGE plpgsql;
```

---

## 🤖 Part 4: AI Agent Specific Tracking

### AI Agent User Type

```sql
-- When creating AI agent user:
INSERT INTO users (
  id, email, name, user_type, is_ai_agent, 
  agent_type, agent_model, agent_context
) VALUES (
  gen_random_uuid(),
  'claude-copilot@teemee.one',
  'Claude Copilot Agent',
  'ai_agent',
  true,
  'claude_copilot',
  'claude-3-5-sonnet-20241022',
  'Helps with lead nurturing, content generation, and data analysis. 
   Always prioritize user privacy and authenticity over growth metrics.'
);
```

### AI Agent Interactions

```sql
-- Track what agents do
INSERT INTO interaction_history (
  user_id, interaction_type, subject, channel,
  agent_id, ai_model_used, prompt_tokens, completion_tokens
) VALUES (
  lead_user_id,
  'email_sent',
  'Personalized prompt recommendation',
  'email',
  agent_id,
  'claude-3-5-sonnet',
  245,
  1203
);
```

### Audit Trail for AI Decisions

```sql
-- Extended tracking for AI actions
CREATE TABLE ai_agent_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  agent_id UUID NOT NULL REFERENCES users(id),
  
  -- What the agent did
  action TEXT, -- 'send_email', 'score_lead', 'recommend_offer', etc
  target_user_id UUID REFERENCES users(id),
  
  -- Reasoning
  decision_input JSONB, -- what data was considered
  decision_output JSONB, -- what decision was made
  reasoning_text TEXT, -- human-readable explanation
  
  -- Quality
  was_successful BOOLEAN,
  user_feedback TEXT, -- if user gave feedback on agent action
  confidence_score DECIMAL(3, 2),
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 📈 Part 5: Lead Scoring Query Examples

### Get All Hot Leads (Ready for workshop offer)

```sql
SELECT 
  u.id,
  u.name,
  u.email,
  u.lead_profile,
  ls.heat_level,
  ls.total_score,
  ls.recommended_offer,
  COUNT(ih.id) as recent_interactions,
  MAX(ih.created_at) as last_interaction
FROM users u
JOIN lead_scoring ls ON u.id = ls.user_id
LEFT JOIN interaction_history ih ON u.id = ih.user_id 
  AND ih.created_at > NOW() - INTERVAL '30 days'
WHERE ls.heat_level IN ('hot', 'very_hot')
  AND u.status IN ('lead', 'engaged')
  AND u.unsubscribed = false
GROUP BY u.id, u.name, u.email, u.lead_profile, ls.heat_level, 
         ls.total_score, ls.recommended_offer
ORDER BY ls.total_score DESC;
```

### Identify At-Risk Customers

```sql
SELECT 
  u.id,
  u.name,
  u.email,
  u.subscription_tier,
  MAX(ih.created_at) as last_engagement,
  NOW() - MAX(ih.created_at) as days_silent,
  COUNT(CASE WHEN interaction_type IN ('email_opened', 'workshop_attended') THEN 1 END) 
    as engagement_count
FROM users u
JOIN interaction_history ih ON u.id = ih.user_id
WHERE u.status = 'customer'
  AND ih.created_at > NOW() - INTERVAL '90 days'
GROUP BY u.id, u.name, u.email, u.subscription_tier
HAVING NOW() - MAX(ih.created_at) > INTERVAL '30 days'
ORDER BY days_silent DESC;
```

### Find Best Contributors

```sql
SELECT 
  u.name,
  u.github_username,
  COUNT(ct.id) as tools_contributed,
  SUM(ct.download_count) as total_downloads,
  SUM(ct.usage_count) as total_uses,
  AVG(ct.quality_score) as avg_quality,
  SUM(ct.total_earned) as total_earned,
  MAX(ct.created_at) as last_contribution
FROM users u
JOIN contributed_tools ct ON u.id = ct.contributor_id
WHERE ct.status IN ('approved', 'featured')
GROUP BY u.id, u.name, u.github_username
ORDER BY total_downloads DESC
LIMIT 10;
```

### Get Collaboration Opportunities

```sql
SELECT 
  ro.title,
  ro.description,
  u_initiator.name as initiated_by,
  ro.request_type,
  ARRAY_AGG(u_match.name) as potential_collaborators,
  ro.priority,
  ro.urgency_date
FROM requests_and_opportunities ro
JOIN users u_initiator ON ro.user_id = u_initiator.id
LEFT JOIN users u_match ON u_match.id = ANY(ro.matched_users)
WHERE ro.status = 'open'
  AND (
    ro.request_type LIKE 'offer_%' 
    OR ro.request_type LIKE 'seek_%'
  )
GROUP BY ro.id, ro.title, ro.description, u_initiator.name, 
         ro.request_type, ro.priority, ro.urgency_date
ORDER BY ro.priority, ro.urgency_date;
```

---

## 🛠️ Part 6: Implementation Roadmap

### Week 1: Foundation Setup (5-6 hours)
- [ ] Create Supabase project
- [ ] Create `users` table
- [ ] Create `interaction_history` table
- [ ] Add indexes
- [ ] Test basic inserts

### Week 2: Lead Scoring & Preferences (4-5 hours)
- [ ] Create `lead_scoring` table
- [ ] Create `user_preferences` table
- [ ] Build lead score calculation function
- [ ] Create views for scoring queries

### Week 3: Contributions & Collaboration (3-4 hours)
- [ ] Create `contributed_tools` table
- [ ] Create `collaboration_history` table
- [ ] Create `requests_and_opportunities` table
- [ ] Build matching logic

### Week 4: Feedback & Integration (3-4 hours)
- [ ] Create `feedback_and_insights` table
- [ ] Add `ai_agent_logs` table
- [ ] Build API endpoints in Next.js or Python
- [ ] Set up basic dashboard views

### Ongoing: Data Ingestion (1-2 hours/week)
- [ ] Log interactions from email platform (ConvertKit)
- [ ] Log GitHub activity (stars, forks, contributions)
- [ ] Log workshop attendees
- [ ] Manual entry of customer interactions

---

## 🔌 Part 7: Integration Points

### From Email Platform (ConvertKit)
```javascript
// Webhook from ConvertKit → Supabase
// When subscriber opens email:
POST /api/webhooks/convertkit
{
  event: 'email.opened',
  subscriber_id: 'xxx',
  email_id: 'yyy',
  timestamp: '2025-11-17T...'
}

// Action: Insert interaction_history record with:
// interaction_type: 'email_opened'
// Update lead_scoring for that user
```

### From GitHub
```javascript
// GitHub Actions webhook → Supabase
// When repo starred, cloned, or PR merged:
POST /api/webhooks/github
{
  event: 'star',
  user: { login: 'username' },
  timestamp: '2025-11-17T...'
}

// Action: Find or create user, log interaction
```

### From Workshop Platform
```javascript
// Workshop registration → Supabase
POST /api/webhooks/workshop
{
  event: 'registration',
  email: 'user@example.com',
  workshop_id: 'xyz',
  timestamp: '2025-11-17T...'
}

// Action: Log interaction, update user status
```

---

## 🔐 Part 8: Privacy & Security

### Data Protection
- ✅ Never log passwords or sensitive payment info
- ✅ Encrypt PII fields at rest (Supabase has built-in encryption)
- ✅ Row-level security (RLS) policies for access control
- ✅ GDPR right-to-be-forgotten: soft delete with anonymization

### RLS Policies Example
```sql
-- Only admins can see all user data
CREATE POLICY "admin_all_access" ON users
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Users can only see their own data
CREATE POLICY "users_own_data" ON users
  FOR SELECT USING (auth.uid() = id);

-- Sensitive interactions require admin role
CREATE POLICY "admin_interaction_access" ON interaction_history
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
```

### Data Deletion Request Handling
```sql
-- When user requests deletion:
UPDATE users SET 
  email = 'deleted_' || id,
  name = 'Deleted User',
  is_deleted = true
WHERE id = user_id;

-- Keep anonymized interaction history for insights
UPDATE interaction_history SET
  user_id = NULL,
  message_preview = '[DELETED]',
  full_content = '[DELETED]'
WHERE user_id = user_id;
```

---

## 📊 Part 9: Dashboard Views

### Home Dashboard
```
├── Quick Stats
│   ├── Total users: 500
│   ├── Active leads: 42
│   ├── Hot leads: 8
│   ├── This week conversions: 2
│
├── Lead Status Pipeline
│   ├── Prospect (200)
│   ├── Lead (150)
│   ├── Engaged (100)
│   ├── Customer (50)
│
├── Lead Profile Distribution
│   ├── Curious Creator: 40%
│   ├── Manager: 25%
│   ├── Entrepreneur: 20%
│   ├── Growth-focused: 15%
│
└── Top Actions
    ├── 8 hot leads need contact
    ├── 12 feedback items need review
    ├── 3 collaborations completed
```

### Lead Management Dashboard
```
├── Lead Heat Map
│   └── Filter by: profile, source, engagement
│
├── Action Items
│   ├── Follow-ups needed by date
│   ├── Feedback to review
│   ├── Collaboration opportunities
│
└── Individual Lead View
    ├── Full interaction history
    ├── Lead score breakdown
    ├── Recommended next action
    ├── Preference summary
```

---

## 🎯 Part 10: CRM Workflow Examples

### Workflow 1: New Lead Arrives

```
1. Email signup from ConvertKit webhook
   ↓
2. Check if user exists (by email)
   ├─ Yes: Update last_interaction_date
   └─ No: Create new user
   ↓
3. Log interaction: 'email_subscribed'
   ↓
4. Assign lead_profile based on email content/survey
   ↓
5. Create lead_scoring record
   ↓
6. Apply user preferences (email frequency, topics)
   ↓
7. Send welcome email (from email automation)
```

### Workflow 2: Track Email Campaign Response

```
1. Send email campaign to 100 leads
   ↓
2. ConvertKit tracks opens/clicks (webhooks)
   ↓
3. Log in interaction_history:
   - 45 opens
   - 12 clicks
   - 2 replies
   ↓
4. Update lead_scoring for each user
   ↓
5. Identify hot leads (new heat level: 'very_hot')
   ↓
6. Trigger AI agent to send personalized follow-up
   ↓
7. Log agent's action in ai_agent_logs
```

### Workflow 3: Convert Lead to Customer

```
1. Hot lead registers for workshop
   ↓
2. Log interaction: 'workshop_registered'
   ↓
3. Create Stripe customer (if payment)
   ↓
4. Update user:
   - status = 'customer'
   - subscription_tier = 'pro'
   - stripe_customer_id = 'xxx'
   - lifetime_value += price
   ↓
5. Log interaction: 'purchase'
   ↓
6. Add tag: 'customer:workshop'
   ↓
7. Remove from email campaigns
   ↓
8. Add to customer onboarding sequence
```

### Workflow 4: AI Agent Makes Recommendation

```
1. Daily batch: Calculate lead scores
   ↓
2. AI agent reviews top 20 hot leads
   ↓
3. For each lead:
   a. Retrieve user profile & preferences
   b. Get interaction history (last 30 days)
   c. Analyze sentiment & engagement patterns
   d. Determine best offer (workshop, guide, etc.)
   e. Write personalized email
   ↓
4. Log in ai_agent_logs:
   - Decision input (lead data)
   - Decision output (email content)
   - Reasoning (why this offer)
   - Confidence score
   ↓
5. Queue email for human review
   ↓
6. Human approves and schedules
   ↓
7. Log interaction when sent
```

---

## 💾 Part 11: Regular Maintenance

### Weekly Tasks
- [ ] Check feedback_and_insights for urgent items
- [ ] Review new collaboration requests
- [ ] Look at at-risk customers (30+ days no engagement)
- [ ] Update next_action_date for open opportunities

### Monthly Tasks
- [ ] Calculate lead scores (full recalculation)
- [ ] Review interactions for patterns/insights
- [ ] Update contributed_tools quality scores
- [ ] Archive completed collaborations
- [ ] Generate status report on lead pipeline

### Quarterly Tasks
- [ ] Data cleanup (soft delete inactive users after 1 year)
- [ ] Review data retention policies
- [ ] Audit AI agent decision quality
- [ ] Analyze conversion patterns
- [ ] Plan content based on feedback trends

---

## 🚀 Part 12: Getting Started This Week

### Minimal Viable Setup (4 hours)
```sql
-- Create just the essentials first:
1. users table (core user data only)
2. interaction_history (basic logging)
3. API endpoint to log interactions

-- That's it. Start using it.
-- Everything else can be added incrementally.
```

### Quick Integration Path
```
Week 1: Manual logging via dashboard
Week 2: Email platform webhook integration
Week 3: GitHub integration
Week 4: Build first views/reports
```

---

## 📋 Table Reference Summary

| Table | Purpose | Key Fields | Frequency |
|-------|---------|-----------|-----------|
| `users` | User registry | email, user_type, status, lead_profile | Create once, update often |
| `interaction_history` | Complete audit trail | interaction_type, user_id, created_at | Log every action |
| `lead_scoring` | Marketing automation | heat_level, total_score, recommended_action | Calculate daily |
| `user_preferences` | Respect communication | email_frequency, preferred_channel | Set once, respect always |
| `contributed_tools` | Community contributions | quality_score, download_count, rating | Grow over time |
| `requests_and_opportunities` | Value exchange | request_type, status, matched_users | Ongoing |
| `collaboration_history` | Partnership records | collaborators, outcomes, lessons_learned | Document always |
| `feedback_and_insights` | Product intelligence | feedback_type, sentiment, actionable | Capture everything |

---

## 📞 Support & Questions

**Schema Questions?** The design supports:
- ✅ Tracking humans, AI agents, contributors, customers in one place
- ✅ Complete interaction history for continuity
- ✅ Automated lead scoring and recommendations
- ✅ Two-way value exchange (requests + opportunities)
- ✅ Privacy compliance (GDPR, consent tracking)
- ✅ AI agent provenance and decision audit trails

**Missing Something?** All tables have `custom_fields` JSONB column for adding fields without migrations.

---

*CRM & Database Strategy for teemee.one*
*Created: November 17, 2025*
*Built for: Privacy, relationships, AI collaboration, growth*
