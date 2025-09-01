// "use client";

// import Header from "../components/header/Header";
// import Footer from "../components/footer/Footer";
// import { motion, cubicBezier, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";

// // ANIMATION VARIANTS - All animation configs in one place
// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.15 } },
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) },
//   },
// };

// const fadeInLeft = {
//   hidden: { opacity: 0, x: -50 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) },
//   },
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 50 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) },
//   },
// };

// const imageVariants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.8,
//     y: 50,
//     rotate: -10,
//   },
//   show: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     rotate: 0,
//     transition: {
//       type: "spring",
//       duration: 0.8,
//       bounce: 0.3,
//     },
//   },
// };

// const floatAnimation = {
//   y: [-8, 8, -8],
//   rotate: [-2, 2, -2],
//   transition: {
//     duration: 4,
//     repeat: Infinity,
//     ease: "easeInOut",
//   },
// };

// // IMAGE DATA - All image configurations grouped together
// const firstSectionImages = [
//   {
//     src: "process-1.jpg",
//     alt: "Founder Story 1",
//     className: "w-52 h-70 rounded-2xl shadow-lg border-4 border-gray-300",
//     position: "absolute top-0 left-12",
//   },
//   {
//     src: "process-2.jpg",
//     alt: "Founder Story 2",
//     className: "w-34 h-48 rounded-4xl shadow-lg border-4 border-gray-300",
//     position: "absolute top-80 left-4",
//   },
//   {
//     src: "process-4.jpg",
//     alt: "Founder Story 4",
//     className: "w-50 h-50 rounded-4xl shadow-lg border-4 border-gray-300",
//     position: "absolute top-195 left-20",
//   },
//   {
//     src: "process-3.jpg",
//     alt: "Founder Story 3",
//     className: "w-65 h-65 rounded-3xl shadow-xl border-4 border-gray-300",
//     position: "absolute top-140 left-60",
//   },
//   {
//     src: "process-5.jpg",
//     alt: "Founder Story 5",
//     className: "w-34 h-48 rounded-4xl shadow-md border-4 border-gray-300",
//     position: "absolute bottom-0 left-80",
//   },
// ];

// const secondSectionImages = [
//   {
//     src: "process-6.jpg",
//     alt: "Brand Journey 1",
//     className: "w-62 h-62 rounded-4xl shadow-lg border-4 border-gray-300",
//     position: "absolute top-1 right-45",
//   },
//   {
//     src: "process-7.jpg",
//     alt: "Brand Journey 2",
//     className: "w-35 h-35 rounded-4xl shadow-md border-4 border-gray-300",
//     position: "absolute top-75 left-35",
//   },
//   {
//     src: "process-8.jpg",
//     alt: "Brand Journey 3",
//     className: "w-50 h-68 rounded-4xl shadow-xl border-4 border-gray-300",
//     position: "absolute top-120 right-2",
//   },
//   {
//     src: "process-9.jpg",
//     alt: "Brand Journey 4",
//     className: "w-30 h-38 rounded-2xl shadow-lg",
//     position: "absolute bottom-16 left-12",
//   },
// ];

// // INTERACTIVE SCROLL DATA
// const steps = [
//   {
//     image: "hero-2.jpg",
//     title: "It starts with a sketch",
//     subtitle: "beautifully designed and wholly unique that reimagines the idea of what a shoe can be.",
//     progress: 0.33,
//   },
//   {
//     image: "hero-3.png",
//     title: "We then take the latest technology and marry it with technical design",
//     subtitle: "to create a wearing experience like no other.",
//     progress: 0.66,
//   },
//   {
//     image: "hero-4.png",
//     title: "We then take the latest technology and marry it with technical design",
//     subtitle: "to create a wearing experience like no other.",
//     progress: 1,
//   },
// ];

