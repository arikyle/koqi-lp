export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  category: string;
  tags: string[];
  readingTime: string;
  content: string;
}

const posts: BlogPost[] = [
  {
    slug: "what-is-accs-agent-competency-calibration-score",
    title: "What Is ACCS? The Agent Competency & Calibration Score Explained",
    description:
      "ACCS is a real-time performance score for real estate agents that measures pricing accuracy, market expertise, and calibration. Learn how it works and why it matters.",
    datePublished: "2026-04-15",
    category: "Product",
    tags: ["ACCS", "agent performance", "real estate metrics"],
    readingTime: "5 min read",
    content: `## What Is ACCS?

ACCS — Agent Competency & Calibration Score — is the first real-time, multi-dimensional performance metric built specifically for real estate agents. Unlike transaction volume or GCI, ACCS measures the skills that actually predict long-term success: pricing accuracy, market expertise, and confidence calibration.

## Why Traditional Metrics Fall Short

The real estate industry has relied on lagging indicators for decades. Closed transactions tell you what happened last quarter. GCI tells you revenue, not skill. Neither answers the question that matters most: *how good is this agent at their craft right now?*

ACCS answers that question by measuring five distinct dimensions:

### 1. Pricing Accuracy
How close are your property value estimates to actual sale prices? This is the core of ACCS — the ability to accurately price a property is the single most valuable skill an agent can have.

### 2. Confidence Calibration
When you say you're 90% confident in an estimate, are you right 90% of the time? Calibration separates agents who know what they know from agents who guess and get lucky.

### 3. Local Specialization
Deep knowledge of specific neighborhoods, ZIP codes, and micro-markets. ACCS rewards agents who develop genuine local expertise rather than spreading thin across an entire metro area.

### 4. Property Type Expertise
Single-family, condo, luxury, multi-family — each property type requires different pricing instincts. ACCS tracks your accuracy across categories to reveal your true strengths.

### 5. Engagement Consistency
ACCS decays with inactivity. Your score reflects your current form, not a peak from six months ago. This ensures the score is always a reliable signal of present-day ability.

## How ACCS Changes the Game

For agents, ACCS is a verifiable credential. It proves pricing expertise to prospective clients in a way that testimonials and transaction counts never could.

For brokerages, ACCS provides real visibility into team performance. It surfaces coaching opportunities, identifies top talent, and builds a recruiting pitch backed by data competitors can't match.

For consumers, ACCS is a trust signal. When choosing between agents, a high ACCS score means the agent has demonstrated, measurable pricing accuracy in your specific market.

## Get Your ACCS Score

Koqi is currently in private beta. Early access members start building their ACCS score from day one — giving them a head start on establishing a verified performance profile.`,
  },
  {
    slug: "estimate-to-earn-how-real-estate-agents-get-paid-to-practice",
    title: "Estimate-to-Earn: How Real Estate Agents Get Paid to Practice Pricing",
    description:
      "Koqi's Estimate-to-Earn system rewards agents for accurate property pricing estimates. Learn how this pricing gym sharpens instincts and builds your ACCS score.",
    datePublished: "2026-03-28",
    category: "Product",
    tags: ["Estimate-to-Earn", "pricing accuracy", "agent training"],
    readingTime: "4 min read",
    content: `## The Problem with Real Estate Training

Most real estate training programs teach scripts, prospecting tactics, and closing techniques. Almost none of them train the skill that matters most to clients: pricing accuracy.

Think about it. A buyer's biggest fear is overpaying. A seller's biggest fear is leaving money on the table. The agent who can accurately price a property — before the comps come in, before the appraisal — has an enormous advantage.

Yet there's been no structured way to practice this skill. Until now.

## How Estimate-to-Earn Works

Koqi's Estimate-to-Earn system turns pricing practice into a rewarded activity:

**Step 1: Choose a Property**
Browse real, active listings in your market. Koqi serves up properties based on your location and specialization areas.

**Step 2: Submit Your Estimate**
Estimate what you think the property will sell for. Your estimate is GPS-verified to ensure you're pricing properties in markets you actually know.

**Step 3: Wait for the Outcome**
When the property sells, Koqi compares your estimate to the final sale price.

**Step 4: Earn Based on Accuracy**
The closer your estimate to the actual sale price, the more you earn. Consistently accurate estimates build your ACCS score and unlock higher reward tiers.

## Why This Matters

Estimate-to-Earn isn't a quiz or a game. It's deliberate practice with real stakes — the same type of training that elite performers in every field use to maintain their edge.

Every estimate you submit is a data point that feeds your ACCS score. Over time, Koqi builds a comprehensive map of your pricing strengths: which property types you nail, which neighborhoods you dominate, and where you have room to improve.

## The Pricing Gym Analogy

Athletes don't just play games to get better. They train. They drill. They put in reps.

Real estate agents should do the same. Estimate-to-Earn is the pricing gym — a structured environment where you sharpen your instincts on real properties, with real consequences for accuracy.

The agents who practice deliberately will outperform agents who rely on gut feel alone. The data is clear on this across every performance domain, and real estate is no exception.`,
  },
  {
    slug: "real-estate-agent-performance-metrics-beyond-transaction-volume",
    title: "Beyond Transaction Volume: The Real Estate Performance Metrics That Actually Matter",
    description:
      "Transaction count and GCI are lagging indicators. Discover the forward-looking performance metrics that predict which real estate agents will outperform.",
    datePublished: "2026-03-12",
    category: "Industry",
    tags: ["performance metrics", "real estate analytics", "agent evaluation"],
    readingTime: "6 min read",
    content: `## The Problem with How We Measure Agents

Ask any brokerage how they evaluate agent performance and you'll hear the same metrics: closed transactions, gross commission income, total volume. These numbers dominate production boards, awards ceremonies, and recruiting conversations.

But here's the uncomfortable truth: transaction volume is a lagging indicator. It tells you what already happened. It doesn't tell you whether an agent is actually *good* — or just busy in a hot market.

## Lagging vs. Leading Indicators

In every performance domain outside of real estate, the distinction between lagging and leading indicators is well understood.

**Lagging indicators** measure outcomes that have already occurred:
- Closed transactions
- GCI (Gross Commission Income)
- Total dollar volume
- Days on market (for listings already sold)

**Leading indicators** measure the skills and behaviors that predict future outcomes:
- Pricing accuracy on initial list price recommendations
- Market knowledge depth in specific geographic areas
- Confidence calibration — knowing what you know vs. what you're guessing
- Consistency of performance across property types

The real estate industry has been almost entirely focused on lagging indicators. This is like evaluating a baseball player only by wins and losses, ignoring batting average, on-base percentage, and exit velocity.

## Why Pricing Accuracy Is the Most Important Metric

If you had to choose one single metric to evaluate a real estate agent's skill, it should be pricing accuracy.

Agents who price accurately:
- Sell listings faster (fewer price reductions)
- Generate more referrals (clients trust their judgment)
- Win more listing presentations (credible market analysis)
- Negotiate better outcomes (anchored to realistic values)

Yet no platform has systematically measured this — until Koqi introduced the ACCS score.

## What Brokerages Should Be Tracking

Forward-thinking brokerages are starting to ask better questions about their teams:

1. **Who prices most accurately?** Not who closes the most, but who nails the list-to-sale ratio consistently.
2. **Where does each agent dominate?** ZIP-level performance data reveals genuine local expertise vs. agents spreading thin across too large an area.
3. **Who is improving?** Trend data matters more than snapshots. An agent with an ACCS score that's climbing steadily is more valuable than one coasting on past performance.
4. **Who is coachable?** Agents who engage with performance feedback and practice pricing deliberately are the ones who will grow.

## The Shift to Skill-Based Evaluation

The market is moving toward skill-based evaluation whether brokerages are ready or not. Consumer platforms will eventually surface agent quality signals beyond reviews and transaction counts. The brokerages that adopt performance intelligence early will have a structural advantage in recruiting and retention.

Koqi's ACCS score is designed to be that signal — a real-time, verifiable measure of agent competency that benefits agents, brokerages, and consumers alike.`,
  },
  {
    slug: "how-brokerages-use-koqi-for-agent-performance-visibility",
    title: "How Brokerages Use Koqi for Real-Time Agent Performance Visibility",
    description:
      "Koqi gives brokerages data-driven insight into agent skill, not just activity. Learn how team ACCS tracking transforms recruiting, coaching, and retention.",
    datePublished: "2026-02-25",
    category: "Brokerage",
    tags: ["brokerage tools", "team management", "agent retention"],
    readingTime: "5 min read",
    content: `## The Visibility Problem

Every brokerage manager has faced the same challenge: knowing who on the team is actually good versus who is just active. Traditional CRMs track calls, emails, showings, and transactions — all activity metrics. None of them answer the question that matters: *who has the strongest skills?*

Koqi solves this by giving brokerages access to ACCS — a real-time performance score for every agent on the team.

## Team ACCS Dashboard

Koqi's brokerage tools provide a team-wide view of agent performance across all five ACCS dimensions:

- **Ranked agent list** sorted by overall ACCS score
- **Individual agent profiles** with performance history and trend lines
- **Dimension breakdowns** showing each agent's strengths and gaps
- **ZIP-level heat maps** revealing where your team dominates and where you're invisible

## Three Use Cases Brokerages Care About Most

### 1. Coaching That's Actually Targeted

Most coaching in real estate is generic: call more leads, follow up faster, close harder. ACCS makes coaching specific.

When you can see that an agent's pricing accuracy is strong but their confidence calibration is weak, the coaching conversation changes. Instead of broad advice, you can say: "You know your market well, but you need to trust your instincts more — your estimates are good, but you're hedging too often."

### 2. Recruiting with Proof

The best agents want to work at brokerages that take performance seriously. When your recruiting pitch includes team ACCS data and performance infrastructure, you're signaling something most competitors can't: *we actually know who's good here, and we invest in helping agents get better.*

This is a meaningful differentiator in a market where most brokerages compete on splits alone.

### 3. Retention Through Recognition

Top agents leave when they feel invisible. Koqi makes excellence visible. When your best pricers are recognized on the team dashboard — not for closing volume, but for genuine skill — they feel seen. That matters more than most brokerages realize.

## Getting Started

Koqi's brokerage tools are available during private beta. Request a demo to see how ACCS can transform your team's performance visibility.`,
  },
  {
    slug: "pricing-accuracy-most-important-real-estate-skill",
    title: "Why Pricing Accuracy Is the Most Important Skill in Real Estate",
    description:
      "Pricing accuracy predicts client satisfaction, listing success, and long-term career growth better than any other real estate metric. Here's why — and how to improve it.",
    datePublished: "2026-02-10",
    category: "Industry",
    tags: ["pricing accuracy", "agent skills", "real estate career"],
    readingTime: "5 min read",
    content: `## The Skill Nobody Trains

Real estate agents spend thousands of hours learning to prospect, market, negotiate, and close. But the skill that clients value above all others — accurate pricing — receives almost no structured training.

This is paradoxical. A buyer's agent who can identify undervalued properties saves their clients money. A listing agent who prices accurately from day one sells faster and for more. Both outcomes generate referrals. Both build careers.

Yet there's no pricing certification. No pricing gym. No structured way to get reps in.

## What the Data Shows

Research on real estate agent performance consistently points to the same conclusion: agents who price more accurately outperform their peers across nearly every measurable dimension.

**Faster sales.** Listings that are priced accurately from the start spend fewer days on market. Every price reduction extends days on market and signals desperation to buyers.

**Higher net proceeds.** Overpricing leads to stale listings, which ultimately sell below market value. Accurate initial pricing captures the full buyer pool at peak interest.

**More referrals.** Clients remember the agent who "nailed the price" far more than the agent who had to adjust three times before finding a buyer.

**Lower risk.** In uncertain markets, pricing accuracy is the difference between a smooth close and a deal that falls apart at appraisal.

## Why Most Agents Aren't Great at Pricing

Three factors contribute to weak pricing skills across the industry:

1. **No feedback loop.** After a listing sells, most agents move on to the next deal. Nobody goes back to evaluate whether the original price recommendation was accurate.

2. **Anchoring bias.** Agents anchor to client expectations, comparable listing prices, or their own emotional read of a property instead of building a rigorous analytical framework.

3. **No practice environment.** You can't practice pricing without real properties. And you can't learn from pricing without feedback. This catch-22 has been unsolvable — until Estimate-to-Earn.

## How to Get Better

Koqi's Estimate-to-Earn system creates the feedback loop that's been missing. Submit pricing estimates on real properties. See how close you were. Identify your patterns. Improve.

Over time, Koqi's AI coaching module identifies your specific biases — maybe you overprice condos but nail single-family homes, or you're sharp in your core ZIP code but weak two neighborhoods over.

This kind of targeted, data-driven improvement is standard in every other performance profession. Real estate is finally catching up.`,
  },
  {
    slug: "what-is-real-estate-performance-intelligence",
    title: "What Is Real Estate Performance Intelligence?",
    description:
      "Performance intelligence is a new category of real estate technology that measures agent skill rather than activity. Learn what it means and why it's emerging now.",
    datePublished: "2026-01-27",
    category: "Industry",
    tags: ["performance intelligence", "real estate technology", "proptech"],
    readingTime: "4 min read",
    content: `## Defining Performance Intelligence

Performance intelligence is a category of technology that measures, scores, and improves professional skill — not just activity or output. In real estate, this means moving beyond CRMs, transaction management systems, and lead generation platforms to answer a fundamentally different question: *how good is this agent?*

Koqi pioneered this category by building the ACCS score — the first multi-dimensional, real-time measure of agent competency.

## Why Now?

Three converging trends are making performance intelligence inevitable in real estate:

### 1. Consumer Demand for Transparency

Consumers increasingly expect verifiable quality signals when choosing service providers. In healthcare, you can check physician ratings. In law, you can verify credentials and case outcomes. Real estate is one of the last major professional services where consumers rely almost entirely on reviews and personal referrals.

ACCS gives consumers an objective, skill-based metric to evaluate agents — something the industry has never had.

### 2. Brokerage Need for Differentiation

In a market where commission compression and team consolidation are accelerating, brokerages need new ways to attract and retain top talent. Performance intelligence provides a differentiation layer: brokerages that invest in measuring and developing agent skill will attract agents who take their craft seriously.

### 3. Agent Desire for Recognition

The best agents have always known they're better than average. But "knowing" isn't the same as "proving." A top-quartile ACCS score is a portable, verifiable credential that follows an agent regardless of which brokerage they're at.

## Performance Intelligence vs. Business Intelligence

It's important to distinguish performance intelligence from business intelligence (BI) tools already common in real estate:

| Business Intelligence | Performance Intelligence |
|---|---|
| Tracks transactions, revenue, pipeline | Tracks skill, accuracy, expertise |
| Answers "how much?" | Answers "how good?" |
| Lagging indicator | Leading indicator |
| Brokerage-level view | Individual agent view |
| Activity-based | Skill-based |

Both are valuable. But performance intelligence fills a gap that BI tools were never designed to address.

## The Future of Agent Evaluation

Performance intelligence will reshape how agents are evaluated, recruited, and compensated. When objective skill metrics exist, the industry can move beyond the crude proxy of transaction volume and toward a more nuanced, accurate understanding of agent value.

Koqi is building this future. Join the private beta to be part of it.`,
  },
  {
    slug: "confidence-calibration-real-estate-agents",
    title: "Confidence Calibration: The Hidden Skill Separating Good Agents from Great Ones",
    description:
      "Confidence calibration — knowing what you know vs. what you're guessing — is a measurable skill that predicts real estate agent performance. Here's how Koqi tracks it.",
    datePublished: "2026-01-13",
    category: "Product",
    tags: ["confidence calibration", "ACCS", "agent skill"],
    readingTime: "4 min read",
    content: `## What Is Confidence Calibration?

Confidence calibration is the alignment between how confident you are in a judgment and how accurate that judgment turns out to be. A well-calibrated agent who says they're 80% confident in an estimate is right about 80% of the time. A poorly calibrated agent says they're 80% confident but is only right 50% of the time.

This isn't a soft skill. It's measurable, trainable, and one of the strongest predictors of professional performance across domains — from medicine to weather forecasting to financial analysis.

In real estate, confidence calibration is the difference between an agent who gives reliable advice and an agent who sounds confident but is essentially guessing.

## Why Calibration Matters in Real Estate

**Better client communication.** A calibrated agent can give clients honest, accurate uncertainty estimates. "I'm very confident this will sell between $850K and $880K" means something when the agent has a track record of calibrated confidence.

**Better decision-making.** Agents who know the limits of their knowledge make better strategic decisions — when to push for a higher price, when to recommend a price reduction, when to walk away from a deal.

**Better risk management.** Overconfident agents take on listings they'll end up reducing. Underconfident agents leave money on the table. Calibrated agents price correctly from the start.

## How Koqi Measures Calibration

When you submit a pricing estimate through Koqi's Estimate-to-Earn system, you also indicate your confidence level. After the property sells, Koqi compares your confidence to your accuracy.

Over time, Koqi builds a calibration curve for each agent — a visual map of how well your confidence tracks with reality. This becomes one of the five dimensions that feed your ACCS score.

## Can You Improve Calibration?

Yes. Research consistently shows that calibration improves with structured feedback and deliberate practice. The key ingredients are:

1. **Immediate feedback** — learning how accurate you were shortly after making a prediction
2. **Volume** — making many predictions across varied conditions
3. **Self-reflection** — actively thinking about what drove your confidence level

Koqi's Estimate-to-Earn system provides all three. Every estimate is a calibration rep. Every outcome is a feedback signal. Over time, agents develop a more accurate sense of what they know — and what they don't.`,
  },
  {
    slug: "zip-code-market-expertise-real-estate-local-knowledge",
    title: "ZIP Code Mastery: How Local Market Expertise Drives Real Estate Success",
    description:
      "Deep local knowledge at the ZIP code level is a measurable competitive advantage for real estate agents. Learn how Koqi maps and scores geographic expertise.",
    datePublished: "2025-12-16",
    category: "Industry",
    tags: ["local expertise", "market knowledge", "geographic specialization"],
    readingTime: "4 min read",
    content: `## The Power of Local Knowledge

Every real estate agent claims to "know the market." But there's a vast difference between general market awareness and genuine local expertise — the kind where you can price a home on a specific block with confidence because you understand the micro-factors that drive value there.

Koqi quantifies this difference. Through ZIP-level performance tracking, Koqi maps exactly where each agent's pricing accuracy is strongest and where it drops off.

## What ZIP-Level Data Reveals

When Koqi tracks your Estimate-to-Earn performance by location, patterns emerge that most agents have never seen about themselves:

- **Core zones** where your pricing accuracy is consistently high — your true area of expertise
- **Transition zones** where accuracy is moderate — familiar territory but not mastered
- **Blind spots** where estimates miss significantly — markets you think you know but don't

This geographic performance map is unique to each agent and changes over time as you practice and engage with different areas.

## Why Depth Beats Breadth

The data consistently shows that agents who go deep in fewer areas outperform agents who spread thin across an entire metro. This makes intuitive sense — a 200-square-mile "farm" means you're an expert in none of it.

Koqi's ACCS score rewards local specialization. An agent with a 92 ACCS in three ZIP codes is more valuable (to clients in those ZIPs) than an agent with a 74 ACCS spread across twenty.

## Strategic Implications

For agents, ZIP-level performance data transforms market selection from gut feel to strategy. You can see exactly where to focus prospecting, which areas to grow into next, and where you'd be better off referring to a colleague.

For brokerages, geographic performance maps reveal team coverage gaps. If no agent on your team scores above 75 in a high-value ZIP code, that's a recruiting opportunity — or a coaching priority.

## Building Your Map

Every estimate you submit through Koqi is GPS-verified and location-tagged. Over time, this builds a comprehensive picture of your geographic strengths. Agents in the private beta are already discovering patterns in their pricing accuracy that they never would have identified without data.`,
  },
  {
    slug: "real-estate-ai-coaching-personalized-performance-improvement",
    title: "AI Coaching for Real Estate Agents: Personalized Performance Improvement",
    description:
      "Koqi's AI coaching module analyzes your ACCS data to deliver personalized improvement recommendations based on your actual performance patterns.",
    datePublished: "2025-12-02",
    category: "Product",
    tags: ["AI coaching", "agent improvement", "personalized training"],
    readingTime: "4 min read",
    content: `## Why Generic Coaching Fails

The real estate coaching industry is worth billions. Yet most coaching programs deliver generic advice: prospect more, follow up faster, build your sphere. The advice isn't wrong — it's just not personalized.

A top-producing agent who struggles with condo pricing needs different coaching than a new agent who hasn't developed any local expertise. A seasoned agent with strong instincts but poor confidence calibration needs different feedback than one who's well-calibrated but geographically spread too thin.

Generic coaching can't make these distinctions. Data-driven coaching can.

## How Koqi's AI Coaching Works

Koqi's AI coaching module analyzes your ACCS data across all five dimensions and delivers personalized recommendations based on your actual performance patterns.

**Pattern recognition.** The AI identifies systematic biases in your estimates. Maybe you consistently overprice properties above $1M. Maybe you're sharp on single-family homes but lose accuracy on condos. These patterns become coaching inputs.

**Targeted drills.** Based on your identified patterns, Koqi serves up Estimate-to-Earn challenges specifically designed to strengthen your weaknesses. If condo pricing is your gap, you'll see more condo estimates in your feed.

**Progress tracking.** As you work on specific dimensions, the AI tracks your improvement over time. Calibration getting tighter? Local expertise expanding? The coaching module shows you the trajectory, not just the snapshot.

## The Deliberate Practice Framework

Koqi's coaching approach is built on the deliberate practice framework — the same methodology that produces elite performers in music, chess, medicine, and athletics:

1. **Break the skill into components.** ACCS decomposes "pricing ability" into five measurable dimensions.
2. **Identify the weakest component.** Data reveals which dimension is holding your overall score back.
3. **Design targeted practice.** Estimate-to-Earn challenges focus on the specific skill gap.
4. **Provide immediate feedback.** Every estimate gets scored against reality.
5. **Repeat.** Continuous practice with continuous feedback produces continuous improvement.

## Beyond Scripts and Mindset

Real estate coaching has been dominated by scripts (what to say) and mindset (how to think). Both matter. But neither addresses the technical skill that clients value most: accurately understanding property value.

Koqi's AI coaching fills this gap by treating pricing as a trainable skill — not a talent you either have or don't. The agents who embrace this approach will develop a measurable, demonstrable edge.`,
  },
  {
    slug: "how-real-estate-consumers-can-evaluate-agent-quality",
    title: "How to Evaluate a Real Estate Agent's Actual Skill (Not Just Reviews)",
    description:
      "Reviews and transaction counts don't tell you if a real estate agent is actually skilled. Learn what metrics to look for and how ACCS provides verifiable quality signals.",
    datePublished: "2025-11-18",
    category: "Consumer",
    tags: ["choosing an agent", "agent quality", "consumer guide"],
    readingTime: "5 min read",
    content: `## The Problem with Current Agent Evaluation

You're buying or selling a home — likely the largest financial transaction of your life. How do you choose the right agent?

Current options are limited:

- **Online reviews** are helpful but easily gamed and often reflect personality more than skill
- **Transaction count** tells you volume, not quality — a busy agent isn't necessarily a skilled one
- **Years of experience** measures time, not competence — plenty of 20-year agents still misprice consistently
- **Personal referrals** are trustworthy but limited to your social circle

None of these signals answer the question that matters most: *can this agent accurately price my property?*

## Why Pricing Accuracy Is the Signal That Matters

When you hire a real estate agent, you're primarily paying for two things: market access and pricing judgment. Market access is increasingly commoditized by technology. Pricing judgment is not.

An agent with strong pricing accuracy will:
- Price your listing correctly from day one (avoiding costly price reductions)
- Identify undervalued properties before the rest of the market (buyer advantage)
- Give you realistic expectations about what your home is worth (no false promises)
- Navigate negotiations with confidence anchored to real data

This is exactly what the ACCS score measures.

## What ACCS Tells You as a Consumer

When evaluating an agent's ACCS score, here's what each dimension means for you:

**Pricing Accuracy (most important for consumers):** This agent has a track record of estimating property values correctly. Higher accuracy means better advice.

**Confidence Calibration:** This agent knows the difference between what they're confident about and what they're uncertain about. They'll give you honest, reliable guidance.

**Local Specialization:** This agent has demonstrated pricing accuracy specifically in your area — not just in the broader market.

**Property Type Expertise:** If you're selling a condo, you want an agent who's proven at pricing condos. ACCS breaks this down.

**Engagement Consistency:** This agent is actively practicing and staying sharp, not coasting on credentials from years ago.

## The Future of Agent Selection

The real estate industry is moving toward a world where agent quality is verifiable, not anecdotal. ACCS is the first step — an objective, data-driven measure of the skill that matters most.

When you can compare agents by actual pricing accuracy in your specific market, the decision becomes much clearer. And agents who invest in their craft finally get the recognition they deserve.`,
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(posts.map((p) => p.category))];
}

export function getAllTags(): string[] {
  return [...new Set(posts.flatMap((p) => p.tags))];
}
