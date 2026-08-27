import { RotateCcw } from 'lucide-react'

import { Button } from '../../components/common/Button'
import { SortableList } from '../../components/data/SortableList'
import { DEFAULT_SECTION_ORDER, SECTION_LABELS } from './pageSections'

interface SectionOrderEditorProps {
  value: string[]
  onChange: (value: string[]) => void
  /** Sections switched off elsewhere on this tab, shown greyed rather than hidden. */
  hidden?: string[]
}

/**
 * Drag to rearrange the page.
 *
 * Shows every section, including the ones switched off, because "where would
 * this go if I turned it back on" is a question an editor asks while deciding
 * whether to. A hidden section keeps its place in the list and says it is
 * hidden.
 *
 * An empty stored value means "as written", so the list is seeded from the
 * template order rather than appearing empty — an empty reorder control reads
 * as a broken one.
 */
export function SectionOrderEditor({ value, onChange, hidden = [] }: SectionOrderEditorProps) {
  // Stored first, then anything the template has gained since — so a section
  // added later shows up at the end instead of disappearing from the list.
  const order = [
    ...value.filter((id) => SECTION_LABELS.has(id)),
    ...DEFAULT_SECTION_ORDER.filter((id) => !value.includes(id)),
  ]

  const items = order.map((id) => ({ id }))
  const isDefault = order.join() === DEFAULT_SECTION_ORDER.join()

  return (
    <div className="space-y-3">
      <SortableList
        items={items}
        getId={(item) => item.id}
        onReorder={(next) => onChange(next.map((item) => item.id))}
        renderItem={(item, index) => {
          const off = hidden.includes(item.id)
          return (
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-400 tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={off ? 'text-sm text-slate-400 line-through' : 'text-sm text-slate-800'}>
                {SECTION_LABELS.get(item.id) ?? item.id}
              </span>
              {off && (
                <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-medium text-slate-500">
                  Hidden
                </span>
              )}
            </div>
          )
        }}
      />

      <Button
        variant="ghost"
        size="sm"
        icon={RotateCcw}
        disabled={isDefault}
        onClick={() => onChange([])}
      >
        Reset to the standard order
      </Button>
    </div>
  )
}