// export default function About() {
//   // SCROLL INTERACTION LOGIC
//   const [currentStep, setCurrentStep] = useState(0);
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const stepProgress = useTransform(
//     scrollYProgress,
//     [0, 0.3, 0.6, 1],
//     [0, 1, 2, 2]
//   );

//   useEffect(() => {
//     const unsubscribe = stepProgress.on("change", (latest) => {
//       setCurrentStep(Math.floor(latest));
//     });
//     return unsubscribe;
//   }, [stepProgress]);

//   const currentStepData = steps[Math.min(currentStep, steps.length - 1)];

//   return (
//     <>
//       <Header />
//       <main className="bg-white max-w-full mx-auto px-0 pt-4 overflow-hidden">
        
//         {/* HERO SECTION */}
//         <section className="py-14 md:py-5 bg-white relative">
//           <motion.div
//             variants={fadeInLeft}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="relative z-10"
//           >
//             <motion.h1
//               className="mt-4 text-6xl md:text-8xl lg:text-9xl text-gray-900 text-left tracking-tight pl-6 font-bold pt-30"
//               initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.2, ease: "easeOut" }}
//             >
//               The Spark of <br />
//               <motion.span
//                 className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent"
//                 animate={{
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                 }}
//               >
//                 Inspiration
//               </motion.span>
//             </motion.h1>
//           </motion.div>

//           {/* Hero decorative element */}
//           <motion.div
//             className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl"
//             animate={{
//               scale: [1, 1.2, 1],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         </section>

//         {/* FOUNDER STORY SECTION */}
//         <section>
//           <motion.div
//             className="bg-ash-100 backdrop-blur-sm p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             {/* Staggered Images - Left Side */}
//             <motion.div
//               variants={container}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="relative h-100 md:h-[1200px] order-2 xl:order-1"
//             >
//               {firstSectionImages.map((img, index) => (
//                 <motion.div
//                   key={index}
//                   variants={imageVariants}
//                   whileHover={{
//                     scale: 1.08,
//                     rotate: index % 2 === 0 ? 3 : -3,
//                     zIndex: 20,
//                   }}
//                   animate={
//                     index % 2 === 0
//                       ? floatAnimation
//                       : {
//                           y: [5, -8, 5],
//                           rotate: [-1, 1, -1],
//                           transition: {
//                             duration: 3.5,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                           },
//                         }
//                   }
//                   className={`${img.position} ${img.className} cursor-pointer group overflow-hidden`}
//                   style={{ zIndex: 10 - index }}
//                 >
//                   <Image
//                     src={`/images/${img.src}`}
//                     alt={img.alt}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-inherit" />
//                   <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-inherit" />
//                 </motion.div>
//               ))}

//               {/* Decorative elements for first section */}
//               <motion.div
//                 className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"
//                 animate={{
//                   rotate: [0, 360],
//                   scale: [1, 1.15, 1],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               />
//               <motion.div
//                 className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-25"
//                 animate={{
//                   rotate: [360, 0],
//                   y: [-12, 12, -12],
//                   x: [-5, 5, -5],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//             </motion.div>

//             {/* Text Content - Right Side */}
//             <motion.div
//               variants={fadeInRight}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="flex flex-col gap-6 order-1 lg:order-2"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="space-y-8"
//               >
//                 <div className="relative">
//                   <motion.div
//                     className="absolute -left-6 top-0 w-1.5 h-20 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
//                     initial={{ height: 0, opacity: 0 }}
//                     whileInView={{ height: 80, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.6, duration: 1.2 }}
//                   />
//                   <motion.p
//                     className="text-base md:text-lg text-gray-500 leading-relaxed font-light"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: 0.8, duration: 0.6 }}
//                   >
//                     Founder Vince Lebon has been doing shoes for a long time.
//                   </motion.p>
//                 </div>

