const Error = (props) => {
  console.log(props.errorData);
  return (
  <div className="w-full flex justify-center intems-centre ">
    <h1 className="font-bold text-2xl text-white mt-2"> Something went wrong. Please try again.
    </h1>
  </div>)
};

export default Error;

