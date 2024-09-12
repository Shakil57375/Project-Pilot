import FeatureBanner from "../../components/FeatureBanner/FeatureBanner";
import FeatureFAQ from "../../components/FeatureFAQ/FeatureFAQ";
import FeaturedCards from "../../components/FeaturedCards/FeaturedCards";
import FeaturedVideo from "../../components/FeaturedVideo/FeaturedVideo";
import MakeDocuments from "../../components/MakeDocuments/MakeDocuments";
import Planing from "../../components/Planing/Planing";

const Features = () => {
  return (
    <div className="mt-20 lg:px-28 px-4 lg:py-6 py-4 text-white space-y-8">
      <FeatureBanner />
      <FeaturedVideo />
      <FeaturedCards />
      <FeatureFAQ/>
      <Planing/>
      <MakeDocuments/>
    </div>
  );
};

export default Features;
