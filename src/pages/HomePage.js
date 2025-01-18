import ContentSection from "../component/contentSection";
import HeroSection from "../component/HeroSection";
import expressYourself from "../images/expressYourself.png";
import targetAudience from "../images/targetAudience.png";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ContentSection
        title="Express Yourself"
        text="Start your journey today and express yourself through a personalized blog. Let your creativity shine with flexible layouts and stunning designs that are easy to create and manage!"
        imageSrc={expressYourself}
      />
      <ContentSection
        title="Know Your Audience"
        text="Understanding your audience is the key to creating engaging and impactful content. With our tools, you can analyze audience behavior, preferences, and interests."
        imageSrc={targetAudience}
        reverse
      />
    </>
  );
};
export default HomePage;
