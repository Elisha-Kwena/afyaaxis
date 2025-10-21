import icon2 from "../../public/icons/medications.png";
import icon3 from "../../public/icons/healthrecords.png";
import icon4 from "../../public/icons/appointment.png";
import icon5 from "../../public/icons/billing.png";
import icon6 from "../../public/icons/symptoms checker.png";
import icon7 from "../../public/icons/chats.png";
import image1 from "../../public/images/bloodsugar.png";
import image2 from "../../public/images/bloodpressure.png";
import image3 from "../../public/images/oxygenrate.png";
import image4 from "../../public/images/pulserate.png";

export const shortcuts = [
  { icon: icon4, label: "Book an Appointment", href: "/appointment" },
  { icon: icon6, label: "Symptoms checker", href: "//symptoms-checker" },
  { icon: icon3, label: "Health Records", href: "/health-records" },
  { icon: icon7, label: "Message Doctor", href: "/inbox" },
  { icon: icon5, label: "Pay Bill", href: "/billing" },
  { icon: icon2, label: "Medication", href: "/medication" },
];

export const healthSummaryCards = [
  { image: image1, label: "Blood Sugar", value: "120 mg/dL" },
  { image: image2, label: "Blood Pressure", value: "120/80 mmHg" },
  { image: image3, label: "Oxygen Rate", value: "98%" },
  { image: image4, label: "Pulse Rate", value: "72 bpm" },
];
