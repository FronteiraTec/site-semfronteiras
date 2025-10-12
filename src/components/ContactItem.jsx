import React from "react";

function ContactItem({ icon: Icon, title, link }) {
  return (
    <div className="flex items-center gap-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center my-1 cursor-pointer hover:opacity-75 transition-opacity"
      >
        <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#2B3B74E5] mx-2 my-2" />
        <p className="text-[#2B3B74E5] text-lg sm:text-xl md:text-2xl">{title}</p>
      </a>
    </div>
  );
}

export default ContactItem;
