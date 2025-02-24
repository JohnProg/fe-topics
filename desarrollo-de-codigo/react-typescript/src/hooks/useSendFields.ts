import React from "react";
import { sendFields } from "../services";

export const useSendFields = () => {
  const [isSendingFields, setIsSendingFields] = React.useState(false);
  const [wasSent, setWasSent] = React.useState(false);

  const handleSendFields = async ({ fields }: { fields: [] }) => {
    try {
      setIsSendingFields(true);
      await sendFields(fields);
      setWasSent(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSendingFields(false);
    }
  };

  return {
    onSendFields: handleSendFields,
    isSendingFields,
    wasSent,
  };
};
