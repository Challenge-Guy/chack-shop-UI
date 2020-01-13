import { addOpacity } from "@chakra-ui/color";
import { VariantStyleFunction } from "./utils";

const grayGhostStyle = {
  light: {
    color: "inherit",
    _hover: {
      bg: "gray.100",
    },
    _active: {
      bg: "gray.200",
    },
  },
  dark: {
    color: "whiteAlpha.900",
    _hover: {
      bg: "whiteAlpha.200",
    },
    _active: {
      bg: "whiteAlpha.300",
    },
  },
};

////////////////////////////////////////////////////////////

function getGhostStyle({ variantColor, colorMode }: VariantStyleFunction) {
  let result: any;
  if (variantColor === "gray") {
    result = grayGhostStyle;
  } else {
    result = {
      light: {
        color: `${variantColor}.500`,
        bg: "transparent",
        _hover: {
          bg: `${variantColor}.50`,
        },
        _active: {
          bg: `${variantColor}.100`,
        },
      },
      dark: {
        color: `${variantColor}.200`,
        bg: "transparent",
        _hover: {
          bg: addOpacity(`${variantColor}.200`, 0.12),
        },
        _active: {
          bg: addOpacity(`${variantColor}.200`, 0.24),
        },
      },
    };
  }

  return result[colorMode];
}

////////////////////////////////////////////////////////////

function getOutlineStyle(props: VariantStyleFunction) {
  const { variantColor, colorMode } = props;
  const borderColor = { light: "gray.200", dark: "whiteAlpha.300" };

  return {
    border: "1px solid",
    borderColor: variantColor === "gray" ? borderColor[colorMode] : "current",
    ...getGhostStyle(props),
  };
}

////////////////////////////////////////////////////////////

const graySolidStyle = {
  light: {
    bg: "gray.100",
    _hover: {
      bg: "gray.200",
    },
    _active: {
      bg: "gray.300",
    },
  },
  dark: {
    bg: "whiteAlpha.200",
    _hover: {
      bg: "whiteAlpha.300",
    },
    _active: {
      bg: "whiteAlpha.400",
    },
  },
};

function getSolidStyle({ variantColor, colorMode }: VariantStyleFunction) {
  if (variantColor === "gray") {
    return graySolidStyle[colorMode];
  }

  const style = {
    light: {
      bg: `${variantColor}.500`,
      color: "white",
      _hover: {
        bg: `${variantColor}.600`,
      },
      _active: {
        bg: `${variantColor}.700`,
      },
    },
    dark: {
      bg: `${variantColor}.200`,
      color: "gray.800",
      _hover: {
        bg: `${variantColor}.300`,
      },
      _active: {
        bg: `${variantColor}.400`,
      },
    },
  };

  return style[colorMode];
}

////////////////////////////////////////////////////////////

function getLinkStyle({ variantColor, colorMode }: VariantStyleFunction) {
  const _color = { light: `${variantColor}.500`, dark: `${variantColor}.200` };
  const _activeColor = {
    light: `${variantColor}.700`,
    dark: `${variantColor}.500`,
  };
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    color: _color[colorMode],
    _hover: {
      textDecoration: "underline",
    },
    _active: {
      color: _activeColor[colorMode],
    },
  };
}

////////////////////////////////////////////////////////////

const variantSize = {
  lg: {
    height: 12,
    minWidth: 12,
    fontSize: "lg",
    px: 6,
  },
  md: {
    height: 10,
    minWidth: 10,
    fontSize: "md",
    px: 4,
  },
  sm: {
    height: 8,
    minWidth: 8,
    fontSize: "sm",
    px: 3,
  },
  xs: {
    height: 6,
    minWidth: 6,
    fontSize: "xs",
    px: 2,
  },
};

////////////////////////////////////////////////////////////

const unstyled = {
  userSelect: "inherit",
  bg: "none",
  border: 0,
  color: "inherit",
  display: "inline",
  font: "inherit",
  lineHeight: "inherit",
  margin: 0,
  padding: 0,
  textAlign: "inherit",
};

const baseStyle = {
  display: "inline-flex",
  appearance: "none",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 250ms",
  userSelect: "none",
  position: "relative",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  lineHeight: "1.2",
  outline: "none",
  borderRadius: "md",
  fontWeight: "semibold",
  _focus: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
};

////////////////////////////////////////////////////////////

const Button = {
  baseStyle,
  variantSize,
  variant: {
    unstyled,
    solid: getSolidStyle,
    ghost: getGhostStyle,
    link: getLinkStyle,
    outline: getOutlineStyle,
  },
};

export default Button;
