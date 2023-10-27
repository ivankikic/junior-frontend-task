import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm } from "react-bootstrap";
import { FormContainer, FormStyle } from "./EditEventStyles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatDate } from "../../../helpers/formatDate";
import toast from "react-hot-toast";

const eventSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    start: Yup.date().required("Date is required"),
});

export const EditEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [eventData, setEventData] = useState(null);
    const initialValues = {
        title: "",
        start: null,
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data") || "[]");
        console.log(data);
        let eItem: { id: string; title: string; start: Date } | null = null;
        data.map((item: { id: string; title: string; start: string }) => {
            console.log(item.id?.toString() === id);
            if (item.id?.toString() === id) {
                eItem = {
                    ...item,
                    start: new Date(item.start)
                };

                console.log(eItem);
            }
        })

        setEventData(eItem);
    }, [id])

    const handleSubmit = (values: any) => {
        const existingData = localStorage.getItem("data");
        let newData = [];

        if (existingData) {
            newData = JSON.parse(existingData);
        }
        newData.map((item: { id: string; title: string; start: string }) => {
            if (item.id?.toString() === id) {
                item.title = values.title;
                item.start = values.start;
            }
        })

        let urlDate = formatDate(values.start);

        localStorage.setItem("data", JSON.stringify(newData));

        values.title = "";
        values.start = null;

        navigate(`/item/${urlDate}`);
        toast.success("Event edited successfully!", { duration: 2000 });
    };

    return (
        <FormContainer>
            <h2>Edit Event - {id}</h2>
            <FormStyle>
                <Formik
                    initialValues={eventData ? eventData : initialValues}
                    validationSchema={eventSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
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
                                    selected={values.start}
                                    name="date"
                                    onChange={(date: Date) => setFieldValue("start", date)}
                                    dateFormat="dd/MM/yyyy h:mm aa"
                                    className={`form-control ${touched.start && errors.start ? "is-invalid" : ""
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
