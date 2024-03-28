"use client"

import { raf } from "@zag-js/dom-utils"
import { RefObject, useEffect, useState } from "react"

class DialogManager {
  nodes: Map<HTMLElement, number>
  constructor() {
    this.nodes = new Map()
  }

  add(node: HTMLElement) {
    this.nodes.set(node, this.nodes.size + 1)
    return this.nodes.size
  }

  remove(node: HTMLElement) {
    this.nodes.delete(node)
  }

  isTopMost(node: HTMLElement | null) {
    if (!node) return false
    return this.nodes.get(node) === this.nodes.size
  }
}

export const dialogManager = new DialogManager()

export function useDialogManager(ref: RefObject<HTMLElement>, open?: boolean) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let cleanup: VoidFunction

    const rafCleanup = raf(() => {
      const node = ref.current

      if (!node) return

      if (open) {
        const index = dialogManager.add(node)
        setIndex(index)
      }

      cleanup = () => {
        dialogManager.remove(node)
        setIndex(0)
      }
    })

    return () => {
      rafCleanup()
      cleanup?.()
    }
  }, [open, ref])

  return index
}
