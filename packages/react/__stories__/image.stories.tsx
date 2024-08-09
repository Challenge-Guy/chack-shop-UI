import type { Meta } from "@storybook/react"
import { Box } from "../src"

export default {
  title: "Components / Image",
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { ImageBasic as Basic } from "compositions/examples/image-basic"
export { ImageWithAspectRatio as WithAspectRatio } from "compositions/examples/image-with-aspect-ratio"
export { ImageWithFit as WithFit } from "compositions/examples/image-with-fit"
export { ImageWithHeight as WithHeight } from "compositions/examples/image-with-height"
export { ImageCircular as Circular } from "compositions/examples/image-circular"
