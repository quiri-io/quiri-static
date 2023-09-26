import Image from 'next/image'
import ContactForm from './contactForm';

export default function Home() {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2 bg-pale-orange h-screen">
        {/* Left side content */}
      </div>
      <div className="col-span-3 bg-pale-purple h-screen pt-24 px-16">
        <div className="font-sans text-dark-blue text-7xl mb-5 font-thin leading-tight tracking-tight">
          Quiri is a platform for thinkers to have <strong>progressive dialogues</strong> that are <strong>driven by curiosity.</strong>
        </div>
        <div className="font-sans text-dark-blue text-2xl mb-10 font-thin">
          We are working hard on releasing a first version of our iOS and Android app soon.
        </div>
        <div className="p-10 mx-16 mb-3 bg-white rounded-md shadow-[30px_34px_4px_0_rgba(53,195,209,1)]">
          <div className="mb-3 text-dark-blue text-3xl ">
            Leave your email to stay tuned about news updates! 
          </div>
          <div className="mb-3 text-dark-blue text-1xl ">
            Your email will never be shared with any 3rd parties and will only be accessible to Quiri admins <a>Learn more</a>
          </div>
          {/* <ContactForm onSubmit={() => {console.log("Submit!")}} /> */}
        </div>
      </div>
    </div>
  );
}
