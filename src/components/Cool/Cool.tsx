import React from "react"

type CoolProps = {
    text: string;
};

const Cool: React.FC<CoolProps> = ({
    text
}) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

export { Cool };