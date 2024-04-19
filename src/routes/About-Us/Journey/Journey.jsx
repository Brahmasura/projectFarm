import { useState } from "react";
import style from "./journey.module.scss";

const Journey = () => {
  const [showFull, setShowFull] = useState(false);

  const handleToggleText = () => {
    setShowFull(!showFull);
  };
  return (
    <>
      <div className={`container-fluid ${style.mainDiv}`}>
        <div className="row">
          {/* columns one */}
          <div className="col-5">{/* the blank content */}</div>

          {/* the column Two */}
          <div className={`col-7 ${style.textDiv}`}>
            {/* the text div */}
            <h1>Our Journey</h1>
            <p>
              Welcome to EditoFarm, where your words are our craft. Our mission
              is simple yet vital: to elevate your message through superior
              content editing and writing services. We dive into the world of
              texts, dedicating ourselves to not only refining but also
              enriching every project that comes our way, be it scientific
              papers, research journals, scientific and fiction books, essays,
              captivating novels, influential journals, or impactful marketing
              copies.
              {showFull && (
                <>
                  Our expertise doesn't end with correcting grammar or
                  punctuation; it extends into the realm of creative and
                  persuasive writing, shaping narratives that spark curiosity,
                  drive brand awareness, and build enduring relationships. At
                  EditoFarm, we believe in the power of clarity, the strength of
                  storytelling, and the impact of words meticulously chosen and
                  artfully employed. Our team is more than a collective of
                  editors and writers; we are strategists and storytellers,
                  committed to conveying your message with the clarity it
                  deserves and the effectiveness you desire. From proofreading
                  to comprehensive editing, from scribbling the first draft to
                  polishing the final copy, we are your allies in effective
                  communication. Join us on this journey. With EditoFarm, your
                  message isn't just heard; it reverberates. Together, let's
                  cultivate content that speaks, persuades, and most
                  importantly, resonates.
                </>
              )}
              {!showFull && (
                <span onClick={handleToggleText}>....Read More</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
