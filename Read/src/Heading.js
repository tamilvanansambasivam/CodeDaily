import React from "react";

function Heading(props) {
  const {heading} = props;
  return (
    <>
      <div onClick="showContent" className="bg-gray-800 capitalize text-slate-100 font-serif w-[50%] m-auto mt-4 p-4 text-center text-6xl rounded-md hover:bg-slate-100 hover:text-gray-800 hover:shadow-2xl">
        {props.heading}
      </div>
    </>
  );
}

export default Heading;
