const User = ({ name, location }) => {
  return (
    <div className="border-2 m-3 p-3 w-2xl">
      <h1>Name as Functional based Component: {name}</h1>
      <h2>Location as Functional based Component: {location}</h2>
    </div>
  );
};

export default User;
