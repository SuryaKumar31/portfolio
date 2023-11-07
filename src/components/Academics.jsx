import React from "react";
import { ReactComponent as Work } from "../assets/work.svg";
import { ReactComponent as Degree } from "../assets/degree.svg"; // Import the "Degree" icon
import { ReactComponent as School } from "../assets/school.svg";
import timelineElements from "../timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Academics = () => {
  const WorkIconStyles = { background: "black" };
  const DegreeIconStyles = { background: "white" };
  const SchoolIconStyles = { background: "black" };
  return (
    <section className="mt-2 p-10" id="academics">
      <div className="">
        <h1 className="mb-10 text-center font-bold text-3xl md:text-5xl text-white academics__heading">
          Academics
        </h1>
        <VerticalTimeline>
          {timelineElements.map((element, index) => {
            const isWorkIcon = element.icon === "work";
            const isDegreeIcon = element.icon === "degree"; // Check if the icon is "degree"
            return (
              <VerticalTimelineElement
                key={index}
                date={element.date}
                dateClassName="date"
                iconStyle={
                  isWorkIcon
                    ? WorkIconStyles
                    : isDegreeIcon
                    ? DegreeIconStyles
                    : SchoolIconStyles
                }
                icon={
                  isWorkIcon ? <Work /> : isDegreeIcon ? <Degree /> : <School />
                }
                className="vt"
              >
                <h3 className="vertical-timeline-element-title font-bold uppercase sm:text-xl">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle font-semibold max-sm:text-sm text-red-600">
                  {element.location}
                </h5>
                <p className="">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Academics;
