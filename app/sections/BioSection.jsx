import React from 'react';

const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

const BioSection = () => {
  const age = calculateAge('2004-07-16');
  
  return (
    <section className="h-screen bg-white text-black">
      <div className="h-full grid grid-cols-3">
        <div className="col-span-1 h-full flex items-center pl-8">
          <div className="w-3/4">
            <p className="text-xl text-left">
              I am Alexander Klein,<br/>
              A {age} year old CS Student
            </p>
          </div>
        </div>
        <div className="col-span-1 h-full flex items-center justify-center">
          <img src="/assets/pool.png" alt="Pool" className="w-full" />
        </div>
        <div className="col-span-1 h-full flex items-center pr-8">
          <div className="w-3/4 ml-auto">
            <p className="text-xl text-right">
              Working to help people
              <br/>
              <span className="text-blue">achieve</span> their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;