import React from "react";
import Language from "../Button/Langusue";
function Footer() {
  return (
    <div className="max-w-screen-lg mx-auto py-16 opacity-75">
      <h1>
        Questions? Call <span className=" underline">000-800-919-1694</span>
      </h1>
      <div className="mt-7 underline flex gap-32">
        <ul className="flex flex-col gap-4">
          {["FAQ", "Investor Relations", "Privacy", "Speed Test"].map(
            (item, index) => {
              return <div key={index}>{item}</div>;
            }
          )}
          <Language />
          <p className="no-underline">Netflix India</p>
        </ul>
        <ul className="flex flex-col gap-4">
          {["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"].map(
            (item, index) => {
              return <div key={index}>{item}</div>;
            }
          )}
        </ul>
        <ul className="flex flex-col gap-4">
          {[
            "Account",
            "Ways to Watch",
            "Corporate Information",
            "Only on Netflix",
          ].map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </ul>
        <u className="flex flex-col gap-4 ">
          {["Media Centre", "Terms of Use", "Contact Us"].map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </u>
      </div>
    </div>
  );
}

export default Footer;
