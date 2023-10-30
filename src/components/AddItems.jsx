import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import "../styles/addItems.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AddItemForm } from "../schemas/AddItemForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addDegree,
  getDegrees,
  setIsExpanded,
  updateDegree,
} from "../state/resumeSlice";

const AddItems = ({ degreesLength }) => {
  const dispatch = useDispatch();
  const { degrees, update, isExpanded } = useSelector((state) => state.resume);

  const submitNewDegree = async (values, actions) => {
    const payload = { id: degreesLength + 1, ...values };
    await dispatch(addDegree(payload));
    actions.resetForm();
    dispatch(getDegrees());
  };
  const submitUpdatingDegree = async (values, actions) => {
    const payload = { id: degrees.id, ...values };
    console.log(payload);
    await dispatch(updateDegree(payload));
    dispatch(getDegrees());
  };
  const addDegree_initialValues = {
    education: "",
    title: "",
    description: "",
  };
  const updateDegree_initialValues = {
    education: degrees.education,
    title: degrees.title,
    description: degrees.description,
  };

  const Error = () => {
    return <div className="error"></div>;
  };
  return (
    <div className={`add ${isExpanded || update ? "expanded" : ""}`}>
      <div className="add-header" onClick={() => dispatch(setIsExpanded())}>
        <div className="title">
          <HiOutlineViewGridAdd />
          {update ? (
            <p>Update Degree</p>
          ) : (
            <>
              <p>{isExpanded ? "Hide" : "Show"} Add Degree</p>
              <span className="arrow-icon">
                {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </span>
            </>
          )}
        </div>
      </div>
      <div className="items">
        <Formik
          initialValues={
            update ? updateDegree_initialValues : addDegree_initialValues
          }
          onSubmit={update ? submitUpdatingDegree : submitNewDegree}
          validationSchema={AddItemForm}
          enableReinitialize={true}
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
                {update ? "Update" : "Add"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddItems;
