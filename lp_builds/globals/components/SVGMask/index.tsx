import React from "react";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  url?: string;
}

const SVGMask = ({
  url = `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg fill='%23000000' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='800px' height='800px' viewBox='0 0 55.704 55.703' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M27.852,0C19.905,0,12.743,3.363,7.664,8.72C7.628,8.751,7.583,8.762,7.549,8.796C7.495,8.85,7.476,8.922,7.426,8.98 C2.833,13.949,0,20.568,0,27.852c0,15.357,12.493,27.851,27.851,27.851c15.356,0,27.851-12.494,27.851-27.851 C55.703,12.494,43.208,0,27.852,0z M4.489,27.851c0-5.315,1.805-10.207,4.806-14.138l32.691,32.694 c-3.93,3.001-8.819,4.806-14.135,4.806C14.969,51.213,4.489,40.732,4.489,27.851z M45.282,43.352l-32.933-32.93 c4.13-3.678,9.551-5.934,15.503-5.934c12.881,0,23.362,10.48,23.362,23.363C51.213,33.803,48.958,39.225,45.282,43.352z'/%3E%3C/g%3E%3C/svg%3E")`,
  ...restProps
}: Props) => {
  return (
    <>
      <span
        style={
          {
            width: "1em",
            height: "1em",
            display: "block",
          } as React.CSSProperties
        }>
        <span
          style={
            {
              "--svg": url,
              width: "1em",
              height: "1em",
              display: "block",
              background: "currentColor",
              maskImage: "var(--svg)",
              maskRepeat: "no-repeat",
              maskSize: "100% 100%",
            } as React.CSSProperties
          }></span>
      </span>
    </>
  );
};

export default SVGMask;
