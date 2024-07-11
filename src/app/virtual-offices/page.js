import CustomModal2 from "@/components/Modal2";
import Banner6 from "@/components/banner/Banner6";
import Footer from "@/components/footer/Footer";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Header from "@/components/header/Header";
import ContactUsPoster from "@/components/items/ContactUsPoster";
import ContactViaSticker from "@/components/items/ContactViaSticker";
import Documents from "@/components/items/Documents";
import PriceItem from "@/components/items/PriceItem";
import ProcessFlow from "@/components/items/ProcessFlow";
import VirtualBenefits from "@/components/items/VirtualBenefits";
import VirtualServices from "@/components/items/VirtualServices";
import LPGuarantee from "@/components/lpItems/LPGuarantee";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Head from "next/head";
import Image from "next/image";
import LP1 from "../../../public/images/LP1.jpg";
import classes from "./page.module.css";

export const metadata = {
  title: "Virtual Offices & Business Addresses Across India",
  description:
    "Discover the flexibility of our virtual offices at Virtualxcel. Gain a prestigious business address, professional support, and remote services tailored to your needs. Elevate your business presence today.",
  keywords: [
    "virtual office space in delhi",
    "cheap virtual office space in delhi",
    "virtual office space in noida",
    "virtual office address in gurgaon",
    "virtual office space in gurgaon",
  ],
};

