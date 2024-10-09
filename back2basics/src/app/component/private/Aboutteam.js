// components/LeadershipTeam.js
import React from "react";
import Image from "next/image";
const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Tomasz Poznar, Ph.D.",
      title: "Vice President, Strategy & General Manager, Europe",
      image: "/team1.jpg", // Replace with the actual image path
      description:
        "Vipin Upadhyay's journey began in Vigheypur village, Aligarh district, where he completed his early education. After moving to Delhi, he finished his secondary education and pursued higher studies at Maharaja Agrasen College, earning a degree in Hindi Honors with a focus on journalism. He then completed a Post-Graduation Diploma in Television Production and Journalism from YMCA in 2009. Vipin started his career in journalism, focusing on social issues. He later moved to Rajasthan to work with Urmul Seemant on child rights. In 2015, he joined Seed CSR, managing skill development projects in Maharashtra, and in 2017, he joined Karo Sambhav, pioneering EPR in India. Vipin founded Back2Basics Recycle Private Limited in 2021, focusing on lithium battery recycling and achieving significant milestones in e-waste management and employment generation.",
    },
    {
      name: "Roger Lin",
      title: "Vice President, Government Relations",
      image: "/team2.jpg",
      description:
        "Tanveer is a highly skilled QHSE & Sustainability Professional with a mechanical engineering background. He has successfully supported and utilized his expertise throughout his career. Tanveer’s core competencies include environmental sustainability, resource recovery, circular economy, policy advocacy, government relations, ESG consulting, GHG accounting, decarbonization strategies, lifecycle assessment, and regulatory compliance. He is certified as an IRCA Lead Auditor for OHS-MS (45001:2018) and EMS (14001:2015) and is a QHSE Lead Implementer for ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018. With additional certifications from NEBOSH and a PG diploma in Environmental Laws and Policies, Tanveer is committed to risk mitigation, continuous improvement, and upholding the highest professional standards in health, safety, and environmental sustainability.",
    },
    {
      name: "Dr. Partha Pratim Mondal​",
      title: "Chief Scientist,Innovation-IIT Delhi​",
      image: "/team3.jpg",
      description:
        "Dr. Partha Pratim Mondal holds a PhD from IIT Delhi, specializing in resource recovery with a focus on process intensification, reactor design, and Computational Fluid Dynamics (CFD). His doctoral research, conducted as part of an Indo-German collaborative project and supported by the Ministry of Mines, centered on biofuel production from lignocellulosic biomass. Throughout his academic journey, Dr. Mondal has gained extensive experience in sustainable development, particularly within the framework of circular economy principles. He is passionate about advancing research and innovation in sustainable development, aiming to integrate environmental stewardship with technological advancement.",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">
          Leadership Team
        </h2>

        <div className="space-y-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6"
            >
              {/* Leader Image */}
              <div className="w-full h-40">
                <Image
                  width={100}
                  height={100}
                  src={leader.image}
                  alt={leader.name}
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>

              {/* Leader Info */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-blue-900">
                  {leader.name}
                </h3>
                <p className="text-blue-600">{leader.title}</p>
                <p className="mt-4 text-gray-700">{leader.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
