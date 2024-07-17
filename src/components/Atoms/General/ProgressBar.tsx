import { Field,ProgressBar} from "@fluentui/react-components";
import * as React from "react";

const styles = `
  mt-20
  mb-0
`;

export const Shape = () => 
{
  return (
    <div>
      <Field validationMessage="Rounded ProgressBar" validationState="none">
        <ProgressBar
          className={styles}
          shape="rounded"
          thickness="large"
          value={0.5}
        />
      </Field>
      <Field validationMessage="Square ProgressBar" validationState="none">
        <ProgressBar
          className={styles}
          shape="square"
          thickness="large"
          value={0.5}
        />
      </Field>
    </div>
  );
};
