"use client"

import { Collapsible as ArkCollapsible } from "@ark-ui/react/collapsible"
import type { Assign } from "@chakra-ui/utils"
import {
  type HTMLChakraProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useCollapsibleStyles,
} = createSlotRecipeContext({ key: "collapsible" })

export { useCollapsibleStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface CollapsibleRootBaseProps
  extends Assign<ArkCollapsible.RootBaseProps, SlotRecipeProps<"collapsible">>,
    UnstyledProp {}

export interface CollapsibleRootProps
  extends HTMLChakraProps<"div", CollapsibleRootBaseProps> {}

export const CollapsibleRoot = withProvider<
  HTMLDivElement,
  CollapsibleRootProps
>(ArkCollapsible.Root, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface CollapsibleTriggerProps
  extends HTMLChakraProps<"button", ArkCollapsible.TriggerBaseProps> {}

export const CollapsibleTrigger = withContext<
  HTMLButtonElement,
  CollapsibleTriggerProps
>(ArkCollapsible.Trigger, "trigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface CollapsibleContentProps
  extends HTMLChakraProps<"div", ArkCollapsible.ContentBaseProps> {}

export const CollapsibleContent = withContext<
  HTMLDivElement,
  CollapsibleContentProps
>(ArkCollapsible.Content, "content", { forwardAsChild: true })
