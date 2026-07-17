import { useEffect, useState } from 'react'

const LOG_LINES = [
  '$ python train.py --model geo-llm-7b',
  '[OK] loading stratigraphic corpus... 18,204 docs',
  '[OK] building vector index for RAG retrieval',
  '$ curl -X POST /infer -d "query=geoscience QA"',
  '[200] response in 340ms',
  '$ crontab -l | grep hermes-agent',
  '[OK] 4 scheduled jobs active',
  '$ evaluate --benchmark bracis-2026',
  '[OK] contextual grounding score: 0.87',
  '$ deploy --target aws-lightsail',
  '[OK] orchestrator/subagent stack live',
]

export default function TerminalPanel() {
  const [visible, setVisible] = useState(1)

  useEffect(() => {
    if (visible >= LOG_LINES.length) {
      const reset = setTimeout(() => setVisible(1), 2200)
      return () => clearTimeout(reset)
    }
    const id = setTimeout(() => setVisible((v) => v + 1), 550)
    return () => clearTimeout(id)
  }, [visible])

  return (
    <div className="terminal-chrome relative w-full max-w-md overflow-hidden rounded-md shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg-inset)] px-3 py-2">
        <span className="terminal-dot bg-[#ff5f56]" />
        <span className="terminal-dot bg-[#ffbd2e]" />
        <span className="terminal-dot bg-[#27c93f]" />
        <span className="ml-2 font-mono text-[11px] text-[var(--color-text-faint)]">
          arfn@malta-lab:~/research
        </span>
      </div>
      <div className="h-64 space-y-1.5 overflow-hidden p-4 font-mono text-[12px] leading-relaxed">
        {LOG_LINES.slice(0, visible).map((line, i) => (
          <p
            key={i}
            className={
              line.startsWith('[OK]')
                ? 'text-[var(--color-ok)]'
                : line.startsWith('[200]')
                ? 'text-[var(--color-accent)]'
                : 'text-[var(--color-text-dim)]'
            }
          >
            {line}
          </p>
        ))}
        <span className="inline-block h-3 w-1.5 bg-[var(--color-accent)] caret align-middle" />
      </div>
    </div>
  )
}
