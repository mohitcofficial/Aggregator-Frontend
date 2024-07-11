import CoworkingBanner from "@/components/banner/CoworkingBanner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Card from "@/components/items/Card";
import ContactUsPoster from "@/components/items/ContactUsPoster";
import ContactViaSticker from "@/components/items/ContactViaSticker";
import Facilities from "@/components/items/Facilities";
import WhyCoworking from "@/components/items/WhyCoworking";
import WhyUs from "@/components/items/WhyUs";
import ReviewSlider from "@/components/slider/ReviewSlider";
import { coworkingCardDataArray } from "../data/CoworkingCardData";
import { coworkingFacilities } from "../data/Facilities";
import classes from "./page.module.css";

export const metadata = {
  title: "Coworking Spaces",
  description:
    "Cowork Town offers a dynamic coworking environment where innovation thrives. Join our collaborative workspace and unlock new opportunities for growth and networking.",
};

function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <ContactViaSticker />
        <CoworkingBanner />
        <div className={classes.container2}>
          <div className={classes.heading}>
            <span className={classes.heading1}>Choose a Coworking Space</span>
            <span className={classes.heading2}>
              that best suits your needs and preferences
            </span>
          </div>
          <div className={classes.cardContainer}>
            {coworkingCardDataArray.map((item, index) => (
              <Card
                key={index}
                ind={index}
                heading={item.heading}
                img={item.img}
              />
            ))}
          </div>
          <WhyCoworking />
          <Facilities data={coworkingFacilities} />
          <p className={classes.heading0}>
            Why Choose
            <span> Cowork Town ?</span>
          </p>
          <WhyUs />
          <ContactUsPoster />
          <ReviewSlider />
        </div>
        <div className={classes.text}>
          <div className={classes.textArea}>
            <div className={classes.text1}>
              <div className={classes.heading}> Why CoWorking?</div>
              <div>
                In the face of an ever growing startup culture there is a
                similarly growing apprehension behind traditional office spaces
                acting as a drain on a company’s already limited financial
                resources. Signing long-term leases and investing in space
                management is an operational expenditure that firms in the early
                stages of their development might not want to incur.
                <br />
                <br />
                Furthermore, established firms returning from Covid-era work
                flexibility would be similarly apprehensive of large operational
                expenditures due in large part to the unwillingness of workers
                to return to a full time physical work schedule. Such
                developments have prompted the raise of shared and flexible
                working spaces that are managed by third party managed office
                space providers.
                <br />
                <br />
                We at Team CoWork cater to providing ad-hoc office spaces for
                multiple businesses at Delhi (Saket) & Gurugram (MG Road). This
                model provides opportunities for creating a collaborative
                working environment with cross industry networking
                possibilities. Coworking spaces are fitted with all the required
                amenities for a functioning, growth oriented business including
                Meeting Rooms on demand, speedy Wi-Fi & most importantly a fully
                stocked pantry to help fuel long work hours.
                <br />
                <br />
                For firms with a hybrid operating model coworking is highly
                beneficial as they are provided an opportunity to pay only for
                the space that is being used and thus reduce operating costs. A
                particular benefit for cash strapped startups, coworking spaces
                remove both the financial and temporal burden of maintaining an
                office space.
                <br />
                <br />
                Firms can book a bundle of seats for an extended period or a
                single ‘Hot Seat’ per their requirement and ensure their
                financial security. This would permit them to have a workspace
                that evolves with their business.
                <br />
                Coworking spaces are seen as the providers of a simple
                opportunity for firms to focus on their primary businesses
                rather than on the administrative requirements of an office
                space.
              </div>
            </div>
          </div>

          <div className={classes.text2}>
            <div className={classes.heading}> Managed Office</div>
            Managed Offices are an office management solution that permits firms
            to outsource the physical management of a dedicated office to a
            third party. The purpose of this is to limit the internal cost of
            creating a team of professionals that are skilled at space
            management, instead, hiring a specialized office management firm to
            handle all the required housekeeping tasks. This would permit the
            primary business to focus on their operations and grow rather than
            to perform a series of unrelated daily activities. Further benefits
            of such solutions are as follows;
            <div className={classes.points}>
              <div className={classes.point}>
                <span className={classes.bold}>Increased Flexibility:</span>
                Managed office contracts are frequently 1–3 years long, though
                there may be shorter possibilities.
              </div>
              <div className={classes.point}>
                <span className={classes.bold}>Reduced Risk and Costs:</span>
                The managed offices' set monthly charge encourages frugal
                spending patterns and makes budgeting and cost forecasting
                possible.
              </div>
              <div className={classes.point}>
                <span className={classes.bold}>Aesthetic Control:</span>
                Companies are empowered to create a work environment that
                supports their goal when they maintain control over the office
                space.
              </div>

              <div className={classes.point}>
                <span className={classes.bold}>Enhanced Privacy:</span>
                Greater privacy is a result of having more control over a
                managed workspace. There is no need to deal with interruptions
                from other businesses, unlike shared buildings.
              </div>
              <br />
            </div>
          </div>

          <div className={classes.textArea}>
            <div className={classes.text1}>
              <div className={classes.heading}>Turn Key Solutions</div>
              <div className={classes.points}>
                <div className={classes.point}>
                  - Turn key office solutions are fully outfitted, furnished
                  workplaces that may be used immediately. By providing
                  everything needed to get started, these solutions aim to
                  relieve the hassle of setting up an entire office space.
                </div>
                <div className={classes.point}>
                  - These spaces come complete with the necessary fittings, such
                  as work area, reception, storage units and pantry, meeting
                  rooms and other such amenities as well as connectivity
                  solutions. As a result, businesses are no longer necessary to
                  buy or set up these products separately.
                </div>
                <div className={classes.point}>
                  - Instead, all amenities and services are frequently provided
                  and managed by the office space provider, which reduces the
                  administrative burden on businesses.
                </div>
                <div className={classes.point}>
                  - Turnkey office solutions frequently come with flexible lease
                  terms that let businesses rent the space for brief or extended
                  periods of time based on their specific requirements. For new
                  businesses, project teams, and organizations whose space
                  requirements are expanding or shifting, this adaptability is
                  advantageous.
                </div>
                <div className={classes.point}>
                  - Easily scale up or down without being restricted by lengthy
                  leasing arrangements. Although these office solutions may cost
                  more up front than conventional office leases, they frequently
                  save money over time. Businesses minimize the costs of
                  purchasing office supplies, infrastructure, and furniture.
                </div>
                <div className={classes.point}>
                  - Save money on maintenance and repair expenditures because
                  the office space provider usually takes care of these chores
                  that are us!
                </div>
                <div className={classes.point}>
                  - Overall, turn key office solutions are a great way to ensure
                  that an office space is promptly provided per the exacting
                  specifications of those who intend to grow their businesses
                  out of it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
