import React, { useState } from "react";
import { Form, Button, Row, Col, FormLabel } from "react-bootstrap";
import LanguagesSelect from "./LanguagesSelect.js";

function FormUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    console.log(selectedFile); 
    console.log(isFilePicked);
    console.log("This is cool"); //Dr. Bot  //Lol. I like this name for you. //Negative Ghostrider, the pattern is full // 
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("File", selectedFile);


    const response = fetch("http://localhost:7071/api/UploadToStorageFromUI", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      // TODO: figure out how to handle responses from the API. 
      // .then((response) => response.json())
      // .then((result) => {
      //   console.log("Success:", result);
      // })
      // .catch((error) => {
      //   console.error("Error:", error);
      // });
      console.log(response)
  };

  return (
    <>
      <Form>
        <Form.Label>
          <h2>Upload a file for translation, right now!</h2>
        </Form.Label>
        <Row className="g-2">
          <Col md>
            <Form.Group controlId="formFile" className="mb-3">
              <FormLabel>
                <h3>Choose a File to Upload</h3>
              </FormLabel>
              <Form.Control
                type="file"
                name="sourceFile"
                onChange={changeHandler}
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="language-selection">
              <FormLabel>
                <h3>Select which language(s) to translate to.</h3>
                <p>
                  Ctrl/Cmd+Click or Shift+Click to select multiple languages
                </p>
              </FormLabel>

              {/* <Form.Control as="select" multiple style={{ height: "300px" }}>                   */}
               <LanguagesSelect />
              {/* </Form.Control> */}

            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="button" onClick={handleSubmission}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default FormUpload;
