import { useState } from "react";
import PassagerCard from "../components/PassagerCard";
import React from "react";

const SAMPLE_RESPONSE = {
  totalPassengers: 8580,
  totalPages: 858,
  data: [
    {
      _id: "5f1c59cbfa523c3aa793bffd",
      name: "Emalia Pattintest",
      trips: 491,
      airline: [
        {
          _id: "5f22b0d1b8c8cb8a407a44ab",
          id: 150,
          name: "Paris Airways",
          country: "France",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png",
          slogan: "Smooth as Silk / I Fly THAI",
          head_quaters: "Jom Phol Subdistrict, Chatuchak, Bangkok, Thailand",
          website: "www.thaiairways.com",
          established: "1960",
          __v: 0,
        },
      ],
      __v: 0,
    },
    {
      _id: "5f1c59cbfa523c3aa793bff9",
      name: "Helaina Kerek",
      trips: 712,
      airline: [
        {
          _id: "5ef4a09eaab384a021750ce7",
          id: 12,
          name: "Sri Lankan Airways",
          country: "Sri Lanka",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
          slogan: "From Sri Lanka",
          head_quaters: "Katunayake, Sri Lanka",
          website: "www.srilankaairways.com",
          established: "1990",
          __v: 0,
        },
      ],
      __v: 0,
    },
    {
      _id: "5f1c59cbfa523c3aa793c02e",
      name: "John Doe",
      trips: 119,
      airline: [
        {
          _id: "5f9c5e538c92b233d72fba88",
          id: 19,
          name: "Howell",
          country: "Togo",
          logo: "{{$randomImage}}",
          slogan:
            "Vitae et dolore sed nobis soluta minima voluptas doloremque.",
          head_quaters: "South Lourdesfort",
          website: "http://dario.info",
          established: "651",
          __v: 0,
        },
      ],
      __v: 0,
    },
    {
      _id: "5f1c59c9fa523c3aa793bf28",
      name: "Dode Rakia",
      trips: 314,
      airline: [
        {
          id: 8,
          name: "Thai Airways",
          country: "Thailand",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png",
          slogan: "Smooth as Silk / I Fly THAI",
          head_quaters: "Jom Phol Subdistrict, Chatuchak, Bangkok, Thailand",
          website: "www.thaiairways.com",
          established: "1960",
        },
      ],
      __v: 0,
    },
    {
      _id: "5f1c59cbfa523c3aa793c032",
      name: "Karry Leonard",
      trips: 762,
      airline: {
        id: 2,
        name: "Singapore Airlines",
        country: "Singapore",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png",
        slogan: "A Great Way to Fly",
        head_quaters: "Airline House, 25 Airline Road, Singapore 819829",
        website: "www.singaporeair.com",
        established: "1947",
      },
      __v: 0,
    },
    {
      _id: "5f1c59cbfa523c3aa793c001",
      name: "Roanne Barboza",
      trips: 515,
      airline: {
        id: 1,
        name: "Quatar Airways",
        country: "Quatar",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        slogan: "Going Places Together",
        head_quaters: "Qatar Airways Towers, Doha, Qatar",
        website: "www.qatarairways.com",
        established: "1994",
      },
      __v: 0,
    },
    {
      _id: "5f1c59ccfa523c3aa793c057",
      name: "Gregory Roy",
      trips: 784,
      airline: {
        id: 7,
        name: "Deutsche Lufthansa AG",
        country: "Germany",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lufthansa_Logo_2018.svg/300px-Lufthansa_Logo_2018.svg.png",
        slogan: "Say yes to the world",
        head_quaters: "Cologne, Germany",
        website: "lufthansa.com",
        established: "1953",
      },
      __v: 0,
    },
    {
      _id: "5f1c59c9fa523c3aa793bf2d",
      name: "Marie Gold",
      trips: 595,
      airline: {
        id: 3,
        name: "Cathay Pacific",
        country: "Hong Kong",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Cathay_Pacific_logo.svg/300px-Cathay_Pacific_logo.svg.png",
        slogan: "Move Beyond",
        head_quaters:
          "Cathay City, Hong Kong International Airport, Chek Lap Kok, Hong Kong",
        website: "www.cathaypacific.com",
        established: "1946",
      },
      __v: 0,
    },
    {
      _id: "5f1c59c9fa523c3aa793bf37",
      name: "Savina Budwig",
      trips: 956,
      airline: {
        id: 5,
        name: "Eva Air",
        country: "Taiwan",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        slogan: "Sharing the World, Flying Together",
        head_quaters: "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        website: "www.evaair.com",
        established: "1989",
      },
      __v: 0,
    },
    {
      _id: "5f1c59c9fa523c3aa793bf32",
      name: "Thomasina Parm",
      trips: 647,
      airline: [
        {
          id: 4,
          name: "Emirates",
          country: "Dubai",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/150px-Emirates_logo.svg.png",
          slogan: "From Dubai to destinations around the world.",
          head_quaters: "Garhoud, Dubai, United Arab Emirates",
          website: "www.emirates.com/",
          established: "1985",
        },
      ],
      __v: 0,
    },
  ],
};

function getPassengers(page) {
  return Promise.resolve(SAMPLE_RESPONSE.data);
  // return axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
  // .then(res => {
  //   return res.data;
  // })
}

export default function Passengers() {
  const [passenges, setPassengers] = useState([SAMPLE_RESPONSE.data]);

  const parentRef = React.useRef();
}
// return <PassagerCard key={index} style={style}></PassagerCard>;
