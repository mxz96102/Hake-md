import React from "react";
import { observer } from "mobx-react";

const Button = observer(({ type, alt }) => (
  <div className="button">
    <img src={"/button/" + type + ".png"} alt={alt} />
  </div>
));

export default Button;
