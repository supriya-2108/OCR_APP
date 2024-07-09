import React, { useState } from "react";

const Home = () => {
  const [filename, setFilename] = useState("No File Choosen");
  const [showErrorMessage, SetShowErrorMessage] = useState(false);
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFilename(event.target.files[0].name);
      SetShowErrorMessage(false);
    } else {
      setFilename("No File Choosen");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (filename === "No File Choosen") {
      SetShowErrorMessage(true);
    } else {
      alert("all well");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="border m-auto my-10 flex flex-col gap-5 items-center justify-center p-5 border-gray-500 w-[30rem]"
      >
        <h1 className="text-2xl font-semibold uppercase">Upload Your File</h1>
        <div>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="file-upload"
            className="text-sm text-stone-500  border border-green-500 py-1 px-3 cursor-pointer hover:bg-blue-50 hover:text-blue-700"
          >
            {filename !== "No File Choosen" ? (
              <span className="ml-2 my-2">{filename}</span>
            ) : (
              "Click to upload file"
            )}
          </label>
          {showErrorMessage && (
            <p className="text-red-800 my-1 text-center">No file is selected</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-3 rounded-md w-1/2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
