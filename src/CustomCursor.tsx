import { useEffect, useRef } from "react";

type CustomCursorProps = {
  size?: number; // px
  defaultSrc?: string; // state 3
  hoverSrc?: string;   // state 1
  clickSrc?: string;   // state 2
  hoverSelector?: string; // what counts as hoverable
};

export function CustomCursor({
  size = 64,
  defaultSrc = "cursor-def.png",
  hoverSrc = "cursor-hov.png",
  clickSrc = "cursor-cl.png",
  hoverSelector = "a, button, [role='button'], [data-cursor='hover']",
}: CustomCursorProps) {
  const cursorElementRef = useRef<HTMLDivElement | null>(null);
  const isClickingRef = useRef(false);
  const clickTimeoutIdRef = useRef<number | null>(null);

  useEffect(() => {
    const cursorElement = cursorElementRef.current;
    if (!cursorElement) return;

    // hide system cursor
    const previousBodyCursor = document.body.style.cursor;
    const previousHtmlCursor = document.documentElement.style.cursor;
    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";

    const setCursorImage = (imageUrl: string) => {
      cursorElement.style.backgroundImage = `url(${imageUrl})`;
    };

    setCursorImage(defaultSrc);

    const handleMouseMove = (event: MouseEvent) => {
      cursorElement.style.left = `${event.clientX}px`;
      cursorElement.style.top = `${event.clientY}px`;
    };

    const handleMouseOver = (event: MouseEvent) => {
      if (isClickingRef.current) return;

      const targetElement = event.target as Element | null;
      const isHoverable = !!targetElement?.closest(hoverSelector);

      setCursorImage(isHoverable ? hoverSrc : defaultSrc);
    };

const handleMouseDown = () => {
  isClickingRef.current = true;
  setCursorImage(clickSrc);
};

const handleMouseUp = (event: MouseEvent) => {
  isClickingRef.current = false;

  const targetElement = document.elementFromPoint(
    event.clientX,
    event.clientY
  );

  const isHoverable = !!targetElement?.closest(hoverSelector);
  setCursorImage(isHoverable ? hoverSrc : defaultSrc);
};


    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
window.addEventListener("mouseup", handleMouseUp);


    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
  window.removeEventListener("mousedown", handleMouseDown);
window.removeEventListener("mouseup", handleMouseUp);


      if (clickTimeoutIdRef.current !== null) {
        window.clearTimeout(clickTimeoutIdRef.current);
      }

      document.body.style.cursor = previousBodyCursor;
      document.documentElement.style.cursor = previousHtmlCursor;
    };
  }, [defaultSrc, hoverSrc, clickSrc, hoverSelector]);

  return (
    <div
      ref={cursorElementRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: size,
        height: size,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 999999,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
          transition: "transform 0.06s ease-out",
      }}
    />
  );
}
