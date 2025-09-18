'use client';
import React, { useState } from 'react';

const InputField = ({ label, type = 'text', name, value, onChange, required = false }) => (
  <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2" htmlFor={name}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required={required}
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, required = false }) => (
  <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2" htmlFor={name}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
      required={required}
    ></textarea>
  </div>
);

const SelectField = ({ label, name, options, value, onChange, required = false }) => (
  <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2" htmlFor={name}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required={required}
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    citizenship: '',
    school: '',
    gradeLevel: '',
    gpa: '',
    familyIncome: '',
    dependents: '',
    activities: '',
    awards: '',
    essay: '',
    intendedMajor: '',
    careerGoals: '',
    specialCircumstances: '',
    parentEducation: '',
    parentOccupation: '',
    ethnicity: '',
    firstGeneration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="w-1/2 mx-auto mt-10 p-6 bg-white rounded shadow-lg  relative ">
      <h1 className="tmb-6  absolute top-0 left-0 bg-[#036d6bb5] text-lg  tracking-wider rounded-t-lg text-center font-semibold w-full uppercase text-white p-2">Scholarship Application Form</h1>
      <form onSubmit={handleSubmit} className='bg-[#036d6b7a] p-4 w-full mt-8 rounded-md '>
        <TextAreaField label="Address" name="address" value={formData.address} onChange={handleChange} required />
        <SelectField label="Citizenship" name="citizenship" options={['INDIAN', 'NRI']} value={formData.citizenship} onChange={handleChange} required />
        <SelectField label="Family Income" name="familyIncome" options={['< 1 LPA', '1 LPA - 3 LPA', '3 LPA - 7 LPA', ' > 7 LPA']} value={formData.familyIncome} onChange={handleChange} required />
        <InputField label="Parent's Occupation" name="parentOccupation" value={formData.parentOccupation} onChange={handleChange} />
        
        <div className="mt-6 flex w-full justify-between">
          <button type="submit" className="font-semibold rounded text-base text-white t border-2 border-white  py-3 px-6">
            Previous
          </button>
          <button type="submit" className="font-semibold rounded text-base text-white bg-[#036d6bd5] py-3 px-6">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;