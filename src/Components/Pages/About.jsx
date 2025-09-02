import UserClass from "../Class Based/UserClass";
// import User from "../Details/User";

const About = () => {
  return (
    <div className="m-5">
      <h1>About us Page</h1>
      <h3>This is about us page you are in.</h3>

      {/* <User name={"Atulya as functional based"} location={"Delhi"} /> */}

      <UserClass name={"Shreejaa ji as class based"} location={"Ranchi"} />
    </div>
  );
};

export default About;
