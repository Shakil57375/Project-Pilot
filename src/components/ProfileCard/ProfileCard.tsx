import "./profileCard.css";
import { FaFacebook, FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
interface CardProps {
  facebookLink: string;
  githubLink: string;
  linkedInLink: string;
  portfolioLink: string;
  styledTitle: string;
  headerTitle: string;
  imageSrc: string;
}
const ProfileCard: React.FC<CardProps> = ({
  facebookLink,
  githubLink,
  linkedInLink,
  portfolioLink,
  headerTitle,
  styledTitle,
  imageSrc,
}) => {
  return (
    <div className="card">
      <div className="lines"></div>
      <div className="img-box">
        <img src={imageSrc} />
      </div>
      <div className="contents">
        <div className="details">
          <h2>
            {styledTitle} <br /> <span className="!text-lg">{headerTitle}</span>
          </h2>
          <div className="actionBtn mt-5">
            <a className="transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 " href={facebookLink} target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-br from-blue-500 via-blue-800 to-blue-900 shadow-lg p-3 text-2xl rounded-full">
                <FaFacebook />
              </div>
            </a>
            <a className="transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 " href={githubLink} target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-br from-gray-700 to-gray-500 shadow-lg p-3 text-2xl rounded-full">
                <FaGithub />
              </div>
            </a>
            <a className="transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 " href={linkedInLink} target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-br from-blue-500 via-blue-800 to-blue-900 shadow-lg p-3 text-2xl rounded-full">
                <FaLinkedin />
              </div>
            </a>
            <a className="transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 " href={portfolioLink} target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-br from-red-600 to-orange-400 shadow-lg p-3 text-2xl rounded-full">
                <FaLink />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
