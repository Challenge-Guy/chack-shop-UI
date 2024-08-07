import { For, Stack, VStack } from "@chakra-ui/react"
import { DecorativeBox } from "compositions/lib/decorative-box"
import { LuBox } from "react-icons/lu"

export const ForWithFallback = () => {
  return (
    <Stack gap="4">
      <For
        each={[]}
        fallback={
          <VStack textAlign="center" fontWeight="medium">
            <LuBox />
            No items to show
          </VStack>
        }
      >
        {(item) => <DecorativeBox h="10">{item}</DecorativeBox>}
      </For>
    </Stack>
  )
}
