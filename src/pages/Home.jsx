
import StatCards from "../components/StatCards"; // Correct path for StatCards component
import RecentExpenses from "../components/RecentExpenses"; // Correct path for GroupDetailsTable component
import PersonalInformation from "../components/PersonalInformation";
import CardSlider from "../components/CardSlider";
import Nav from "../components/Nav";


const Home = () => {
  return (
    <div className="p-4 min-h-screen">
      <div className="row my-5 mx-0 gap-4 justify-between">
      <CardSlider />
      <StatCards />
      </div>
      <div className="row mx-0 my-4 justify-between">
      <PersonalInformation/>
      <RecentExpenses />
      </div>
      <Nav /> {/* Nav component */}
    </div>
  );
};

export default Home;
