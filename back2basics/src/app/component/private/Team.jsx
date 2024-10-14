import Image from "next/image";
const TeamComponent = () => {
  const teamMembers = [
    {
      name: "Tomasz Poznar, Ph.D.",
      title: "Vice President, Strategy & General Manager, Europe",
      imageSrc: "/team1.jpg",
      description:
        "Vipin Upadhyay's journey began in Vigheypur village, Aligarh district, where he completed his early education. After moving to Delhi, he finished his secondary education and pursued higher studies at Maharaja Agrasen College, earning a degree in Hindi Honors with a focus on journalism. He then completed a Post-Graduation Diploma in Television Production and Journalism from YMCA in 2009. Vipin started his career in journalism, focusing on social issues. He later moved to Rajasthan to work with Urmul Seemant on child rights. In 2015, he joined Seed CSR, managing skill development projects in Maharashtra, and in 2017, he joined Karo Sambhav, pioneering EPR in India. Vipin founded Back2Basics Recycle Private Limited in 2021, focusing on lithium battery recycling and achieving significant milestones in e-waste management and employment generation.",
    },
    {
      name: "Roger Lin",
      title: "Vice President, Government Relations",
      imageSrc: "/team2.jpg",
      description:
        "Tanveer is a highly skilled QHSE & Sustainability Professional with a mechanical engineering background. He has successfully supported and utilized his expertise throughout his career. Tanveer’s core competencies include environmental sustainability, resource recovery, circular economy, policy advocacy, government relations, ESG consulting, GHG accounting, decarbonization strategies, lifecycle assessment, and regulatory compliance. He is certified as an IRCA Lead Auditor for OHS-MS (45001:2018) and EMS (14001:2015) and is a QHSE Lead Implementer for ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018. With additional certifications from NEBOSH and a PG diploma in Environmental Laws and Policies, Tanveer is committed to risk mitigation, continuous improvement, and upholding the highest professional standards in health, safety, and environmental sustainability.",
    },
    {
      name: "Dr. Partha Pratim Mondal​",
      title: "Chief Scientist,Innovation-IIT Delhi​",
      imageSrc: "/team3.jpg",
      description:
        "Dr. Partha Pratim Mondal holds a PhD from IIT Delhi, specializing in resource recovery with a focus on process intensification, reactor design, and Computational Fluid Dynamics (CFD). His doctoral research, conducted as part of an Indo-German collaborative project and supported by the Ministry of Mines, centered on biofuel production from lignocellulosic biomass. Throughout his academic journey, Dr. Mondal has gained extensive experience in sustainable development, particularly within the framework of circular economy principles. He is passionate about advancing research and innovation in sustainable development, aiming to integrate environmental stewardship with technological advancement.",
    },
  ];

  return (
    <div className="py-16 bg-[#847A71]">
      <h1 className="text-center font-bold text-[3rem]">Our Team</h1>
      <div className="container mx-auto flex flex-col md:flex-row md:flex-wrap justify-center items-center space-y-12 md:space-y-0 md:space-x-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center md:text-left max-w-sm"
          >
            <Image
              width={100}
              height={100}
              src={member.imageSrc}
              alt={member.name}
              className="w-48 h-48 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <h4 className="text-lg font-medium text-blue-600 mb-4">
              {member.title}
            </h4>
            <p className="text-gray-700">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamComponent;
