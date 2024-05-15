"use server";

import Dot from "../_shared/Dot";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../_shared/PageHeader";

export default async function About() {
  return (
    <div className="w-full flex-1 flex-row gap-4 mt-8 flex min-h-full">
      <div className="flex-1 flex-col flex gap-4 overflow-hidden">
        <div className="bg-chrome rounded-3xl flex-1">
          <div className="flex-row flex">
            <div className="flex flex-col flex-1">
              <PageHeader
                text="About Me"
                rightSide={
                  <Link
                    href="/RyanCircelliResume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="mb-2 px-1"
                  >
                    <p className="text-end text-gray-600 text-xs font-orbitron">
                      {"Resume.pdf"}
                    </p>
                  </Link>
                }
              />
              <div className="flex-1 flex-col flex gap-4 p-4 pb-0 mx-2">
                <p className="text-black font-medium text-sm font-inter">
                  <div className="w-40 m-2 ml-4 mb-4 rounded-full float-right">
                    <div className="relative rounded-full w-full aspect-square">
                      <div
                        className="absolute z-10 w-full h-full rounded-full"
                        style={{
                          boxShadow: `
            inset 0px 0px 1px 1px rgba(226, 232, 240, 1),
            0px 0px 2px 2px rgba(226, 232, 240, 1),
            0px 0px 8px 8px rgba(255, 255, 255, 1),
            0px 0px 12px 12px rgba(226, 232, 240, 1)
          `,
                        }}
                      />
                      <Image
                        src="/headshot.png"
                        alt="Ryan Circelli Headshot"
                        width="2728"
                        height="2728"
                        className="rounded-full overflow-hidden w-full aspect-square"
                      />
                    </div>
                  </div>
                  <p className="mb-4">
                    {`
                      My name is Ryan Circelli. I'm from Florida and I'm a software engineer with a passion for creating technologies that help others. 
                      `}
                  </p>
                  <p className="mb-4">
                    {`
                      I graduated from the University of Florida in 2024 with a Bachelor's in Computer Science, a minor in Economics, and a certificate in AI Fundamentals and Applications with a 3.97. I have practical experience with many technologies, but I feel my greatest skill is being a master `}
                    <b className="font-bold">tinkerer</b>
                    {`. I believe I excel in learning quickly to apply new experiences to create new and innovative solutions. For my own projects, I particularly enjoy working with React, React Native, Typescript, Terraform, and many AWS services. A qualification of my understanding of these technologies can be found in my architectural description of `}{" "}
                    <Link href="/lifted" className="underline">
                      Lifted
                    </Link>
                    {`.`}
                  </p>
                  <p>
                    {`I am always open to connecting and learning more from my peers.`}
                  </p>
                </p>
              </div>
            </div>
          </div>
          <PageHeader text="Experience" />
          <div className="flex-1 flex-col flex gap-4 p-4 pb-6 mx-2">
            <div className="text-black font-medium text-sm font-inter">
              <h1 className="text-lg font-bold">Fidelity Investments</h1>
              <h2 className="font-semibold text-base">
                Angular Developer, Intern (Return Offer Extended)
              </h2>
              <h3 className="italic mb-1">{"June 2023 – August 2023"}</h3>
              <div className="flex flex-row flex-1 items-start gap-3">
                <div className="pt-1.5">
                  <Dot size={8} />
                </div>
                <p className="flex-1">
                  Developed a new investment dashboard for the Personal
                  Investing division and a real-time data-driven application
                  replacing Active Trader Pro using Angular, delivering vital
                  stock market metrics.
                </p>
              </div>
              <div className="flex flex-row flex-1 items-start gap-3">
                <div className="pt-1.5">
                  <Dot size={8} />
                </div>
                <p className="flex-1">
                  Actively participated and led numerous SAFe/Agile meetings.
                </p>
              </div>
              <h2 className="font-semibold text-base pt-2">
                Full Stack Developer, Intern (Return Offer Extended)
              </h2>
              <h3 className="italic mb-1">{"June 2022 – August 2022"}</h3>
              <div className="flex flex-row flex-1 items-start gap-3">
                <div className="pt-1.5">
                  <Dot size={8} />
                </div>
                <p className="flex-1">
                  Worked with the Enterprise Cybersecurity division to increase
                  internal data observability.
                </p>
              </div>
              <div className="flex flex-row flex-1 items-start gap-3">
                <div className="pt-1.5">
                  <Dot size={8} />
                </div>
                <p className="flex-1">
                  Developed a website to observe data between Splunk Cloud and
                  internal Splunk to alert of missing data using Angular 12,
                  PrimeNG, and Express.js.
                </p>
              </div>
              <div className="flex flex-row flex-1 items-start gap-3">
                <div className="pt-1.5">
                  <Dot size={8} />
                </div>
                <p className="flex-1">
                  Deployed AWS Lambda functions with Terraform; parsed data to
                  Snowflake; masked sensitive data via Cribl.
                </p>
              </div>
              <h1 className="font-bold text-lg pt-4">Black Knight, Inc.</h1>
              <h2 className="font-semibold text-base">
                Java Developer I, Intern (Return Offer Extended)
              </h2>
              <h3 className="italic mb-1">{"May 2021 – August 2021"}</h3>
              <div className="flex flex-row flex-1 items-start gap-3">
                <div className="pt-1.5">
                  <Dot size={8} />
                </div>
                <p className="flex-1">
                  Worked with the Mortgage Loss Mitigation division to implement
                  industry-regulated retention and liquidation workouts, as well
                  as forbearance and modification programs to support borrowers
                  impacted by COVID-19.
                </p>
              </div>
              <div className="flex flex-row flex-1 items-start gap-3">
                <div className="pt-1.5">
                  <Dot size={8} />
                </div>
                <p className="flex-1">
                  Applied Test Driven Development (TDD) principles to develop a
                  Spring Boot-based API.
                </p>
              </div>
            </div>
          </div>
          {/* <PageHeader text="Skills" />
          <div className="flex-1 flex-col flex gap-4 p-4 pb-0 mx-2"></div> */}
        </div>
      </div>
    </div>
  );
}
