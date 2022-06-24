import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { checkStatus } from '../redux/categories/categories';

const Category = (props) => {
  const id = props;
  const dispatch = useDispatch();

  const Status = () => {
    dispatch(checkStatus(id));
  };

  return (
    <div className="buttonDiv">
      <button className="catbtn" type="button" onChange={Status}>Check Status</button>
    </div>
  );
};

export default Category;
