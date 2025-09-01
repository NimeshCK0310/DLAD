// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import {
//   MagnifyingGlassIcon,
//   HeartIcon,
//   UserIcon,
//   ShoppingCartIcon,
//   LockClosedIcon,
// } from "@heroicons/react/24/outline";
// import { motion } from "framer-motion";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollY(currentScrollY);
//       setIsScrolled(currentScrollY > 50); 
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Header animation variants
//   const headerVariants = {
//     hidden: { opacity: 0, y: -20 },
//     show: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.6, ease: "easeOut" } 
//     }
//   };

//   const logoVariants = {
//     hidden: { opacity: 0, scale: 0.8, rotate: -20 },
//     show: { 
//       opacity: 1, 
//       scale: 1, 
//       rotate: 0,
//       transition: { 
//         duration: 0.8, 
//         ease: "easeOut",
//         delay: 0.2
//       } 
//     }
//   };

//   const navItemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     show: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.4 } 
//     }
//   };

//   const iconVariants = {
//     hidden: { opacity: 0, scale: 0.5 },
//     show: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         duration: 0.5,
//         type: "spring",
//         bounce: 0.4
//       } 
//     }
//   };

//   const containerVariants = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   return (
//     <motion.header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled 
//           ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200" 
//           : "bg-transparent"
//       }`}
//       style={{
//         backgroundColor: isScrolled 
//           ? `rgba(255, 255, 255, ${Math.min(scrollY / 200, 0.9)})` 
//           : "transparent"
//       }}
//       initial="hidden"
//       animate="show"
//       variants={headerVariants}
//     >
//       {/* Top Banner */}
//       <motion.div
//         className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-all duration-500 ${
//           isScrolled ? "py-2 text-sm" : "py-3"
//         }`}
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//           <motion.span 
//             className="cursor-pointer hover:scale-110 transition-transform duration-200 text-lg"
//             whileHover={{ x: -5 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             ←
//           </motion.span>
          
//           <motion.div 
//             className="flex items-center gap-2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//           >
//             <span>Further </span>
//             <motion.span 
//               className="font-bold"
//               animate={{ 
//                 scale: [1, 1.05, 1]
//               }}
//               transition={{ 
//                 duration: 2, 
//                 repeat: Infinity 
//               }}
//             >
//               30% off all Archive Sale
//             </motion.span>
            
//             <Link href="/archive-sale">
//               <motion.button
//                 className="ml-3 px-4 py-1.5 bg-white text-blue-600 text-xs font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Shop Now
//               </motion.button>
//             </Link>
//           </motion.div>

//           <motion.span 
//             className="cursor-pointer hover:scale-110 transition-transform duration-200 text-lg"
//             whileHover={{ x: 5 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             →
//           </motion.span>
//         </div>
//       </motion.div>

//       {/* Main Header Navigation */}
//       <div className={`max-w-7xl mx-auto px-6 sm:px-8 transition-all duration-500 ${
//         isScrolled ? "py-3" : "py-4"
//       } flex items-center justify-between`}>

//         {/* Logo */}
//         <motion.div
//           variants={logoVariants}
//           className="flex items-center"
//         >
//           <Link href="/">
//             <motion.div
//               className={`text-black font-bold tracking-wide transform transition-all duration-500 ${
//                 isScrolled ? "text-4xl -rotate-6" : "text-5xl -rotate-8"
//               }`}
//               whileHover={{ 
//                 scale: 1.05,
//                 rotate: -12,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               rollie
//             </motion.div>
//           </Link>
//         </motion.div>

