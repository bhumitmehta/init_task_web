import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-2/6 bg-slate-500 text-teal-50 text-center flex flex-col justify-center items-center">
      <Image src="/logo.png" alt="logo" width={48} height={48} className="rounded-2xl" />
      <h5>djinit.ai</h5>
      <h4>Follow us:</h4>
      <div className="flex space-x-4 mt-2">
        <Image src="/github.png" alt="github" width={25} height={25} className="rounded-2xl" />
        <Image src="/instagram.png" alt="instagram" width={25} height={25} className="rounded-2xl" />
        <Image src="/linkedin.png" alt="instagram" width={25} height={25} className="rounded-2xl" />
      </div>
      Handled with  by init.ai.<br/>
 for all projects on GitHub
    </footer>
  );
};

export default Footer;
