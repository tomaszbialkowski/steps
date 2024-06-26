import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // jeśłi zmieniamy state bazując na obecnej wartośći state należy zmieniać ją przez funckję callback // set Test({name:"Fred"}); - jesli zmieniamy state nie odnosząc się do obecnej wartości możemy to zrobić bez callbacka, poprostu przypisująć nową wartość

    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button bgColor={"#7950f2"} color={"#fff"} onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>

            <Button bgColor={"#7950f2"} color={"#fff"} onClick={handleNext}>
              <Span>
                <Emoji />
              </Span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ bgColor, color, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Span({ children }) {
  return <span>Next {children}</span>;
}

function Emoji() {
  return <span>👉</span>;
}
