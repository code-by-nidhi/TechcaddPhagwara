'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Icon from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import { useMouseParallax } from '@/hooks/useMouseParallax'
import { loadGsap, prefersReducedMotion } from '@/lib/gsap'
import { journeySteps, aiTools } from '@/data/site'

interface ToolSlot {
  top: string
  left?: string
  right?: string
  depth: string
  dur: string
  delay: string
}

/** Where each AI tool badge floats, as % of the roadmap box. */
const TOOL_SLOTS: ToolSlot[] = [
  { top: '2%', left: '4%', depth: '16px', dur: '15s', delay: '0s' },
  { top: '9%', right: '6%', depth: '11px', dur: '18s', delay: '1.2s' },
  { top: '20%', left: '1%', depth: '20px', dur: '14s', delay: '0.6s' },
  { top: '27%', right: '2%', depth: '14px', dur: '19s', delay: '2.4s' },
  { top: '38%', left: '5%', depth: '9px', dur: '16s', delay: '1.8s' },
  { top: '46%', right: '5%', depth: '18px', dur: '21s', delay: '0.3s' },
  { top: '55%', left: '2%', depth: '13px', dur: '17s', delay: '2.9s' },
  { top: '63%', right: '3%', depth: '22px', dur: '15s', delay: '1.5s' },
  { top: '73%', left: '6%', depth: '10px', dur: '20s', delay: '0.9s' },
  { top: '80%', right: '7%', depth: '16px', dur: '18s', delay: '2.1s' },
  { top: '90%', left: '3%', depth: '12px', dur: '16s', delay: '1.1s' },
  { top: '95%', right: '4%', depth: '19px', dur: '22s', delay: '0.5s' },
]

interface Wire {
  d: string
  w: number
  h: number
}

export default function Journey() {
  const roadmapRef = useRef<HTMLDivElement | null>(null)
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])
  const coreRef = useRef<SVGPathElement | null>(null)
  const toolsRef = useMouseParallax<HTMLDivElement>({ damp: 0.06 })

  const [wire, setWire] = useState<Wire>({ d: '', w: 0, h: 0 })

  /* ---- build the serpentine path from the real node positions --------- */
  const measure = useCallback(() => {
    const box = roadmapRef.current
    if (!box) return

    const rect = box.getBoundingClientRect()
    const points = nodeRefs.current
      .filter((n): n is HTMLDivElement => Boolean(n))
      .map((node) => {
        const r = node.getBoundingClientRect()
        return {
          x: r.left - rect.left + r.width / 2,
          y: r.top - rect.top + r.height / 2,
        }
      })

    if (points.length < 2) return

    const amp = Math.min(rect.width * 0.09, 78)
    const first = points[0]!
    let d = `M ${first.x.toFixed(1)} ${first.y.toFixed(1)}`

    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1]!
      const b = points[i]!
      const dir = i % 2 === 0 ? -1 : 1
      const cx = (a.x + b.x) / 2 + dir * amp
      const cy = (a.y + b.y) / 2
      d += ` Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
    }

    setWire({ d, w: rect.width, h: rect.height })
  }, [])

  useLayoutEffect(() => {
    measure()

    const box = roadmapRef.current
    if (!box || typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }

    const ro = new ResizeObserver(measure)
    ro.observe(box)
    return () => ro.disconnect()
  }, [measure])

  /* ---- draw the energy core in as the section scrolls ----------------- */
  useEffect(() => {
    const core = coreRef.current
    if (!core || !wire.d || prefersReducedMotion()) return

    let cancelled = false
    let tween: ReturnType<typeof import('gsap').gsap.to> | undefined

    void loadGsap().then(({ gsap }) => {
      if (cancelled || !core) return

      const length = core.getTotalLength()
      gsap.set(core, { strokeDasharray: length, strokeDashoffset: length })

      tween = gsap.to(core, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: roadmapRef.current,
          start: 'top 72%',
          end: 'bottom 78%',
          scrub: 0.7,
        },
      })
    })

    return () => {
      cancelled = true
      tween?.scrollTrigger?.kill()
      tween?.kill()
    }
  }, [wire.d])

  return (
    <section className="journey section" id="journey">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="Your Learning Roadmap"
          eyebrowIcon="compass"
          title="Nine milestones from"
          highlight="curious to hired"
          lead="Every student moves along the same track — with a mentor, a deadline and a checkpoint at each stage. The line below is live energy, and so is the process."
        />

        <div className="journey__inner">
          {/* floating AI tool badges around the roadmap */}
          <div className="journey__tools" ref={toolsRef} aria-hidden="true">
            {aiTools.map((tool, i) => {
              const slot = TOOL_SLOTS[i % TOOL_SLOTS.length]!
              return (
                <span
                  className="ai-tool"
                  key={tool.name}
                  style={{
                    top: slot.top,
                    left: slot.left,
                    right: slot.right,
                    '--depth': slot.depth,
                    '--dur': slot.dur,
                    '--delay': slot.delay,
                  }}
                >
                  <span className="ai-tool__mark" style={{ background: tool.color }}>
                    {tool.short}
                  </span>
                  {tool.name}
                </span>
              )
            })}
          </div>

          {/* ------------------------------------------------- the track */}
          <div className="roadmap" ref={roadmapRef}>
            <svg
              className="roadmap__wire"
              viewBox={`0 0 ${wire.w || 1} ${wire.h || 1}`}
              width={wire.w || undefined}
              height={wire.h || undefined}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="wireGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563FF" />
                  <stop offset="50%" stopColor="#04124A" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>

                <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>

                <filter id="wireGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {wire.d && (
                <>
                  <path id="jw-path" className="wire__base" d={wire.d} />
                  <path ref={coreRef} className="wire__core" d={wire.d} />
                  <path className="wire__flow" d={wire.d} />
                  <path className="wire__flow wire__flow--b" d={wire.d} />
                  <path className="wire__spark" d={wire.d} />

                  {/* particles riding the wire */}
                  {[0, 1, 2].map((i) => (
                    <circle className="wire__particle" r={i === 1 ? 3.4 : 2.4} key={i}>
                      <animateMotion
                        dur={`${7 + i * 2.5}s`}
                        repeatCount="indefinite"
                        begin={`${i * 2.2}s`}
                      >
                        <mpath href="#jw-path" />
                      </animateMotion>
                    </circle>
                  ))}
                </>
              )}
            </svg>

            {journeySteps.map((step, i) => (
              <article
                className="milestone"
                key={step.title}
                data-reveal={i % 2 === 0 ? 'left' : 'right'}
                data-reveal-delay={40}
              >
                <div className="milestone__card glass">
                  <span className="milestone__step">
                    <Icon name="zap" size={12} />
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

                <div
                  className="milestone__node"
                  style={{ '--i': i }}
                  ref={(el) => {
                    nodeRefs.current[i] = el
                  }}
                  role="img"
                  aria-label={`${step.title}: ${step.text}`}
                >
                  <Icon name={step.icon} />
                  <span className="milestone__index">{i + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
