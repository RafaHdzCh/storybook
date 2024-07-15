import React from "react";
import { WithLabel } from "../Input/Input.stories";
import { SuccessButton } from "../Button/Button.stories";

export default 
{
  title: "Form/Subscription"
}

export function Subscription()
{
  return(
    <>
      <WithLabel />
      <SuccessButton />
    </>
  )
}