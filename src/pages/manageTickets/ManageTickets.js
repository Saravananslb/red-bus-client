import React, { useEffect, useState } from 'react';
import { CreatedTicket } from '../../component/createdTickets/CreatedTicket';
import { getBookings } from '../../apiCall';

export const ManageTickets = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings().then(res => {
            setBookings(res.data.tickets);
        })
    }, []);

    return (
        <>
        <h3 style={{padding: '10px'}}>My Bookings</h3>
        {bookings.map(item => 
        <CreatedTicket booking={item} />
        )}
        </>
    )
}