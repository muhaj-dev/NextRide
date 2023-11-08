import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  backgroundColor: string; // New prop for background color
}

const Card: React.FC<CardProps> = ({ icon, title, description, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="w-[280px]">
      <div className="p-4 rounded-lg shadow-md" style={cardStyle}>
        <Image src={icon} alt="Icon" width={129} height={129} className="w-16 h-16 object-contain mx-auto" />
      </div>
      <div className="">
        <h2 className="text-lg font-semibold mt-2 text-center">{title}</h2>
        <p className="text-gray-600 mt-2 text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;