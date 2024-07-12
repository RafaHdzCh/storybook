import React from "react";
import { SuccessSmall } from "../Button/Button.stories";
import { WithLabel } from "../Input/Input.stories";

export default 
{
  title: "Form/Subscription"
}

export function PrimarySubscription()
{
  return(
    <>
      <WithLabel />
      <SuccessSmall />
    </>
  )
}