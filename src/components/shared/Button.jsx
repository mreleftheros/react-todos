const Button = ({ children }) => {
  return (
    <button className="bg-gray-800 px-3 py-2 transition-transform duration-150 ease-in-out hover:scale-95 rounded-xl shadow">
      {children}
    </button>
  );
};

export default Button;
