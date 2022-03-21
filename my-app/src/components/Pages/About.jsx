function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="main">
        <p>Mechatronics is a fully student-ran organization at San Diego State University</p>
        <p>As a multidisciplinary team of engineering, software and business students, we provide a challenging team-based environment with real-world applications, such as designing, fabricating, programming, and testing autonomous underwater vehicle systems.</p>
        <p>Our team is compose of Mechanical, Electrical, Software, and Business sub-divisions.</p>
      </div>

      <div className="main-mech">
        <h2>Mechanical</h2>
        <p>Mechanical members fully designs our vehicles in Solidworks as well as integrates their systems, including pneumatics. They are responsible for stress analysis and mechanical testing. Designs are also prototyped and fabricated, with welding and anodizing outsourced. </p>
      </div>

      <div className="main-soft">
        <h2>Software</h2>
        <p>Software members research and develop algorithms as well as write the code to control the vehicles. They also create a graphical user interface to allow simple user interaction with the code and are responsible for the vehicle's computer vision system.</p>
      </div>

      <div className="main-elect">
        <h2>Electrical</h2>
        <p>Electrical members design and fabricate our electrical boards and wire their circuits. They solder and test the connections in the boards that allow the electrical components to communicate with the main computer and populate our systems, including sensors, actuators, and thrusters, to vehicles. </p>
      </div>

      <div className="main-bus">
        <h2>Business</h2>
        <p>Business members understand the day to day operations of running an engineering organization in a startup envoirnment. They are responsiable for reaching out to sponsors, conduct market research, produce club advertisements and merchandise.</p>
      </div>
    </div>
  );
}

export default About;