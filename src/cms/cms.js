import React from "react";
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";
import "./templates/BlogPostStyles.css";
import BlogPostPreview from "./templates/BlogPostPreview";

CMS.registerPreviewTemplate("blog", BlogPostPreview);
