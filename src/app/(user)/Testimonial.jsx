
const expert1 = "/assets/expert-1.jpg";
const expert2 = "/assets/expert-2.jpg";
const expert3 = "/assets/expert-3.jpg";
const expert4 = "/assets/expert-4.jpg";
const expert5 = "/assets/expert-5.jpg";
const testimonialsData = [
  {
    id: 1,
    quote: '"The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!"',
    avatar: expert1,
    videoPoster:expert1 , // Team setup
    name: 'Patrick Nawrocki',
    role: 'UX Manager at Superhabits',
  },
  {
    id: 2,
    quote: '"DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!"',
    avatar:expert2,
    videoPoster: expert2, // Pari Patel poster
    name: 'Pari Patel',
    role: 'Product Designer at Lightdash',
  },
  {
    id: 3,
    quote: '"DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!"',
    avatar: expert3,
    videoPoster: expert3, // Corporate setup
    name: 'Rob West',
    role: 'CEO of Kingdom Advisors',
  },
    {
    id: 4,
    quote: '"DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!"',
    avatar: expert4,
    videoPoster: expert4, // Pari Patel poster
    name: 'Pari Patel',
    role: 'Product Designer at Lightdash',
  },
  {
    id: 5,
    quote: '"DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!"',
    avatar: expert5,
    videoPoster:expert5, // Corporate setup
    name: 'Rob West',
    role: 'CEO of Kingdom Advisors',
  },
];

export default function Testimonial() {


  return (
  <section id="experts" className="relative  py-24 overflow-hidden">
     
      <div className="flex gap-5 animate-scroll-cards w-max px-4">
          
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-[24px] p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between border border-gray-100/50 overflow-hidden w-[300px] transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
            >
              
              {/* =========================================================
                  VIDEO LAYER (शुरुआत में छिपी रहेगी, Hover पर स्मूथली दिखेगी)
                  ========================================================= */}
              <div className="absolute inset-0 z-10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500">
                {/* Background Video Poster Image */}
                <img
                  src={item.videoPoster}
                  alt={`${item.name} video thumbnail`}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
                />
            
              </div>

              {/* =========================================================
                  TEXT CONTENT LAYER (Hover करने पर इसका कलर बदलेगा या छिपेगा)
                  ========================================================= */}
              <div className="relative z-20 flex flex-col justify-between h-full pointer-events-none">
                
              
                <div>
                
                  <div className="w-12 h-12 rounded-full overflow-hidden mb-8 ring-2 ring-gray-100 group-hover:hidden">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Quote: Hover होने पर टेक्स्ट फेड आउट हो जाएगा ताकि वीडियो साफ़ दिखे */}
                  <p className="text-[#333333] text-[15px] sm:text-[16px] leading-[1.65] font-normal tracking-wide group-hover:hidden">
                    {item.quote}
                  </p>
                </div>

                {/* Bottom Section: Name & Role */}
                <div className="">
                  {/* Name transitions smoothly from dark gray to solid white */}
                  <h3 className="text-[26px] text-[#1a1a1a] group-hover:text-white font-normal leading-none tracking-wide font-serif italic mb-1 transition-colors duration-500">
                    {item.name}
                  </h3>
                  {/* Role transitions from light gray to translucent white */}
                  <p className="text-[#999999] group-hover:text-white/70 text-[13px] font-medium tracking-normal transition-colors duration-500">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

       
      </div>
    </section>
  );
}