export default function page() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Head>
          <link rel="icon" href="/images/LaptopSticker.png" />
        </Head>
        <ContactViaSticker />
        <Banner6 />
        <div className={classes.container2}>
          <div className={classes.marginBlock}>
            <div className={classes.leftContainer}>
              <p className={classes.heading}>
                Embracing the Evolution of Virtual Offices Across India
              </p>
              {/* <div className={classes.box}>
                <p className={classes.count}>30</p>
                <p className={classes.width0}>LOCATIONS</p>
                <p className={classes.width1}>/</p>
                <p className={classes.width2}>INSTANT PRESENCE</p>
                <p className={classes.width1}>/</p>
                <p className={classes.width3}>ON-DEMAND WORKSPACE</p>
              </div> */}
              <p className={classes.text}>
                Establish your company's footprint in India with a virtual
                office. Benefit from a prestigious business address in key
                locations, comprehensive mail handling, professional call
                answering, and on-demand access to meeting rooms and desks.
                Leverage our global network for seamless business operations and
                enhanced credibility in the market.
              </p>
              {/* <div className={classes.box2}>
                <p className={classes.heading2}>
                  How can we support you in India?
                </p>
                <ul className={classes.points}>
                  <li className={classes.point}>
                    A professional business address in prime location.
                  </li>
                  <li className={classes.point}>
                    Optional call handling service available.
                  </li>
                  <li className={classes.point}>
                    Global business lounge and day office credits with selected
                    plans.
                  </li>
                </ul>
              </div> */}
              <CustomModal2>
                <button className={classes.buyNowButton}>BUY NOW</button>
              </CustomModal2>
              <div className={classes.box3}>
                <p>Or call us at</p>
                <LocalPhoneIcon
                  sx={{
                    fontSize: { xs: 20, sm: 20, md: 22, lg: 24 },
                  }}
                />

                <span className={classes.bold}>+91 9871001079</span>
              </div>
            </div>
            <div className={classes.rightContainer}>
              <div className={classes.imageContainer}>
                <Image
                  className={classes.image}
                  src={LP1}
                  fill={true}
                  alt=""
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </div>
          </div>
        </div>
        <PriceItem />
        <LPGuarantee />
        <Documents />
        <h1 className={classes.heading0}>
          <p>Expand Your Business with </p>
          <span>Virtual Office Benefits</span>
        </h1>
        <VirtualBenefits />
        <VirtualServices />
        <ContactUsPoster />
        <ProcessFlow />
        <FrequentQuestions />
        {/* <div className={classes.text}>
          <div className={classes.text1}>
            <div className={classes.heading}> What is Virtual Office ?</div>
            <div>
              A virtual office represents a sanctuary where the traditional
              confines of brick-and-mortar establishments dissolve into a
              boundless realm of digital prowess and connectivity. It transcends
              the physical constraints of a conventional workplace, becoming a
              nexus where innovation meets flexibility, and productivity finds
              its wings. In this ethereal space, teams converge from diverse
              corners of the world, their synergy fueled by a symphony of
              advanced technologies and collaborative platforms. It's a space
              where the hum of productivity mingles harmoniously with the
              freedom of location independence, empowering individuals to craft
              their workdays amidst the tapestry of their lives. The virtual
              office isn't just a concept; it's an evolution—a testament to the
              fusion of modernity and efficiency, where the borders between work
              and life blur, and creativity flourishes in the seamless dance of
              connectivity. It embodies a new paradigm where work isn't confined
              by walls but thrives in the limitless expanse of the digital
              landscape
              <br />
              <br />
              In the ever-evolving landscape of modern work, the concept of
              virtual offices has emerged as a beacon of efficiency and
              flexibility. These virtual workspaces transcend the constraints of
              traditional office settings, unlocking a realm where borders
              dissolve, and productivity finds its sanctuary. Within these
              digital domains, teams converge from diverse corners of the world,
              united by shared goals and propelled by collaborative
              technologies. The beauty of virtual offices lies not just in their
              liberation from geographical confines but in the symphony of
              benefits they orchestrate. They herald a new era of flexibility,
              empowering individuals to craft their workday amidst the tapestry
              of their lives. They foster inclusivity, offering opportunities to
              talents regardless of their location, fostering a rich tapestry of
              diverse perspectives. These spaces nurture efficiency, erasing
              commute times and embracing asynchronous collaboration, allowing
              creativity to flourish unhindered by constraints. With virtual
              offices, the world becomes a canvas where innovation thrives,
              connections deepen, and work transcends boundaries, painting a
              masterpiece of modern productivity.
            </div>
          </div>
          <div className={classes.textArea}>
            <div className={classes.text2}>
              <div className={classes.heading}> Benefits of Virtual Office</div>
              <div className={classes.points}>
                <div className={classes.point}>
                  <span className={classes.bold}>Location Independence:</span>
                  Virtual offices liberate businesses from physical locations,
                  allowing teams to operate from anywhere globally, tapping into
                  a vast pool of talent regardless of geographic boundaries.
                </div>
                <div className={classes.point}>
                  <span className={classes.bold}>Cost Efficiency:</span>
                  By eliminating expenses related to office space, maintenance,
                  and utilities, virtual offices significantly reduce overhead
                  costs, enabling companies to allocate resources more
                  strategically.
                </div>
                <div className={classes.point}>
                  <span className={classes.bold}>
                    Flexibility and Work-Life Balance:
                  </span>
                  Employees enjoy flexible schedules, fostering a healthier
                  work-life balance. This flexibility boosts morale,
                  productivity, and overall satisfaction, as individuals can
                  tailor their work hours to accommodate personal commitments.
                </div>

                <div className={classes.point}>
                  <span className={classes.bold}>
                    Access to Diverse Talent:{" "}
                  </span>
                  Virtual offices facilitate access to a diverse range of
                  skilled professionals, transcending the limitations of a local
                  talent pool. Companies can assemble teams with varied
                  expertise and perspectives, enhancing innovation and
                  problem-solving.
                </div>
                <div className={classes.point}>
                  <span className={classes.bold}>
                    Reduced Commute and Environmental Impact:
                  </span>
                  Without the need for daily commutes, employees save time and
                  money while contributing to a decrease in traffic congestion
                  and carbon emissions, promoting a more sustainable work
                  culture.
                </div>

                <div className={classes.point}>
                  <span className={classes.bold}>
                    Enhanced Collaboration Tools:
                  </span>
                  Advanced digital tools and communication platforms empower
                  seamless collaboration among remote teams. Video conferencing,
                  project management software, and instant messaging facilitate
                  efficient teamwork despite physical distance.
                </div>
                <div className={classes.point}>
                  <span className={classes.bold}>
                    Scalability and Expansion:
                  </span>
                  Virtual offices offer scalability, allowing businesses to
                  easily scale operations up or down without the constraints of
                  physical space. This agility is particularly beneficial for
                  startups and growing companies.
                </div>
                <div className={classes.point}>
                  <span className={classes.bold}>Business Continuity:</span>
                  Natural disasters, pandemics, or unexpected events pose
                  minimal disruption to operations in virtual setups. Teams can
                  seamlessly transition to remote work, ensuring continuity in
                  challenging circumstances.
                </div>
                <div className={classes.point}>
                  <span className={classes.bold}>
                    Improved Employee Retention and Attraction:
                  </span>
                  Offering remote work options enhances an organization's appeal
                  to potential hires and boosts employee retention by
                  accommodating diverse preferences in work styles.
                </div>
                <div className={classes.point}>
                  <span className={classes.bold}>
                    Global Presence and Market Penetration:
                  </span>
                  Virtual offices enable companies to establish a global
                  presence, catering to customers in different time zones and
                  markets, fostering international growth and market
                  penetration.
                </div>
                <br />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
