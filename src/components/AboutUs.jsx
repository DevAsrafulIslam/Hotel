const AboutUs = () => {
  return (
    <div className="border  mx-8 mt-12 my-3">
      <div>
        <h1 className="text-start font-mono text-2xl ms-4 mt-6">About</h1>
        <div className="divider mt-2 p-3"></div>
        <div className=" grid sm:grid-cols-1 lg:grid-cols-2 items-center mx-4">
          <p className="w-6/12 mb-8">
            A heart throbbing experience at Cox’s Bazar. Encompassing the
            spectacular views of Cox’s Bazar, Long Beach Hotel stands very close
            to the hills and sea-beach, offering world class facilities and
            exhilarating experience to its guests. Whether you are planning a
            great vacation, the sweetest of honeymoons or a cozy business tour,
            you would prefer our beach hotel for your relaxing stay. Imagine
            that the 120 km astonishing longest beach in the world is just
            five-minute walk away from your room, providing an exuberant
            sensation in your mind and filling your heart with magnificent joy.{" "}
          </p>

          <div className="flex justify-between gap-6">
            <div>
              <h4 className="text-2xl">Property amenities</h4>
              <p className="mt-4">Free parking</p>
              <p className="mt-4">Free breakfast</p>
              <p className="mt-4">Free airport transportation</p>
            </div>
            <div>
              <p className="mt-4">Free High Speed Internet (WiFi)</p>
              <p className="mt-4">Fitness Center with Gym / Workout Room</p>
              <p className="mt-4">Billiards</p>
              <p className="mt-4">Business Center with Internet Access</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 mt-8 mx-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.76361985048!2d91.84517369706583!3d21.450406661893002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc868716d4925%3A0xcd3ada60adda3a3b!2sCox's%20Bazar%20Beach!5e0!3m2!1sen!2sbd!4v1695358839025!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default AboutUs;
