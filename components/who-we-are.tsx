// import { HeartPulse, Scale, Shield, Sparkles } from "lucide-react"
// import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/css"
// import "swiper/css/navigation"

// const focusAreas = [
//   {
//     title: "Heart Health",
//     description: "Cardio-protective diets tailored for hypertension, cholesterol, and post-cardiac care.",
//     icon: HeartPulse,
//   },
//   {
//     title: "Weight Management",
//     description: "Metabolism-friendly meal plans that balance satiety, macros, and lifestyle routines.",
//     icon: Scale,
//   },
//   {
//     title: "Immunity Boosting",
//     description: "Antioxidant-rich protocols to strengthen defenses during stress or recovery phases.",
//     icon: Shield,
	function WhoWeAre() {
		return (
			<section className="max-w-3xl mx-auto px-4 py-12">
				<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
					<h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 text-center">Who We Are</h2>
					<p className="text-base sm:text-lg text-foreground/80 mb-6 text-center">
						At DietMentor, we specialize in personalized diets for patients managing chronic conditions like <span className="font-semibold">diabetes, hypertension, kidney disorders</span>, and more. We also design preventive diet plans for:
					</p>
					<ul className="flex flex-wrap justify-center gap-3 mb-6">
						<li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Heart health</li>
						<li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Weight management</li>
						<li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Immunity boosting</li>
						<li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Healthy aging</li>
					</ul>
					<p className="text-base sm:text-lg text-foreground/80 mb-8 text-center">
						Our team of certified nutritionists and dietitians ensures every plan is <span className="font-semibold">evidence-based, practical, and culturally adaptable</span>.
					</p>
					<div className="bg-primary/5 rounded-xl p-5">
						<h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 text-center">Our Vision</h3>
						<p className="text-base sm:text-lg text-foreground/80 text-center">
							To make healthy eating simple, accessible, and effective for everyone – whether you are managing a health condition or striving for long-term wellness.
						</p>
					</div>
				</div>
			</section>
		);
	}

	export default WhoWeAre;
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-bold text-foreground text-center mb-2">{area.title}</h3>
//                 <p className="text-[15px] text-foreground/70 text-center">{area.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
