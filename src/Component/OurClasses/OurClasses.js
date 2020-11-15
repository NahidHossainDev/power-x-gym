import React from 'react';
import NavbarCont from '../Navbar/NavbarCont';
import Footer from '../Footer/Footer';
import ClassesCard from './ClassesCard';

const OurClasses = () => {
  const data = [
    {
      img:
        "https://i.postimg.cc/vmbcz3Bv/alora-griffiths-Tuzrz-Arccvc-unsplash.jpg",
      training: "PSYCHO TRAINING",
    },
    {
      img:
        "https://i.postimg.cc/HkCxYBQC/baylee-gramling-5m4-Z14-SDL80-unsplash.jpg",
      training: "CARDIO TRAINING",
    },
    {
      img:
        "https://i.postimg.cc/zfzGWvtt/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg",
      training: "SELF DEFENSE",
    },
    {
      img:
        "https://i.postimg.cc/Hk4LVX28/john-fornander-FIu48iuo-4g-unsplash.jpg",
      training: "STRENGTH TRAINING",
    },
    {
      img:
        "https://i.postimg.cc/WzkNjkz3/sven-mieke-Lx-GDv7-VA9-M-unsplash.jpg",
      training: "ADVANCE GYM",
    },
    {
      img: "https://i.postimg.cc/1zB4YwV1/victor-freitas-546919-unsplash.png",
      training: "PSYCHO TRAINING",
    },
  ];
    return (
      <div>
        <NavbarCont>
          <h1 className="text-light text-center">OUR CLASSES</h1>
        </NavbarCont>
          <div className="container">
            <div className="row ">
              {data.map((d, i) => (
                <ClassesCard img={d.img} training={d.training} />
              ))}
            </div>
          </div>
        <Footer />
      </div>
    );
};

export default OurClasses;