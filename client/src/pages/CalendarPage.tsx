import React, { useState } from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
<<<<<<< HEAD

=======
import listPlugin from "@fullcalendar/list";
import Modal from "components/common/Modal";
import useModal from "hooks/common/useModal";
import media from "lib/styles/media";
>>>>>>> 69ecec27955982fc4e7b939d70ac4ca0a436e9b4
const CalendarPage = () => {
  const { isModal, onToggleModal } = useModal();
  return (
    <CalendarPageBlock>
      <CalendarMain>
<<<<<<< HEAD
        <FullCalendar
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        />
=======
        <Calendar>
          <FullCalendar
            aspectRatio={1.75}
            customButtons={{
              createSchedule: {
                text: "일정생성",
                click: function () {
                  onToggleModal();
                },
              },
            }}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today createSchedule",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            events={[
              { title: "event 1", date: "2021-09-10" },
              { title: "event 2", date: "2021-09-20T12:30:00Z" },
            ]}
          />
        </Calendar>
        {isModal && (
          <Modal
            title="일정 생성"
            buttonName="생성"
            onClick={() => console.log("생성")}
            onToggleModal={() => onToggleModal()}
            isModal={true}
            size="big"
          >
            <ModalStyled>
              <div className="infoEle">
                <div className="infoQutn">제목</div>
                <input type="text" className="infoInput" />
              </div>
              <div className="infoEle">
                <div className="infoQutn"> 날짜 </div>
                <input type="date" className="infoInput" />
              </div>
              <div className="infoEle">
                <div className="infoQutn"> 시간 </div>
                <input type="time" className="infoInput" />
              </div>
            </ModalStyled>
          </Modal>
        )}
>>>>>>> 69ecec27955982fc4e7b939d70ac4ca0a436e9b4
      </CalendarMain>
    </CalendarPageBlock>
  );
};

<<<<<<< HEAD
const CalendarPageBlock = styled.div`
  width: 100%;
`;

const CalendarMain = styled.main`
  .fc .fc-button-primary {
    background-color: rgb(59, 87, 231);
    border : none;
  }
  .fc .fc-button-primary:not(:disabled):active, .fc .fc-button-primary:not(:disabled).fc-button-active{
    background-color: rgb(0, 73, 176);
=======
const CalendarPageBlock = styled.div``;

const CalendarMain = styled.main`
  width: 90%;
`;

const Calendar = styled.main`
  .fc {
    --fc-event-bg-color: #3788d8;
    --fc-event-border-color: #3788d8;
    --fc-event-text-color: #fff;
    --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);
    .fc-col-header-cell-cushion {
      /* needs to be same precedence */
      padding-top: 6px; /* an override! */
      padding-bottom: 5px; /* an override! */
    }
    .fc-button-primary {
      background-color: rgb(59, 87, 231);
      border: none;
    }
    .fc-button-primary:not(:disabled):active,
    .fc-button-primary:not(:disabled).fc-button-active {
      background-color: rgb(0, 73, 176);
    }
  }
  ${media.medium} {
    .fc {
      .fc-button {
        font-size: 12px;
      }
    }
  }
  ${media.xsmall} {
    font-size: 11px;
  }
`;

const ModalStyled = styled.div`
  margin-left: 4.5%;
  .infoEle {
    margin:30px 0px;
    .infoQutn {
      font-size: 17px;
      padding: 15px 15px 9px 5px;
    }
    .infoInput {
      width: 90%;
      height: 40px;
    }
>>>>>>> 69ecec27955982fc4e7b939d70ac4ca0a436e9b4
  }
`;

export default CalendarPage;