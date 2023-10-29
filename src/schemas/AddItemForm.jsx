import * as yup from "yup";

export const AddItemForm = yup.object({
  education: yup.string().required("Education Requierd!"),
  title: yup.string().required("Title is Required!"),
  description: yup.string().required("Description is Required!"),
});
