import { useState } from "react";

const Modal = ({
  isOpen,
  onClose,
  handleBorrowed,
  image,
  title,
  category,
  authorName,
}) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

//   const handleConfirm = () => {
//     // Perform actions when confirm button is clicked
//     console.log("Confirmed");
//     onClose();
//   };

  const handleCancel = () => {
    // Perform actions when cancel button is clicked
    console.log("Cancelled");
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      {/* <div className="fixed inset-0 bg-gray-800 opacity-50 absolute"></div> */}
      <div className="bg-warning rounded-lg p-8 max-w-md w-full ">
        <h2 className="text-xl font-bold mb-4">{title}e</h2>
        <h2 className="text-sm font-bold mb-4">Catrgory:{category}</h2>
        <div className="md:flex gap-4">
          <img src={image} alt="Image" className="mb-4 w-16" />

          <form onSubmit={handleBorrowed}>
            <input
              type="date"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
              placeholder="Input Field 1"
            />
            <input
              type="date"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
              placeholder="Input Field 2"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">
              Confirm
            </button>
          </form>
        </div>
        <div className="ml-20 mt-2">
          <button
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 mr-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
