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
  type?: string;
  options?: { id: string; label: string }[];
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

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];




// export const addProductFormElements: FormControl[] = [
//   {
//     name: "image",
//     label: "Product Image",
//     placeholder: "Upload an image",
//     componentType: "input",  // `input` requires `type`
//     type: "file",            // `type` is relevant for `input`
//   },
//   {
//     name: "title",
//     label: "Product Title",
//     placeholder: "Enter product title",
//     componentType: "input",
//     type: "text",
//   },
//   {
//     name: "description",
//     label: "Product Description",
//     placeholder: "Enter product description",
//     componentType: "textarea",  // `textarea` doesn't need `type`
//   },
//   {
//     name: "category",
//     label: "Category",
//     placeholder: "Select a category",
//     componentType: "select",   // `select` needs `options`
//     options: [
//       { id: "1", label: "Electronics" },
//       { id: "2", label: "Clothing" },
//       { id: "3", label: "Furniture" },
//     ],
//   },
//   {
//     name: "price",
//     label: "Price",
//     placeholder: "Enter product price",
//     componentType: "input",
//     type: "number",             // Relevant for `input`
//   },
//   {
//     name: "salePrice",
//     label: "Sale Price",
//     placeholder: "Enter sale price",
//     componentType: "input",
//     type: "number",
//   },
//   {
//     name: "totalStock",
//     label: "Total Stock",
//     placeholder: "Enter total stock",
//     componentType: "input",
//     type: "number",
//   },
// ];
