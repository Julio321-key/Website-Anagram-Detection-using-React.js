import React, { useState } from 'react';
import InputField from './InputField';
import { useDispatch } from 'react-redux';
import { addFormData } from '../redux/formSlice';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    string1: '',
    string2: '',
    age: '', 
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing again
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Must be filled in!";
    if (!/^[a-zA-Z\s]*$/.test(formData.name)) tempErrors.name = "It should contain the alphabet!";
    if (!formData.phone.trim()) tempErrors.phone = "Must be filled in!.";
    if (!/^\d+$/.test(formData.phone)) tempErrors.phone = "Must contain numbers!";
    if (!formData.email.trim()) tempErrors.email = "Must be filled in!";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) tempErrors.email = "Invalid Email!";
    if (!formData.string1.trim()) tempErrors.string1 = "Must be filled in!";
    if (!formData.string2.trim()) tempErrors.string2 = "Must be filled in!";
    if (!formData.age.trim()) tempErrors.age = "";
    if (!/^\d+$/.test(formData.age)) tempErrors.age = "Must contain numbers!";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addFormData(formData));
      navigate('/result');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputField
        label="Phone Number"
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputField
        label="Age"
        type="text"
        name="age"
        value={formData.age}
        onChange={handleChange}
        error={errors.age}
      />
      <InputField
        label="String 1"
        type="text"
        name="string1"
        value={formData.string1}
        onChange={handleChange}
        error={errors.string1}
        placeholder="For anagram detection"
      />
      <InputField
        label="String 2"
        type="text"
        name="string2"
        value={formData.string2}
        onChange={handleChange}
        error={errors.string2}
        placeholder="For anagram Detection"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