//                 <motion.p
//                   className="text-2xl md:text-4xl lg:text-5xl text-gray-800 leading-tight font-bold"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 1, duration: 0.8 }}
//                 >
//                   After a decade of designing for some of the biggest names in{" "}
//                   <motion.span
//                     className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent"
//                     animate={{
//                       backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                     }}
//                   >
//                     Aussie shoe brands
//                   </motion.span>
//                   , Vince felt like something was missing.
//                 </motion.p>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 1.3, duration: 0.6 }}
//                   className="relative"
//                 >
//                   <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
//                     He wanted to create a comfortable, on-the-go shoe that felt just as good as it looked.
//                   </p>
//                   <motion.div
//                     className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
//                     initial={{ width: 0 }}
//                     whileInView={{ width: "70%" }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 1.8, duration: 1.2 }}
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 2, duration: 0.6 }}
//                   className="pt-6"
//                 >
//                   <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full">
//                     <motion.div
//                       className="w-3 h-3 bg-blue-500 rounded-full"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                     />
//                     <span className="text-sm font-semibold text-blue-700">
//                       Crafting comfort since 2014
//                     </span>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* INTERACTIVE SCROLL SECTION */}
//         <section
//           ref={sectionRef}
//           className="relative min-h-[300vh] bg-white overflow-hidden"
//         >
//           <div className="sticky top-0 w-full h-screen flex items-center justify-center">
//             <div className="container mx-auto px-6 lg:px-8">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                
//                 {/* Text Content - Changes with scroll */}
//                 <motion.div className="space-y-8 order-2 lg:order-1">
//                   <motion.h2
//                     className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight"
//                     key={`title-${currentStep}`}
//                     initial={{ opacity: 0.3 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                   >
//                     Designed to{" "}
//                     <motion.span
//                       className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block"
//                       animate={{
//                         backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                       }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                       }}
//                     >
//                       Precision
//                     </motion.span>
//                   </motion.h2>

//                   <motion.div
//                     key={`content-${currentStep}`}
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="space-y-6"
//                   >
//                     <motion.p
//                       className={`text-xl md:text-2xl lg:text-3xl leading-relaxed transition-all duration-500 ${
//                         currentStep === 0
//                           ? "font-bold text-gray-800"
//                           : "font-normal text-gray-600"
//                       }`}
//                     >
//                       {currentStepData.title}
//                     </motion.p>

//                     <motion.p
//                       className="text-lg md:text-xl text-gray-600 leading-relaxed"
//                       animate={{
//                         opacity: currentStep === 0 ? 0.7 : 1,
//                         fontWeight: currentStep > 0 ? 600 : 400,
//                       }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       {currentStepData.subtitle}
//                     </motion.p>
//                   </motion.div>

//                   {/* Progress Circle */}
//                   <motion.div className="flex items-center gap-4 pt-8">
//                     <div className="relative">
//                       <svg width="80" height="80" className="transform -rotate-90">
//                         <circle
//                           cx="40"
//                           cy="40"
//                           r="35"
//                           stroke="rgb(229, 231, 235)"
//                           strokeWidth="3"
//                           fill="transparent"
//                         />
//                         <motion.circle
//                           cx="40"
//                           cy="40"
//                           r="35"
//                           stroke="rgb(37, 99, 235)"
//                           strokeWidth="3"
//                           fill="transparent"
//                           strokeDasharray={220}
//                           strokeDashoffset={220 - 220 * currentStepData.progress}
//                           strokeLinecap="round"
//                           transition={{ duration: 0.8, ease: "easeInOut" }}
//                         />
//                       </svg>
//                       <motion.div
//                         className="absolute inset-0 flex items-center justify-center"
//                         animate={{
//                           scale: currentStep > 0 ? 1.1 : 1,
//                           color: currentStep > 0 ? "rgb(37, 99, 235)" : "rgb(107, 114, 128)",
//                         }}
//                         transition={{ duration: 0.5 }}
//                       >
//                         <span className="text-sm font-semibold">
//                           {Math.round(currentStepData.progress * 100)}%
//                         </span>
//                       </motion.div>
//                     </div>

//                     <motion.button
//                       className={`px-6 py-3 rounded-full border-2 transition-all duration-500 ${
//                         currentStep > 0
//                           ? "border-blue-500 text-blue-600 bg-blue-50"
//                           : "border-gray-300 text-gray-500 hover:border-gray-400"
//                       }`}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Learn more
//                     </motion.button>
//                   </motion.div>
//                 </motion.div>

//                 {/* Image that changes with scroll */}
//                 <motion.div className="relative h-96 md:h-[600px] order-1 lg:order-2">
//                   <motion.div
//                     key={`image-${currentStep}`}
//                     initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
//                     animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//                     transition={{
//                       duration: 1,
//                       ease: [0.23, 1, 0.32, 1],
//                     }}
//                     className="relative w-full h-full"
//                   >
//                     <Image
//                       src={`/images/${currentStepData.image}`}
//                       alt={`Design Step ${currentStep + 1}`}
//                       fill
//                       className="object-contain drop-shadow-2xl"
//                       priority
//                     />

