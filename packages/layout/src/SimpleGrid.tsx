import { Prop } from "@chakra-ui/system"
import { mapResponsive, isNumber, isNull, __DEV__ } from "@chakra-ui/utils"
import React, { forwardRef } from "react"
import { Grid, GridOptionProps } from "./Grid"

interface SimpleGridOptions {
  /**
   * The width at which child elements will break into columns. Pass a number for pixel values or a string for any other valid CSS length.
   */
  minChildWidth?: GridOptionProps["minWidth"]
  /**
   * The number of columns
   */
  columns?: Prop<number>
  /**
   * The gap between the grid items
   */
  spacing?: GridOptionProps["gridGap"]
  /**
   * The column gap between the grid items
   */
  spacingX?: GridOptionProps["gridGap"]
  /**
   * The row gap between the grid items
   */
  spacingY?: GridOptionProps["gridGap"]
}

export type SimpleGridProps = GridOptionProps & SimpleGridOptions

/**
 * SimpleGrid
 *
 * React component make that providers a simpler interface, and
 * make its easy to create responsive grid layouts.
 *
 * @see Docs https://chakra-ui.com/simplegrid
 */
export const SimpleGrid = forwardRef(
  (props: SimpleGridProps, ref: React.Ref<any>) => {
    const {
      columns,
      spacingX,
      spacingY,
      spacing,
      minChildWidth,
      ...rest
    } = props

    const templateColumns = Boolean(minChildWidth)
      ? widthToColumns(minChildWidth)
      : countToColumns(columns)

    return (
      <Grid
        ref={ref}
        gap={spacing}
        columnGap={spacingX}
        rowGap={spacingY}
        templateColumns={templateColumns}
        {...rest}
      />
    )
  },
)

if (__DEV__) {
  SimpleGrid.displayName = "SimpleGrid"
}

const toPx = (n: string | number) => {
  return isNumber(n) ? n + "px" : n
}

const widthToColumns = (width: any) => {
  return mapResponsive(width, value =>
    isNull(value) ? null : `repeat(auto-fit, minmax(${toPx(value)}, 1fr))`,
  )
}

const countToColumns = (count: any) => {
  return mapResponsive(count, value =>
    isNull(value) ? null : `repeat(${value}, 1fr)`,
  )
}
