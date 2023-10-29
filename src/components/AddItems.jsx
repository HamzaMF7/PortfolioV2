import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import "../styles/addItems.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AddItemForm } from "../schemas/AddItemForm";
import { useDispatch, useSelector } from "react-redux";
import { addDegree, getDegrees } from "../state/resumeSlice";

const AddItems = ({ degreesLength }) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const onSubmit = async (values, actions) => {
    const payload = { id: degreesLength + 1, ...values };
    dispatch(addDegree(payload));
    actions.resetForm();
    dispatch(getDegrees());
  };
  const initialValues = {
    education: "",
    title: "",
    description: "",
  };

  const toggleAddItems = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };
  const Error = () => {
    return <div className="error"></div>;
  };
  return (
    <div className={`add ${isExpanded ? "expanded" : ""}`}>
      <div className="add-header" onClick={toggleAddItems}>
        <div className="title">
          <HiOutlineViewGridAdd />
          <p>{isExpanded ? "Hide" : "Show"} Add Degree</p>
        </div>
        <span className="arrow-icon">
          {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </div>
      <div className="items">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={AddItemForm}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="education">
                <Field
                  type="text"
                  name="education"
                  placeholder="Enter your academy name"
                />
                <ErrorMessage
                  name="education"
                  component="div"
                  className="error"
                />
              </div>
              <div className="title">
                <Field
                  type="text"
                  name="title"
                  placeholder="Enter your degree title"
                />
                <ErrorMessage name="title" component="div" className="error" />
              </div>
              <div className="textarea">
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Enter description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error"
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Add
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddItems;