//         {/* Navigation Menu */}
//         <motion.nav
//           className={`hidden md:flex gap-6 lg:gap-10 items-center font-medium text-gray-800 transition-all duration-500 ${
//             isScrolled 
//               ? "bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200" 
//               : "bg-transparent px-4 py-2"
//           }`}
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//         >
//           {[
//             { name: "Shop", href: "/shop" },
//             { name: "Behind Rollie", href: "/behind-rollie" },
//             { 
//               name: "Archive Sale", 
//               href: "/archive-sale", 
//               icon: <LockClosedIcon className="w-4 h-4" />,
//               special: true
//             },
//             { 
//               name: "Rewards", 
//               href: "/rewards",
//               icon: (
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//                 </svg>
//               )
//             }
//           ].map((item, index) => (
//             <motion.div
//               key={item.name}
//               variants={navItemVariants}
//               custom={index}
//               whileHover={{ y: -2 }}
//               className="relative"
//             >
//               <Link
//                 href={item.href}
//                 className={`flex items-center gap-2 hover:text-blue-600 transition-all duration-300 relative group ${
//                   item.special ? "text-blue-600" : ""
//                 }`}
//               >
//                 {item.icon && (
//                   <motion.div
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     {item.icon}
//                   </motion.div>
//                 )}
//                 <span className="relative">
//                   {item.name}
//                   <motion.div 
//                     className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
//                     initial={{ width: 0 }}
//                     whileHover={{ width: "100%" }}
//                     transition={{ duration: 0.3, ease: "easeOut" }}
//                   />
//                 </span>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.nav>

//         {/* Right Side Icons */}
//         <motion.div
//           className="flex items-center gap-4 lg:gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//         >
//           {/* Search Icon */}
//           <motion.div
//             variants={iconVariants}
//             whileHover={{ 
//               scale: 1.15,
//               rotate: 5,
//               transition: { duration: 0.2 }
//             }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer text-gray-600 hover:text-blue-600 transition-all duration-300" />
//           </motion.div>

//           {/* Heart/Wishlist Icon */}
//           <motion.div
//             variants={iconVariants}
//             whileHover={{ 
//               scale: 1.15,
//               transition: { duration: 0.2 }
//             }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <motion.div
//               whileHover={{
//                 scale: [1, 1.2, 1],
//                 rotate: [0, 5, -5, 0]
//               }}
//               transition={{ duration: 0.5 }}
//             >
//               <HeartIcon className="w-6 h-6 cursor-pointer text-gray-600 hover:text-red-500 transition-all duration-300" />
//             </motion.div>
//           </motion.div>

//           {/* User/Account Icon */}
//           <motion.div
//             variants={iconVariants}
//             whileHover={{ 
//               scale: 1.15,
//               transition: { duration: 0.2 }
//             }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <UserIcon className="w-6 h-6 cursor-pointer text-gray-600 hover:text-blue-600 transition-all duration-300" />
//           </motion.div>

//           {/* Shopping Cart with Animated Badge */}
//           <motion.div 
//             variants={iconVariants}
//             whileHover={{ 
//               scale: 1.15,
//               transition: { duration: 0.2 }
//             }}
//             whileTap={{ scale: 0.9 }}
//             className="relative"
//           >
//             <motion.div
//               whileHover={{
//                 rotate: [0, -10, 10, 0]
//               }}
//               transition={{ duration: 0.4 }}
//             >
//               <ShoppingCartIcon className="w-6 h-6 cursor-pointer text-gray-600 hover:text-blue-600 transition-colors duration-300" />
//             </motion.div>
            
//             <motion.span 
//               className="absolute -top-2 -right-2 bg-gradient-to-r from-gray-800 to-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
//               animate={{ 
//                 scale: [1, 1.1, 1]
//               }}
//               transition={{ 
//                 duration: 2, 
//                 repeat: Infinity 
//               }}
//               whileHover={{ 
//                 scale: 1.2,
//                 backgroundColor: "#3B82F6"
//               }}
//             >
//               0
//             </motion.span>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Mobile Menu Button - Hidden for now but can be expanded */}
//       <motion.div 
//         className="md:hidden"
//         variants={iconVariants}
//       >
//         {/* Add mobile menu button here if needed */}
//       </motion.div>
//     </motion.header>
//   );
// }