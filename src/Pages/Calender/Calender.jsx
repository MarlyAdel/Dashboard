import React, { useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import { Paper, Stack } from '@mui/material';
import { formatDate } from '@fullcalendar/core/index.js';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import './Calender.css'



function renderEventContent(eventInfo) {
  
  return (
    <>
      {/* FullCalendar */}
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}


function SidebarEvent({ event }) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}



export default function Calender() {

  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);


 function handleWeekendsToggle() {
   setWeekendsVisible(!weekendsVisible);
 }

 let eventGuid = 0;
  function createEventId() {
   return String(eventGuid++);
 }


 function handleDateSelect(selectInfo) {
   let title = prompt("Please enter a new title for your event");
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
 }

 function handleEventClick(clickInfo) {
   if (
     confirm(
       `Are you sure you want to delete the event '${clickInfo.event.title}'`
     )
   ) {
     clickInfo.event.remove();
   }
 }

 function handleEvents(events) {
   setCurrentEvents(events);
 }

  return (
    <>
      <Stack direction={"row"} spacing={0}>
        <Paper className="demo-app-sidebar">
          
            <h2 style={{textAlign: "center" , fontSize: "25px" , paddingTop:"15px"}}>All Events ({currentEvents.length})</h2>
            <ul>
              {currentEvents.map((event) => (
                <SidebarEvent key={event.id} event={event} />
              ))}
            </ul>
          
        </Paper>

        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable
            selectable
            selectMirror
            dayMaxEvents
            weekends={weekendsVisible}
            select={handleDateSelect}
            eventContent={renderEventContent} 
            eventClick={handleEventClick}
            eventsSet={handleEvents} 
          />
        </div>
      </Stack>
    </>
  );
}
