import profile from "../../assets/attachment-img.jpg";
import img from "../../assets/carousel-1.jpg";
import img2 from "../../assets/carousel-2.jpg";
import img3 from "../../assets/carousel-3.jpg";
const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-lato">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold font-lato">About Us</h1>
      </header>

      {/* Company History */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 font-lato">
          Company History
        </h2>
        <p className="mb-2 font-lato">
          <strong>Founding Year:</strong> Founded in 2010, SwiftRide began with
          a simple mission: to revolutionize the car rental industry by
          providing unparalleled service and a diverse range of vehicles.
        </p>
        <p className="mb-2 font-lato">
          <strong>Mission:</strong> Our mission is to offer exceptional car
          rental experiences by prioritizing customer satisfaction, reliability,
          and innovation in every aspect of our service.
        </p>
        <p>
          <strong>Vision:</strong> We envision becoming the leading car rental
          provider globally, recognized for our commitment to quality,
          sustainability, and customer-centric solutions.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 font-lato">Our Team</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex items-center">
              <img
                src={profile}
                alt="profile"
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold font-lato">
                  Michael Brown - Manager
                </h3>
                <p className="font-lato">
                  Michael Brown oversees our diverse fleet of vehicles, ensuring
                  they meet the highest standards of safety and performance.
                  With a decade of experience in fleet management and
                  maintenance, Michael ensures that every car is in top
                  condition for our clients' needs.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex items-center">
              <img
                src={profile}
                alt="profile"
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold font-lato">
                  Michael Brown - Manager
                </h3>
                <p className="font-lato">
                  Michael Brown oversees our diverse fleet of vehicles, ensuring
                  they meet the highest standards of safety and performance.
                  With a decade of experience in fleet management and
                  maintenance, Michael ensures that every car is in top
                  condition for our clients' needs.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex items-center">
              <img
                src={profile}
                alt="profile"
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold font-lato">
                  Michael Brown - Manager
                </h3>
                <p className="font-lato">
                  Michael Brown oversees our diverse fleet of vehicles, ensuring
                  they meet the highest standards of safety and performance.
                  With a decade of experience in fleet management and
                  maintenance, Michael ensures that every car is in top
                  condition for our clients' needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 font-lato">Our Fleet</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src={img}
              alt="Economy Car"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold font-lato">Economy Cars</h3>
            <p className="font-lato">
              Affordable and fuel-efficient options perfect for everyday use.
            </p>
          </div>
          <div className="text-center">
            <img
              src={img3}
              alt="Luxury Car"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold font-lato">Luxury Cars</h3>
            <p className="font-lato">
              Experience premium comfort and style with our high-end vehicles.
            </p>
          </div>
          <div className="text-center">
            <img
              src={img2}
              alt="SUV"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold font-lato">SUVs</h3>
            <p className="font-lato">
              Spacious and versatile, ideal for family trips or adventurous
              journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Values & Commitment */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 font-lato">
          Values & Commitment
        </h2>
        <p className="mb-2 font-lato">
          <strong className="font-lato">Customer Service:</strong> At [Company
          Name], we are dedicated to providing outstanding customer service.
          From the moment you contact us to the return of your vehicle, our team
          is here to ensure a seamless and enjoyable experience.
        </p>
        <p className="mb-2 font-lato">
          <strong className="font-lato">Sustainability:</strong> We are
          committed to reducing our environmental impact. Our initiatives
          include maintaining a fleet of fuel-efficient and hybrid vehicles, and
          implementing eco-friendly practices in our operations.
        </p>
        <p className="font-lato">
          <strong className="font-lato">Integrity:</strong> We uphold the
          highest standards of honesty and transparency in all our interactions.
          Our clients can trust us to deliver on our promises and maintain fair
          practices.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 font-lato">
          Contact Information
        </h2>
        <p className="mb-2 font-lato">
          <strong className="font-lato">Phone:</strong> 0125489647
        </p>
        <p className="mb-2 font-lato">
          <strong className="font-lato">Email:</strong>{" "}
          <a
            href="mailto:[Your Email]"
            className="text-blue-500 hover:underline font-lato"
          >
            swiftride@gmail.com
          </a>
        </p>
        <p className="font-lato">
          <strong className="font-lato">Address:</strong> Dhaka, Karwan Bazar
        </p>
      </section>
    </div>
  );
};

export default About;
