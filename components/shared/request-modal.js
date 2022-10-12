import { useState } from "react";
import Modal from 'react-modal';
import IconClose from '../../public/images/icons/close.svg'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const RequestModal = ({ modalIsOpen, closeModal }) => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    message: ""
  };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({
      message: "Please wait..."
    })
    try {
      let res = await fetch("http://api.archetype.dev/v1/contact", {
        method: "POST",
        body: JSON.stringify({
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
        }),
      });
      if (res.status === 200) {
        setValues({ message: "Request sent successfully" })
        console.log("Request sent successfully");
      } else {
        setValues({ message: "Some error occured" })
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return <Modal
    isOpen={modalIsOpen}
    onRequestClose={() => {
      closeModal()
      setValues({ message: '' })
    }}
    style={customStyles}
    contentLabel="Request Modal"
    ariaHideApp={false}
  >
    <div className="text-end">
      <button onClick={() => {
        closeModal()
        setValues({ message: '' })
      }}>
        <IconClose />
      </button>
    </div>

    <form className="pt-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="form-group mb-6">
          <input type="text" label="First Name"
            name="first_name"
            onChange={handleInputChange}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 border-purple focus:bg-white focus:outline-none"
            placeholder="First name"
          />
        </div>
        <div className="form-group mb-6">
          <input type="text" label="Last Name"
            name="last_name"
            onChange={handleInputChange}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 border-purple focus:bg-white focus:outline-none"
            placeholder="Last name" />
        </div>
      </div>
      <div className="form-group mb-6">
        <input type="email" label="Email"
          name="email"
          onChange={handleInputChange}
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 border-purple focus:bg-white focus:outline-none"
          placeholder="Email address" />
      </div>
      <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800  active:shadow-lg transition duration-150 ease-in-out">Submit</button>
      <p className="mt-4 text-purple text-base">{values.message}</p>
    </form>
  </Modal>
}

export default RequestModal