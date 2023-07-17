import PeopleData from "./peopleData";

const OurPeople = () => {
  return (
    <div className="ourPeople-container">
      <p className="people-subtitle">The team</p>
      <p className="people-title">Meet our team of experts</p>
      <p className="people-description">
        With a customer-centric approach, we work tirelessly to understand and
        meet the unique needs of our clients, ensuring excellence in everything
        we do.
      </p>
      <div className="center">
        <div className="team-container">
          {PeopleData.map((person) => {
            const { id, name, job_title, image } = person;
            return (
              <div className="team-unit" key={id}>
                <img src={image} alt="profile picture" className="" />
                <p className="name">{name}</p>
                <p className="job">{job_title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
