import React from 'react';
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
    name: "Morgan McKinnies",
    jobTitle: "Cybersecurity | RSBM",
    company: "N/A",
    profilePic: "https://media.licdn.com/dms/image/D5635AQF-4UrtIGyHdQ/profile-framedphoto-shrink_800_800/0/1715722981004?e=1718316000&v=beta&t=N9Jk_5MGHLlp9l7YzNjUMgfWdzS6zEoTtaDJZfMGVm0", // Replace with actual image URL
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 22000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    centerMode: true,
    centerPadding: '0', // Adjust the padding to space out the cards
    cssEase: 'linear', // Linear easing for continuous effect
  };

  return (
    <div className="relative h-full w-full">
      <Slider {...settings}>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="p-4 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between border border-gray-200" style={{ width: '400px', height: '200px' }}>
              <p className="text-center mb-4 text-gray-700">“{feedback.text}”</p>
              <div className="flex items-end w-full">
                <img src={feedback.profilePic} alt={feedback.name} className="w-14 h-14 rounded-full flex-shrink-0" />
                <div className="ml-4">
                  <p className="font-bold text-lg text-gray-900">{feedback.name}</p>
                  <p className="text-sm text-gray-600">{feedback.jobTitle}</p>
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
