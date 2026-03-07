import { Home, Building2, Truck, Package, ArrowUpDown, MapPin } from "lucide-react";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceTransport from "@/assets/service-transport.jpg";

export interface ServiceData {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  icon: typeof Home;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  includes: string[];
  features: { title: string; description: string }[];
}

export const allServices: ServiceData[] = [
  {
    id: 1,
    slug: "household-shifting",
    title: "Household Shifting",
    shortTitle: "Household",
    icon: Home,
    description: "Complete household packing and moving with utmost care.",
    longDescription:
      "We provide end-to-end household shifting services across Guntur and Andhra Pradesh. Our trained team carefully packs every item — from delicate glassware to heavy furniture — using premium materials. We ensure safe loading, GPS-tracked transport, and careful unloading at your new home.",
    image: serviceResidential,
    images: [serviceResidential, serviceOffice, serviceTransport, serviceResidential],
    includes: [
      "Packing furniture & appliances",
      "Kitchen items & crockery",
      "Electronics & TV packing",
      "Loading & unloading",
      "Safe transportation",
      "Unpacking & rearranging",
    ],
    features: [
      { title: "Door-to-Door Service", description: "Complete shifting from your old home to the new one without hassle." },
      { title: "Premium Packing", description: "Bubble wrap, corrugated sheets, and sturdy cartons for maximum safety." },
      { title: "Trained Staff", description: "Experienced workers who handle your belongings with care." },
      { title: "Insurance Coverage", description: "Transit insurance available for valuable items." },
    ],
  },
  {
    id: 2,
    slug: "office-relocation",
    title: "Office Relocation",
    shortTitle: "Office",
    icon: Building2,
    description: "Seamless office shifting with minimal downtime.",
    longDescription:
      "Relocating your office? We handle everything from IT equipment and server rooms to furniture and important documents. Our team works on weekends and off-hours to ensure zero disruption to your business operations.",
    image: serviceOffice,
    images: [serviceOffice, serviceResidential, serviceTransport, serviceOffice],
    includes: [
      "Office furniture disassembly & packing",
      "Computer & server relocation",
      "File and document safety",
      "Workstation setup at new location",
      "Quick shifting to avoid downtime",
    ],
    features: [
      { title: "Weekend Shifting", description: "We work on weekends so your business doesn't stop." },
      { title: "IT Equipment Care", description: "Special handling for computers, servers, and networking gear." },
      { title: "Document Security", description: "Sealed packing for confidential files and records." },
      { title: "Layout Planning", description: "Help setting up furniture at the new office." },
    ],
  },
  {
    id: 3,
    slug: "vehicle-transportation",
    title: "Vehicle Transportation",
    shortTitle: "Vehicle",
    icon: Truck,
    description: "Safe car and bike transport to any city in India.",
    longDescription:
      "We transport your car, bike, or any vehicle safely using enclosed carriers and open trailers. Every vehicle is secured with wheel locks and soft straps. GPS tracking lets you monitor your vehicle throughout the journey.",
    image: serviceTransport,
    images: [serviceTransport, serviceResidential, serviceOffice, serviceTransport],
    includes: [
      "Car transportation",
      "Bike transportation",
      "Secure vehicle carriers",
      "Door-to-door delivery",
      "GPS tracking",
    ],
    features: [
      { title: "Enclosed Carriers", description: "Protection from weather and road debris during transport." },
      { title: "GPS Tracking", description: "Real-time location updates for your vehicle." },
      { title: "Insurance", description: "Full transit insurance for your peace of mind." },
      { title: "Pan-India Network", description: "We deliver vehicles to any city across India." },
    ],
  },
  {
    id: 4,
    slug: "packing-unpacking",
    title: "Packing & Unpacking",
    shortTitle: "Packing",
    icon: Package,
    description: "Professional packing to protect items during transport.",
    longDescription:
      "Our expert packing team uses industry-grade materials — bubble wrap, thermocol, corrugated sheets, wooden crates, and heavy-duty cartons — to ensure every item is protected. We also offer complete unpacking and arrangement at your destination.",
    image: serviceResidential,
    images: [serviceResidential, serviceTransport, serviceOffice, serviceResidential],
    includes: [
      "Bubble wrap packing",
      "Carton box packing",
      "Fragile item protection",
      "Wooden crating for valuables",
      "Unpacking at destination",
    ],
    features: [
      { title: "Quality Materials", description: "We use the best packing materials available in the market." },
      { title: "Fragile Care", description: "Special multi-layer packing for glass, ceramics, and electronics." },
      { title: "Labeling System", description: "Every box is labeled for easy identification and unpacking." },
      { title: "Eco-Friendly Options", description: "Recyclable and reusable packing materials available." },
    ],
  },
  {
    id: 5,
    slug: "loading-unloading",
    title: "Loading & Unloading",
    shortTitle: "Loading",
    icon: ArrowUpDown,
    description: "Safe lifting and handling of heavy items.",
    longDescription:
      "Our skilled labor team specializes in safe loading and unloading of heavy furniture, appliances, and industrial equipment. We use trolleys, ramps, and lifting equipment to prevent damage and ensure worker safety.",
    image: serviceOffice,
    images: [serviceOffice, serviceTransport, serviceResidential, serviceOffice],
    includes: [
      "Heavy furniture handling",
      "Appliance loading",
      "Safety equipment",
      "Skilled & trained labor",
      "Floor protection",
    ],
    features: [
      { title: "Professional Equipment", description: "Trolleys, ramps, and straps for safe handling." },
      { title: "Trained Workers", description: "Our team is trained in proper lifting techniques." },
      { title: "Damage Prevention", description: "Floor and wall protection during the moving process." },
      { title: "Timely Execution", description: "Efficient loading to save your time." },
    ],
  },
  {
    id: 6,
    slug: "local-shifting",
    title: "Local Shifting",
    shortTitle: "Local",
    icon: MapPin,
    description: "Quick and affordable moves within your city.",
    longDescription:
      "Need to move within Guntur, Vijayawada, or nearby cities? Our local shifting service is fast, affordable, and reliable. We offer same-day delivery with mini trucks and tempos for small to medium moves.",
    image: serviceTransport,
    images: [serviceTransport, serviceOffice, serviceResidential, serviceTransport],
    includes: [
      "Same-day delivery",
      "Mini truck & tempo available",
      "Affordable local rates",
      "Within Guntur & Vijayawada",
      "Small & medium moves",
    ],
    features: [
      { title: "Same-Day Service", description: "Book in the morning, move by evening." },
      { title: "Affordable Rates", description: "Budget-friendly pricing for local moves." },
      { title: "Flexible Vehicles", description: "Choose from mini trucks, tempos, or full trucks." },
      { title: "No Hidden Charges", description: "Transparent pricing with no surprises." },
    ],
  },
];
