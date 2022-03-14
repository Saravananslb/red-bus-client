import React, { useState } from "react";
import './TicketCard.css';
import { Seats } from "../seats/Seats";

export const TicketCard = ({bus}) => {
  const [seatDisplay, setSeatDisplay] = useState('View Seats')

  const getTravel = (hr, date) => {
    var today = new Date(date);
    console.log(today)
    today.setHours(today.getHours() + hr);
    return today.toLocaleTimeString();
  }
  

  return (
    <>
      <div class="card">
        
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="col-4">
                <div class="row card-spacing">
                  <div class="col d-color f-bold">{bus.name}</div>
                </div>
                <div class="row card-spacing">
                  <div class="col l-color f-12">Capella A/C Sleeper (2+1)</div>
                </div>
              </div>
              <div class="col">
                <div class="row card-spacing">
                  <div class="col f-19 f-bold">{new Date(bus.dateTime).toLocaleTimeString()}</div>
                </div>
                <div class="row card-spacing">
                  <div class="col"></div>
                </div>
                <div class="row card-spacing">
                  <div class="col dp-loc l-color w-wrap f-12 m-top-42">{bus.from}</div>
                </div>
              </div>
              <div class="col">
                <div class="row card-spacing">
                  <div class="col l-color lh-24">{bus.duration}h 00m</div>
                </div>
                <div class="row card-spacing">
                  <div class="col"></div>
                </div>
              </div>
              <div class="col">
                <div class="row card-spacing">
                  <div class="col f-19 d-color disp-Inline">{getTravel(bus.duration, bus.dateTime)}</div>
                </div>
                <div class="row card-spacing">
                  <div class="col next-day-dp-lbl m-top-16">{new Date(bus.dateTime).toDateString()}</div>
                </div>
                <div class="row card-spacing">
                  <div class="col bp-loc l-color w-wrap f-12 m-top-8">{bus.to}</div>
                </div>
              </div>
              <div class="col">
                <div class="row card-spacing">
                  <div class="col">
                    <div class="rating-sec lh-24">
                      <div class="lh-18 rating rat-green safety-star-rating-container">
                        <i class="icon icon-safety_star d-block safety-star-rating"></i>
                        <span class="">{bus.star}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row card-spacing">
                  <div class="col"></div>
                </div>
              </div>
              <div class="col">
                <div class="row card-spacing">
                  <div class="col">INR {bus.price}</div>
                </div>
                <div class="row card-spacing">
                  <div class="col"></div>
                </div>
              </div>
              <div class="col-2">
                <div class="row card-spacing">
                  <div class="col"></div>
                </div>
                <div class="row l-color card-spacing">
                  <div class="col m-top-30">10 Seats available</div>
                </div>
                <div class="row l-color card-spacing">
                  <div class="col m-top-8">5 Window</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
            <div class="button view-seats fr" onClick={() => setSeatDisplay( seatDisplay === 'View Seats' ? 'Hide Seats' : 'View Seats' )}>{seatDisplay}</div>
        </div>
      </div>
      {seatDisplay === 'Hide Seats'
       ? <Seats upperSeats={bus.upperSeats} lowerSeats={bus.lowerSeats} bus={bus}/> : null}
    </>
  );
};
