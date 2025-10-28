import React from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';


interface TeamMember {
  name: string;
  role: string;
  image: string;
  profile:string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Mohammed Muflih',
      role: 'App Developer · Web Developer',
      image: '/muflih-photo.png',
      profile: "https://www.linkedin.com/in/muflih9605"
    },
    {
      name: 'Mohammed Fahad',
      role: 'Designer · Web Developer',
      image: 'fahad-photo.png',
      profile: "https://www.linkedin.com/in/just-fahad/"
    }
  ];

  return (
    <div className="flex items-center justify-center md:px-0 px-5">
      <div className="w-[1143px] h-[600px]">
        <div className="bg-[#CFDBC2] rounded-lg p-6 md:p-12 md:py-24">
          <p className="hidden md:flex text-2xl md:text-4xl font-bold mb-6 md:mb-8">The Team</p>
          <p className="md:hidden text-center text-2xl font-bold mb-6 ">The Team</p>
          
          {/* Desktop Layout - Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center justify-center gap-4">
                <div className="rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[24px] text-base mb-1">{member.name}</p>
                  <p className="text-md mb-2">{member.role}</p>
                  <Link
                    href={member.profile}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
                    >
                    View Profile
                    <IconArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout - Centered */}
          <div className="md:hidden flex flex-col items-center gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-lg overflow-hidden mb-3 bg-green-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-base mb-1">{member.name}</h3>
                <p className="text-sm text-gray-700 mb-2">{member.role}</p>
                <button className="flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all">
                  View Profile
                  <IconArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;