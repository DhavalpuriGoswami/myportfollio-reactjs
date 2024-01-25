import { v4 as uuidv4 } from "uuid";
import TransactionImg from "../images/TransactionListofvagaro.png";
import Movielist from "../images/Movielist.png";
import websitebuiler from "../images/websitebuiler.png";
import salesummary from "../images/salesummary.png";

const projects = [
  {
    id: uuidv4(),
    name: "Transcation List Of Vagaro",
    desc: "The Vagaro Transaction List is like a detailed financial diary for your salon or spa business. It keeps track of every sale, payment, and appointment-related transaction, helping you understand your revenue and make sure your financial records are accurate. I developed the website",
    img: TransactionImg,
    link: "https://vagaro.com",
  },
  {
    id: uuidv4(),
    name: "Website Builder OF Vagaro",
    desc: "website builder empowers businesses to create a professional online presence effortlessly. With user-friendly tools, it enables customization of websites, allowing businesses in the salon, spa, and fitness industry to showcase services, display contact information, and engage with clients",
    img: websitebuiler,
    link: "https://vagaro.com",
  },
  {
    id: uuidv4(),
    name: "Sales Summary",
    desc: "The Vagaro Sales Summary is like a financial snapshot for your business. It gives a quick overview of your sales, helping you see how much money is coming in. This feature breaks down your transactions, shows payment details, and lets you track sales trends.",
    img: salesummary,
    link: "https://vagaro.com",
  },
  {
    id: uuidv4(),
    name: "Moive List",
    desc: " Movie List project allows you to search for specific movies and view their details. Simply enter the movie title, and the project will provide you with comprehensive information about that particular movie, such as its plot, cast, release date, and more.",
    img: Movielist,
    link: "https://glowing-stardust-d52fea.netlify.app",
  },
];

export default projects;
