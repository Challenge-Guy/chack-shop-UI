import type { Meta } from "@storybook/react"
import { Box } from "../src"

export default {
  title: "WIP / Donut Chart",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { DonutChartBasic as Basic } from "compositions/chart/donut-chart-basic"
export { DonutChartWithPointLabel as PointLabel } from "compositions/chart/donut-chart-with-point-label"
export { DonutWithCenteredText as CenteredText } from "compositions/chart/donut-with-centered-text"
