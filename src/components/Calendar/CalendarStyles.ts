import styled from "@emotion/styled";
import { VARIABLES } from "../../consts/global";

export const Container = styled.div`
  width: 70%;
  margin: 20px auto;
  color: #333;

  a {
    color: #000;
  }

  thead {
    border-top-left-radius: 15px;
  }

  .fc-day-today > div {
    background-color: #7acf8e44;
  }

  .fc-daygrid-event-harness {
    margin: 3px;
    border-radius: 5px;
    background-color: #7acf8e;
    a {
      color: #fff;
    }
  }

  .fc-scrollgrid-section-header {
    border-top-left-radius: 15px;
    border-top-radius: 5px;
    background-color: ${VARIABLES.PRIMARY_COLOR};
    th {
      font-weight: normal;
    }
    .fc-col-header-cell {
      .fc-scrollgrid-sync-inner {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    a {
      color: #fff;
    }
  }

  .fc-theme-standard td {
    height: 100px;
  }

  .fc-button {
    padding: 3px 5px;
  }

  .fc .fc-button-primary,
  .fc .fc-button:not(:last-child),
  .fc .fc-button:last-child {
    margin: 0 5px;
    color: ${VARIABLES.PRIMARY_COLOR};
    border-color: ${VARIABLES.PRIMARY_COLOR};
    background-color: #fff;
    border-left-radius: 5px;
    border-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border-radius: 5px;
    transition: 0.15s;

    &:hover {
      color: #fff;
      border-color: ${VARIABLES.PRIMARY_COLOR_HOVER};
      background-color: ${VARIABLES.PRIMARY_COLOR_HOVER};
      transition: 0.15s;
    }
  }

  .fc .fc-today-button {
    opacity: 1;
  }

  a > div{
      width: 100%;
      cursor: pointer;
  }
`;

export const EventModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5px 4px;
  p {
    white-space: wrap;
    overflow-wrap: anywhere;
  }}
`;
