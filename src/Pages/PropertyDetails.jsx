import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PropertiesContext } from "../Contexts/PropertiesContext";
import Card from "../Components/Card";
import Image from "../Components/Image";
import Title from "../Components/Title";
import Location from "../Components/Location";
import Price from "../Components/Price";

function PropertyDetails() {
  const { id } = useParams();
  const { properties, setProperties } = useContext(PropertiesContext);
  const navigate = useNavigate();

  const findProperty = properties.find((property) => property.id == id);
  
  // استخراج البيانات بما فيها التفاصيل الجديدة
  const { image, title, location, price, rooms, guestRooms, halls } = findProperty;

  const handleDeleteProperty = (id) => {
    const filterProperties = properties.filter(
      (property) => property.id !== id
    );
    setProperties(filterProperties);
    navigate("/");
  };

  return (
    <Card>
      <article>
        <Image image={image} title={title} />
        <Title title={title} />
        <Location location={location} />
        <Price price={price} />
        
        {/* عرض تفاصيل إضافية */}
        <div className="details">
          <p>Rooms: {rooms}</p>
          <p>Guest Rooms: {guestRooms}</p>
          <p>Halls: {halls}</p>
        </div>

        <button className="delete-btn" onClick={() => handleDeleteProperty(id)}>
          Delete
        </button>
        <button
          className="update-btn"
          onClick={() => navigate("/updateProperty", { state: findProperty })}
        >
          Update
        </button>
      </article>
    </Card>
  );
}

export default PropertyDetails;
