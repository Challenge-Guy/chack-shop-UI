import { userEvent, render, renderHook, fireEvent } from "@chakra-ui/test-utils"
import * as React from "react"
import {
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInputProps,
  useNumberInput,
} from ".."

function Component(props: NumberInputProps) {
  return (
    <NumberInput data-testid="root" {...props}>
      <NumberInputField data-testid="input" />
      <NumberInputStepper data-testid="group">
        <NumberIncrementStepper children="+" data-testid="up-btn" />
        <NumberDecrementStepper children="-" data-testid="down-btn" />
      </NumberInputStepper>
    </NumberInput>
  )
}

/**
 * Get some inspiration here
 * https://github.com/palantir/blueprint/blob/3aa56473d253f5287e0960759bee367a9ff3e045/packages/core/test/controls/numericInputTests.tsx
 * https://github.com/deberoppa7/react-numeric-input/blob/master/src/index.test.js
 */

test("it renders correctly", () => {
  const tools = render(<Component />)
  expect(tools.asFragment()).toMatchSnapshot()
})

test("has value of 0 by default", () => {
  const { result } = renderHook(() => useNumberInput())
  expect(result.current.value).toBe(0)
})

test("should increment when I press increment button", () => {
  const tools = render(<Component />)

  const upBtn = tools.getByTestId("up-btn")
  const input = tools.getByTestId("input")

  userEvent.click(upBtn)
  expect(input).toHaveValue("1")

  userEvent.dblClick(upBtn)
  expect(input).toHaveValue("3")
})

test("should call onChange on value change", () => {
  const onChange = jest.fn()
  const tools = render(<Component onChange={onChange} />)

  const upBtn = tools.getByTestId("up-btn")

  userEvent.click(upBtn)

  expect(onChange).toBeCalled()
  expect(onChange).toBeCalledWith(1, "1")
})

test("should constrain value onBlur", () => {
  const tools = render(<Component max={30} />)

  const input = tools.getByTestId("input")

  userEvent.type(input, "34.50")
  fireEvent.blur(input)

  expect(input).toHaveValue("30")
})
