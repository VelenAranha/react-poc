import React, { useState, useEffect } from "react";
import PassagerCard from "../../components/PassagerCard";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

export default function Passengers() {
  const [passenges, setPassengers] = useState([]);
  const [page, setPage] = useState(0);

  const getPassengers = () => {
    setPage(page + 1);
    return axios
      .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
      .then(({ data }) => {
        setPassengers([...passenges, ...data.data]);
      });
  };

  useEffect(() => {
    getPassengers();
    return () => console.log("unmounting...");
  }, []);

  return (
    <InfiniteScroll
      className="h-full"
      dataLength={passenges.length} //This is important field to render the next data
      next={getPassengers}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {passenges.map((passenger, index) => (
        <PassagerCard key={index} passenger={passenger}></PassagerCard>
      ))}
    </InfiniteScroll>
  );
}
