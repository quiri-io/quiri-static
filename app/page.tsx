import Image from 'next/image'
import ContactForm from './contactForm';

export default function Home() {
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-3 xl:h-screen xl:max-h-[1200px] xl:mx-auto xl:max-w-screen-2xl overflow-hidden">
      <div className="col-span-1 bg-pale-orange h-[100%] flex flex-col justify-between items-center">
        {/* <div className="max-h-96 w-full p-20 max-xl:hidden"> */}
          <img
            src="quiri-logo.png"
            alt="Quiri Logo"
            className="object-contain max-h-[32rem] w-full p-16 max-xl:hidden"
          />
        {/* </div> */}
        <div className="flex flex-row items-center justify-between max-xl:hidden">
          <img 
            src="thought-bubbles-left.png"
            alt="Thought bubbles left"
            className="px-10 max-xl:hidden"
          />
          <img
            src="thought-bubbles-right.png"
            alt="Thought bubbles right"
            className="px-10 max-xl:hidden"
          />
        </div>
        <div className="flex flex-row items-center justify-between max-xl:hidden">
          <img 
            src="thinker-male.png"
            alt="Thinking statue left"
            className="w-3/5 -ml-16"
          />
          <img
            src="thinker-female.png"
            alt="Thinking statue right"
            className="z-50 w-3/5 -mr-28"
          />
        </div>
        <div className="flex flex-row items-end justify-between xl:hidden">
          <img 
            src="thinker-male.png"
            alt="Thinking statue left"
            className="xl:-ml-10 w-1/6"
          />
          <img 
            src="thought-bubbles-left.png"
            alt="Thought bubbles left"
            className="w-1/6 pr-6 self-center"
          />
          <img
            src="quiri-logo.png"
            alt="Quiri Logo"
            className="w-1/3 pt-5 pb-10"
          />
          <img
            src="thought-bubbles-right.png"
            alt="Thought bubbles right"
            className="w-1/6 pl-6 self-center"
          />
          <img
            src="thinker-female.png"
            alt="Thinking statue right"
            className="z-50 w-1/5"
          />
        </div>
      </div>
      <div className="col-span-2 bg-pale-purple h-[100%] pt-12 px-10 xl:pt-24 px-16 flex flex-col items-center">
        <div className="font-sans text-dark-blue text-2xl xl:text-6xl mb-5 font-thin leading-tight tracking-tight">
          Quiri is a platform for thinkers to have <strong>progressive dialogues</strong> that are <strong>driven by curiosity.</strong>
        </div>
        <div className="font-sans text-dark-blue text-l xl:text-2xl mb-10 font-thin">
          We are working hard on releasing a first version of our iOS and Android app soon.
        </div>
        <div className="p-10 mb-16 xl:mx-16 mb-3 bg-white rounded-md shadow-[15px_17px_4px_0_rgba(53,195,209,1)] xl:shadow-[30px_34px_4px_0_rgba(53,195,209,1)] max-w-2xl">
          <div className="mb-3 text-dark-blue text-2xl xl:text-3xl ">
            Leave your email to stay tuned about news updates! 
          </div>
          <div className="mb-3 text-dark-blue text-xs xl:text-1xl ">
            Your email will never be shared with any 3rd parties and will only be accessible to Quiri admins <a>Learn more</a>
          </div>
          <ContactForm/>
        </div>
        <div className="flex flex-row justify-center items-end grow">
          <div></div>
          <a className="text-black text-1xl pb-5" href="mailto:info@quiri.io?subject=Subject%20of%20the%20Email">
            info@quiri.io
          </a>
        </div>
      </div>
    </div>
  );
}
