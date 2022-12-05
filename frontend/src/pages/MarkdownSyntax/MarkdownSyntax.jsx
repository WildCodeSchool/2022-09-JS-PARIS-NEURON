import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github.css";

import "./MarkdownSyntax.scss";
import { Navbar } from "@components/";

export const MarkdownSyntax = () => {
  return (
    <div className="markdownSyntax">
      <div className="markdownSyntax_content">
        <div className="markdownSyntax_content_title">
          <div className="markdownSyntax_content_instruction">
            ajouter un titre avec #, # donne un h1, ## donne un h2...
          </div>
          <div className="markdownSyntax_content_example">
            example - ## titre donne:
          </div>
          <ReactMarkdown className="markdown">## titre</ReactMarkdown>
        </div>
        <div className="markdownSyntax_content_bold">
          <div className="markdownSyntax_content_instruction">
            mettre en gras avec ** **
          </div>
          <div className="markdownSyntax_content_example">
            example - **bold** donne:
          </div>
          <ReactMarkdown className="markdown">**bold**</ReactMarkdown>
        </div>
        <div className="markdownSyntax_content_italic">
          <div className="markdownSyntax_content_instruction">
            mettre en italic avec * *
          </div>
          <div className="markdownSyntax_content_example">
            example - *italic* donne:
          </div>
          <ReactMarkdown className="markdown">*italic*</ReactMarkdown>
        </div>
        <div className="markdownSyntax_content_underline">
          <div className="markdownSyntax_content_instruction">
            afficher une ligne séparatrice avec ___ ou ***
          </div>
          <div className="markdownSyntax_content_example">
            example - *** ou ___ donne:
          </div>
          <ReactMarkdown className="markdown">___</ReactMarkdown>{" "}
        </div>
        <div className="markdownSyntax_content_link">
          <div className="markdownSyntax_content_instruction">
            ajouter un lien avec []()
          </div>
          <div className="markdownSyntax_content_example">
            example - [moteur](https://duckduckgo.com/):
          </div>
          <ReactMarkdown className="markdown" linkTarget="_blank">
            [moteur](https://duckduckgo.com/)
          </ReactMarkdown>
        </div>
        <div className="markdownSyntax_content_quote">
          <div className="markdownSyntax_content_instruction">
            ajouter une citation avec {">"}
          </div>
          <div className="markdownSyntax_content_example">
            example - {">"} carpe diem donne:
          </div>
          <ReactMarkdown className="markdown">{"> carpe diem"}</ReactMarkdown>
        </div>
        <div className="markdownSyntax_content_image">
          <div className="markdownSyntax_content_instruction">
            ajouter une image avec ![]()
          </div>
          <div className="markdownSyntax_content_example">
            example -
            ![panda](https://img.over-blog-kiwi.com/1/18/13/76/20170702/ob_679f68_28c-panda-roux.jpg):
          </div>
          <ReactMarkdown className="markdown">
            ![panda](https://img.over-blog-kiwi.com/1/18/13/76/20170702/ob_679f68_28c-panda-roux.jpg)
          </ReactMarkdown>
        </div>
        <div className="markdownSyntax_content_code">
          <div className="markdownSyntax_content_instruction">
            écrire en code avec ``` ```, ```js ``` ou autre langage pour une
            colorisation spécifique
          </div>
          <div className="markdownSyntax_content_example">
            example - ``` console.log()``` donne:
          </div>
          <ReactMarkdown
            className="markdown"
            rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
          >
            ```console.log()```
          </ReactMarkdown>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
