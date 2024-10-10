"use client";
import { Modal, Button } from "antd";

export default function ModalAlertPage() {
  const success = () => {
    Modal.success({
      content: "some messages..",
    });
  };
  const error = () => {
    Modal.error({
      content: "실패했습니당",
    });
  };
  return (
    <>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
    </>
  );
}
