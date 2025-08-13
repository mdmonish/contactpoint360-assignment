import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { setSelectedDate, setEvents } from "../redux/calendarSlice";
import { dummyData } from "../data/dummyData";
import BarGraphModal from "./BarGraphModal";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Load dummy data into redux
    dispatch(setEvents(dummyData));
  }, [dispatch]);

  const events = Object.keys(dummyData).map((date) => ({
    title: "Data Available",
    start: new Date(date),
    end: new Date(date),
  }));

  const handleSelect = ({ start }) => {
    const formattedDate = moment(start).format("YYYY-MM-DD");
    dispatch(setSelectedDate(formattedDate));
    if (dummyData[formattedDate]) {
      setModalOpen(true);
    } else {
      alert("No data found for the selected date.");
    }
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        onSelectEvent={handleSelect}
      />
      {modalOpen && (
        <BarGraphModal
          date={selectedDate}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default CalendarComponent;
