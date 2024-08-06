import Component from "@/components/dynamic-page-data/Component";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import classes from "./page.module.css";
import dynamic from "next/dynamic";
// import ReviewSlider from "@/components/slider/ReviewSlider";
const ReviewSlider = dynamic(
  () => import("../../../../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);

const data = [
  {
    city: "Delhi",
    location: "Saket-Near-Metro-Station",
  },
  {
    city: "Delhi",
    location: "Saket-Near-Select-City",
  },
  {
    city: "Delhi",
    location: "Chhattarpur",
  },
  {
    city: "Delhi",
    location: "Rajouri-Garden",
  },
  {
    city: "Delhi",
    location: "Asaf-Ali",
  },
  {
    city: "Delhi",
    location: "Dwarka",
  },
  {
    city: "Delhi",
    location: "Janakpuri",
  },
  {
    city: "Delhi",
    location: "Connaught-Place",
  },
  {
    city: "Delhi",
    location: "Lajpat-Nagar",
  },
  {
    city: "Delhi",
    location: "Okhla",
  },
  {
    city: "Delhi",
    location: "Laxmi-Nagar",
  },
  {
    city: "Delhi",
    location: "Nehru-Place",
  },
  {
    city: "Chandigarh",
    location: "Industrial-Area",
  },
  {
    city: "Chandigarh",
    location: "ZirakPur",
  },
  {
    city: "Chandigarh",
    location: "Phase-7",
  },
  {
    city: "Chandigarh",
    location: "Sector-26",
  },
  {
    city: "Kolkata",
    location: "Mukherjee-Rd",
  },
  {
    city: "Kolkata",
    location: "Elgin",
  },
  {
    city: "Kolkata",
    location: "Bidhannagar",
  },
  {
    city: "Kolkata",
    location: "Park-Street",
  },
  {
    city: "Kolkata",
    location: "Salt-Lake",
  },
  {
    city: "Kolkata",
    location: "East Kolkata Township",
  },
  {
    city: "Bangalore",
    location: "Rabindranath-Tagore-Nagar-Main-Rd-Ganganagar",
  },
  {
    city: "Bangalore",
    location: "Whitefield",
  },
  {
    city: "Bangalore",
    location: "Indiranagar",
  },
  {
    city: "Bangalore",
    location: "HSR-Layout",
  },
  {
    city: "Bangalore",
    location: "Koramangala",
  },
  {
    city: "Bangalore",
    location: "Ganganagart",
  },
  {
    city: "Mumbai",
    location: "Bandra-West",
  },
  {
    city: "Mumbai",
    location: "Andheri",
  },
  {
    city: "Mumbai",
    location: "Bandra-Kurla-Complex",
  },
  {
    city: "Mumbai",
    location: "Santa-Cruz",
  },
  {
    city: "Mumbai",
    location: "Powai",
  },
  {
    city: "Mumbai",
    location: "Airoli",
  },
  {
    city: "Mumbai",
    location: "Kandivali-West",
  },
  {
    city: "Mumbai",
    location: "Malad-West",
  },
  {
    city: "Noida",
    location: "Sector-3",
  },
  {
    city: "Noida",
    location: "Sector-2",
  },
  {
    city: "Noida",
    location: "Sector-15",
  },
  {
    city: "Noida",
    location: "Sector-62",
  },
  {
    city: "Noida",
    location: "Sector-63",
  },
  {
    city: "Noida",
    location: "Sector-132",
  },
  {
    city: "Noida",
    location: "Sector-19",
  },
  {
    city: "Noida",
    location: "Sector-16",
  },
  {
    city: "Chennai",
    location: "Anna-Salai-Rd",
  },
  {
    city: "Chennai",
    location: "Perungudi",
  },
  {
    city: "Chennai",
    location: "Thoraipakkam",
  },
  {
    city: "Chennai",
    location: "Guindy",
  },
  {
    city: "Chennai",
    location: "Saidapet",
  },
  {
    city: "Chennai",
    location: "Teynampet",
  },
  {
    city: "Gurgaon",
    location: "Sector-43",
  },
  {
    city: "Gurgaon",
    location: "Cyber-City",
  },
  {
    city: "Gurgaon",
    location: "Udyog-Vihar",
  },
  {
    city: "Gurgaon",
    location: "Golf-Course-Road",
  },
  {
    city: "Gurgaon",
    location: "Sohna-Road",
  },
  {
    city: "Gurgaon",
    location: "MG-Road",
  },
  {
    city: "Gurgaon",
    location: "Sushant-Lok",
  },
  {
    city: "Gurgaon",
    location: "Palm-Court",
  },
  {
    city: "Punjab",
    location: "Peermuchalla",
  },
  {
    city: "Goa",
    location: "Panjim",
  },
  {
    city: "Goa",
    location: "Verna",
  },
  {
    city: "Pune",
    location: "Kharadi",
  },
  {
    city: "Pune",
    location: "Yervada",
  },
  {
    city: "Pune",
    location: "Viman-Nagar",
  },
  {
    city: "Pune",
    location: "Pimpri-Chinchwad",
  },
  {
    city: "Pune",
    location: "Hinjewadi",
  },
  {
    city: "Pune",
    location: "Koregon-Park",
  },
  {
    city: "Pune",
    location: "Bandhan",
  },
  {
    city: "Pune",
    location: "Baner",
  },
  {
    city: "Kochi",
    location: "Earnakulam",
  },
  {
    city: "Kochi",
    location: "Angamaly",
  },
  {
    city: "Kochi",
    location: "Edappally",
  },
  {
    city: "Kochi",
    location: "Kakkanad",
  },
  {
    city: "Kochi",
    location: "Kadavanthra",
  },
  {
    city: "Hyderabad",
    location: "Kondapur",
  },
  {
    city: "Hyderabad",
    location: "HITEC-City",
  },
  {
    city: "Hyderabad",
    location: "Gachibowli",
  },
  {
    city: "Hyderabad",
    location: "Madhapur",
  },
  {
    city: "Hyderabad",
    location: "Banjara-Hills",
  },
];
const page = ({ params }) => {
  const { city, location } = params;

  return (
    <>
      <Header dark={true} />
      <div className={classes.container}>
        <Component city={city} location={location} />
      </div>
      <ReviewSlider />
      <Footer />
    </>
  );
};

export async function generateStaticParams() {
  return data.map((item) => ({
    city: item.city,
    location: item.location,
  }));
}

export default page;
