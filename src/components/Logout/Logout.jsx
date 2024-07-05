import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteToken } from '../../features/AccRefToken/AccRefTokenSlice.js';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLogOut = async () => {
      toast.success("You have been logged out");
      dispatch(deleteToken());
      navigate('/');
    };
    handleLogOut();
  }, [dispatch, navigate]);

  return (
    <div>Logout</div>
  );
};

export default Logout;
