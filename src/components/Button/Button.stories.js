import React from "react";
import Button, { variants, sizes } from "./Button";

export default {
  title: "Form/Button",
  component: Button,
};

export const PrimarySmall = () => 
(
  <Button variant={variants.primary} size={sizes.small}>
    Primary Small
  </Button>
);
export const PrimaryMedium = () => 
(
  <Button variant={variants.primary} size={sizes.medium}>
    Primary Medium
  </Button>
);
export const PrimaryLarge = () => 
(
  <Button variant={variants.primary} size={sizes.large}>
    Primary Large
  </Button>
);

export const SecondarySmall = () => 
(
  <Button variant={variants.secondary} size={sizes.small}>
    Secondary Small
  </Button>
);
export const SecondaryMedium = () => 
(
  <Button variant={variants.secondary} size={sizes.medium}>
    Secondary Medium
  </Button>
);
export const SecondaryLarge = () => 
(
  <Button variant={variants.secondary} size={sizes.large}>
    Secondary Large
  </Button>
);

export const SuccessSmall = () => 
(
  <Button variant={variants.success} size={sizes.small}>
    Success Small
  </Button>
);
export const SuccessMedium = () => 
(
  <Button variant={variants.success} size={sizes.medium}>
    Success Medium
  </Button>
);
export const SuccessLarge = () => 
(
  <Button variant={variants.success} size={sizes.large}>
    Success Large
  </Button>
);

export const DangerSmall = () => 
(
  <Button variant={variants.danger} size={sizes.small}>
    Danger Small
  </Button>
);
export const DangerMedium = () => 
(
  <Button variant={variants.danger} size={sizes.medium}>
    Danger Medium
  </Button>
);
export const DangerLarge = () => 
(
  <Button variant={variants.danger} size={sizes.large}>
    Danger Large
  </Button>
);

//#region Alternative:
const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = 
{
  variant: variants.danger,
  children: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = 
{
  ...PrimaryA.args,
  children: "Long Primary Args"  
}
//#endregion