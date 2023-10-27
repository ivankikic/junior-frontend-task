import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm } from "react-bootstrap";
import { FormContainer, FormStyle } from "./NewEventStyles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import toast from "react-hot-toast";

const eventSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  date: Yup.date().required("Date is required"),
});

export const NewEvent = () => {
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    date: null,
  };

  const handleSubmit = (values: any) => {
    const existingData = localStorage.getItem("data");
    let newData = [];

    if (existingData) {
      newData = JSON.parse(existingData);
    }

    values.id = uuidv4();
    values.start = values.date;
    delete values.date;

    newData.push(values);

    localStorage.setItem("data", JSON.stringify(newData));

    values.title = "";
    values.date = null;

    navigate("/");
    toast.success("Event created successfully!", { duration: 2000 });
  };

  return (
    <FormContainer>
      <h2>Create an Event</h2>
      <FormStyle>
        <Formik
          initialValues={initialValues}
          validationSchema={eventSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, setFieldValue, values }) => (
            <Form>
              <BootstrapForm.Group controlId="title">
                <BootstrapForm.Label>Title</BootstrapForm.Label>
                <Field
                  type="text"
                  name="title"
                  as={BootstrapForm.Control}
                  isInvalid={!!(touched.title && errors.title)}
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-danger"
                />
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="date">
                <BootstrapForm.Label>Date</BootstrapForm.Label>
                <DatePicker
                  showIcon={false}
                  showTimeSelect
                  selected={values.date}
                  name="date"
                  onChange={(date: Date) => setFieldValue("date", date)}
                  dateFormat="dd/MM/yyyy h:mm aa"
                  className={`form-control ${touched.date && errors.date ? "is-invalid" : ""
                    }`}
                  showYearDropdown
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-danger"
                />
              </BootstrapForm.Group>

              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </FormStyle>
    </FormContainer>
  );
};
