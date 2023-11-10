"use client"


interface ServiceCardProps {
    icon: string;
    desc: string;
    text: string;

  }

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, desc, text }) => {
  return (
    <div className="max-w-sm md:w-[450px] md:h-[300px] flex flex-col bg-white rounded-lg overflow-hidden shadow-md m-4">
      <div className="p-4 text-center">
        <i className={`fa fa-2x ${icon} text-primary-blue`} />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 flex flex-col justify-center items-center">
          <h4 className="capitalize font-semibold text-lg md:text-2xl text-center text-black m-0">{desc}</h4>
          <p className="text-base font-light md:text-lg text-center text-black pt-2">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
