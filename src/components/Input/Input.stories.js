import React from "react";
import Input from "./Input";
import Center from "../Center/Center";

export default {
  title: "Form/Input",
  component: Input,
  decorators: [story => <Center>{story()}</Center>]
};

export const Default = () => <Input placeholder="" />;
export const WithLabel = () => <Input placeholder="Enter text..." />;

WithLabel.storyName = "Input with Label";