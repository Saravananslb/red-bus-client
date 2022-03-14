import React, {useState} from "react";
import "./Seats.css";
import { bookBusTicket } from "../../apiCall";
import { useNavigate } from "react-router-dom";
const STATUS = {
  available: "available-seat pointer",
  unAvailable: "unavailable-seat",
  ladies: "ladies-seat",
};

export const Seats = ({lowerSeats, upperSeats, bus}) => {
  
  const [seats, setSeats] = useState([]);
  const [book, setBook] = useState(false);
  const navigate = useNavigate();

  const handleSeatSelect = (no, status) => {
    if (status === 'available'){
      let st;
      if (seats.includes(no)) {
        st = seats.filter(item => item !== no);
        setSeats(st)
      }
      else {
        st = [...seats]
        st.push(no);
        setSeats(st);
      }
      console.log(seats)
    }
  }

  const getTravel = (hr, date) => {
    var today = new Date(date);
    console.log(today)
    today.setHours(today.getHours() + hr);
    return today.toLocaleTimeString();
  }

  const handleBook = (id) => {
    console.log(id)
    bookBusTicket({
      id: id,
      tickets: seats
    }).then(res => navigate(`/?bookingId=${res.data.ticket._id}`))
  }

  return (
    <>
      <div class="seat-container-div seatlayout-main-body clearfix">
        <span class="seat-close hi" title="close">
          <i class="icon-cross"></i>
        </span>
        <div class="seat-container" id="rt_12640023">
          <div>
            <div class="SeatsSelectorWrapper">
              <div class="clearfix SeatsSelector MB">
                <div class="clearfix"></div>
                <div class="leftContent clearfix m-top-10 seatlayout-padding-10">
                  <div class="seat-select-lbl">
                    <span class="seatSelMsg">
                      Click on an Available seat to proceed with your
                      transaction.
                    </span>
                  </div>
                  <div class="seat-layout clearfix">
                    <div class="label-wrapper clearfix hide">
                      <div class="fr lower-selector">Lower</div>
                      <div class="fl upper-selector">Upper</div>
                    </div>
                    <div class="lower-canvas canvas-wrapper">
                      <div class="label">Lower Deck</div>
                      <div className="deck-seat">
                        <div className="deck-seat-inner">
                          <div class="container">
                            <div class="row" style={{ padding: "10px" }}>
                              {lowerSeats.map((item) => (
                                <div class="col">
                                  {item[0] ? (
                                    <div
                                      class={
                                        "row seating " + STATUS[item[0].status]
                                      }
                                      onClick={() => handleSeatSelect(item[0].seat, item[0].status)}
                                      style={{backgroundColor: seats.includes(item[0].seat) ? 'green' : ''}}
                                    >
                                
                                      <div></div>
                                    </div>
                                  ) : null}
                                  {item[1] ? (
                                    <div
                                      class={
                                        "row seating spacing-seats " +
                                        STATUS[item[1].status]
                                      }
                                      onClick={() => handleSeatSelect(item[1].seat, item[1].status)}
                                      style={{backgroundColor: seats.includes(item[1].seat) ? 'green' : ''}}
                                    >
                                      <div></div>
                                    </div>
                                  ) : null}
                                  {item[2] ? (
                                    <div
                                      class={
                                        "row seating spacing-seats " +
                                        STATUS[item[2].status]
                                      }
                                      onClick={() => handleSeatSelect(item[2].seat, item[2].status)}
                                      style={{
                                        position: "relative",
                                        top: "80px",
                                        backgroundColor: seats.includes(item[2].seat) ? 'green' : ''
                                      }}
                                    >
                                      <div></div>
                                    </div>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="upper-canvas canvas-wrapper">
                      <div class="label">Upper Deck</div>
                      <div className="deck-seat">
                        <div className="deck-seat-inner">
                          <div class="container">
                            <div class="row" style={{ padding: "10px" }}>
                            {upperSeats.map((item) => (
                                <div class="col">
                                  {item[0] ? (
                                    <div
                                      class={
                                        "row seating " + STATUS[item[0].status]
                                      }
                                      onClick={() => handleSeatSelect(item[0].seat, item[0].status)}
                                      style={{backgroundColor: seats.includes(item[0].seat) ? 'green' : ''}}
                                    >
                                
                                      <div></div>
                                    </div>
                                  ) : null}
                                  {item[1] ? (
                                    <div
                                      class={
                                        "row seating spacing-seats " +
                                        STATUS[item[1].status]
                                      }
                                      onClick={() => handleSeatSelect(item[1].seat, item[1].status)}
                                      style={{backgroundColor: seats.includes(item[1].seat) ? 'green' : ''}}
                                    >
                                      <div></div>
                                    </div>
                                  ) : null}
                                  {item[2] ? (
                                    <div
                                      class={
                                        "row seating spacing-seats " +
                                        STATUS[item[2].status]
                                      }
                                      onClick={() => handleSeatSelect(item[2].seat, item[2].status)}
                                      style={{
                                        position: "relative",
                                        top: "80px",
                                        backgroundColor: seats.includes(item[2].seat) ? 'green' : ''
                                      }}
                                    >
                                      <div></div>
                                    </div>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="other-container m-top-10">
          <div class="legend-container">
            <h3 class="legend-header">seat legend</h3>
            <div class="legend-wrap">
              <div class="legend-left clearfix">
                <div class="seat-legend-wrap sleeper-legend">
                  <div class="available-sleep fl"></div>
                  <div class="legend-label">available</div>
                </div>
                <div class="seat-legend-wrap sleeper-legend">
                  <div class="unavailable-sleep fl"></div>
                  <div class="legend-label">unavailable</div>
                </div>
                <div class="seat-legend-wrap sleeper-legend ladies-legend">
                  <div class="ladies-sleep fl"></div>
                  <div class="legend-label">female</div>
                </div>
                <div class="seat-legend-wrap sleeper-legend ladies-legend">
                  <div class="gents-sleep fl"></div>
                  <div class="legend-label">male</div>
                </div>
              </div>
            </div>
          </div>
          <div class="extra-info">
            <div class="route-notes"></div>
          </div>
          <div style={{ padding: "10px" }}></div>
          {seats.length && !book ? <div class="button view-seats fr" onClick={() => setBook(true)} >Book</div> : null}
          
          {book ?
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Boarding & Dropping</h5>
              <div class="container">
                <div class="row card-spacing">
                  <div class="col-8">
                      <h6>{bus.from}</h6>
                  </div>
                  <div class="col">
                      <h6>{new Date(bus.dateTime).toLocaleTimeString()}</h6>
                  </div>
                </div>
                <div class="row card-spacing">
                  <div class="col-8">
                      <h6>{bus.to}</h6>
                  </div>
                  <div class="col">
                      <h6>{getTravel(bus.duration, bus.dateTime)} ({new Date(bus.dateTime).toDateString()})</h6>
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
                      <p>{seats.join(', ')}</p>
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
                      <p>INR {bus.price * seats.length}</p>
                  </div>
                </div>
              </div>
              <div class="button view-seats fr" onClick={() => handleBook(bus._id)}>Proceed to Book</div>
            </div>
          </div> : null}
        </div>
      </div>
    </>
  );
};
