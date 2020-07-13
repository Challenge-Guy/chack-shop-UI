import { MotionConfig } from "../motion-config"

export const fade: MotionConfig = {
  timeout: 120,
  transition: {
    easing: "ease-in-out",
    duration: "120ms",
    property: "common",
  },
  enter: {
    from: { opacity: 0.01 },
    to: { opacity: 1 },
  },
  exit: {
    from: { opacity: 1 },
    to: { opacity: 0.01 },
  },
}