//                     {/* Floating elements around the shoe */}
//                     <motion.div
//                       className="absolute top-1/4 right-8 w-4 h-4 bg-blue-500 rounded-full opacity-60"
//                       animate={{
//                         y: [-10, 10, -10],
//                         scale: [1, 1.2, 1],
//                       }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     />
//                     <motion.div
//                       className="absolute bottom-1/3 left-12 w-3 h-3 bg-purple-500 rounded-full opacity-70"
//                       animate={{
//                         x: [-8, 8, -8],
//                         y: [5, -5, 5],
//                       }}
//                       transition={{
//                         duration: 4,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     />
//                     <motion.div
//                       className="absolute top-1/2 left-8 w-2 h-2 bg-teal-500 rounded-full opacity-50"
//                       animate={{
//                         rotate: [0, 360],
//                         scale: [1, 1.5, 1],
//                       }}
//                       transition={{
//                         duration: 5,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     />
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Step Indicators */}
//             <motion.div
//               className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.6 }}
//             >
//               {steps.map((_, index) => (
//                 <motion.div
//                   key={index}
//                   className={`w-3 h-3 rounded-full transition-all duration-500 ${
//                     index <= currentStep ? "bg-blue-500" : "bg-gray-300"
//                   }`}
//                   animate={{
//                     scale: index === currentStep ? 1.3 : 1,
//                     opacity: index <= currentStep ? 1 : 0.5,
//                   }}
//                   transition={{ duration: 0.3 }}
//                 />
//               ))}
//             </motion.div>

//             {/* Background decorative elements */}
//             <motion.div
//               className="absolute top-1/4 right-20 w-40 h-40 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"
//               animate={{
//                 x: [0, 30, 0],
//                 y: [0, -20, 0],
//                 scale: [1, 1.2, 1],
//               }}
//               transition={{
//                 duration: 12,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//             <motion.div
//               className="absolute bottom-1/4 left-20 w-32 h-32 bg-gradient-to-br from-teal-200/10 to-green-200/10 rounded-full blur-2xl"
//               animate={{
//                 x: [0, -25, 0],
//                 y: [0, 15, 0],
//                 rotate: [0, 180, 360],
//               }}
//               transition={{
//                 duration: 14,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           </div>
//         </section>

//         {/* BRAND STORY SECTION */}
//         <section className="py-16 md:py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
//           <div className="container mx-auto px-6 lg:px-8">
//             <motion.div
//               className="bg-white/90 backdrop-blur-sm p-8 md:p-16 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-2xl border border-gray-100 relative"
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               {/* Text Content - Left Side */}
//               <motion.div
//                 variants={fadeInLeft}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className="flex flex-col gap-8 order-1 lg:order-1"
//               >
//                 <motion.div
//                   className="space-y-6"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.3, duration: 0.8 }}
//                 >
//                   <div className="relative">
//                     <motion.p
//                       className="text-base md:text-lg text-gray-500 leading-relaxed font-light"
//                       initial={{ opacity: 0, x: -30 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.5, duration: 0.6 }}
//                     >
//                       Armed with a simple sketch and a challenge, Rollie Nation was born.
//                     </motion.p>
//                   </div>

//                   <motion.p
//                     className="text-xl md:text-3xl lg:text-4xl text-gray-800 leading-tight font-bold"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.7, duration: 0.8 }}
//                   >
//                     Prior to Rollie, it was believed that making a{" "}
//                     <motion.span
//                       className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
//                       animate={{
//                         backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                       }}
//                       transition={{
//                         duration: 4,
//                         repeat: Infinity,
//                       }}
//                     >
//                       lightweight, comfortable, and durable shoe
//                     </motion.span>{" "}
//                     wasn't possible.
//                   </motion.p>

