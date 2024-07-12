import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Default = () => <Input placeholder="" />;
export const WithLabel = () => <Input placeholder="Enter text..." />;

WithLabel.storyName = "Input with Label";