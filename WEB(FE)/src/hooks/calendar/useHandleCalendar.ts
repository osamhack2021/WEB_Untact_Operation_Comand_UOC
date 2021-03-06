import { EventClickArg } from "@fullcalendar/common";
import { scheduleState } from "atoms/calendarState";
import { useSetRecoilState } from "recoil";

export default function useHandleCalendar() {
  const setSchedule = useSetRecoilState(scheduleState);
  //fullcalendar 에서 이벤트 클릭시
  const onEventClick = (clickInfo: EventClickArg) => {
    setSchedule((prev) => ({
      ...prev,
      _id: clickInfo.event._def.extendedProps._id,
    })); //_id값을 리코일에 저장
  };
  return { onEventClick };
}