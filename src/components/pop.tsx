// @ts-nocheck
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogDefault({
  opened,
  setOpened,
  cps,
}: {
  opened: boolean;
  setOpened: any;
  cps: number;
}) {
  const [open, setOpen] = React.useState(opened);

  const handleOpen = () => {
    return;
  };

  return (
    <>
      <Dialog open={opened} handler={handleOpen}>
        <DialogHeader>{cps}</DialogHeader>
        <DialogBody>{cps}....</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpened(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
