// @ts-nocheck
import ShineBorder from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
export default function App() {
  const [score, setscore] = useState(0);
  const [time, settime] = useState(5.0);
  const [vald, setvald] = useState("CLICK HERE TO START PLAYING");
  const [started, setstarted] = useState(false);
  const [finished, setfinished] = useState(false);
  const [beka, setBeka] = useState(5.0);

  const start = (t: number): void => {
    let g: number = parseFloat((t - 0.1).toFixed(2));
    console.log(g);
    if (g < 0) {
      setfinished(true);
      settime(0);
      setstarted(false);
      setvald("CLICK HERE TO START PLAYING");
      return;
    }
    setTimeout(() => {
      settime(g);
      start(g);
    }, 100);
  };

  useEffect(() => {
    settime(beka);
  }, [beka]);

  return (
    <>
      <div className="mx-auto container mt-10">
        <div className="border !bg-[rgb(0,4,21)] md:shadow-xl border-[rgba(255,255,255,0.14)] h-[50px] rounded-3xl grid-cols-7 grid">
          <button
            onClick={() => {
              if (started == true) {
                return;
              }
              setBeka(1);
            }}
            className=" font-bold text-slate-400 hover:text-white text-md z-50 duration-300"
          >
            1 second Timer
          </button>
          <button
            onClick={() => {
              if (started == true) {
                return;
              }
              setBeka(5);
            }}
            className=" font-bold text-slate-400 hover:text-white text-md z-50 duration-300"
          >
            5 seconds Timer
          </button>
          <button
            onClick={() => {
              if (started == true) {
                return;
              }
              setBeka(10);
            }}
            className=" font-bold text-slate-400 hover:text-white text-md z-50 duration-300"
          >
            10 seconds Timer
          </button>
          <button
            onClick={() => {
              if (started == true) {
                return;
              }
              setBeka(15);
            }}
            className=" font-bold text-slate-400 hover:text-white text-md z-50 duration-300"
          >
            15 seconds Timer
          </button>
          <button
            onClick={() => {
              if (started == true) {
                return;
              }
              setBeka(30);
            }}
            className=" font-bold text-slate-400 hover:text-white text-md z-50 duration-300"
          >
            30 seconds Timer
          </button>
          <button
            onClick={() => {
              if (started == true) {
                return;
              }
              setBeka(60);
            }}
            className=" font-bold text-slate-400 hover:text-white text-md z-50 duration-300"
          >
            60 seconds Timer
          </button>
          <button
            onClick={() => {
              if (started == true) {
                return;
              }
              setBeka(100);
            }}
            className=" font-bold text-slate-400 hover:text-white text-md z-50 duration-300"
          >
            100 seconds Timer
          </button>
        </div>
      </div>
      <div className=" container mx-auto pt-36">
        <div className=" justify-center flex">
          <div className="flex w-full gap-[40px] ml-48 mb-12">
            <div className=" backdrop:blur-md relative flex h-[100px] w-[40%] flex-col items-center justify-center overflow-hidden rounded-lg border bg-[rgb(0,4,21)] md:shadow-xl border-[rgba(255,255,255,0.14)]">
              <Dialog
                className="bg-[rgb(0,4,21)] border-slate-950 border text-white"
                open={finished}
                handler={() => {}}
              >
                <DialogHeader className="font-bold">
                  You clicked at the speed of{"     "}
                  <span className=" mx-2 text-red-600">
                    {" "}
                    {parseFloat(score / beka)}{" "}
                  </span>
                  clicks per second..
                </DialogHeader>
                <DialogBody className=" font-bold">
                  <div
                    className={` absolute opacity-${
                      parseFloat(score / beka) < 2 ? "1" : "0"
                    }`}
                  >
                    Your clicking seriously needs some help.. Try
                    <span className=" mx-1 text-yellow-500">Butterfly</span>
                    clicking maybe?
                  </div>
                  <div
                    className={` absolute opacity-${
                      parseFloat(score / beka) < 5 ? "1" : "0"
                    }
                    opacity-${parseFloat(score / beka) < 2 ? "0" : "1"}`}
                  >
                    To be honest you're probably an old guy or little kid, try
                    <span className=" mx-1 text-orange-500">Drag</span>
                    clicking i guess?
                  </div>
                  <div
                    className={` absolute opacity-${
                      parseFloat(score / beka) < 10 ? "1" : "0"
                    }
                    opacity-${parseFloat(score / beka) < 5 ? "0" : "1"}`}
                  >
                    You're actually decent man if you want to get better try
                    <span className=" mx-1 text-green-500">Jitter</span>
                    clicking!
                  </div>
                  <div
                    className={` absolute opacity-${
                      parseFloat(score / beka) < 15 ? "1" : "0"
                    }
                    opacity-${parseFloat(score / beka) < 10 ? "0" : "1"}`}
                  >
                    Great job you are officially a
                    <span className=" mx-1 text-blue-500">PRO</span>
                    clicker! 👏👏👏
                  </div>
                  <div
                    className={` absolute opacity-${
                      parseFloat(score / beka) < 999 ? "1" : "0"
                    }
                    opacity-${parseFloat(score / beka) < 15 ? "0" : "1"}`}
                  >
                    <span className=" mx-1 text-red-500">
                      You're using an auto clicker
                    </span>
                  </div>
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={() => setfinished(false)}
                    className="mr-1"
                  >
                    <span>Try again</span>
                  </Button>
                </DialogFooter>
                <DialogFooter className="absolute top-[-10px] right-[-10px] ">
                  <Button
                    variant="text"
                    color="red"
                    onClick={() => setfinished(false)}
                    className="mr-1"
                  >
                    <span>X</span>
                  </Button>
                </DialogFooter>
              </Dialog>
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center text-2xl font-semibold leading-none text-white">
                Timer: {time}
              </span>
              <BorderBeam
                className={`opacity-${started ? "1" : "0"}`}
                size={125}
                duration={1}
                delay={0}
              />
            </div>
            <div className="relative flex h-[100px] w-[40%] flex-col items-center justify-center overflow-hidden rounded-lg border !bg-[rgb(0,4,21)] md:shadow-xl border-[rgba(255,255,255,0.14)]">
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center text-2xl font-semibold leading-none text-white">
                Score: {score}
              </span>
              <BorderBeam
                className={`opacity-${started ? "1" : "0"}`}
                size={125}
                duration={1}
                delay={0}
              />
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <Button
            onClick={() => {
              let g = score + 1;
              if (!started) {
                setstarted(true);
                start(beka);
                g = 1;
              }
              setscore(g);
              setvald("");
            }}
            color="blue"
            variant="text"
            className="w-3/4 p-0"
            placeholder="aa"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ShineBorder
              className=" !bg-[rgb(0,4,21)] relative flex h-[400px] w-full flex-col border-[rgba(255,255,255,0.14)] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              color={["#601cff", "black", "#1c6fff"]}
            >
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center text-sm font-semibold leading-none text-[rgba(255,255,255,0.33)]">
                {vald}
              </span>
            </ShineBorder>
          </Button>
        </div>
      </div>
    </>
  );
}
