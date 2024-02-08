import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [isMultiSelection, setIsMultiSelection] = useState(false);
  const [selections, setSelections] = useState<number[]>([]);

  const handleSingleSelection = (id: number) => {
    if (isMultiSelection) {
      if (selections.includes(id)) {
        setSelections(selections.filter((selection) => selection !== id));
      } else {
        setSelections([...selections, id]);
      }
    } else {
      if (selections.includes(id)) {
        setSelections([]);
      } else {
        setSelections([id]);
      }
    }
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
              onClick={() => handleSingleSelection(dataItem.id)}
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
