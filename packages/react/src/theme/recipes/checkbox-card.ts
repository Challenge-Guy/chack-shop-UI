import { checkboxCardAnatomy } from "../../anatomy"
import { defineSlotRecipe } from "../../styled-system"
import { checkmarkRecipe } from "./checkmark"

export const checkboxCardSlotRecipe = defineSlotRecipe({
  slots: checkboxCardAnatomy.keys(),
  className: "chakra-checkbox-card",
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      userSelect: "none",
      position: "relative",
      borderRadius: "sm",
      flex: "1",
      focusVisibleRing: "outside",
      _disabled: {
        opacity: "0.8",
        borderColor: "border.subtle",
      },
      _invalid: {
        outline: "2px solid",
        outlineColor: "border.error",
      },
    },
    control: {
      display: "inline-flex",
      flex: "1",
      position: "relative",
      rounded: "inherit",
      justifyContent: "var(--checkbox-card-justify)",
      alignItems: "var(--checkbox-card-align)",
    },
    label: {
      fontWeight: "medium",
      display: "flex",
      alignItems: "center",
      gap: "2",
      _disabled: {
        opacity: "0.5",
      },
    },
    addon: {
      _disabled: {
        opacity: "0.5",
      },
    },
    indicator: checkmarkRecipe.base,
    content: {
      display: "flex",
      flexDirection: "column",
      flex: "1",
      gap: "1",
      justifyContent: "var(--checkbox-card-justify)",
      alignItems: "var(--checkbox-card-align)",
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          textStyle: "sm",
        },
        control: {
          padding: "3",
          gap: "1.5",
        },
        addon: {
          px: "3",
          py: "1.5",
          borderTopWidth: "1px",
        },
        indicator: checkmarkRecipe.variants?.size.sm,
      },
      md: {
        root: {
          textStyle: "sm",
        },
        control: {
          padding: "4",
          gap: "2.5",
          rounded: "md",
        },
        addon: {
          px: "4",
          py: "2",
          borderTopWidth: "1px",
        },
        indicator: checkmarkRecipe.variants?.size.md,
      },
      lg: {
        root: {
          textStyle: "md",
        },
        control: {
          padding: "4",
          gap: "3.5",
        },
        addon: {
          px: "4",
          py: "2",
          borderTopWidth: "1px",
        },
        indicator: checkmarkRecipe.variants?.size.lg,
      },
    },

    variant: {
      surface: {
        root: {
          borderWidth: "1px",
          borderColor: "border",
          bg: "bg",
          _checked: {
            bg: "colorPalette.muted",
            color: "colorPalette.fg",
            borderColor: "colorPalette.emphasized",
          },
          _disabled: {
            bg: "bg.subtle",
          },
        },
        indicator: checkmarkRecipe.variants?.variant.outline,
      },

      subtle: {
        root: {
          bg: "bg.subtle",
        },
        control: {
          _checked: {
            bg: "colorPalette.subtle",
            color: "colorPalette.fg",
          },
        },
        indicator: checkmarkRecipe.variants?.variant.plain,
      },

      outline: {
        root: {
          borderWidth: "1px",
          borderColor: "border",
          bg: "bg",
          _checked: {
            boxShadow: "0 0 0 1px var(--shadow-color)",
            boxShadowColor: "colorPalette.solid",
            borderColor: "colorPalette.solid",
          },
        },
        indicator: checkmarkRecipe.variants?.variant.outline,
      },

      solid: {
        root: {
          borderWidth: "1px",
          bg: "bg",
          _checked: {
            bg: "colorPalette.solid",
            color: "colorPalette.contrast",
            borderColor: "colorPalette.solid",
          },
        },
        indicator: checkmarkRecipe.variants?.variant.inverted,
      },
    },

    justify: {
      start: {
        root: { "--checkbox-card-justify": "flex-start" },
      },
      end: {
        root: { "--checkbox-card-justify": "flex-end" },
      },
      center: {
        root: { "--checkbox-card-justify": "center" },
      },
    },

    align: {
      start: {
        root: { "--checkbox-card-align": "flex-start" },
        content: { textAlign: "start" },
      },
      end: {
        root: { "--checkbox-card-align": "flex-end" },
        content: { textAlign: "end" },
      },
      center: {
        root: { "--checkbox-card-align": "center" },
        content: { textAlign: "center" },
      },
    },

    orientation: {
      vertical: {
        control: { flexDirection: "column" },
      },
      horizontal: {
        control: { flexDirection: "row" },
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
    align: "start",
    orientation: "horizontal",
  },
})
