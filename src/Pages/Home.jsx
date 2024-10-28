import { useContext } from "react";

import Properties from "../Components/Property/Properties";
import { PropertiesContext } from "../Contexts/PropertiesContext";

function Home() {
  const { properties } = useContext(PropertiesContext);

  return (
    <div>
        <Properties />
    </div>
  );
}

export default Home;