import { tw, apply } from "twind";

const sizeMap = {
  sm: apply`text-xs py(2 md:1) px-2`,
  md: apply`text-sm py(3 md:2) px-2`,
  lg: apply`text-lg py-2 px-4`,
  xl: apply`text-xl py-3 px-6`,
};

const variantMap = {
  primary: "primary",
  secondary: "secondary",
  neutral: "neutral",
  confirm: "confirm",
  warning: "warning",
  error: "error"
};

const baseStyles = apply`
  w(full md:auto)
  text(white uppercase)
  font(bold)
  px-4
  border-none
  transition-colors
  duration-300
`;

interface ButtonProps {
  size?: keyof typeof sizeMap;
  variant?: keyof typeof variantMap;
  round?: boolean,
  disabled?: boolean,
  className?: any,
  children?: any,
}

export default function Button({
  size = 'md',
  variant = 'primary',
  round = false,
  className,
  children
}: ButtonProps) {
  const instanceStyles = apply`
  ${baseStyles}
  bg-${variantMap[variant]}(700 500(hover:& focus:&)))
  ${sizeMap[size]}
  rounded-${round ? "full" : "lg"}
`;
  return (<button className={tw(instanceStyles, className)}>{children}</button>)
}
