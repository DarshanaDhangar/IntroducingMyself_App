import './App.css';
import Resume from "./Components/Resume";
import contact from "./Resources/contact.png";
import location from "./Resources/location.jpg";
import email from "./Resources/email.png";

function App() {
  const contactArr = [{
    imgUrl: contact,
    description: "9421463826",
  }, {
    imgUrl: location,
    description: "Magarpatta,pune",
  }, {
    imgUrl: email,
    description: "darshu0809@gmail.com",
  },];
  const skillArr = [
    "HTML", "CSS", "JavaScript", "React", "Python", "Numpy", "PowerPoint,Office,Excel", "Project Management"
  ];
  return (
    <div className="App">
      <Resume contactArr={contactArr} skillArr={skillArr} />
    </div>

  );
}

export default App;
