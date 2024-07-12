import React from "react";
import Button, {primary, secondary, success, danger, sizes} from "./Button";

export default 
{
  title: "Button",
  component: Button,
};

export const PrimarySmall = () => <Button variant={primary} size={sizes.small}>Primary Small</Button>;
export const PrimaryMedium = () => <Button variant={primary} size={sizes.medium}>Primary Medium</Button>;
export const PrimaryLarge = () => <Button variant={primary} size={sizes.large}>Primary Large</Button>;

export const SecondarySmall = () => <Button variant={secondary} size={sizes.small}>Secondary Small</Button>;
export const SecondaryMedium = () => <Button variant={secondary} size={sizes.medium}>Secondary Medium</Button>;
export const SecondaryLarge = () => <Button variant={secondary} size={sizes.large}>Secondary Large</Button>;

export const SuccessSmall = () => <Button variant={success} size={sizes.small}>Success Small</Button>;
export const SuccessMedium = () => <Button variant={success} size={sizes.medium}>Success Medium</Button>;
export const SuccessLarge = () => <Button variant={success} size={sizes.large}>Success Large</Button>;

export const DangerSmall = () => <Button variant={danger} size={sizes.small}>Danger Small</Button>;
export const DangerMedium = () => <Button variant={danger} size={sizes.medium}>Danger Medium</Button>;
export const DangerLarge = () => <Button variant={danger} size={sizes.large}>Danger Large</Button>;