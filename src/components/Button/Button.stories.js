import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Contenido del botón",
    },
  },
};

export const Default = {
  args: {
    children: "Botón",
  },
};

export const Entrar = {
  args: {
    children: "Entrar",
  },
};

export const Primary = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Small = {
  args: {
    children: "Small",
    size: "small",
  },
};

export const Medium = {
  args: {
    children: "Medium",
    size: "medium",
  },
};