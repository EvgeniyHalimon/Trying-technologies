import { IconButton, IconButtonProps, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FC } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

type ThemeModeSwitcherType = Omit<IconButtonProps, 'aria-label'>

const ThemeModeSwitcher: FC<ThemeModeSwitcherType> = (props) => {

  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue('ligth', 'dark')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton 
        size='md'
        fontSize='lg'
        variant='ghost'
        color='current'
        onClick={toggleColorMode}
        icon={<SwitchIcon/>}
        aria-label={`Switch to ${color} mode`}
        {...props}
    />
  )
}

export default ThemeModeSwitcher