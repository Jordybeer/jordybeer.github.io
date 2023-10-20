import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';

interface CustomButtonProps {
  href: string;
  label: string;
  colorScheme?: string;
  size?: string;
  // Add other optional custom props here
}

const NewButton: React.FC<CustomButtonProps> = ({
  href,
  label,
  colorScheme = "yellow", // default color scheme
  size = "lg", // default size
  // other props
}) => {
  const step1 = "600";
  const step2 = "500";
  const step3 = "300";

  return (
    <NextLink href={href}>
      <Button
        bot={20}
        bgColor="#115F9E"
        color="white"
        fontWeight="large"
        rounded="xl"
        shadow="dark-lg"
        border="solid 2px black"
        size={size}
        _focus={{ outline: "none" }}
        transition="background 0.8s"
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
        mr={4}
      >
        {label}
      </Button>
    </NextLink>
  );
};

export default NewButton;
