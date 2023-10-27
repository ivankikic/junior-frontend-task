import CalendarContext from "../../../contexts/CalendarContext"
import { useContext, useEffect, useState } from "react";
import { DetailsEventContainer } from "./DetailsEventStyles";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ConfirmationDialog } from "../../../components/ConfirmationDialog/ConfirmationDialog";

export default function DetailsEvent() {
    const navigate = useNavigate();
    const { id } = useContext(CalendarContext) ?? {};
    const [showConfirmation, setShowConfirmation] = useState(false);

    type EventData = {
        id: string;
        title: string | undefined;
        start: string | undefined;
    }

    const [eventData, setEventData] = useState<EventData>({
        id: "",
        title: "",
        start: "",
    });

    const handleDelete = () => {
        const data = JSON.parse(localStorage.getItem("data") || "[]");
        let newData = [];

        if (data) {
            newData = data.filter((item: { id: string; title: string; start: string }) => item.id !== id);
        }

        localStorage.setItem("data", JSON.stringify(newData));
        navigate("/");
        setShowConfirmation(false);
        toast.success("Event deleted successfully!", { duration: 2000 });
    }

    function convertDate(date: string | undefined) {
        if (date) {
            const dateArray = date.split("-");
            const year = dateArray[0];
            const month = dateArray[1];
            const dayArray = dateArray[2].split("T");
            const day = dayArray[0];
            const convertedDate = `${day}.${month}.${year}`;
            return convertedDate;
        }
        return "";
    }

    const handleEdit = () => {
        navigate(`/edit-item/${id}`);
    }

    useEffect(() => {
        if (id) {
            localStorage.setItem("id", id.toString());
        }
        const data = JSON.parse(localStorage.getItem("data") || "[]");
        let eItem = {
            id: "",
            title: "",
            start: "",
        };
        data.map((item: { id: string; title: string; start: string }) => {
            if (item.id?.toString() === (id ? id : localStorage.getItem("id"))) {
                eItem = item;
            }
        })
        setEventData(eItem);
    }, [id])


    return (
        <DetailsEventContainer>
            <Card>
                <Card.Header>Event - {eventData?.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{eventData?.title}</Card.Title>
                    <Card.Text>
                        {convertDate(eventData?.start)}
                    </Card.Text>
                    <Button onClick={handleEdit} variant="primary">Edit</Button>
                    <Button onClick={() => setShowConfirmation(true)} variant="danger">Delete</Button>
                </Card.Body>
            </Card>
            <ConfirmationDialog
                open={showConfirmation}
                onClose={() => setShowConfirmation(false)}
                onConfirm={handleDelete}
                message="Are you sure you want to delete this event?"
            />
        </DetailsEventContainer>
    )
}
