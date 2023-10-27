import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Container, EventModal } from "./CalendarStyles";
import parseData from "../../helpers/parseData";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CalendarContext from "../../contexts/CalendarContext";
import { formatDate } from "../../helpers/formatDate";


export const Calendar = () => {
  const navigate = useNavigate();
  const data = parseData();
  const { setId } = useContext(CalendarContext) ?? {};

  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        headerToolbar={{
          left: "title",
          right: "prev,next",
          center: "",
        }}
        events={data}
        eventContent={(event: { timeText: string; event: { title: string; start: string; id: string }, }) => renderEventContent(event, setId ?? (() => { }), navigate)}
        height={"100vh"}
        fixedWeekCount={false}
        firstDay={1}
        dayHeaderFormat={{
          weekday: "long",
        }}
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: false,
          hour12: false,
        }}
      />
    </Container>
  );
};


function renderEventContent(
  eventInfo: {
    timeText: string;
    event: { title: string; start: string; id: string };
  },
  setId: (newId: string) => void | undefined,
  navigate: (arg0: string) => void
) {
  const formattedDate = formatDate(eventInfo.event.start)
  return (
    <EventModal
      onClick={() => {
        console.log(eventInfo.event.id)
        setId && setId(eventInfo.event.id);
        navigate && navigate(`/item/${formattedDate}`);
      }}
    >
      <p>{eventInfo.event.title}</p>
      <b>{eventInfo.timeText}</b>
    </EventModal>
  );
}