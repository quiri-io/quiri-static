import Image from 'next/image'
import ContactForm from './contactForm';

export default function Home() {
  return (
    <div className="grid grid-cols-3 h-screen max-h-[1200px] mx-auto max-w-screen-2xl">
      <div className="col-span-1 bg-pale-orange h-[100%] flex flex-col justify-between items-center">
        <img
          src="quiri-logo.png"
          alt="Quiri Logo"
          className="w-3/4"
        />
        <div className="flex flex-row items-center justify-between">
          <img 
            src="thought-bubbles-left.png"
            alt="Thought bubbles left"
            className="px-10"
          />
          <img
            src="thought-bubbles-right.png"
            alt="Thought bubbles right"
            className="px-10"
          />
        </div>
        <div className="flex flex-row items-end justify-between">
          <img 
            src="thinker-male.png"
            alt="Thinking statue left"
            className="-ml-10"
          />
          <img
            src="thinker-female.png"
            alt="Thinking statue right"
            className="z-50 -ml-20"
          />
        </div>
      </div>
      <div className="col-span-2 bg-pale-purple h-[100%] pt-24 px-16 flex flex-col">
        <div className="font-sans text-dark-blue text-6xl mb-5 font-thin leading-tight tracking-tight">
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
          <ContactForm/>
        </div>
        <div className="flex flex-row justify-between items-end grow">
          <div></div>
          <div className="text-black text-1xl pb-5">
            info@quiri.io
          </div>
          <div className="text-black text-1xl pb-5">
            Quiri Ltd. 2023
          </div>
        </div>
      </div>
    </div>
  );
}
