import React, { useState } from "react";
import { Button, Form,Modal } from "react-bootstrap";
import Counter from "./components/Counter";

const App = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
};
  return (
    <div>
      <>
            <Button variant="primary" onClick={toggle}>
               {(show==true)? "show" : "hide"}
            </Button>

            <Modal show={show} onHide={toggle}>
              <Counter/>
            </Modal>
        </>
    </div>
  );
};

export default App;
