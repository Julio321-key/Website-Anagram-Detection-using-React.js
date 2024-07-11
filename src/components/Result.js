import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const formData = useSelector((state) => state.form.formData);

  const isAnagram = (str1, str2) => {
    const normalize = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
  };

  return (
    <div className="result-container">
      <h2>Form Result</h2>
      <div className="form-data">
        <div className="form-item">
          <span className="label">Name:</span>
          <span className="value">{formData.name}</span>
        </div>
        <div className="form-item">
          <span className="label">Phone Number:</span>
          <span className="value">{formData.phone}</span>
        </div>
        <div className="form-item">
          <span className="label">Email:</span>
          <span className="value">{formData.email}</span>
        </div>
        <div className="form-item">
          <span className="label">age:</span>
          <span className="value">{formData.age}</span>
        </div>
        <div className="form-item">
          <span className="label">String 1:</span>
          <span className="value">{formData.string1}</span>
        </div>
        <div className="form-item">
          <span className="label">String 2:</span>
          <span className="value">{formData.string2}</span>
        </div>
        <div className="form-item">
          <span className="label">Result Anagram:</span>
          <span className="value">{isAnagram(formData.string1, formData.string2) ? 'True' : 'False'}</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
