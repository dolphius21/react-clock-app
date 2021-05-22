import {
  FaLinkedin,
  FaGithubSquare,
  FaDribbbleSquare,
  FaBehanceSquare
} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <>
      <div className="social-container">
        <p>Get in touch with me:</p>
        <div className="social-icons-container">
          <a href="https://www.linkedin.com/in/john-rudolph-lee/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/dolphius21">
            <FaGithubSquare />
          </a>
          <a href="https://dribbble.com/dolphius">
            <FaDribbbleSquare />
          </a>
          <a href="https://www.behance.net/Dolphius">
            <FaBehanceSquare />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
