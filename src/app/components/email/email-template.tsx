import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  email,
  firstname,
  lastname,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Message from contact form</Preview>
      <Tailwind>
        <Body className="bg-white w-full  my-auto p-5 ">
          <Container className="w-full">
            <Section className="mt-[32px]">
              <Img
                src={`https://imhogen.com/assests/imhologo.png`}
                width="40"
                height="45"
                alt="golden-eye image"
                className="my-0 "
              />
            </Section>
            <Heading className="text-orange-400 font-machina text-sm font-normal text-left p-0 my-[30px] mx-0">
              Message from <strong>{`${firstname} ${lastname}`}</strong>
            </Heading>
            <Hr className=" mx-0 w-full" />
            <Text className="text-[#666666] font-redhat text-lg text-left leading-[24px]">
              {email}
            </Text>{" "}
            <br />
            <Text className="text-[#666666] font-redhat text-lg text-left leading-[24px]">
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
