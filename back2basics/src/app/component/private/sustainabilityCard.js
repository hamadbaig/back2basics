import React from "react";

// Card Component
const Card = ({ title, iconSrc, bgColorFrom, bgColorTo, items }) => {
  return (
    <div
      className={`flex flex-col bg-gradient-to-r ${bgColorFrom} ${bgColorTo} text-white rounded-xl p-4 w-full max-w-sm mx-auto`}
    >
      {/* Header */}
      <div className="flex items-center justify-center">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Icon */}
      <div className="flex justify-center my-4">
        <div className="bg-white rounded-full p-3">
          <img src={iconSrc} alt={`${title} Icon`} className="w-8 h-8" />
        </div>
      </div>

      {/* List Items */}
      <ul className="text-left space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Section with multiple cards
const CardSection = () => {
  const cardsData = [
    {
      title: "Completed",
      iconSrc: "/mainProfile.jpeg", // Change the image path as needed
      bgColorFrom: "from-teal-500",
      bgColorTo: "to-green-400",
      items: [
        "1. Idea Conceptualisation",
        "2. Background Research",
        "3. Market Research",
        "4. Stakeholder Mapping",
        "5. Battery Value Chain Mapping",
        "6. Spent Battery Stream Mapping",
        "7. Gap Analysis",
      ],
    },
    {
      title: "Completed",
      iconSrc: "/mainProfile.jpeg", // Change the image path as needed
      bgColorFrom: "from-teal-600",
      bgColorTo: "to-blue-600",
      items: [
        "1. Lab Partnerships",
        "2. R&D",
        "3. Experimentation",
        "4. Process Development",
        "5. Tests & Results Analysis",
        "6. Idea Validation",
        "7. Team Development",
        "8. Equipment & Supplier Identification",
      ],
    },
    {
      title: "Completed",
      iconSrc: "/mainProfile.jpeg", // Change the image path as needed
      bgColorFrom: "from-yellow-400",
      bgColorTo: "to-yellow-500",
      items: [
        "1. Private Test Lab setup",
        "2. Pilot-1 Model Development & Process Validation",
        "3. Result Analysis",
        "4. Protocol Development",
        "5. Patent & IPR Filling",
        "6. Research & Innovation",
      ],
    },
    {
      title: "Ongoing",
      iconSrc: "/mainProfile.jpeg", // Change the image path as needed
      bgColorFrom: "from-teal-500",
      bgColorTo: "to-blue-700",
      items: [
        "1. Land Acquisition",
        "2. Consents & NOC's",
        "3. Infra Development",
        "4. Spoke Creation",
        "5. Market Outreach & Partnerships",
        "6. Research & Innovation",
        "7. Tech Platform for Transparent & Traceable Supply Chain",
      ],
    },
    {
      title: "Planned",
      iconSrc: "/mainProfile.jpeg", // Change the image path as needed
      bgColorFrom: "from-green-400",
      bgColorTo: "to-teal-400",
      items: [
        "1. Hub Operations Capacity Expansion",
        "2. Global Tie up & Business Expansion",
        "3. Increased Customer acquisition",
        "4. Sustainable Supplier Network & Spoke Partnerships",
        "5. Research & Innovation",
      ],
    },
  ];

  return (
    <>
      <h1 className="text-center text-2xl font-bold mt-10">Milestones</h1>

      <div className="flex flex-wrap justify-center gap-3 p-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            iconSrc={card.iconSrc}
            bgColorFrom={card.bgColorFrom}
            bgColorTo={card.bgColorTo}
            items={card.items}
          />
        ))}
      </div>
    </>
  );
};

export default CardSection;
