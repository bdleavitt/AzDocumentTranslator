import React, {useState} from "react";
import {
  Form,
  Button,
  Row,
  Col,
  FormLabel,
} from "react-bootstrap";

function FormUpload(){
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) =>{
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    console.log(selectedFile);
    console.log(isFilePicked)
  }
  const handleSubmission = () => {
		
    const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'https://freeimage.host/api/1/upload?key={your_key_here}',
			{
				method: 'POST',
				body: formData,
        mode: 'no-cors'
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
 
  return (
    <>
      <Form>
        <Form.Label>
          <h2>Upload a file for translation</h2>
        </Form.Label>
        <Row className="g-2">
          <Col md>
            <Form.Group controlId="formFile" className="mb-3">
              <FormLabel>
                <h3>Choose a File to Upload</h3>
              </FormLabel>
              <Form.Control type="file" name="sourceFile" onChange={changeHandler} />
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

              <Form.Control as="select" multiple style={{ height: "300px" }}>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="button" onClick={handleSubmission}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormUpload;
