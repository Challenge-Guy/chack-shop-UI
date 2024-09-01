"use client"

import {
  Steps as ArkSteps,
  StepsItemContext as ArkStepsItemContext,
} from "@ark-ui/react/steps"
import type { Assign } from "@chakra-ui/utils"
import { forwardRef } from "react"
import {
  type HTMLChakraProps,
  type SlotRecipeProps,
  type UnstyledProp,
  chakra,
  createSlotRecipeContext,
} from "../../styled-system"
import { CheckIcon } from "../icons"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useStepsStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "steps" })

export { useStepsStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface StepsRootBaseProps
  extends Assign<ArkSteps.RootBaseProps, SlotRecipeProps<"steps">>,
    UnstyledProp {}

export interface StepsRootProps
  extends HTMLChakraProps<"div", StepsRootBaseProps> {}

export const StepsRoot = withProvider<HTMLDivElement, StepsRootProps>(
  ArkSteps.Root,
  "root",
  { forwardAsChild: true },
)

export const StepsRootPropsProvider =
  PropsProvider as React.Provider<StepsRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface StepsListProps
  extends HTMLChakraProps<"div", ArkSteps.ListBaseProps> {}

export const StepsList = withContext<HTMLDivElement, StepsListProps>(
  ArkSteps.List,
  "list",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface StepsItemProps
  extends HTMLChakraProps<"div", ArkSteps.ItemBaseProps> {}

export const StepsItem = withContext<HTMLDivElement, StepsItemProps>(
  ArkSteps.Item,
  "item",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface StepsTriggerProps
  extends HTMLChakraProps<"button", ArkSteps.TriggerBaseProps> {}

export const StepsTrigger = withContext<HTMLButtonElement, StepsTriggerProps>(
  ArkSteps.Trigger,
  "trigger",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface StepsContentProps
  extends HTMLChakraProps<"div", ArkSteps.ContentBaseProps> {}

export const StepsContent = withContext<HTMLDivElement, StepsContentProps>(
  ArkSteps.Content,
  "content",
  { forwardAsChild: true },
)

export interface StepsCompletedContentProps extends HTMLChakraProps<"div"> {}

export const StepsCompletedContent = withContext<
  HTMLDivElement,
  StepsCompletedContentProps
>(ArkSteps.CompletedContent, "content")

////////////////////////////////////////////////////////////////////////////////////

export interface StepsNumberProps extends HTMLChakraProps<"div"> {}

export const StepsNumber = forwardRef<HTMLDivElement, StepsNumberProps>(
  function StepsNumber(props, ref) {
    return (
      <ArkStepsItemContext>
        {(api) => (
          <chakra.div ref={ref} {...props}>
            {api.index + 1}
          </chakra.div>
        )}
      </ArkStepsItemContext>
    )
  },
)

////////////////////////////////////////////////////////////////////////////////////

export interface StepsTitleProps extends HTMLChakraProps<"div"> {}

export const StepsTitle = withContext<HTMLDivElement, StepsTitleProps>(
  "div",
  "title",
)

////////////////////////////////////////////////////////////////////////////////////

export interface StepsDescriptionProps extends HTMLChakraProps<"div"> {}

export const StepsDescription = withContext<
  HTMLDivElement,
  StepsDescriptionProps
>("div", "description")

////////////////////////////////////////////////////////////////////////////////////

export interface StepsSeparatorProps
  extends HTMLChakraProps<"div", ArkSteps.SeparatorBaseProps> {}

export const StepsSeparator = withContext<HTMLDivElement, StepsSeparatorProps>(
  ArkSteps.Separator,
  "separator",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface StepsStatusProps {
  complete: React.ReactNode
  incomplete: React.ReactNode
  current?: React.ReactNode
}

export const StepsStatus = (props: StepsStatusProps) => {
  return (
    <ArkStepsItemContext>
      {(api) => {
        if (api.current) return <>{props.current ?? props.incomplete}</>
        if (api.completed) return <>{props.complete}</>
        return <>{props.incomplete ?? props.current}</>
      }}
    </ArkStepsItemContext>
  )
}

////////////////////////////////////////////////////////////////////////////////////

export interface StepsIndicatorProps
  extends HTMLChakraProps<"div", ArkSteps.IndicatorBaseProps> {}

export const StepsIndicator = withContext<HTMLDivElement, StepsIndicatorProps>(
  ArkSteps.Indicator,
  "indicator",
  {
    forwardAsChild: true,
    defaultProps: {
      children: (
        <StepsStatus complete={<CheckIcon />} incomplete={<StepsNumber />} />
      ),
    },
  },
)

////////////////////////////////////////////////////////////////////////////////////

export interface StepsNextTriggerProps
  extends HTMLChakraProps<"button", ArkSteps.NextTriggerBaseProps> {}

export const StepsNextTrigger = withContext<
  HTMLButtonElement,
  StepsNextTriggerProps
>(ArkSteps.NextTrigger, "nextTrigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface StepsPrevTriggerProps
  extends HTMLChakraProps<"button", ArkSteps.PrevTriggerBaseProps> {}

export const StepsPrevTrigger = withContext<
  HTMLButtonElement,
  StepsPrevTriggerProps
>(ArkSteps.PrevTrigger, "prevTrigger", { forwardAsChild: true })
