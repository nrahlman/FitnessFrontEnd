import React from "react";
import "../Styles/Landing.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeTitle">
        <h1>Experience the Best Workouts for a Stronger, Healthier You</h1>
        <p>
          FITMATE offers a variety of fitness routines to help you achieve
          your fitness goals. Whether you want to build strength, improve
          endurance, or get in better shape, there is a routine that suits your
          needs.
        </p>
      </div>
      <div className="homeBody">
        <section className="homeSection">
          <div className="homeLeft">
            <h2>SIXTY</h2>{" "}
            <p>
              This total body workout pairs the Concept2 rower with strength
              training in a high-intensity, high-energy environment. Our
              motivational instructors will lead you through every part of the
              workout in our experiential light and sound studio. Sixty offers a
              workout like no other with unmatchable effectiveness and
              efficiency.
            </p>
          </div>
          <img src="/images/sixty.webp" alt="" />
        </section>
        <section className="homeSection">
        <img src="/images/yoga.webp" alt="" />
          <div className="homeLeft">
            <h2>YOGA</h2>{" "}
            <p>
              Combine physical postures, breathing techniques, and meditation
              into a single routine to improve your body's movement, posture, and
              physical fitness. Whether taking a Power Yoga or Restorative Yoga
              routine, our rountines will satisfy both first times and experienced
              alike.
            </p>
          </div>
        </section>
        <section className="homeSection">
          <div className="homeLeft">
            <h2>CYCLE</h2>{" "}
            <p>
              The ultimate conditioning and endurance workout on bikes. Our
              cycle rountines will constantly challenge your fitness level and
              push you to reach new heights.
            </p>
          </div>
          <img src="/images/cycle.PNG" alt="" />
        </section>
        <section className="homeSection">
        <img src="/images/barre.webp" alt="" />
          <div className="homeLeft">
            <h2>BARRE</h2>{" "}
            <p>
              Barre is a ballet inspired, calorie torching, music bumping, total
              body workout for all fitness levels. We use small isolated
              movements to create long, lean muscles while incorporating cardio
              and stretching to lift and tone your entire body.
            </p>
          </div>
        </section>
        <section className="homeSection">
          <div className="homeLeft">
            <h2>SCULPT</h2>{" "}
            <p>
              Get ready to Sculpt your body with our newest rountine at FITMATE:
              Sculpt! This rountine is designed to target and tone all of the
              different muscles in your core and body. You'll be working hard,
              but you'll have plenty of fun while doing it – that's what makes
              Sculpt such an incredible way to start improving your physical
              fitness.{" "}
            </p>
          </div>
          <img src="/images/sculpt.webp" alt="" />
        </section>
        <section className="homeSection">
        <img src="/images/power.webp" alt="" />
          <div className="homeLeft">
            <h2>POWER CYCLE</h2>{" "}
            <p>
              Are you looking for the perfect combination of a challenging
              workout and exhilarating fun? Look no further than Power Cycle at
              Sweat! Our unique routine combines 30 minutes of indoor cycling with
              30 minutes of weights and total body cardio movements for one
              amazing hour of exercise.{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
