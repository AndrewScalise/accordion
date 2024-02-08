import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [isMultiSelection, setIsMultiSelection] = useState(false);
  const [selections, setSelections] = useState<number[]>([]);

  const handleSelection = (id: number) => {
    setSelections(prevSelections => {
      if (isMultiSelection) {
        return prevSelections.includes(id) ? prevSelections.filter(selection => selection !== id) : [...prevSelections, id];
      } else {
        return prevSelections.includes(id) ? [] : [id];
      }
    });
  };

  const handleIsMultiSelection = () => {
    setIsMultiSelection(!isMultiSelection);
  };

  return (
    <div className="wrapper">
      <button onClick={handleIsMultiSelection}>
        {isMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="content"
              onClick={() => handleSelection(dataItem.id)}
            >
              <div className="question-row">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selections.includes(dataItem.id) && (
                <div>
                  <p>{dataItem.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
