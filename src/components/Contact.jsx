import React from "react";
import { CONTACT_INFO } from "../../constants";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="title-c text-center py-[1.5rem]">
          <h2 className="text-slate-950 uppercase font-[600] text-2xl">
            Contact
          </h2>
          <p className="text-xs w-[50%] mx-auto lg:px-8 py-4 font-semibold text-gray-800">
            {CONTACT_INFO.text}
          </p>
        </div>

        <div className="met grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 items-start lg:place-items-center py-8">
          <div className="call flex gap-2 items-start">
            <div className="icon">
              <h3>
                <Phone className="text-black w-8 " />
              </h3>
            </div>
            <div className="text flex flex-col gap-1">
              <a href="tel:+249910019254">
                <h4 className="font-bold text-sm">
                  {CONTACT_INFO.phone.label}
                </h4>
                <p className="text-xs font-semibold text-gray-700">
                  {CONTACT_INFO.phone.value}
                </p>
              </a>
            </div>
          </div>

          <div className="call flex gap-2 items-start">
            <div className="icon ">
              <h3>
                <Mail className="text-black w-8 " />
              </h3>
            </div>
            <div className="text  flex flex-col gap-1">
              <a
                href="email:
info@vastuspaze.com">
                <h4 className="font-bold text-sm">
                  {CONTACT_INFO.email.label}
                </h4>
                <p className="text-xs font-semibold text-gray-700">
                  {CONTACT_INFO.email.value}
                </p>
              </a>
            </div>
          </div>

          <div className="call flex gap-2 items-start">
            <div className="icon ">
              <h3>
                <MapPin className="text-black w-8 " />
              </h3>
            </div>
            <div className="text  flex flex-col gap-1">
              <a href="location:1234 Renovation Ave, Suite 100, Your City, ST 56789">
                <h4 className="font-bold text-sm">
                  {CONTACT_INFO.address.label}
                </h4>
                <p className="text-xs font-semibold text-gray-700">
                  {CONTACT_INFO.address.value}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[90%] m-auto mt-6 pb-4" />
    </div>
  );
};

export default Contact;
