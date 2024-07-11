import classes from "./Banner2.module.css";
import Image from "next/image";
import Background4 from "../../../public/images/Background7.jpg";
import Background2 from "../../../public/images/Background2.jpg";
import ContactForm from "../form/ContactForm";
import StickerContainer2 from "../items/StickerContainer2";

function Banner2({ background }) {
  return (
    <div className={classes.container}>
      <div className={classes.backgroundImage}>
        {background === 4 ? (
          <Image
            className={classes.image}
            src={Background4}
            fill={true}
            alt=""
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
          />
        ) : (
          <Image
            className={classes.image}
            src={Background2}
            fill={true}
            alt=""
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
          />
        )}
      </div>
      <div className={classes.container2}>
        {background === 2 ? (
          <div className={classes.leftContainer}>
            <div className={classes.heading}>
              <span className={classes.heading1}>
                Unlock the Advantages of Acquiring a
                <span className={`${classes.gradientText} ${classes.heading2}`}>
                  Virtual Office
                </span>
              </span>
            </div>
            <div className={classes.subHeading}>
              Virtualxcel is your premier destination for complete virtual
              office solutions across India. We provide professional business
              addresses, streamlined mail handling, and convenient access to
              meeting rooms, empowering businesses with the flexibility and
              scalability they require.
            </div>
            <StickerContainer2 />
          </div>
        ) : (
          <div className={classes.leftContainer}>
            <div className={classes.heading}>
              <span className={classes.heading1}>
                Premier Destination for Dynamic
                <span className={`${classes.gradientText} ${classes.heading2}`}>
                  Coworking Spaces
                </span>
              </span>
            </div>
            <div className={classes.subHeading}>
              Explore dynamic coworking spaces, private desks, and inspiring
              cabins. Join a vibrant community of innovators and entrepreneurs.
              Elevate your productivity with premium amenities and flexible
              terms. Unleash your potential in our collaborative ecosystem.
              Discover opportunity at Virtualxcel. Join us today!
            </div>
            <StickerContainer2 />
          </div>
        )}
        <div className={classes.rightContainer}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Banner2;
