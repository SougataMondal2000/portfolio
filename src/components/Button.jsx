const Button = ({ label }) => {
  return (
    <button
      className={`w-auto bg-[#588157] text-white font-bold p-2 rounded-lg transition duration-300 ease-in-out
       hover:bg-[#244c2a] hover:shadow-inner`}
    >
      {label}
    </button>
  );
};

export default Button; 