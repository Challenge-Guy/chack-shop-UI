import { Button, Card, Heading, Image, Stack, Text } from "@chakra-ui/react"

export const CardWithImage = () => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Card.Body>
        <Stack>
          <Heading size="md" fontWeight="semibold">
            Living room Sofa
          </Heading>
          <Text color="fg.muted">
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces.
          </Text>
          <Text fontSize="2xl" letterSpacing="tight" fontWeight="semibold">
            $450
          </Text>
        </Stack>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  )
}
