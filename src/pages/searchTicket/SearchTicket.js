import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { TicketCard } from "../../component/ticketCard/TicketCard";
import { getBuses } from "../../apiCall";

export const SearchTicket = () => {

  const [buses, setBuses] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const from  = searchParams.get('from');
  const to  = searchParams.get('to');
  const date  = searchParams.get('date');

  useEffect(() => {
    console.log(from, to, date)
    getBuses(from, to, date).then(res => {
      console.log(res.data)
      setBuses(res.data.bus);
    })
  }, [])

  return (
    <>
    <div class="card-header">Showing {buses.length} buses from {from} to {to}</div>
    {buses.map(item => 
      <TicketCard bus={item} />
    )}
    </>
  );
};
