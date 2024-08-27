"use client";
import { Preparing } from "@/common/components";
import { NextPage } from "next";
import { useState } from "react";
import { remark } from "remark";
import html from "remark-html";

const Home: NextPage = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [htmlContent, setHtmlContent] = useState<string>("");

  const handleInputChange = async (e: any) => {
    const inputText = e.target.value;
    setMarkdown(inputText);

    // 마크다운을 HTML로 변환
    const processedHtml = await remark().use(html).process(inputText);
    setHtmlContent(processedHtml.toString());
  };

  return <Preparing />;
};

export default Home;
