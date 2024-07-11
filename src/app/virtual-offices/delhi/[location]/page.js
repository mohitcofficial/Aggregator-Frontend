import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { location } = params;
  const data = await fetchDataForLocation(location);
  if (!data) {
    notFound();
    return null;
  }
  return (
    <>
      <Header />
      <div className={classes.container}>Hello</div>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const locations = [
    "Saket1",
    "Saket2",
    "Chhattarpur",
    "Dwarka",
    "Connaught Place",
    "Rajouri Garden",
    "Janakpuri",
    "Nehru Place",
  ];
  return locations.map((location) => ({
    location,
  }));
}

const fetchDataForLocation = async (location) => {
  const data = {
    Saket1: { name: "Saket Office", description: "Details about Saket office" },
    Saket2: { name: "Saket Office", description: "Details about Saket office" },
    Chhattarpur: {
      name: "Saket Office",
      description: "Details about Saket office",
    },
    Dwarka: { name: "Saket Office", description: "Details about Saket office" },
    "Connaught Place": {
      name: "Saket Office",
      description: "Details about Saket office",
    },
    "Rajouri Garden": {
      name: "Saket Office",
      description: "Details about Saket office",
    },
    Janakpuri: {
      name: "Saket Office",
      description: "Details about Saket office",
    },
    "Nehru Place": {
      name: "Saket Office",
      description: "Details about Saket office",
    },
  };
  return data[location] || null;
};
