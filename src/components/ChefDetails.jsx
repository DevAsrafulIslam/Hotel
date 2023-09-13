import { useEffect, useState } from "react";

const ChefDetails = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/chef")
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>sss</h1>
      {chef.map((item, index) => (
        <div key={index}>
          <div>
            <figure>
              <img src={item.chef.picture} alt="" />
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChefDetails;
