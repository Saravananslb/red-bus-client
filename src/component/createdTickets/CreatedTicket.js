import React from "react";

export const CreatedTicket = ({booking}) => {

  const getTravel = (hr, date) => {
    var today = new Date(date);
    console.log(today)
    today.setHours(today.getHours() + hr);
    return today.toLocaleTimeString();
  }

  return (
    <>
      <div class="row">
        <div class="col">
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">Boarding & Dropping</h5>
              <div class="container">
                <div class="row card-spacing">
                  <div class="col-8">
                      <h6>{booking.from}</h6>
                  </div>
                  <div class="col">
                      <h6>{new Date(booking.dateTime).toLocaleTimeString()}</h6>
                  </div>
                </div>
                <div class="row card-spacing">
                  <div class="col-8">
                      <h6>{booking.to}</h6>
                  </div>
                  <div class="col">
                      <h6>{getTravel(booking.duration, booking.dateTime)} ({new Date(booking.dateTime).toDateString()})</h6>
                  </div>
                  
                </div>
              </div>
              <hr/>
              <div class="container">
                <div class="row">
                  <div class="col-8">
                      <p>Seat No:</p>
                  </div>
                  <div class="col">
                      <p>{booking.tickets.join(', ')}</p>
                  </div>
                </div>
              </div>
              <hr/>
              <div class="container">
                <div class="row">
                  <div class="col-8">
                      <p>Booking Id:</p>
                  </div>
                  <div class="col">
                      <p>{booking._id}</p>
                  </div>
                </div>
              </div>
              <hr/>
              <h6 style={{float: 'left'}}>Fare Details</h6>
              <div style={{padding: "10px"}}></div>
              <div class="container">
                <div class="row">
                  <div class="col-8" >
                      <div style={{float: 'left'}}>Amount</div>
                        <div style={{float: 'left'}}>Taxes will be calculated during payment</div>
                  </div>
                  <div class="col">
                      <p>INR {booking.price}</p>
                  </div>
                </div>
              </div>
              {/* <div class="button view-seats fr">Proceed to Book</div> */}
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};
