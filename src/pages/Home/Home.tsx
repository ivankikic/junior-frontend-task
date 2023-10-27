import { Calendar } from "../../components/Calendar";
import { CalendarContainer, Container } from "./HomeStyles";

export const Home = () => {
  return (
    <Container>
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
    </Container>
  );
};