//                   <motion.p
//                     className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 1, duration: 0.8 }}
//                   >
//                     We proved them wrong.
//                   </motion.p>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 1.2, duration: 0.6 }}
//                     className="relative"
//                   >
//                     <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
//                       Our footwear is everything shoes should be. Comfy enough for all-day adventures, 
//                       beautifully designed, and wholly unique. Through trial and error, a decade of 
//                       learning and relearning we've perfected our craft and we're ready to share it with you.
//                     </p>
//                     <motion.div
//                       className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"
//                       initial={{ width: 0 }}
//                       whileInView={{ width: "80%" }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 1.8, duration: 1.2 }}
//                     />
//                   </motion.div>
//                 </motion.div>
//               </motion.div>

//               {/* Staggered Images - Right Side */}
//               <motion.div
//                 variants={container}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className="relative h-96 md:h-[500px] order-2 lg:order-2"
//               >
//                 {secondSectionImages.map((img, index) => (
//                   <motion.div
//                     key={index}
//                     variants={imageVariants}
//                     whileHover={{
//                       scale: 1.1,
//                       rotate: index % 2 === 0 ? -4 : 4,
//                       zIndex: 20,
//                     }}
//                     animate={
//                       index % 3 === 0
//                         ? floatAnimation
//                         : {
//                             y: [8, -5, 8],
//                             x: [-2, 2, -2],
//                             transition: {
//                               duration: 4.5,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                             },
//                           }
//                     }
//                     className={`${img.position} ${img.className} cursor-pointer group overflow-hidden`}
//                     style={{ zIndex: 10 - index }}
//                   >
//                     <Image
//                       src={`/images/${img.src}`}
//                       alt={img.alt}
//                       fill
//                       className="object-cover group-hover:scale-115 group-hover:brightness-110 transition-all duration-500"
//                     />
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-inherit"
//                       whileHover={{ rotate: 180 }}
//                       transition={{ duration: 0.8 }}
//                     />
//                   </motion.div>
//                 ))}

//                 {/* Decorative elements for second section */}
//                 <motion.div
//                   className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-teal-300/30 to-blue-400/30 rounded-full opacity-40"
//                   animate={{
//                     rotate: [0, -360],
//                     scale: [1, 1.2, 1],
//                   }}
//                   transition={{
//                     duration: 10,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>

//         {/* NEWSLETTER SECTION */}
//         <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//           <div className="container mx-auto px-6 lg:px-8">
//             <motion.div
//               className="bg-gradient-to-br from-white to-gray-50/50 p-12 md:p-16 rounded-3xl text-center shadow-2xl max-w-4xl mx-auto border border-gray-200 relative overflow-hidden"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               {/* Background pattern */}
//               <div className="absolute inset-0 opacity-5">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.blue.500),_transparent_50%)]" />
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.purple.500),_transparent_50%)]" />
//               </div>

//               <div className="relative z-10">
//                 <motion.h4
//                   className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2, duration: 0.8 }}
//                 >
//                   Let's stay in{" "}
//                   <motion.span
//                     className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//                     animate={{
//                       backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                     }}
//                   >
//                     touch
//                   </motion.span>
//                 </motion.h4>

//                 <motion.p
//                   className="text-lg md:text-xl text-gray-600 mb-10"
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.4, duration: 0.6 }}
//                 >
//                   Stay in the loop, with exclusive offers and product previews.
//                 </motion.p>

//                 <motion.div
//                   className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.6, duration: 0.8 }}
//                 >
//                   <motion.input
//                     className="px-6 py-4 rounded-xl border-2 border-gray-200 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80"
//                     placeholder="Enter your email..."
//                     whileFocus={{ scale: 1.02 }}
//                     type="email"
//                   />
//                   <motion.button
//                     className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
//                     whileHover={{
//                       scale: 1.05,
//                       boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Join Our Journey
//                   </motion.button>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Newsletter decorative elements */}
//           <motion.div
//             className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl"
//             animate={{
//               x: [0, 20, 0],
//               y: [0, -15, 0],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 16,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//           <motion.div
//             className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-teal-300/20 to-blue-300/20 rounded-full blur-3xl"
//             animate={{
//               scale: [1, 1.3, 1],
//               rotate: [360, 0],
//             }}
//             transition={{
//               duration: 18,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         </section>

//       </main>
//       <Footer />
//     </>
//   );
// }