import React from "react";

function Address() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 mb-30 py-5 px-1 rounded-xl space-y-2 my-5">
      {/* icon   first address*/}
      <div className="flex space-x-2   border-b pb-2 border-slate-300 pt-2">
        <div className="rounded-lg ml-2 bg-white dark:bg-slate-600 shadow-lg w-10 h-10 p-2 my-auto">
          <svg
            className=" text-2xl fill-red-500 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
          </svg>
        </div>
        {/* for text  */}
        <div className="text-start">
          <span className="text-sm text-slate-500">Phone</span>
          
            <p>+216 29643630</p>
          
        </div>
      </div>

      {/* icon  second address*/}
      <div className="flex space-x-2    border-b pb-2 border-slate-300">
        <div className="rounded-lg ml-2 bg-white dark:bg-slate-600 shadow-lg w-10 h-10 p-2 my-auto">
          <svg
            className="text-2xl mx-auto fill-green-400"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </svg>
        </div>
        {/* for text  */}
        <div className="text-start">
          <span className="text-sm text-slate-500">Email</span>
          
            <p>yessinedev6@gmail.com</p>
          
        </div>
      </div>

      {/* icon  third address*/}
      <div className="flex space-x-2   border-b pb-2 border-slate-300">
        <div className="rounded-lg ml-2 bg-white dark:bg-slate-600 shadow-lg w-10 h-10 p-2 my-auto">
          <svg
            className="text-2xl mx-auto fill-red-400"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
        </div>
        {/* for text  */}
        <div className="text-start">
          <span className="text-sm text-slate-500">Location </span>
          <div>
            <p>Tunis, Sfax </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-2   ">
        {/* icon fourth address */}
        <div className="rounded-lg ml-2 bg-white dark:bg-slate-600 shadow-lg w-10 h-10 p-2 my-auto">
          <svg
            className="text-2xl mx-auto fill-purple-400"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
          </svg>
        </div>
        {/* for text  */}
        <div className="text-start">
          <span className="text-sm text-slate-500">Birthday</span>
          <div>
            <p>January 19, 1991</p>
          </div>
        </div>
        
      </div>


      <div></div>
    </div>
  );
}
export default Address;
