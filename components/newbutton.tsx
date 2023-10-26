import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

interface CustomButtonProps {
  href?: string;
  label: string;
  colorScheme?: string;
  size?: string;
  click?: () => void;
  shadow?: string;
  border?: string;
  bgColor?: string;
  color?: string;
  fontWeight?: string;
  rounded?: string;
  transition?: string;
  // add any other style props you'd like to be customizable
}

const NewButton: React.FC<CustomButtonProps> = ({
  //default props
  href,
  label,
  colorScheme = "yellow",
  size = "lg",
  click,
  shadow = "dark-lg",
  border = "solid 2px black",
  bgColor = "#115F9E",
  color = "white",
  fontWeight = "large",
  rounded = "xl",
  transition = "background 0.8s",
}) => {
  const step2 = "500";
  const step3 = "300";

  const ButtonComponent = (
    <Button
      size={size}
      onClick={click}
      shadow={shadow}
      border={border}
      bgColor={bgColor}
      color={color}
      fontWeight={fontWeight}
      rounded={rounded}
      transition={transition}
      _hover={{
        bgColor: `${colorScheme}.${step2}`,
        bgGradient: `radial(circle, transparent 1%, ${colorScheme}.${step2} 1%)`,
        bgPos: "center",
        backgroundSize: "15000%",
      }}
      _active={{
        bgColor: `${colorScheme}.${step3}`,
        backgroundSize: "100%",
        transition: "background 0s",
      }}
    >
      {label}
    </Button>
  );

  return href ? (
    <NextLink href={href}>{ButtonComponent}</NextLink>
  ) : (
    ButtonComponent
  );
};

export default NewButton;
