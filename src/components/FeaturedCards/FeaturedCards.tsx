import Card from "../Cards/Cards";
import Texts from "../Texts/Texts";
import { GoChecklist } from "react-icons/go";
import { ImBubbles } from "react-icons/im";
import { FaChartGantt } from "react-icons/fa6";
import { GiClockwork } from "react-icons/gi";
import { BsGraphDownArrow } from "react-icons/bs";
import { HiMiniBellAlert } from "react-icons/hi2";
import { FaMobile, FaUserShield } from "react-icons/fa";
const FeaturedCards = () => {
  return (
    <div className="relative z-50">
      <div className="flex items-center justify-center">
        <Texts headerText="Our" styledTitle="Best Features" peragraphText="" />
      </div>
      <div className="rounded_gradient_bg_left rounded-br-full bg-pink-500 absolute top-20 left-0 w-96 h-96 hidden lg:block "></div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 z-40">
        <Card
          icon={<GoChecklist />}
          headerTitle="Task"
          description=" Efficiently assign, track, and prioritize tasks. Stay on top of project progress with intuitive task management tools."
          styledTitle="Management"
        />
        <Card
          icon={<ImBubbles />}
          headerTitle="Hub"
          description=" Foster teamwork and communication with a central hub for project discussions, file sharing, and real-time updates."
          styledTitle="Collaboration "
        />
        <Card
          icon={<FaChartGantt />}
          headerTitle="Charts"
          description=" Visualize project timelines and dependencies with interactive Gantt charts. Simplify complex project scheduling."
          styledTitle="Gantt  "
        />
        <Card
          icon={<GiClockwork />}
          headerTitle="Tracking"
          description="Accurately log work hours, monitor project costs, and generate timesheets for payroll and billing."
          styledTitle="Time  "
        />
        <Card
          icon={<BsGraphDownArrow />}
          headerTitle="Analytics"
          description="Generate detailed reports and insightful analytics to make data-driven decisions and improve project outcomes."
          styledTitle="Reporting"
        />
        <Card
          icon={<HiMiniBellAlert />}
          headerTitle="Alerts"
          description="Stay informed with real-time notifications and email alerts for task updates, deadlines, and mentions."
          styledTitle="Notifications "
        />
        <Card
          icon={<FaMobile />}
          headerTitle="Accessibility"
          description="Access your project management tools on the go with a mobile-responsive platform, ensuring productivity anytime, anywhere."
          styledTitle="Mobile "
        />
        <Card
          icon={<FaUserShield />}
          headerTitle="Security"
          description=" Control access and safeguard your project data with robust user permissions and data security features."
          styledTitle="Permissions"
        />
      </div>
    </div>
  );
};

export default FeaturedCards;
