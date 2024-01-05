import React from "react";
import ProjectPage from "@/components/ProjectPage";
import Paragraph from "@/components/Shared/Paragraph";

const CarouselData = [
  { image: "/assets/projects/event-tracker/event_1.png" },
  { image: "/assets/projects/event-tracker/event_2.png" },
  { image: "/assets/projects/event-tracker/event_3.png" },
  { image: "/assets/projects/event-tracker/event_4.png" },
  { image: "/assets/projects/event-tracker/event_5.png" },
];

const techs = ["Python", "Django", "Django Rest Framework", "Javascript", "React", "Bootstrap", "Redux", "PostgreSQL"];

const EventTracker = () => {
  return (
    <ProjectPage
      title="Notice and Intimations Calendar"
      subtitle="Django / DRF / React JS / Bootstrap"
      CarouselData={CarouselData}
      techs={techs}
    >
      <p>Project Overview</p>
      <h2>December of 2019</h2>

      <Paragraph>
        A branch of the Itajaí City Hall, located in Brazil, had organizational and control issues with their notices
        and intimations. These documents needed to be related to specific plots of land and surveys conducted at the
        location. The staff was managing this process using individual Excel sheets, resulting in a lack of
        centralization.
      </Paragraph>
      <Paragraph>
        To address this problem, an initial MVP was developed using Django and templates (HTML5, CSS, and Bootstrap).
        The MVP was successful, leading to the development of a more complex system. Meetings were held to gather
        feedback on the deficiencies of the MVP and to identify new features.
      </Paragraph>
      <Paragraph>
        The final project was built using the stack that I was most comfortable with at the time. The frontend was
        developed with JavaScript, React, Redux, and the Bootstrap CSS library, while the backend utilized Python,
        Django, and DRF (Django Rest Framework).
      </Paragraph>
      <Paragraph>
        Although there were some changes to the database structure, the project continued to use the Django ORM and
        PostgreSQL.
      </Paragraph>
      <Paragraph>
        A significant new feature was the ability to print notices and intimations from a model within the app, which
        standardized the documentation process. Additionally, a new user structure was implemented, including designated
        assistants who could perform actions on behalf of an inspector with their permission.
      </Paragraph>
      <Paragraph>
        One major challenge in the project was the lack of access to city hall information, requiring compromises and
        periodic scraping to ensure up-to-date data. An admin page was created to facilitate triggering information
        updates.
      </Paragraph>
      <Paragraph>
        For hosting, the backend was containerized using Docker and deployed on a Linode VPS, with Nginx serving static
        files and acting as a reverse proxy. A separate Docker container hosted the PostgreSQL database.
      </Paragraph>
      <Paragraph>To assist users, a guide was created to provide instructions on how to use the application.</Paragraph>
      <a href="https://github.com/JonasBM/event_tracker_api" target="_blank" rel="noreferrer">
        <button className="button-styled px-8 py-2 mt-4 mr-8">Backend Code</button>
      </a>
      <a href="https://github.com/JonasBM/eventtracker_react" target="_blank" rel="noreferrer">
        <button className="button-styled px-8 py-2 mt-4 mr-8">Frontend Code</button>
      </a>
      <a href="https://github.com/JonasBM/eventtracker_react/wiki" target="_blank" rel="noreferrer">
        <button className="button-styled px-8 py-2 mt-4 mr-8">Guide</button>
      </a>
      {/* <a href="" target="_blank" rel="noreferrer">
            <button className="button-styled px-8 py-2 mt-4">Demo</button>
          </a> */}
    </ProjectPage>
  );
};

export default EventTracker;
