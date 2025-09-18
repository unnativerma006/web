import React from 'react';

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


const PersonalDetails = () => {

    return (
        <div className="bg-gray-100 p-4 w-full  flex items-center justify-center ">

            <div className=" bg-white shadow-md rounded-lg p-6 relative w-1/2 ">
                <div>
                    <h1 className="absolute top-0 left-0 bg-[#036d6bb5] text-lg  tracking-wider rounded-t-lg text-center font-semibold w-full uppercase text-white p-2 ">
                        Personal Details
                    </h1>
                </div>

                <form className="bg-[#036d6b7a] p-4 w-full mt-8 rounded-md">


                    <InputField label="Candidate Name" name="candidateName" required />
                    <InputField label="Father's Name" name="fatherName" required />
                    <InputField label="Mother's Name" name="motherName" required />


                    <InputField label="Date of Birth" type="date" name="dateOfBirth" required />


                    <SelectField label="Gender" name="gender" options={['Male', 'Female', 'Other']} required />

                    <SelectField label="Category" name="category" options={['General', 'SC', 'ST', 'OBC', 'SBSC', 'General-EWS']} required />


                    <div className="flex w-full justify-end ">
                        <button type="submit" className='font-semibold rounded text-base text-white bg-[#036d6bd5] py-3 px-6'>Save & Next</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default PersonalDetails;
