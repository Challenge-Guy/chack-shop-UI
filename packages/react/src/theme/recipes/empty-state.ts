import { defineSlotRecipe } from "../../styled-system"

export const emptyStateSlotRecipe = defineSlotRecipe({
  slots: ["root", "content", "indicator"],
  base: {
    root: {
      bg: "bg.subtle",
      rounded: "md",
      width: "full",
      borderWidth: "1px",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bg: "bg",
      rounded: "md",
      borderWidth: "1px",
    },
  },

  variants: {
    size: {
      lg: {
        root: {
          px: "12",
          py: "16",
        },
        content: {
          gap: "6",
        },
        indicator: {
          padding: "4",
          height: "12",
        },
      },
      md: {
        root: {
          px: "8",
          py: "12",
        },
        content: {
          gap: "4",
        },
        indicator: {
          padding: "3",
          height: "10",
        },
      },
    },
  },

  defaultVariants: {
    size: "lg",
  },
})
