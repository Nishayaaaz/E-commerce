import AboutFeatures from "./AboutFeatures";

const About = () => {
  const aboutObj = [
    {
      id: 1,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWx4ob9Z8BTXMe07OpEQMYJeUusLEyfSCe_R2078-cihXqpmkH",
      title: "Fully Responsive",
      description:
        "This theme will look great on any device, no matter the size!",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qOyAOVXDTMo5P_GGWyXGYytRs2zPEKgpZ-9yf2_y6SHrdgIX",
      title: "Fully Responsive",
      description:
        "This theme will look great on any device, no matter the size!",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWx4ob9Z8BTXMe07OpEQMYJeUusLEyfSCe_R2078-cihXqpmkH",
      title: "Fully Responsive",
      description:
        "This theme will look great on any device, no matter the size!",
    },
  ];
  return (
    <div className="flex flex-col justify-evenly bg-slate-200 py-10 lg:flex-row">
      {aboutObj.map((value) => {
        return <AboutFeatures value={value} key={value.id} />;
      })}
    </div>
  );
};

export default About;