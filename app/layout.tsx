import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Instant Contextual Screenshot Reader",
    "one_liner": "Transform screenshots into actionable insights with a single click.",
    "why_now": "With remote work increasing, tools to streamline information processing are in high demand.",
    "novel_mechanism": "Utilizing AI to summarize key insights directly from extracted text.",
    "ai_stack": [
      "GPT",
      "RAG",
      "Vision",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Summarizing meeting notes from screenshots",
      "Extracting research data from academic articles"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "OCR processing",
        "Summarization algorithm",
        "User interface"
      ],
      "tools": [
        "Next.js",
        "Firebase",
        "OpenAI API"
      ],
      "data_bootstrap": [
        "public datasets of documents",
        "synthetic text input"
      ],
      "risk": [
        "technical feasibility",
        "user adoption"
      ],
      "mitigation": [
        "start with simple use cases",
        "gather early feedback from users"
      ]
    },
    "go_to_market": {
      "hooks": [
        "transformative results demo",
        "time saved vs traditional methods"
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Reddit"
      ],
      "pricing": {
        "free": "limited daily uses",
        "pro": "$9/month for unlimited access",
        "business": "custom pricing for teams"
      }
    },
    "moat": [
      "user-generated content for improvement",
      "initial integrations with popular tools",
      "community-driven feature requests"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 6,
      "defensibility": 7
    },
    "total_score": 28,
    "reasoning": "It captures the essence of transforming static images into dynamic, actionable information, which is not widely addressed by existing tools."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}