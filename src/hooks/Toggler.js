import { useState } from "react";

export default function Toggler(initialVal) {
  const [value, setValue] = useState(initialVal);
  const toggler = (value) => {
    setValue(!value);
  };

  return [value, toggler];
}
