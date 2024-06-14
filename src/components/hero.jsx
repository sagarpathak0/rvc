import { Link } from 'react-scroll';
import Button from "./button";
import { land_rv, amir_malik, pankaj_kumar, bablu_kumar, mukesh_kumar, ravi_mohan, yogendra_kumar, callus_rv,group_rv, rvc_logo, discordBlack, facebook, instagram, twitter, card_rv, gic_rv,canara_rv,uti_rv,delhi_rv,union_rv,hudco_rv,bob_rv, axis_rv,pnb_rv,esaf_rv, canfin_rv,idbi_rv,uco_rv,sib_rv, handshake_rv, sbi_rv, boi_rv, bom_rv, keyhouse_rv, impro_rv, car_rv, wheel_rv, building_rv, project_rv, } from "../assets";


const Hero = () => {
  return (
    <>
      <div id="top" className="h-auto flex flex-wrap content-end px-4 lg:px-0">
        <div className="w-full pb-6 lg:ml-72 flex flex-col space-y-6 transition-transform duration-300 transform origin-left hover:scale-110">
          <div className="font-black text-4xl lg:text-6xl">Broad Vision</div>
          <div className="font-black text-4xl lg:text-6xl">Honest Service</div>
          <div className="font-black text-4xl lg:text-6xl pb-6">Great Value</div>
        </div>
        <div className="w-full pb-9 lg:ml-72 text-base font-extralight">
          Our goal then and now is to provide quality on time projects
        </div>
        <Link to='foot' spy={true} smooth={true} offset={0} duration={1000}>
        <Button
          className="lg:ml-72 transition-transform duration-300 transform origin-left hover:scale-105"
          
        >
          Get in touch
        </Button>
        </Link>
      </div>
      <div className="mt-24 lg:mt-48">
        <hr className="border-gray-300" />
      </div>



      <div className="bg-white flex flex-col lg:flex-row w-full pt-24 lg:pt-48 ">
        <div className="flex flex-1">
          <div className="h-auto text-black xl:ml-48 2xl:ml-72 text-3xl lg:text-5xl font-semibold w-full ml-6 mr-6">
            Welcome to Real Value Consultants!
            <hr className="w-1/6 border-blue-800 my-6 border-t-4" />
            <div className="text-xl pb-6">Where we build your vision</div>
            <div className="text-base font-light pb-6">
              Effective project management can result in substantial cost savings.
            </div>
            <div className="text-base font-light pb-8" style={{ lineHeight: '1.8' }}>
              As a leading firm in our field, we specialize in valuations, appraisals, inspections, 
              project management, strategic consultancy, agency services, asset services, and a comprehensive range of related services. 
              Our expertise serves entrepreneurs, corporations, insurers, banks, financial institutions, government entities, and small to mid-sized companies.
            </div>
            <hr className="w-full border-blue-800 my-6 pb-6" />
            <div className="text-black text-3xl xl:text-3xl font-semibold w-full mb-24 xl:mb-48">
              <img src={callus_rv} width={170} alt="call" className="pb-8"/>
              +91-8076273122
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center xl:justify-start">
          <img className="pl-0 2xl:pl-40 xl:pl-20 pb-24 xl:pb-48" src={card_rv} alt="card" width={700}/>
        </div>
      </div>
      <div className="pb-0">
        <hr className="border-blue-800" />
      </div>



      <div className="text-lime-50 flex flex-col items-center pt-24 lg:pt-60">
        <div className="flex flex-1 items-center justify-center">
          <div className="h-96 text-white text-4xl lg:text-5xl font-semibold w-full max-w-screen-lg px-4 lg:px-0">
            <div className="text-center">
              <hr className="w-1/12 border-blue-800 my-6 border-t-4 mx-auto" />
              Get Your Free Consultation Today
              <div className="text-xl pb-6"></div>
              <div className="text-base font-light pb-8" style={{ lineHeight: '1.8' }}>
                Our guiding principle is to provide our customers with tactical and strategic solutions to make their holdings more productive and economically more efficient.
              </div>
              <Link to='foot' spy={true} smooth={true} offset={0} duration={1000}>
              <Button className="transition-transform duration-300 transform origin-left hover:scale-105" href="#touch">
                Book An Appointment
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>



      <div className="mt-24 lg:mt-48">
        <hr className="border-gray-300" />
      </div>


      <div className="bg-white flex flex-col lg:flex-row w-full pt-24 lg:pt-48">
        <div className="flex flex-1 text-black items-center justify-center mb-28 lg:mb-10 ">

        <img src={group_rv} alt="group" className='border border-slate-500 w-5/6 rounded-md'/>

        </div>
        <div className="flex flex-1" id="story">
          <div className="h-auto text-black lg:mr-48 xl:mr-72 text-3xl lg:text-5xl font-semibold w-full ml-6 mr-6">
            Our Story
            <hr className="w-1/6 border-blue-800 my-6 border-t-4" />
            <div className="text-base font-light pb-6" style={{ lineHeight: '1.8' }}>
              Incorporated in 2014, we are a team of dedicated professionals seasoned by experience and rich by expertise drawn from various fields supported by efficient staff. We are a consortium of Engineers, Management Professionals and Finance Experts imparting valuations and allied services to our customers.
            </div>
            <div className="text-base font-light pb-8" style={{ lineHeight: '1.8' }}>
              Throughout the course of our journey, our guiding principle is to provide our clients with tactical and strategic solutions to make their holdings more productive and economically more efficient.
            </div>
            <hr className="w-full border-blue-800 my-6" />
            <div>
              <img className="pb-24 lg:pb-48" src={land_rv} alt="land" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <hr className="border-gray-300" />
      </div>


      <div className=" flex flex-col lg:flex-row w-full pt-24 lg:pt-48 bg-blue-50">
        <div className="flex flex-1">
          <div className="h-auto text-black xl:ml-48 2xl:ml-72 xl:mr-48 2xl:mr-72 text-3xl lg:text-5xl font-semibold w-full ml-6 mr-6">
            Who Are We?
            <hr className="w-1/12 border-blue-800 my-6 border-t-4" />
            
            
            <div className="text-base font-light pb-8" style={{ lineHeight: '1.8' }}>
            Our team consists of senior valuers who all are certified registered valuers.  We ensure complete confidentiality to all clients and abide by a code of professional practice, ethics and rules of conduct.  Valuations undertaken by us are largely accepted by India’s major financial institutions.
            </div>
            <hr className="w-full border-blue-800 my-6 pb-6" />
            <div className="flex flex-col">
  <div className="flex flex-col lg:flex-row border bg-white rounded-xl my-10">
    <div className="flex flex-col lg:w-1/2 items-center my-20">
      <div className="flex justify-center  w-2/3 h-[500px] overflow-hidden rounded-full shadow-xl shadow-slate-400">
        <img src={ravi_mohan} alt="Description of image" className="w-[550px] h-[550px] object-cover"/>
      </div>
    </div>
    <div className="flex flex-1 flex-col lg:w-1/2 my-20 mx-8">
      <div className="text-3xl pb-3">Er. Ravi Mohan Bhardwaj</div>
      <div className="text-xl font-medium pb-10">Managing Director</div>
      <div className="text-base">
        Ravi Mohan Bhardwaj is a Civil Engineer and Masters in Real Estate Valuation. He is a fellow member of Institution of Valuers and member of Institution of Engineers(India). He is also a qualified valuer of Insolvency And Bankruptcy Board of India(Ministry of Corporate Affairs). He served the Indo-Tibetan Border Police Force, an elite Paramilitary Force of the country as an Officer before starting up his entrepreneurial journey. He founded Real Value Consultants in the year 2012 as a Valuation Advisory Firm. From that point forward, he has been steadily directing and moulding the Group into a premier specialist organization and driving valuation advisory organization of repute as seen today. He has exposure towards conventional as well as unconventional asset classes like office, retail, hospitality, industrial, residential and township.
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row mb-10">
    <div className="flex flex-col  md:w-1/2 pb-6 items-center mr-1 rounded-xl border bg-white">
      <div className="flex justify-center  w-2/3 h-[500px] overflow-hidden rounded-3xl mt-20 shadow-xl">
        <img src={mukesh_kumar} alt="Description of image" className="h-[740px] object-cover"/>
      </div>
      <div className="text-3xl pb-3 pt-2">Mr. Mukesh Kumar</div>
      <div className="text-xl font-medium pb-10">Technical Advisor</div>
    </div>
    <div className="flex flex-col  md:w-1/2 pb-6 items-center ml-1 rounded-xl border bg-white">
      <div className="flex justify-center  w-2/3 h-[500px] overflow-hidden rounded-3xl mt-20 shadow-xl">
        <img src={yogendra_kumar} alt="Description of image" className="h-[670px] object-cover"/>
      </div>
      <div className="text-3xl pb-3 pt-2">Mr. Yogendra Kumar</div>
      <div className="text-xl font-medium pb-10">Finance Officer</div>
    </div>
  </div>
  
  <div className="flex flex-col md:flex-row mb-10">
    <div className="flex flex-col  md:w-1/2 pb-6 items-center mr-1 rounded-xl border bg-white">
      <div className="flex justify-center  w-2/3 h-[500px] overflow-hidden rounded-3xl mt-20 shadow-xl">
        <img src={amir_malik} alt="Description of image" className="h-[740px] object-cover"/>
      </div>
      <div className="text-3xl pb-3 pt-2">Er. Amir Malik</div>
      <div className="text-xl font-medium pb-10">Engineer</div>
    </div>
    <div className="flex flex-col  md:w-1/2 pb-6 items-center ml-1 rounded-xl border bg-white">
      <div className="flex justify-center  w-2/3 h-[500px] overflow-hidden rounded-3xl mt-20 shadow-xl">
        <img src={bablu_kumar} alt="Description of image" className="h-[670px] object-cover"/>
      </div>
      <div className="text-3xl pb-3 pt-2">Er. Bablu Kumar</div>
      <div className="text-xl font-medium">Assistant Valuer</div>
      <div className="text-xl font-medium pb-10">Plant and Machinery</div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row mb-10">
    <div className="flex flex-col  md:w-1/2 pb-6 items-center mr-1 rounded-xl border bg-white">
      <div className="flex justify-center  w-2/3 h-[500px] overflow-hidden rounded-3xl mt-20 shadow-xl">
        <img src={pankaj_kumar} alt="Description of image" className="h-[740px] object-cover"/>
      </div>
      <div className="text-3xl pb-3 pt-2">Mr. Pankaj Kumar</div>
      <div className="text-xl font-medium pb-10">Admin Officer</div>
    </div>
    
  </div>
</div>

            {/* <div class="wrapper overflow-hidden">
              <div class="item item1"><img src={ravi_mohan} width={250} alt="" className='overflow-hidden'/></div>
              <div class="item item2"></div>
              <div class="item item3"></div>
              <div class="item item4"></div>
              <div class="item item5"></div>
              <div class="item item6"></div>
            </div> */}
          </div>
        </div>
      </div>


      <div>
        <hr className="border-gray-300" />
      </div>


      <div className="bg-white flex flex-col lg:flex-row w-full pt-24 lg:pt-48">
        <div className="flex flex-1">
          <div className="h-auto text-black xl:ml-48 2xl:ml-72 xl:mr-48 2xl:mr-72 text-3xl lg:text-5xl font-semibold w-full ml-6 mr-6">
            Why Real Value?
            <hr className="w-1/12 border-blue-800 my-6 border-t-4" />
            
            
            <div className="text-base font-light pb-8" style={{ lineHeight: '1.8' }}>
              Throughout the course of our journey, our guiding principle is to provide our clients with tactical and strategic solutions to make their holdings more productive and economically more efficient.            </div>
            <hr className="w-full border-blue-800 my-6 pb-6" />
            <div className="flex flex-col px-4 lg:px-0">
  <div className="flex flex-col lg:flex-row pb-24 lg:pb-48">
    <div className="w-full lg:w-1/3 xl:w-1/3 xl:mr-5 flex flex-col items-center border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl">
      <img className="pb-8 w-5/6" src={keyhouse_rv} alt="house" />
      <div className="font-bold text-2xl pb-8 w-5/6 text-center">We Understand Requirements</div>
      <div className="font-light text-base pb-8 w-5/6 text-center">
        The expertise, experience and judgment of our remarkable professionals set us apart. We empower our professionals and give them the technological resources they need to add value at every step of the process.
      </div>
    </div>
    <div className="w-full lg:w-1/3 xl:w-1/3 xl:mr-5 flex flex-col items-center border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl">
      <img className="pb-8 w-5/6 pt-9" src={impro_rv} alt="image2" />
      <div className="font-bold text-2xl pb-8 w-5/6 text-center">We Work Precisely ​</div>
      <div className="font-light text-base pb-8 w-5/6 text-center">We are committed to continually evaluating the needs of the clients and applying the best practices, systems, technology and services to meet those requirements.</div>
    </div>
    <div className="w-full lg:w-1/3 xl:w-1/3 xl:mr-5 flex flex-col items-center border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl">
      <img className="pb-8 w-5/6 pt-8" src={handshake_rv} alt="image3" />
      <div className="font-bold text-2xl pb-8 w-5/6 text-center">We Deliver Best Output​</div>
      <div className="font-light text-base pb-8 w-5/6 text-center">We seek first to understand the goals and aspirations of our clients. We then develop with our clients a strategic vision and operating plan. Thus, we begin to think and operate as an extension of our clients.</div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>



      <div id="service" className="text-lime-50 flex flex-col items-center pt-24 lg:pt-60 h-auto pb-24">
        <div className="flex flex-1 items-center justify-center">
          <div className="h-96 text-white text-4xl lg:text-5xl font-semibold w-full max-w-screen-lg px-4 lg:px-0">
            <div className="text-center">
              <hr className="w-1/12 border-blue-800 my-6 border-t-4 mx-auto" />
              We Provide the Best Service in Industry​
              
              <div className="text-base font-light pb-8" style={{ lineHeight: '1.8' }}>
                With Offices in Delhi and nearby cities, we are in a position to cover all parts of Delhi NCR and beyond effectively and efficiently. We have 3500 sq ft office space, well furnished with work stations and all modern facilities for suitable working environment.              </div>
                <Link to='foot' spy={true} smooth={true} offset={0} duration={1000}>
              <Button className="transition-transform duration-300 transform origin-left hover:scale-105" href="#touch">
                Contact us today
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>


<div className="bg-white flex flex-col lg:flex-row w-full pt-24 lg:pt-48">
  <div className="flex flex-1">
    <div className="h-auto text-black xl:mx-48 2xl:mx-72 text-3xl lg:text-5xl font-semibold w-full ml-6 mr-6">
      Our Services
      <hr className="w-1/12 border-blue-800 my-6 border-t-4" />

      <div className="flex flex-col lg:flex-row justify-center lg:space-x-8 pb-10">
        <div className="lg:w-2/3 text-base font-light pb-8 xl:pr-40 lg:pt-10" style={{ lineHeight: '1.8' }}>
          We operate in valuations, Appraisals, Inspections, Project Management, Strategic consultancy, Agency Services, Asset Services and all allied services to Entrepreneurs, Corporates, Insurers, Banks, financial Institutions, Govt. entities, Small and midsize companies.
        </div>
        <div className="flex flex-col lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <div className="text-2xl text-sky-500 pb-4">01.</div>
          <div className="text-lg pb-4">Meticulous Planning</div>
          <div className="text-base font-light xl:pr-9">We first seek to understand the goals and aspirations of our clients. We then develop with our clients a strategic vision and operating plan.</div>
        </div>
      </div>

      
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row pb-24 lg:pb-48 space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="text-2xl text-sky-500 pb-4">02.</div>
            <div className="text-lg pb-4">Comprehensive Analysis</div>
            <div className="text-base font-light xl:pr-9">We conduct thorough analyses to provide accurate valuations and insights, ensuring all aspects of the project are meticulously reviewed.</div>
          </div>
          <div className="w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="text-2xl text-sky-500 pb-4">03.</div>
            <div className="text-lg pb-4">Professional Execution</div>
            <div className="text-base font-light xl:pr-9">Our team ensures the strategic plan is executed flawlessly, maintaining high standards of professionalism and efficiency throughout.</div>
          </div>
          <div className="w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="text-2xl text-sky-500 pb-4">04.</div>
            <div className="text-lg pb-4">Continuous Support</div>
            <div className="text-base font-light xl:pr-9">We offer ongoing support and consultancy to ensure the sustained success and growth of our clients' ventures.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<hr className="w-full border-gray-300" />


<div className="bg-sky-100 flex flex-col lg:flex-row w-full pt-24 lg:pt-48">
  <div className="flex flex-1">
    <div className="h-auto text-black xl:mx-48 2xl:mx-72 text-3xl lg:text-5xl font-semibold w-full ml-6 mr-6">
      Our Specialization
      <hr className="w-1/12 border-blue-800 my-6 border-t-4 pb-9" />

      <div className="flex flex-col lg:flex-row justify-center lg:space-x-8 pb-10">
        
        <div className="flex bg-white flex-col lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={building_rv} width={40} alt="" className="pb-6" />
          <div className="text-lg pb-4">Real Estate Valuation</div>
          <div className="text-base font-light xl:pr-9">The increasing depth of the Indian real estate industry and growing interest in new instruments, calls for specialized and professional valuation services to assess – understand the impact of real estate on financial decisions in addition fulfilling statutory requirements. Valuations undertaken by us are largely accepted by India’s major financial institutions.</div>
        </div>
        <div className="w-full bg-white lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={car_rv} width={40} alt="" className="pb-6" />
            <div className="text-lg pb-4">Motor Vehicle Valuation</div>
            <div className="text-base font-light xl:pr-9">We are also engaged in the inspections and valuations of the motor vehicles. We provide such services to a number of financial institutions, Banks, Insurers and Corporates. We provide effective efficient and time bound services for all kind of motor vehicles which includes two wheelers, Private and Commercial motor cars, light commercial vehicles, heavy commercial vehicles and earth moving equipments.</div>
          </div>
          <div className="w-full bg-white lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={wheel_rv} width={40} alt="" className="pb-6" />
            <div className="text-lg pb-4">Plant and Machinery Valuation</div>
            <div className="text-base font-light xl:pr-9">We also undertake all types of valuation assignments related to the valuation of Plant and Machinery. Our valuation and Advisory division provide a wide range of valuation related to all type of small and large machinery, tools, plants, factories, industries, miscellaneous equipments, machines etc.</div>
          </div>
      </div>

      
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row pb-24 lg:pb-48 space-y-6 lg:space-y-0 lg:space-x-8">
          
          <div className="w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={project_rv} width={40} alt="" className="pb-6" />
            <div className="text-lg pb-4">Project management</div>
            <div className="text-base font-light xl:pr-9">We provide our clients the complete solution of project management from concept of commissioning to handling over of the same for immediate use. It includes Pre-construction design, estimation, tendering, costing, preparation of cash flow, cost analysis and monitoring, etc.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <div id="clients" className="h-auto flex flex-wrap content-end px-4 lg:px-0 pt-48">
        <div className="w-full pb-6 lg:ml-72 flex flex-col space-y-6 transition-transform duration-300 transform origin-left hover:scale-110">
          <div className="font-black text-4xl lg:text-6xl">Our Clients</div>
          
        </div>
        <div className="w-full pb-9 lg:ml-72 text-base font-extralight">
          Our goal then and now is to provide quality on time projects
        </div>
        <Link to='foot' spy={true} smooth={true} offset={0} duration={1000}>
        <Button
          className="lg:ml-72 transition-transform duration-300 transform origin-left hover:scale-105 mb-48"
          
        >
          Get in touch
        </Button>
        </Link>
      </div>
      

      <div className="bg-white flex flex-col lg:flex-row w-full pt-24 lg:pt-48">
  <div className="flex flex-1">
    <div className="h-auto text-black xl:mx-48 2xl:mx-72 text-3xl lg:text-5xl font-semibold w-full">
      <div className='ml-6 mr-6'>Banks
      <hr className="w-1/12 border-blue-800 my-6 border-t-4 pb-9" /></div>

      <div className="flex flex-col lg:flex-row justify-center lg:space-x-8 pb-10">


      <div className="flex flex-col items-center lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={sbi_rv} width={150} alt="" className="pb-6 pt-6" />
          <div className="text-lg pb-4">State Bank Of India</div>
        </div>

        <div className="flex flex-col items-center w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={pnb_rv} width={250} alt="" className="pb-6" />
            <div className="text-lg pb-4">Punjab National Bank</div>
          </div>

        <div className="flex flex-col items-center w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={canara_rv} width={150} alt="" className="pb-6" />
            <div className="text-lg pb-4">Canara Bank</div>
          </div>
        
        
          
      </div>

      
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row pb-9 space-y-6 lg:space-y-0 lg:space-x-8">
          
        <div className="flex flex-col items-center lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={boi_rv} width={150} alt="" className="pb-6" />
          <div className="text-lg pb-4">Bank Of India</div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={uco_rv} width={150} alt="" className="pb-6" />
            <div className="text-lg pb-4">UCO Bank</div>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={delhi_rv} width={250} alt="" className="pb-6" />
            <div className="text-lg">The Delhi State Coorporative</div>
            <div className="text-lg pb-4">Bank Limited</div>

          </div>
        </div>
      </div>

      
      
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row pb-9 space-y-6 lg:space-y-0 lg:space-x-8">
          
        <div className="flex flex-col items-center lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={bom_rv} width={250} alt="" className="pb-6 pt-6" />
          <div className="text-lg pb-4">Bank Of Maharastra</div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={sib_rv} width={150} alt="" className="pb-6" />
            <div className="text-lg pb-4">South Indian Bank</div>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={union_rv} width={150} alt="" className="pb-6" />
            <div className="text-lg">Union Bank Of India</div>
          

          </div>
        </div>
      </div>


      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row pb-9 space-y-6 lg:space-y-0 lg:space-x-8">
          
        <div className="flex flex-col items-center lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={gic_rv} width={250} alt="" className="pb-6" />
          <div className="text-lg pb-4">GIC Housing Finanace Ltd.</div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={canfin_rv} width={150} alt="" className="pb-6" />
            <div className="text-lg pb-4">Can Fin Homes Ltd.</div>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={uti_rv} width={150} alt="" className="pb-6" />
            <div className="text-lg">UTI Infrastructure Technology</div>
            <div className="text-lg pb-4">& Services Ltd.</div>

          </div>
        </div>
      </div>


      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row pb-9 space-y-6 lg:space-y-0 lg:space-x-8">
          
        <div className="flex flex-col items-center lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={axis_rv} width={250} alt="" className="pb-6 pt-6" />
          <div className="text-lg pb-4">Axis Bank</div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={idbi_rv} width={250} alt="" className="pb-6 pt-6" />
            <div className="text-lg pb-4">IDBI Bank</div>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={hudco_rv} width={100} alt="" className="pb-6" />
            <div className="text-lg">Housing & Urban</div>
            <div className="text-lg pb-4">Development Corporation</div>

          </div>
        </div>
      </div>


      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row pb-24 lg:pb-48 space-y-6 lg:space-y-0 lg:space-x-8">
          
        {/* <div className="flex flex-col items-center lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={iocl_rv} width={150} alt="" className="pb-6" />
          <div className="text-lg pb-4">IOCL</div>
        </div> */}
        <div className="flex flex-col items-center w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={bob_rv} width={150} alt="" className="pb-6" />
            <div className="text-lg pb-4">Bank Of Baroda</div>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/3 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={esaf_rv} width={150} alt="" className="pb-6" />
            <div className="text-lg">ESAF Small Finance Bank</div>

          </div>

           <div className="flex flex-col items-center lg:w-1/3 pb-6  p-4 rounded-3xl">
          {/* <img src={iocl_rv} width={150} alt="" className="pb-6" />
          <div className="text-lg pb-4">IOCL</div> */}
        </div> 
        </div>
      </div>
      
    </div>
  </div>
</div>



<div className="bg-white flex flex-col lg:flex-row w-full pt-24 lg:pt-24">
  <div className="flex flex-1">
    <div className="h-auto text-black xl:mx-48 2xl:mx-72 text-3xl lg:text-5xl font-semibold w-full ml-6 mr-6">
      <div className="">Our Recent Projects</div>
      <hr className="w-1/12 border-blue-800 my-6 border-t-4 pb-9" />

      <div className="flex flex-col lg:flex-row justify-center lg:space-x-8 pb-10">
        
      <div className="flex flex-col lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={building_rv} width={40} alt="" className="pb-6" />
          <div className="text-lg pb-4">Jindal Steel & Power Ltd.</div>
          <div className="text-base font-light xl:pr-9">Various steel & power plants in the states of Chattisgarh, Odisha & Jharkhand</div>
        </div>  
        <div className="flex flex-col lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={building_rv} width={40} alt="" className="pb-6" />
          <div className="text-lg pb-4">M3M Mansion</div> 
          <div className="text-base font-light xl:pr-9">Residential Group Housing Society situated at Revenue Estate of village Chauma, Sector 113, Gurugram, Haryana </div>
        </div>
        <div className="w-full lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={building_rv} width={40} alt="" className="pb-6" />
            <div className="text-lg pb-4">Yamuna Expressway Industrial Development</div>
            <div className="text-base font-light xl:pr-9">Authority Vacant land measuring 414.2312 hectare.</div>
          </div>
          <div className="w-full lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={building_rv} width={40} alt="" className="pb-6" />
            <div className="text-lg pb-4">M/s Jindal United Steel Ltd.</div>
            <div className="text-base font-light xl:pr-9">Situated at Kalinga Nagar Industrial Complex district - Jajpurin the state of Odisha, India.</div>
          </div>
      </div>

      
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row pb-9 lg:pb-9 space-y-6 lg:space-y-0 lg:space-x-8">

        <div className="flex flex-col lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={building_rv} width={40} alt="" className="pb-6" />
          <div className="text-lg pb-4">M/s Tata housing development company limited</div>
          <div className="text-base font-light xl:pr-9">"Primanti" Sector-72, Gurugram, Haryana</div>
        </div>  
        <div className="flex flex-col lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={building_rv} width={40} alt="" className="pb-6" />
          <div className="text-lg pb-4">M/s Supertech realtors Pvt. Ltd.</div>
          <div className="text-base font-light xl:pr-9">Plot no. 03, Sector 94, Noida, District-Gautam budh nagar(U.P)</div>
        </div>
        <div className="w-full lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={building_rv} width={40} alt="" className="pb-6" />
            <div className="text-lg pb-4">Bhartiya Rail Bijlee Company Ltd.</div>
            <div className="text-base font-light xl:pr-9">A subsidary of NTPC Ltd. in JV with indian railways</div>
          </div>
          <div className="w-full lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={building_rv} width={40} alt="" className="pb-6" />
            <div className="text-lg pb-4">M/s DLF Ltd.</div>
            <div className="text-base font-light xl:pr-9">Sector 81, Gurugram manesar urban complex, Gurugram, Haryana</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row pb-9 lg:pb-9 space-y-6 lg:space-y-0 lg:space-x-8">

        <div className="flex flex-col lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={building_rv} width={40} alt="" className="pb-6" />
          <div className="text-lg pb-4">M/s Kindle infraheights Pvt. Ltd.</div>
          <div className="text-base font-light xl:pr-9">Plot no. GH-03[B], Sector-143, Noida, Distt.-Gautam Budh Nagar U.P</div>
        </div>  
        <div className="flex flex-col lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={building_rv} width={40} alt="" className="pb-6" />
          <div className="text-lg pb-4">M/s Supertech Township Project Limited</div>
          <div className="text-base font-light xl:pr-9">Plot no. TS-5, Sector-22D, Yamuna Expressway Authority, District-Gautam budh nagar(U.P)</div>
        </div>
        <div className="w-full lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={building_rv} width={40} alt="" className="pb-6" />
            <div className="text-lg pb-4">M/s Supertech limited</div>
            <div className="text-base font-light xl:pr-9">Plot no. GH-06, sector-16B, greater noida, district gautam budh nagar(U.P)</div>
          </div>
          <div className="w-full lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={building_rv} width={40} alt="" className="pb-6" />
            <div className="text-lg pb-4">M/s Godrej Highview LLP.</div>
            <div className="text-base font-light xl:pr-9">Village-Dhunela. Sector-33, Sohna, District-Gurugram, Haryana</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row pb-24 lg:pb-48 space-y-6 lg:space-y-0 lg:space-x-8">

        <div className="flex flex-col lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={building_rv} width={40} alt="" className="pb-6" />
          <div className="text-lg pb-4">M/s M3M Indian Pvt. Ltd.</div>
          <div className="text-base font-light xl:pr-9">Sector-68, Revenue Estate of village badshahpur, Gurugram manesar urban complex, Gurugram</div>
        </div>  
        <div className="flex flex-col lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={building_rv} width={40} alt="" className="pb-6" />
          <div className="text-lg pb-4">M/s Wonder cement limited</div>
          <div className="text-base font-light xl:pr-9">Situated at Village- Jhanswa, Tehsil-Matanhail District-Jhajjar in the State of haryana, India</div>
        </div>
        <div className="w-full lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={building_rv} width={40} alt="" className="pb-6" />
            <div className="text-lg pb-4">M/s Saraswati Sugar Mills Ltd.(SSM)</div>
            <div className="text-base font-light xl:pr-9">Situated at Village mamida, Saharanpur Road, Tehsil Jagadhri, Distt. Yamuna nagar, Haryana</div>
          </div>
          <div className="w-full lg:w-1/4 pb-6 border-2 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={building_rv} width={40} alt="" className="pb-6" />
            <div className="text-lg pb-4">M/s ISGEC heavy engineering Ltd.</div>
            <div className="text-base font-light xl:pr-9">Property bearing no. 123, situated at Sector-6, Growth Centre, IMT Bawal, Tehsil Bawal, distt. Rewari, Haryana-123501</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id='foot' className="bg-black flex flex-col lg:flex-row xl:px-20 lg:px-16 w-full pt-24 pb-48 text-slate-400">
  <div className="flex flex-col items-center lg:items-start lg:w-1/4 mb-12 lg:mb-0">
    <Link to="top" spy={true} smooth={true} offset={-500} duration={1000} className="block pt-2" href="#hero">
      <img src={rvc_logo} alt="Real value consultants" className="w-[10rem] sm:w-[12rem] md:w-[16rem] lg:w-[20rem] xl:w-[21rem]" />
    </Link>
    <div className="flex justify-center lg:justify-start pt-5 xl:pl-12 pb-8 text-white">Values  |  Quality  |  Customer</div>
    <div className="flex justify-center xl:justify-around w-full xl:pl-12 lg:w-auto space-x-4">
      <img width={40} src={facebook} alt="facebook" />
      <img width={40} src={instagram} alt="instagram" />
      <img width={40} src={twitter} alt="twitter" />
      <img width={40} src={discordBlack} alt="discord" />
    </div>
  </div>

  <div className="flex flex-col items-center lg:items-start lg:w-1/4 mb-12 lg:mb-0 xl:pl-3 lg:pl-8">
    <div className="text-2xl font-bold text-white pt-8 lg:pt-0">Our Company</div>
    <div className="pt-8 space-y-3 flex flex-col text-center lg:text-left">
      <Link to="story" spy={true} smooth={true} offset={-100} duration={1000} className="cursor-pointer hover:text-white">About Company</Link>
      <Link to="service" spy={true} smooth={true} offset={-100} duration={1000} className="cursor-pointer hover:text-white">Services We Provide</Link>
    </div>
  </div>

  <div className="flex flex-col items-center lg:items-start lg:w-1/4 mb-12 lg:mb-0">
    <div className="text-2xl font-bold text-white pt-8 lg:pt-0">Our Services</div>
    <div className="pt-8 space-y-3 text-center lg:text-left">
      <div className="cursor-pointer hover:text-white">Land and Building Valuation</div>
      <div className="cursor-pointer hover:text-white">Plant and Machinery Valuation</div>
      <div className="cursor-pointer hover:text-white">Project Management</div>
      <div className="cursor-pointer hover:text-white">Capital Gains Valuation</div>
      <div className="cursor-pointer hover:text-white">Motor Vehicle Valuation</div>
    </div>
  </div>

  <div className="flex flex-col items-center lg:items-start lg:w-1/4">
    <div className="text-2xl font-bold text-white pt-8 lg:pt-0">Contact Details</div>
    <div className="pt-8 space-y-3 text-center lg:text-left">
      <div className="cursor-pointer hover:text-white">139-140, Pocket-1, Sector-25, Rohini, Delhi-110085</div>
      <div className="cursor-pointer hover:text-white">+91-8076273122</div>
      <div className="cursor-pointer hover:text-white">realvalue14@gmail.com</div>
    </div>
  </div>
</div>



    </>
  );
};

export default Hero;
