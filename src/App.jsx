import square from "./assets/blue-square.png";

function App() {
  return (
    <div className="">
      <nav class="flex justify-between items-center">
        <h6 class="text-third font-bold">TripMates</h6>
        <ul className=" flex gap-5">
          <li>Home</li>
          <li>Destinations</li>
          <li>Testimonials</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
        <div className="flex">
          <div className="p-3 bg-white">My Account</div>
          <div className="p-3 bg-primary text-white ">Book Now</div>
        </div>
      </nav>
    </div>
  );
}

export default App;
