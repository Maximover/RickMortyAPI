const Characters = ({ id, name, image, status }) => {
  return (
    <div
      key={id}
      className="bg-gray-600 m-6 rounded-x1 overflow-hidden shadow-xl"
    >
      <div>
        <img src={image} alt="nIe zAŁad0wAłO siĘ" />
      </div>
      <div className="p-4 text-center text-white">
        {name}
        <br></br>
      </div>
      <div className="p-4 text-center text-gray-400">Status: {status}</div>
    </div>
  );
};

export default Characters;
