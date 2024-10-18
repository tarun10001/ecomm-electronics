export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your user password",
    componentType: "input",
    type: "password",
  },
];

export interface FormControl {
  name: string;
  label: string;
  placeholder?: string;
  componentType: "input" | "select" | "textarea";
  type?: string;  // Only relevant for "input" fields
  options?: { id: string; label: string }[]; // Only relevant for "select" fields
}

export const loginFormControls: FormControl[] = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your user password",
    componentType: "input",
    type: "password",
  },
];
