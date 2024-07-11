import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const feedbacks = [
  {
    text: "This guy is a straight up menace.",
    name: "Jared Hawkins",
    jobTitle: "Information Security Analyst",
    company: "Netskope",
    profilePic: "https://media.licdn.com/dms/image/D5603AQFnQCLdEYHhIA/profile-displayphoto-shrink_800_800/0/1716394425934?e=1723075200&v=beta&t=hjW1tA9MuBcI68pShqzXcF8Wg3cALtl8XEARu-SVu4M", // Replace with actual image URL
  },
  {
    text: "Hes on point with getting us coffee too.",
    name: "John Khotsyphom",
    jobTitle: "Security Practitioner | Leader",
    company: "Netskope",
    profilePic: "https://media.licdn.com/dms/image/D5603AQHKfAJfLHvUBA/profile-displayphoto-shrink_800_800/0/1716422812661?e=1723075200&v=beta&t=ZyPD20SeGJ0dIFkN6QRGHdQORMfF46XaSlcpRoiIyTY", // Replace with actual image URL
  },
  {
    text: "Excellent team player and always delivers high-quality work.",
    name: "James Robinson",
    jobTitle: "CISO @ Netskope",
    company: "Netskope",
    profilePic: "https://media.licdn.com/dms/image/C4E03AQFhkoAoKZC8oA/profile-displayphoto-shrink_800_800/0/1584537191754?e=1724284800&v=beta&t=9pjKmwTeYtiGyMBNTaRYsJjwYs64D2R8SR-6Hgu2WJ8", // Replace with actual image URL
  },
  {
    text: "Conor has been nothing but a excellent candidate.",
    name: "Damian Chung",
    jobTitle: "Business Information Security Officer (BISO)",
    company: "Netskope",
    profilePic: "https://media.licdn.com/dms/image/C5603AQEyeFIe6GAprQ/profile-displayphoto-shrink_800_800/0/1583263785357?e=1723075200&v=beta&t=HASkUY4fiArTbf9zQ7wPx87XO0BxFGmqcga86whWYbE", // Replace with actual image URL
  },
  {
    text: "Remarkable skills and a pleasure to work with.",
    name: "Lu Ray Waldemer",
    jobTitle: "Solutions Engineer | Analyst | Educator",
    company: "N/A",
    profilePic: "https://media.licdn.com/dms/image/D5603AQG7k3-lTCsZzQ/profile-displayphoto-shrink_800_800/0/1713398527883?e=1723075200&v=beta&t=n7B5N4AXzZqf1PlWkiKkLmR9zp3nIR1-rcMVCffAnPk", // Replace with actual image URL
  },
  {
    text: "Excellent team player and always delivers high-quality work.",
    name: "Ally Frame",
    jobTitle: "Assistant Manager, Security Operations",
    company: "Netskope",
    profilePic: "https://media.licdn.com/dms/image/D5603AQHikUD4j-kVFA/profile-displayphoto-shrink_800_800/0/1700619971238?e=1723075200&v=beta&t=bIaMRr3Ln5NiUdBPNwscUARD8yT0a46v8ZPc_bDfvHA", // Replace with actual image URL
  },
];

const FeedbackCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setSlidesToShow(1);
    } else if (width < 768) {
      setSlidesToShow(2);
    } else if (width < 1024) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 20000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    centerMode: true,
    centerPadding: '10px',
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 18000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 17000,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 16000,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div className="relative w-full py-8">
      <Slider {...settings}>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="px-2">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between border border-gray-200 h-full" style={{ minHeight: '220px' }}>
              <p className="text-center mb-4 text-gray-700 text-sm">{`"${feedback.text}"`}</p>
              <div className="flex items-center w-full">
                <img src={feedback.profilePic} alt={feedback.name} className="w-12 h-12 rounded-full flex-shrink-0" />
                <div className="ml-3 flex-grow">
                  <p className="font-bold text-sm text-gray-900">{feedback.name}</p>
                  <p className="text-xs text-gray-600 line-clamp-2">{feedback.jobTitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackCarousel;
