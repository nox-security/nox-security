import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rory Stirland",
    rating: 5,
    text: "We had NOX Fire & Security install our commercial fire alarm system alongside an intruder alarm, and the whole experience was spot on from start to finish. Clean, professional installation, everything clearly explained, and the system is easy to manage through the app with instant alerts. The fire system is EN54 compliant and gives real peace of mind. No pushy sales, no contracts — just honest advice and proper workmanship. You can tell they care about doing things right. Highly recommend NOX for any business looking for fire or security systems in Chesterfield / Sheffield.",
    service: "Commercial Fire Alarm & Intruder Alarm",
  },
  {
    name: "Ryan Hargreaves",
    rating: 5,
    text: "Brilliant service from NOX. Super professional, knowledgeable, and they went out of their way to be helpful. Everything was explained clearly and in detail. The install was tidy, and the whole process was smooth from start to finish. We were thinking about getting a security system for a while and now we're so glad we went with NOX. Would 100% recommend to anyone.",
    service: "Ajax Alarm System",
  },
  {
    name: "Nathan De La Rosa",
    rating: 5,
    text: "We recently had NOX install cameras, smoke screens, and alarms at our office and the whole experience has been spot on from start to finish. From the very first phone call with Isaac, everything felt straightforward and reassuring. He took the time to explain our options, answered all our questions, and helped design a system that made sense for our building and our budget. No pushy sales tactics at all, which was refreshing. The installation was smooth, the team were professional, and even after everything was fitted, Isaac has been on hand to help with any follow-up questions. A really great service and a company I'd happily recommend.",
    service: "Commercial CCTV, Alarms & Smoke Screens",
  },
  {
    name: "Sasha Brailsford",
    rating: 5,
    text: "Really impressed with NOX Fire & Security. Isaac, Joe and James made everything super easy from start to finish — no pressure, just honest advice and a system tailored exactly to what I needed. Love how personalised it is, and being able to control my heating, washing machine and lights all from the same security app is a game changer. The lads were friendly, tidy, and took the time to show me how everything worked before they left. Feels good knowing it's all been done properly. Would definitely recommend.",
    service: "Ajax Smart Security & Automation",
  },
  {
    name: "Jeremy Bunting",
    rating: 5,
    text: "Seamless journey from start to finish! I filled in the simple form and was soon contacted by the team. They were very knowledgeable, professional and really listened to my needs. I have since had a system installed. The price was much less than I had expected and so far the aftercare has been great. I can't recommend them enough!",
    service: "Security System Installation",
  },
  {
    name: "Jez S",
    rating: 5,
    text: "Professional, friendly and sensible pricing. I submitted my company's CCTV requirements via Checkatrade. From first contact to completion the process was smooth and stress-free. The team clearly know their stuff and the system is exactly what we needed. Would have no hesitation recommending NOX to other businesses.",
    service: "Commercial CCTV",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 !bg-black text-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">What Our Customers Say</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <span className="font-bold text-2xl text-white">5.0</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-lg text-gray-300">
                5.0 · <span className="font-bold text-white">30+ Google Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 text-white border border-white/10 hover:border-white/20 transition-all hover-lift">
              <CardContent className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                     <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                     <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                     <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.service}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Read more authentic reviews from our customers</p>
          <a href="https://g.page/r/CUdyqRh0RFeXEAE/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
