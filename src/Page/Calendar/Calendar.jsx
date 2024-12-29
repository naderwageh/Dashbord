
/* eslint-disable react/prop-types */
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { formatDate } from '@fullcalendar/core';
import { Stack, Paper, } from '@mui/material';
import "./Calender.css";
import Hedar from '../../Components/Hedar';


export default function Calendar() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  let eventGuid = 0;
  function createEventId() {
    return String(eventGuid++);
  }

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    const confirmed = confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`);
    if (confirmed) {
      clickInfo.event.remove(); // احذف الحدث
    }
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  return (

     <div style={{flexGrow:1}}>
      <Hedar titel={"Calendar"} suptitel={"Calendar the Members"}/> 
    <Stack direction={"row"} className="demo-app" m1={1}sx={{flexGrow:1}}>
         
      <Sidebar
        weekendsVisible={weekendsVisible}
        handleWeekendsToggle={handleWeekendsToggle}
        currentEvents={currentEvents}
      />
               
  

      <div className="demo-app-main">
   
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </div>
    </Stack>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function Sidebar({ currentEvents }) {
  return (
    <Stack direction={"row"}mt={10}>
    
      <Paper className="demo-app-sidebar">
        <h2 style={{ textAlign: "center" }}>All Events ({currentEvents.length})</h2>
        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </Paper>
    </Stack>
  );
}

function SidebarEvent({ event }) {
  return (
    <li>
   
      <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
      <i>{event.title}</i>
    </li>
  );
}