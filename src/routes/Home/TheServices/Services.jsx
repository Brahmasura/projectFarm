import Service from "../../../components/TheService/Service";
import style from "./services.module.scss";
import copy from "../../../assets/HomeServices/copyEditingPic.jpg";
import language from "../../../assets/HomeServices/languageEditinPic.jpg";
import content from "../../../assets/HomeServices/contentWritingPic.jpg";
import software from "../../../assets/HomeServices/softwareDevelopmentPic.jpg";


const ServicesArray = [
  {
    service: "Comprehensive copy editing",
    backgroundImage: copy,
    description:
      "We go through your content carefully, making sure everything is in the right place, there are no errors, and it's easy for readers to follow. Our self-invented template will be giving journals, books, and papers a tidy-up!",
  },
  {
    service: "Language Editing",
    backgroundImage: language,
    description:
      "Sometimes, it's all about picking the right words. We review your writing, correct any grammar mistakes, and suggest better word choices if needed, ensuring your message is clear.",
  },
  {
    service: "Content Writing",
    backgroundImage: content,
    description:
      "At EditoFarm, we're not just writers; we're storytellers and your strategic partners in crafting impactful content. Whether it's a blog post, an article, or a detailed case study, we've got you covered. We dive deep into market trends to create content that hits the right notes, using words and paragraphs that resonate with your audience. If your organization needs a boost in content marketing, we're here with content that's not only well-written but also well-researched, insightful, and tailored to drive your message home. Language Editing",
  },
  {
    service: "Software Development",
    backgroundImage: software,
    description:
      "we understand and build software & training projects for our customers. We understand & evaluate their work processess and incorporate our learnings into the projects. We work in a collaborative manner with their employees to understand their needs and address them. This collaboration not only builds a better project but also helps in solving complex business issues and streamlining their business processess.",
  },
];

const Services = () => {
  return (
    <>
      <div className={style.serviceDiv}>
        <h1>Our Services</h1>

        {ServicesArray.map((item, index) => (
          <Service
            key={index}
            service={item.service}
            description={item.description}
            index={index}
            backgroundImage= {item.backgroundImage}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
