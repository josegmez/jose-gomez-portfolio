/**
 * This organism represents the footer of the page.
 * Shows the copy right information. Also, the designer of the page.
 *
 * @returns {JSX.Element} - The component to be rendered
 */
const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <p className="text-center text-gray-400 text-sm py-4">
        &copy; 2024 All Rights Reserved - Jose David Gomez, Designed by
        Ojjomedia
      </p>
    </footer>
  );
};

export default Footer;
