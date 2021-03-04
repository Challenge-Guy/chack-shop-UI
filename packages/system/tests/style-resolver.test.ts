import { toCSSVar } from "@chakra-ui/styled-system"
import defaultTheme from "@chakra-ui/theme"
import { toCSSObject } from "../src/system"

const theme = toCSSVar({
  ...defaultTheme,
  layerStyles: {
    v1: {
      color: "red.300",
      bg: "tomato",
    },
  },
  textStyles: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: "wide",
      fontSize: "lg",
    },
    lower: {
      textTransform: "lowercase",
      letterSpacing: "0.2px",
      fontSize: "sm",
    },
  },
})

test("should resolve styles correctly", () => {
  const result = toCSSObject({ baseStyle: { bgPosition: "center" } })({
    theme,
    layerStyle: "v1",
    noOfLines: [3, 4],
    __css: {
      px: 4,
      color: "green.300",
    },
    css: {
      paddingLeft: 40,
    },
    color: "pink.300",
    px: 5,
    textTransform: "capitalize",
    apply: { base: "textStyles.caps", sm: "textStyles.lower" },
    sx: {
      letterSpacing: "2px",
    },
    letterSpacing: ["8px", "50px"],
    fontSize: [10, 23],
    backgroundPosition: "top left",
    _hover: {
      bg: "green.300",
      fontSize: [12, 26],
      _before: {
        content: "",
        display: "block",
      },
    },
  })

  expect(result).toMatchInlineSnapshot(`
    Array [
      Object {
        "&:hover, &[data-hover]": Object {
          "&::before": Object {
            "content": "",
            "display": "block",
          },
          "@media screen and (min-width: 30em)": Object {
            "fontSize": "26px",
          },
          "background": "var(--ck-colors-green-300)",
          "fontSize": "12px",
        },
        "--line-clamp": 3,
        "@media screen and (min-width: 30em)": Object {
          "--line-clamp": 4,
          "fontSize": "23px",
          "letterSpacing": "0.2px",
          "textTransform": "lowercase",
        },
        "WebkitBoxOrient": "vertical",
        "WebkitLineClamp": "var(--line-clamp)",
        "background": "tomato",
        "backgroundPosition": "top left",
        "color": "var(--ck-colors-red-300)",
        "display": "-webkit-box",
        "fontSize": "10px",
        "letterSpacing": "2px",
        "overflow": "hidden",
        "paddingLeft": "var(--ck-space-5)",
        "paddingRight": "var(--ck-space-5)",
        "textOverflow": "ellipsis",
        "textTransform": "uppercase",
      },
      Object {
        "paddingLeft": 40,
      },
    ]
  `)
})

test("should override padding correctly", () => {
  const result = toCSSObject({})({
    theme,
    __css: {
      paddingX: 4,
      color: "green.300",
    },
    paddingRight: 3,
    mr: "5",
    bg: "pinkish",
  })

  expect(result).toMatchInlineSnapshot(`
    Array [
      Object {
        "background": "pinkish",
        "color": "var(--ck-colors-green-300)",
        "marginRight": "var(--ck-space-5)",
        "paddingLeft": "var(--ck-space-4)",
        "paddingRight": "var(--ck-space-3)",
      },
      undefined,
    ]
  `)
})
