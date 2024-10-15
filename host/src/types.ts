declare module 'dashboard/ControlPanel' {
  const ControlPanel: React.ComponentType;
  export default ControlPanel;
}

interface ButtonProps {
  text: string;
}

declare module 'dashboard/Button' {
  const Button: React.ComponentType<ButtonProps>;
  export default Button;
}
