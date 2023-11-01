import React from "react";
import { useDispatch } from "react-redux";
import { filterByTag, removedTag, selectedTag } from "../state/projectSlice";
import { IoCloseOutline } from "react-icons/io5";

const Tag = ({ title, filter }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="tag"
      onClick={() => {
        if (!filter) {
          dispatch(selectedTag(title));
          dispatch(filterByTag());
        }
      }}
    >
      <span>{title}</span>
      {filter && (
        <div
          className="close-icon"
          onClick={() => {
            dispatch(removedTag(title));
            dispatch(filterByTag());
          }}
        >
          <IoCloseOutline />
        </div>
      )}
    </div>
  );
};

export default Tag;
