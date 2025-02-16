const FooterSection = () => {
    return (
      <footer className="footer sm:footer-horizontal footer-center bg-[#fafafa] dark:bg-[#181715]  text-base-content py-10 ">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className="font-bold">rsl.</span>
          </p>
        </aside>
      </footer>
    );
};

export default FooterSection;